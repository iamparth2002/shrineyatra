'use client'

import { useState } from 'react'
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { LogOut, Plus, Package, Map, BookOpen, Landmark, ChevronLeft, Menu, MoreVertical, Edit, Trash, Search, X } from 'lucide-react'

// Define schemas for each model (unchanged)
const packageSchema = z.object({
  id: z.string(),
  title: z.string().min(1, 'Title is required'),
  subHeading: z.string().min(1, 'Subheading is required'),
  image: z.string().min(1, 'Image is required'),
  description: z.string().min(1, 'Description is required'),
})

const tripSchema = z.object({
  id: z.string(),
  name: z.string().min(1, 'Name is required'),
  days: z.number().min(1, 'Days must be at least 1'),
  location: z.string().min(1, 'Location is required'),
  price: z.number().min(0, 'Price must be non-negative'),
  realPrice: z.number().min(0, 'Real price must be non-negative'),
  description: z.string().min(1, 'Description is required'),
  packageId: z.string().min(1, 'Package is required'),
  images: z.array(z.string()).min(1, 'At least one image is required'),
  itinerary: z.array(z.object({
    day: z.number(),
    description: z.string(),
  })).min(1, 'At least one itinerary item is required'),
  highlights: z.array(z.string()).min(1, 'At least one highlight is required'),
  inclusions: z.array(z.string()).min(1, 'At least one inclusion is required'),
  exclusions: z.array(z.string()).min(1, 'At least one exclusion is required'),
})

const blogSchema = z.object({
  id: z.string(),
  title: z.string().min(1, 'Title is required'),
  content: z.string().min(1, 'Content is required'),
  image: z.string().min(1, 'Image is required'),
  tripId: z.string().min(1, 'Trip is required'),
  packageId: z.string().min(1, 'Package is required'),
})

const attractionSchema = z.object({
  id: z.string(),
  heading: z.string().min(1, 'Heading is required'),
  details: z.string().min(1, 'Details are required'),
  image: z.string().min(1, 'Image is required'),
  tripId: z.string().min(1, 'Trip is required'),
  packageId: z.string().min(1, 'Package is required'),
})


