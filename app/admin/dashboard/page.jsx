'use client';

import { useEffect, useState } from 'react';
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  ChevronLeft,
  Pencil,
  Trash2,
  MoreVertical,
  Edit,
  Trash,
  X,
} from 'lucide-react';
import AdminSidebar from './_components/AdminSidebar';
import AdminHeader from './_components/AdminHeader';
import RenderDetailView from './_components/RenderDetailView';
import PackageForm from './_components/Forms/PackageForm';
import TripForm from './_components/Forms/TripForm';
import BlogForm from './_components/Forms/BlogForm';
import AttractionForm from './_components/Forms/AttractionForm';
import axiosInstance from '@/utils/axios';

const packageSchema =(isEditing)=> z.object({
  id: z.string(),
  title: z.string().min(1, 'Title is required'),
  subHeading: z.string().min(1, 'Subheading is required'),
  image: isEditing
      ? z.union([z.instanceof(File), z.string()]).optional() // Optional if editing
      : z.instanceof(File, { message: 'Image is required' }), // Required if creating
  description: z.string().min(1, 'Description is required'),
});

const tripSchema = z.object({
  id: z.string(),
  name: z.string().min(1, 'Name is required'),
  days: z.number().min(1, 'Days must be at least 1'),
  location: z.string().min(1, 'Location is required'),
  price: z.number().min(0, 'Price must be non-negative'),
  realPrice: z.number().min(0, 'Real price must be non-negative'),
  description: z.string().min(1, 'Description is required'),
  packageId: z.string().min(1, 'Package is required'),
  image: z.instanceof(File, { message: 'Image is required' }),
  itinerary: z
    .array(
      z.object({
        day: z.number(),
        title: z.string(),
        description: z.string(),
      })
    )
    .min(1, 'At least one itinerary item is required'),
  highlights: z.array(z.string()).min(1, 'At least one highlight is required'),
  inclusions: z.array(z.string()).min(1, 'At least one inclusion is required'),
  exclusions: z.array(z.string()).min(1, 'At least one exclusion is required'),
});

const blogSchema = (isEditing) =>
  z.object({
    id: z.string().optional(), // Optional ID field for new blogs
    title: z.string().min(1, 'Title is required'),
    content: z.string().min(1, 'Content is required'),
    image: isEditing
      ? z.union([z.instanceof(File), z.string()]).optional() // Optional if editing
      : z.instanceof(File, { message: 'Image is required' }), // Required if creating
    tripId: z.string().min(1, 'Trip is required'),
    packageId: z.string().min(1, 'Package is required'),
  });