export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('packages')
  const [packages, setPackages] = useState([
    {
      id: '1',
      title: 'Exotic Getaways',
      subHeading: 'Discover paradise on Earth',
      image: '/placeholder.svg?height=200&width=300',
      description: 'Experience the beauty of exotic locations with our carefully curated packages.',
    },
    {
      id: '2',
      title: 'Adventure Expeditions',
      subHeading: 'Thrill-seeking journeys',
      image: '/placeholder.svg?height=200&width=300',
      description: 'Embark on heart-pumping adventures across the globe with our expedition packages.',
    },
  ])
  const [trips, setTrips] = useState([
    {
      id: '1',
      name: "Bali Bliss",
      days: 7,
      location: "Bali, Indonesia",
      price: 1299,
      realPrice: 1499,
      description: "Experience the magic of Bali with our 7-day adventure package.",
      packageId: "1",
      images: ["/placeholder.svg?height=200&width=300"],
      itinerary: [
        { day: 1, description: "Arrive in Bali, welcome dinner" },
        { day: 2, description: "Ubud art villages and monkey forest" },
        { day: 3, description: "Mount Batur sunrise trek" },
      ],
      highlights: ["Sunrise at Mount Batur", "Ubud Monkey Forest", "Traditional Balinese Dance Show"],
      inclusions: ["Hotel accommodation", "Daily breakfast", "Airport transfers"],
      exclusions: ["International flights", "Travel insurance", "Personal expenses"],
    },
    {
      id: '2',
      name: "Swiss Alps Explorer",
      days: 8,
      location: "Switzerland",
      price: 2499,
      realPrice: 2799,
      description: "Discover the breathtaking beauty of the Swiss Alps.",
      packageId: "2",
      images: ["/placeholder.svg?height=200&width=300"],
      itinerary: [
        { day: 1, description: "Arrive in Zurich, city tour" },
        { day: 2, description: "Train to Interlaken, free time" },
        { day: 3, description: "Jungfraujoch excursion" },
      ],
      highlights: ["Jungfraujoch - Top of Europe", "Lake Lucerne cruise", "Zermatt and the Matterhorn"],
      inclusions: ["Swiss Travel Pass", "Hotel stays", "Breakfast and dinner"],
      exclusions: ["Lunch", "Optional activities", "Gratuities"],
    },
  ])
  const [blogs, setBlogs] = useState([
    {
      id: '1',
      title: 'Top 10 Hidden Gems in Bali',
      content: 'Discover the lesser-known wonders of Bali that most tourists miss...',
      image: '/placeholder.svg?height=200&width=300',
      tripId: '1',
      packageId: '1',
    },
    {
      id: '2',
      title: 'A Foodies Guide to Swiss Cuisine',
      content: 'Indulge in the rich flavors of Swiss gastronomy...',
      image: '/placeholder.svg?height=200&width=300',
      tripId: '2',
      packageId: '2',
    },
  ])
  const [attractions, setAttractions] = useState([
    {
      id: '1',
      heading: 'Tegalalang Rice Terrace',
      details: 'Visit the stunning Tegalalang Rice Terrace, known for its beautiful scenes of rice paddies...',
      image: '/placeholder.svg?height=200&width=300',
      tripId: '1',
      packageId: '1',
    },
    {
      id: '2',
      heading: 'Matterhorn',
      details: 'Witness the majestic Matterhorn, one of the most photographed mountains in the world...',
      image: '/placeholder.svg?height=200&width=300',
      tripId: '2',
      packageId: '2',
    },
  ])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [isCreating, setIsCreating] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const packageForm = useForm({
    resolver: zodResolver(packageSchema),
  })

  const tripForm = useForm({
    resolver: zodResolver(tripSchema),
    defaultValues: {
      itinerary: [{ day: 1, description: '' }],
      highlights: [''],
      inclusions: [''],
      exclusions: [''],
    },
  })

  const { fields: itineraryFields, append: appendItinerary, remove: removeItinerary } = useFieldArray({
    control: tripForm.control,
    name: "itinerary",
  })

  const { fields: highlightFields, append: appendHighlight, remove: removeHighlight } = useFieldArray({
    control: tripForm.control,
    name: "highlights",
  })

  const { fields: inclusionFields, append: appendInclusion, remove: removeInclusion } = useFieldArray({
    control: tripForm.control,
    name: "inclusions",
  })

  const { fields: exclusionFields, append: appendExclusion, remove: removeExclusion } = useFieldArray({
    control: tripForm.control,
    name: "exclusions",
  })

  const blogForm = useForm({
    resolver: zodResolver(blogSchema),
  })

  const attractionForm = useForm({
    resolver: zodResolver(attractionSchema),
  })

  const onSubmitPackage = (data) => {
    if (isEditing) {
      setPackages(packages.map(p => p.id === data.id ? data : p))
    } else {
      setPackages([...packages, { ...data, id: String(packages.length + 1) }])
    }
    packageForm.reset()
    setIsEditing(false)
    setIsCreating(false)
    setSelectedItem(null)
  }

  const onSubmitTrip = (data) => {
    if (isEditing) {
      setTrips(trips.map(t => t.id === data.id ? data : t))
    } else {
      setTrips([...trips, { ...data, id: String(trips.length + 1) }])
    }
    tripForm.reset()
    setIsEditing(false)
    setIsCreating(false)
    setSelectedItem(null)
  }

  const onSubmitBlog= (data) => {
    if (isEditing) {
      setBlogs(blogs.map(b => b.id === data.id ? data : b))
    } else {
      setBlogs([...blogs, { ...data, id: String(blogs.length + 1) }])
    }
    blogForm.reset()
    setIsEditing(false)
    setIsCreating(false)
    setSelectedItem(null)
  }

  const onSubmitAttraction= (data) => {
    if (isEditing) {
      setAttractions(attractions.map(a => a.id === data.id ? data : a))
    } else {
      setAttractions([...attractions, { ...data, id: String(attractions.length + 1) }])
    }
    attractionForm.reset()
    setIsEditing(false)
    setIsCreating(false)
    setSelectedItem(null)
  }

  const handleDelete = (id) => {
    switch (activeSection) {
      case 'packages':
        setPackages(packages.filter(p => p.id !== id))
        break
      case 'trips':
        setTrips(trips.filter(t => t.id !== id))
        break
      case 'blogs':
        setBlogs(blogs.filter(b => b.id !== id))
        break
      case 'attractions':
        setAttractions(attractions.filter(a => a.id !== id))
        break
    }
    setSelectedItem(null)
  }

  const handleEdit = (item) => {
    setSelectedItem(item)
    setIsEditing(true)
    switch (activeSection) {
      case 'packages':
        packageForm.reset(item )
        break
      case 'trips':
        tripForm.reset(item )
        break
      case 'blogs':
        blogForm.reset(item )
        break
      case 'attractions':
        attractionForm.reset(item )
        break
    }
  }

  const handleView = (item) => {
    setSelectedItem(item)
    setIsEditing(false)
    setIsCreating(false)
  }

  const handleCreate = () => {
    setIsCreating(true)
    setSelectedItem(null)
    setIsEditing(false)
    switch (activeSection) {
      case 'packages':
        packageForm.reset()
        break
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
        })
        break
      case 'blogs':
        blogForm.reset()
        break
      case 'attractions':
        attractionForm.reset()
        break
    }
  }

  const handleBack = () => {
    setSelectedItem(null)
    setIsEditing(false)
    setIsCreating(false)
  }

  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logging out...')
  }

  const filteredItems = () => {
    switch (activeSection) {
      case 'packages':
        return packages.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
      case 'trips':
        return trips.filter(t => t.name.toLowerCase().includes(searchTerm.toLowerCase()))
      case 'blogs':
        return blogs.filter(b => b.title.toLowerCase().includes(searchTerm.toLowerCase()))
      case 'attractions':
        return attractions.filter(a => a.heading.toLowerCase().includes(searchTerm.toLowerCase()))
      default:
        return []
    }
  }

  const renderDetailView = () => {
    if (!selectedItem) return null

    switch (activeSection) {
      case 'packages':
        const pkg = selectedItem 
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{pkg.title}</h3>
            <p className="text-lg">{pkg.subHeading}</p>
            
            <img src={pkg.image} alt={pkg.title} className="w-full h-64 object-cover rounded-md" />
            <p>{pkg.description}</p>
            <h4 className="text-xl font-semibold mt-6">Linked Trips</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {trips.filter(trip => trip.packageId === pkg.id).map(trip => (
                <Card key={trip.id} className="cursor-pointer hover:shadow-md transition-shadow duration-200" onClick={() => handleView(trip)}>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">{trip.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-gray-500">{trip.location}</p>
                    <p className="text-sm font-semibold">${trip.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )
      case 'trips':
        const trip = selectedItem 
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{trip.name}</h3>
            <p className="text-lg">{trip.location} - {trip.days} days</p>
            <img src={trip.images[0]} alt={trip.name} className="w-full h-64 object-cover rounded-md" />
            <p><strong>Price:</strong> ${trip.price}</p>
            <p><strong>Real Price:</strong> ${trip.realPrice}</p>
            <p>{trip.description}</p>
            <div>
              <h4 className="text-xl font-semibold">Itinerary</h4>
              {trip.itinerary.map((item, index) => (
                <div key={index} className="mb-4">
                  <h5 className="text-lg font-semibold">Day {item.day}</h5>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
            <div>
              <h4 className="text-xl font-semibold">Highlights</h4>
              <ul className="list-disc list-inside">
                {trip.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Inclusions</h4>
              <ul className="list-disc list-inside">
                {trip.inclusions.map((inclusion, index) => (
                  <li key={index}>{inclusion}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Exclusions</h4>
              <ul className="list-disc list-inside">
                {trip.exclusions.map((exclusion, index) => (
                  <li key={index}>{exclusion}</li>
                ))}
              </ul>
            </div>
          </div>
        )
      case 'blogs':
        const blog = selectedItem 
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{blog.title}</h3>
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-md" />
            <p>{blog.content}</p>
          </div>
        )
      case 'attractions':
        const attraction = selectedItem 
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{attraction.heading}</h3>
            <img src={attraction.image} alt={attraction.heading} className="w-full h-64 object-cover rounded-md" />
            <p>{attraction.details}</p>
          </div>
        )
      default:
        return null
    }
  }

  const renderForm = () => {
    switch (activeSection) {
      case 'packages':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input id="title" {...packageForm.register('title')} />
              {packageForm.formState.errors.title && (
                <p className="text-sm text-red-500">{packageForm.formState.errors.title.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="subHeading">Subheading</Label>
              <Input id="subHeading" {...packageForm.register('subHeading')} />
              {packageForm.formState.errors.subHeading && (
                <p className="text-sm text-red-500">{packageForm.formState.errors.subHeading.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="image">Image URL</Label>
              <Input id="image" {...packageForm.register('image')} />
              {packageForm.formState.errors.image && (
                <p className="text-sm text-red-500">{packageForm.formState.errors.image.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" {...packageForm.register('description')} />
              {packageForm.formState.errors.description && (
                <p className="text-sm text-red-500">{packageForm.formState.errors.description.message}</p>
              )}
            </div>
            <Button onClick={packageForm.handleSubmit(onSubmitPackage)}>{isEditing ? 'Update' : 'Create'} Package</Button>
          </div>
        )
      case 'trips':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...tripForm.register('name')} />
              {tripForm.formState.errors.name && (
                <p className="text-sm text-red-500">{tripForm.formState.errors.name.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="days">Days</Label>
              <Input id="days" type="number" {...tripForm.register('days', { valueAsNumber: true })} />
              {tripForm.formState.errors.days && (
                <p className="text-sm text-red-500">{tripForm.formState.errors.days.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input id="location" {...tripForm.register('location')} />
              {tripForm.formState.errors.location && (
                <p className="text-sm text-red-500">{tripForm.formState.errors.location.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="price">Price</Label>
              <Input id="price" type="number" {...tripForm.register('price', { valueAsNumber: true })} />
              {tripForm.formState.errors.price && (
                <p className="text-sm text-red-500">{tripForm.formState.errors.price.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="realPrice">Real Price</Label>
              <Input id="realPrice" type="number" {...tripForm.register('realPrice', { valueAsNumber: true })} />
              {tripForm.formState.errors.realPrice && (
                <p className="text-sm text-red-500">{tripForm.formState.errors.realPrice.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" {...tripForm.register('description')} />
              {tripForm.formState.errors.description && (
                <p className="text-sm text-red-500">{tripForm.formState.errors.description.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="packageId">Package</Label>
              <Select onValueChange={(value) => tripForm.setValue('packageId', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select package" />
                </SelectTrigger>
                <SelectContent>
                  {packages.map((pkg) => (
                    <SelectItem key={pkg.id} value={pkg.id}>
                      {pkg.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {tripForm.formState.errors.packageId && (
                <p className="text-sm text-red-500">{tripForm.formState.errors.packageId.message}</p>
              )}
            </div>
            <div>
              <Label>Itinerary</Label>
              {itineraryFields.map((field, index) => (
                <div key={field.id} className="flex items-center space-x-2 mt-2">
                  <Input
                    type="number"
                    placeholder="Day"
                    {...tripForm.register(`itinerary.${index}.day` , { valueAsNumber: true })}
                    className="w-20"
                  />
                  <Input
                    placeholder="Description"
                    {...tripForm.register(`itinerary.${index}.description` )}
                    className="flex-grow"
                  />
                  <Button type="button" variant="outline" size="icon" onClick={() => removeItinerary(index)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button type="button" variant="outline" onClick={() => appendItinerary({ day: itineraryFields.length + 1, description: '' })} className="mt-2">
                Add Itinerary Item
              </Button>
            </div>
            <div>
              <Label>Highlights</Label>
              {highlightFields.map((field, index) => (
                <div key={field.id} className="flex items-center space-x-2 mt-2">
                  <Input
                    placeholder="Highlight"
                    {...tripForm.register(`highlights.${index}` )}
                    className="flex-grow"
                  />
                  <Button type="button" variant="outline" size="icon" onClick={() => removeHighlight(index)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button type="button" variant="outline" onClick={() => appendHighlight('')} className="mt-2">
                Add Highlight
              </Button>
            </div>
            <div>
              <Label>Inclusions</Label>
              {inclusionFields.map((field, index) => (
                <div key={field.id} className="flex items-center space-x-2 mt-2">
                  <Input
                    placeholder="Inclusion"
                    {...tripForm.register(`inclusions.${index}` )}
                    className="flex-grow"
                  />
                  <Button type="button" variant="outline" size="icon" onClick={() => removeInclusion(index)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button type="button" variant="outline" onClick={() => appendInclusion('')} className="mt-2">
                Add Inclusion
              </Button>
            </div>
            <div>
              <Label>Exclusions</Label>
              {exclusionFields.map((field, index) => (
                <div key={field.id} className="flex items-center space-x-2 mt-2">
                  <Input
                    placeholder="Exclusion"
                    {...tripForm.register(`exclusions.${index}`)}
                    className="flex-grow"
                  />
                  <Button type="button" variant="outline" size="icon" onClick={() => removeExclusion(index)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button type="button" variant="outline" onClick={() => appendExclusion('')} className="mt-2">
                Add Exclusion
              </Button>
            </div>
            <Button onClick={tripForm.handleSubmit(onSubmitTrip)}>{isEditing ? 'Update' : 'Create'} Trip</Button>
          </div>
        )
      case 'blogs':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input id="title" {...blogForm.register('title')} />
              {blogForm.formState.errors.title && (
                <p className="text-sm text-red-500">{blogForm.formState.errors.title.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea id="content" {...blogForm.register('content')} />
              {blogForm.formState.errors.content && (
                <p className="text-sm text-red-500">{blogForm.formState.errors.content.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="image">Image URL</Label>
              <Input id="image" {...blogForm.register('image')} />
              {blogForm.formState.errors.image && (
                <p className="text-sm text-red-500">{blogForm.formState.errors.image.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="tripId">Trip</Label>
              <Select onValueChange={(value) => blogForm.setValue('tripId', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select trip" />
                </SelectTrigger>
                <SelectContent>
                  {trips.map((trip) => (
                    <SelectItem key={trip.id} value={trip.id}>
                      {trip.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {blogForm.formState.errors.tripId && (
                <p className="text-sm text-red-500">{blogForm.formState.errors.tripId.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="packageId">Package</Label>
              <Select onValueChange={(value) => blogForm.setValue('packageId', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select package" />
                </SelectTrigger>
                <SelectContent>
                  {packages.map((pkg) => (
                    <SelectItem key={pkg.id} value={pkg.id}>
                      {pkg.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {blogForm.formState.errors.packageId && (
                <p className="text-sm text-red-500">{blogForm.formState.errors.packageId.message}</p>
              )}
            </div>
            <Button onClick={blogForm.handleSubmit(onSubmitBlog)}>{isEditing ? 'Update' : 'Create'} Blog</Button>
          </div>
        )
      case 'attractions':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="heading">Heading</Label>
              <Input id="heading" {...attractionForm.register('heading')} />
              {attractionForm.formState.errors.heading && (
                <p className="text-sm text-red-500">{attractionForm.formState.errors.heading.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="details">Details</Label>
              <Textarea id="details" {...attractionForm.register('details')} />
              {attractionForm.formState.errors.details && (
                <p className="text-sm text-red-500">{attractionForm.formState.errors.details.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="image">Image URL</Label>
              <Input id="image" {...attractionForm.register('image')} />
              {attractionForm.formState.errors.image && (
                <p className="text-sm text-red-500">{attractionForm.formState.errors.image.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="tripId">Trip</Label>
              <Select onValueChange={(value) => attractionForm.setValue('tripId', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select trip" />
                </SelectTrigger>
                <SelectContent>
                  {trips.map((trip) => (
                    <SelectItem key={trip.id} value={trip.id}>
                      {trip.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {attractionForm.formState.errors.tripId && (
                <p className="text-sm text-red-500">{attractionForm.formState.errors.tripId.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="packageId">Package</Label>
              <Select onValueChange={(value) => attractionForm.setValue('packageId', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select package" />
                </SelectTrigger>
                <SelectContent>
                  {packages.map((pkg) => (
                    <SelectItem key={pkg.id} value={pkg.id}>
                      {pkg.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {attractionForm.formState.errors.packageId && (
                <p className="text-sm text-red-500">{attractionForm.formState.errors.packageId.message}</p>
              )}
            </div>
            <Button onClick={attractionForm.handleSubmit(onSubmitAttraction)}>{isEditing ? 'Update' : 'Create'} Attraction</Button>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar (unchanged) */}
      <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-white shadow-md transition-transform duration-300 ease-in-out z-30 md:relative md:translate-x-0`}>
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Travel Dashboard</h1>
          <nav>
            <Button
              variant={activeSection === 'packages' ? 'default' : 'ghost'}
              className="w-full justify-start mb-2"
              onClick={() => {
                setActiveSection('packages')
                setIsSidebarOpen(false)
                setSelectedItem(null)
                setIsCreating(false)
                setIsEditing(false)
              }}
            >
              <Package className="mr-2 h-4 w-4" /> Packages
            </Button>
            <Button
              variant={activeSection === 'trips' ? 'default' : 'ghost'}
              className="w-full justify-start mb-2"
              onClick={() => {
                setActiveSection('trips')
                setIsSidebarOpen(false)
                setSelectedItem(null)
                setIsCreating(false)
                setIsEditing(false)
              }}
            >
              <Map className="mr-2 h-4 w-4" /> Trips
            </Button>
            <Button
              variant={activeSection === 'blogs' ? 'default' : 'ghost'}
              className="w-full justify-start mb-2"
              onClick={() => {
                setActiveSection('blogs')
                setIsSidebarOpen(false)
                setSelectedItem(null)
                setIsCreating(false)
                setIsEditing(false)
              }}
            >
              <BookOpen className="mr-2 h-4 w-4" /> Blogs
            </Button>
            <Button
              variant={activeSection === 'attractions' ? 'default' : 'ghost'}
              className="w-full justify-start mb-2"
              onClick={() => {
                setActiveSection('attractions')
                setIsSidebarOpen(false)
                setSelectedItem(null)
                setIsCreating(false)
                setIsEditing(false)
              }}
            >
              <Landmark className="mr-2 h-4 w-4" /> Attractions
            </Button>
          </nav>
        </div>
        <div className="p-4 border-t">
          <Button onClick={handleLogout} variant="outline" className="w-full">
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <Menu className="h-4 w-4" />
              </Button>
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate">
              {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
            </h2>
            <div className="flex items-center">
              <div className="hidden md:block relative mr-2">
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <Button
                onClick={handleCreate}
                className="mr-2"
              >
                <Plus className="mr-2 h-4 w-4" /> Create {activeSection.slice(0, -1)}
              </Button>
              
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {selectedItem || isCreating ? (
              <div className="bg-white shadow-md rounded-lg p-6">
                <Button variant="ghost" onClick={handleBack} className="mb-4">
                  <ChevronLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                {isEditing || isCreating ? (
                  <>
                    <h3 className="text-lg font-semibold mb-4">{isEditing ? 'Edit' : 'Create'} {activeSection.slice(0, -1)}</h3>
                    {renderForm()}
                  </>
                ) : (
                  <>
                    {renderDetailView()}
                    <div className="mt-4 flex justify-end space-x-2">
                      <Button onClick={() => handleEdit(selectedItem)}>Edit</Button>
                      <Button variant="destructive" onClick={() => handleDelete(selectedItem.id)}>Delete</Button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-md:px-2">
                {filteredItems().map((item) => (
                  <Card key={item.id} className="cursor-pointer hover:shadow-md transition-shadow duration-200" onClick={() => handleView(item)}>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">
                        {activeSection === 'packages' ? (item ).title :
                         activeSection === 'trips' ? (item ).name :
                         activeSection === 'blogs' ? (item ).title :
                         (item ).heading}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 flex justify-between items-center">
                      <p className="text-sm text-gray-500 truncate">
                        {activeSection === 'packages' ? (item).subHeading :
                         activeSection === 'trips' ? (item ).location :
                         activeSection === 'blogs' ? (item ).content.substring(0, 50) + '...' :
                         (item).details.substring(0, 50) + '...'}
                      </p>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={(e) => {
                            e.stopPropagation()
                            handleEdit(item)
                          }}>
                            <Edit className="mr-2 h-4 w-4" /> Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={(e) => {
                            e.stopPropagation()
                            handleDelete(item.id)
                          }}>
                            <Trash className="mr-2 h-4 w-4" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}