const attractionSchema=(isEditing) => z.object({
  id: z.string(),
  heading: z.string().min(1, 'Heading is required'),
  details: z.string().min(1, 'Details are required'),
  image: isEditing
      ? z.union([z.instanceof(File), z.string()]).optional() // Optional if editing
      : z.instanceof(File, { message: 'Image is required' }), // Required if creating
  tripId: z.string().min(1, 'Trip is required'),
  packageId: z.string().min(1, 'Package is required'),
});

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('packages');
  const [packages, setPackages] = useState([]);
  const [trips, setTrips] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [attractions, setAttractions] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch data from backend when component mounts
    const fetchData = async () => {
      try {
        const [packagesRes, tripsRes, blogsRes, attractionsRes] =
          await Promise.all([
            axiosInstance.get('/packages/all'),
            axiosInstance.get('/trips/all'),
            axiosInstance.get('/blogs/all'),
            axiosInstance.get('/attractions/all'),
          ]);
        setPackages(packagesRes.data);
        setTrips(tripsRes.data);
        setBlogs(blogsRes.data);
        setAttractions(attractionsRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const attractionForm = useForm({
    resolver: zodResolver(attractionSchema(isEditing)),
  });
  const blogForm = useForm({
    resolver: zodResolver(blogSchema(isEditing)),
    defaultValues: {
      tripId: '',
      packageId: '',
      title: '',
      content: '',
      image: '',
    },
  });
  const packageForm = useForm({
    resolver: zodResolver(packageSchema(isEditing)),
    defaultValues: {},
  });

  const tripForm = useForm({
    resolver: zodResolver(tripSchema),
    defaultValues: {
      packageId: '',
      name: '',
      days: 1,
      location: '',
      price: 0,
      realPrice: 0,
      description: '',
      image: '',
      itinerary: [],
      highlights: [],
      inclusions: [],
      exclusions: [],
    },
  });

  const {
    fields: itineraryFields,
    append: appendItinerary,
    remove: removeItinerary,
  } = useFieldArray({
    control: tripForm.control,
    name: 'itinerary',
  });

  const {
    fields: highlightFields,
    append: appendHighlight,
    remove: removeHighlight,
  } = useFieldArray({
    control: tripForm.control,
    name: 'highlights',
  });

  const {
    fields: inclusionFields,
    append: appendInclusion,
    remove: removeInclusion,
  } = useFieldArray({
    control: tripForm.control,
    name: 'inclusions',
  });

  const {
    fields: exclusionFields,
    append: appendExclusion,
    remove: removeExclusion,
  } = useFieldArray({
    control: tripForm.control,
    name: 'exclusions',
  });

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm(
      'Are you sure you want to delete this item?'
    );

    if (!isConfirmed) {
      return; // Exit the function if the user cancels the action
    }
    try {
      switch (activeSection) {
        case 'packages':
          await axiosInstance.delete(`/packages/delete/${id}`);
          setPackages(packages.filter((p) => p._id !== id));
          break;
        case 'trips':
          await axiosInstance.delete(`/trips/delete/${id}`);
          setTrips(trips.filter((t) => t._id !== id));
          break;
        case 'blogs':
          await axiosInstance.delete(`/blogs/delete/${id}`);
          setBlogs(blogs.filter((b) => b._id !== id));
          break;
        case 'attractions':
          await axiosInstance.delete(`/attractions/delete/${id}`);
          setAttractions(attractions.filter((a) => a._id !== id));
          break;
        default:
          throw new Error('Unknown section');
      }

      // Clear the selected item after deletion
      setSelectedItem(null);
    } catch (error) {
      console.error('Error deleting item:', error);
      // Optionally, show an error message to the user
    }
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setIsEditing(true);
    switch (activeSection) {
      case 'packages':
        console.log(item);
        packageForm.reset({
          id: item._id, // Pass _id for API purposes
          title: item.title,
          subHeading: item.subHeading,
          description: item.description,
          image: item.image, // Handle image separately (if necessary)
        });
        break;
      case 'trips':
        tripForm.reset(item);
        break;
      case 'blogs':
        console.log(item);
        blogForm.reset({
          id: item._id, // Pass _id for API purposes
          title: item.title,
          content: item.content,
          image: item.image, // Handle image separately (if necessary)
          tripId: item.trip|| '', // Ensure tripId and packageId are included
          packageId: item.package|| '',
        });
        break;

      case 'attractions':
        console.log(item);
        attractionForm.reset({
          id: item._id, 
          heading: item.heading,
          details: item.details,
          image: item.image, 
          tripId: item.trip || '', 
          packageId: item.package || '',
        });
        break;
    }
  };

  const handleView = (item) => {
    setSelectedItem(item);
    setIsEditing(false);
    setIsCreating(false);
  };

  const handleCreate = () => {
    setIsCreating(true);
    setSelectedItem(null);
    setIsEditing(false);
    switch (activeSection) {
      case 'packages':
        packageForm.reset({
          id: '',
          title: '',
          content: '',
          image: '',
          tripId: '',
          packageId: '',
        });
        break;
      case 'trips':
        tripForm.reset({
          id: '',
          name: '',
          days: 1,
          location: '',
          price: 0,
          realPrice: 0,
          description: '',
          packageId: '',
          images: [''],
          itinerary: [{ day: 1, description: '' }],
          highlights: [''],
          inclusions: [''],
          exclusions: [''],
        });
        break;
      case 'blogs':
        blogForm.reset({
          id: '',
          title: '',
          content: '',
          image: '',
          tripId: '',
          packageId: '',
        });
        break;
      case 'attractions':
        attractionForm.reset({
          id: '',
          heading: '',
          details: '',
          image: '',
          tripId: '',
          packageId: '',
        });
        break;
    }
  };

  const handleBack = () => {
    setSelectedItem(null);
    setIsEditing(false);
    setIsCreating(false);
  };

  const filteredItems = () => {
    switch (activeSection) {
      case 'packages':
        return packages.filter((p) =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      case 'trips':
        return trips.filter((t) =>
          t.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      case 'blogs':
        return blogs.filter((b) =>
          b.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      case 'attractions':
        return attractions.filter((a) =>
          a.heading.toLowerCase().includes(searchTerm.toLowerCase())
        );
      default:
        return [];
    }
  };

  const renderForm = () => {
    switch (activeSection) {
      case 'packages':
        return (
          <PackageForm
            packageForm={packageForm}
            setPackages={setPackages}
            packages={packages}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            setIsCreating={setIsCreating}
            setSelectedItem={setSelectedItem}
          />
        );
      case 'trips':
        return (
          <TripForm
            tripForm={tripForm}
            trips={trips}
            setTrips={setTrips}
            packages={packages}
            removeExclusion={removeExclusion}
            removeHighlight={removeHighlight}
            removeInclusion={removeInclusion}
            removeItinerary={removeItinerary}
            appendExclusion={appendExclusion}
            appendHighlight={appendHighlight}
            appendInclusion={appendInclusion}
            appendItinerary={appendItinerary}
            exclusionFields={exclusionFields}
            itineraryFields={itineraryFields}
            highlightFields={highlightFields}
            inclusionFields={inclusionFields}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            setIsCreating={setIsCreating}
            setSelectedItem={setSelectedItem}
          />
        );

      case 'blogs':
        return (
          <BlogForm
            blogForm={blogForm}
            blogs={blogs}
            isEditing={isEditing}
            trips={trips}
            packages={packages}
            setIsEditing={setIsEditing}
            setIsCreating={setIsCreating}
            setSelectedItem={setSelectedItem}
            setBlogs={setBlogs}
          />
        );
      case 'attractions':
        return (
          <AttractionForm
            attractionForm={attractionForm}
            attractions={attractions}
            setAttractions={setAttractions}
            isEditing={isEditing}
            trips={trips}
            packages={packages}
            setIsEditing={setIsEditing}
            setIsCreating={setIsCreating}
            setSelectedItem={setSelectedItem}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar (unchanged) */}
      <AdminSidebar
        setActiveSection={setActiveSection}
        setIsSidebarOpen={setIsSidebarOpen}
        setSelectedItem={setSelectedItem}
        setIsCreating={setIsCreating}
        setIsEditing={setIsEditing}
        activeSection={activeSection}
        isSidebarOpen={isSidebarOpen}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader
          activeSection={activeSection}
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
          handleCreate={handleCreate}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {selectedItem || isCreating ? (
              <div className="bg-white shadow-md rounded-lg p-6">
                <Button variant="ghost" onClick={handleBack} className="mb-4">
                  <ChevronLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                {isEditing || isCreating ? (
                  <>
                    <h3 className="text-lg font-semibold mb-4">
                      {isEditing ? 'Edit' : 'Create'}{' '}
                      {activeSection.slice(0, -1)}
                    </h3>
                    {renderForm()}
                  </>
                ) : (
                  <>
                    <RenderDetailView
                      activeSection={activeSection}
                      selectedItem={selectedItem}
                      trips={trips}
                    />
                    <div className="mt-4 flex justify-end space-x-2">
                      <Button onClick={() => handleEdit(selectedItem)}>
                        Edit
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={() => handleDelete(selectedItem.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-md:px-2">
                {filteredItems().map((item) => (
                  <Card
                    key={item.id}
                    className="cursor-pointer hover:shadow-md transition-shadow duration-200"
                    onClick={() => handleView(item)}
                  >
                    <CardHeader className="p-4">
                      <img
                        src={`http://localhost:5000/${item.image}`}
                        alt=""
                        className="rounded-lg"
                      />
                      <CardTitle className="text-lg line-clamp-2">
                        {activeSection === 'packages'
                          ? item.title
                          : activeSection === 'trips'
                          ? item.name
                          : activeSection === 'blogs'
                          ? item.title
                          : item.heading}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 flex flex-col gap-2 ">
                      <p className="text-sm text-gray-500 line-clamp-2">
                        {activeSection === 'packages'
                          ? item.subHeading
                          : activeSection === 'trips'
                          ? item.location
                          : activeSection === 'blogs'
                          ? item.content.substring(0, 50) + '...'
                          : item.details.substring(0, 50) + '...'}
                      </p>

                      <div className="flex gap-2">
                        <Button
                          className="flex gap-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEdit(item);
                          }}
                        >
                          <Pencil size={15} />
                          Edit
                        </Button>
                        <Button
                          className="flex gap-2"
                          variant="destructive"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(item._id);
                          }}
                        >
                          <Trash2 size={15} />
                          Delete
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}