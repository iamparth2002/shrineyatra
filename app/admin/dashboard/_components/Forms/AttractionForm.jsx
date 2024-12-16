'use client';

import { useState, useEffect,useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import axiosInstance from '@/utils/axios';
import dynamic from 'next/dynamic';
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

const AttractionForm = ({
  attractions,
  setAttractions,
  attractionForm,
  trips,
  packages,
  isEditing,
  setSelectedItem,
  setIsEditing,
  setIsCreating,
}) => {
  const [uploading, setUploading] = useState(false);
  const [showImageInput, setShowImageInput] = useState(!isEditing);
  const [existingImage, setExistingImage] = useState(null);

  const [editorContent, setEditorContent] = useState(attractionForm.watch('details') || '');

  const editorRef = useRef(null); 

  useEffect(() => {
    if (isEditing && attractionForm.watch('image')) {
      setExistingImage(attractionForm.watch('image'));
    }
  }, [isEditing, attractionForm]);

  const config = {
    readonly: false, // Enables editing
    height:500,
    uploader: { insertImageAsBase64URI: true }, // Enable base64 image uploads
    buttons: [
      'source', 'bold', 'italic', 'underline', 'strikethrough', 'eraser', 'ul', 'ol', 'outdent',
      'indent', 'superscript', 'subscript', 'font', 'fontsize', 'brush', 'paragraph', 'image',
      'video', 'table', 'link', 'align', 'undo', 'redo', 'cut', 'copy', 'paste', 'hr', 'symbol',
      'fullsize', 'print', 'about',
    ],
  };

  const onSubmitAttraction = async (data) => {

    setUploading(true);
    if (isEditing) {
    }
    try {
      const formData = new FormData();

      formData.append('heading', data.heading);
      formData.append('details', editorContent);
      formData.append('trip', data.tripId);
      formData.append('package', data.packageId);
      formData.append('urlName', data.urlName);
      formData.append('metaDescription', data.metaDescription);
      formData.append('metaTitle', data.metaTitle); 
      formData.append('imageAlt', data.imageAlt); 

      if (data.image instanceof File) {
        formData.append('image', data.image); // Add the image file to formData
      }

      if (isEditing) {
        // Update logic
        const response = await axiosInstance.put(`/attractions/update/${data.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setAttractions(attractions.map((attraction) => (attraction._id === response.data._id ? response.data : attraction)));
      } else {
        
        const response = await axiosInstance.post('/attractions/create', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setAttractions([...attractions, response.data]);
      }
    } catch (error) {
      console.error(
        'Error submitting package:',
        error.response ? error.response.data : error.message
      );
    } finally {
      setUploading(false);
    }
    // if (isEditing) {
    //   setBlogs(blogs.map((b) => (b.id === data.id ? data : b)));
    // } else {
    //   setBlogs([...blogs, { ...data, id: String(blogs.length + 1) }]);
    // }
    attractionForm.reset();
    setIsEditing(false);
    setIsCreating(false);
    setSelectedItem(null);
  };
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="heading">Heading</Label>
        <Input id="heading" {...attractionForm.register('heading')} />
        {attractionForm.formState.errors.heading && (
          <p className="text-sm text-red-500">
            {attractionForm.formState.errors.heading.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="urlName">URL Name</Label>
        <Input id="urlName" {...attractionForm.register('urlName')} />
        {attractionForm.formState.errors.urlName && (
          <p className="text-sm text-red-500">
            {attractionForm.formState.errors.urlName.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="metaTitle">Meta Title</Label>
        <Input id="metaTitle" {...attractionForm.register('metaTitle')} />
        {attractionForm.formState.errors.metaTitle && (
          <p className="text-sm text-red-500">
            {attractionForm.formState.errors.metaTitle.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="metaDescription">Meta Description</Label>
        <Input id="metaDescription" {...attractionForm.register('metaDescription')} />
        {attractionForm.formState.errors.metaDescription && (
          <p className="text-sm text-red-500">
            {attractionForm.formState.errors.metaDescription.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="details">Details</Label>
        <JoditEditor
          ref={editorRef}
          value={editorContent}
          config={config}
          onBlur={(value) => setEditorContent(value)} // Update content on blur
          onChange={(value) => {}}  // Real-time updates
        />
        {attractionForm.formState.errors.content && (
          <p className="text-sm text-red-500">{attractionForm.formState.errors.content.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="image">Image</Label>
        {showImageInput || !isEditing ? (
          // Show image input field for uploading new image
          <Input
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) => attractionForm.setValue('image', e.target.files[0])}
          />
        ) : (
          <div>
            {/* Display existing image or placeholder if editing */}
            <p className='mt-2'>{existingImage ? existingImage : 'No image selected'}</p>
            <Button onClick={() => setShowImageInput(true)}>Change Image</Button>
          </div>
        )}
        {attractionForm.formState.errors.image && (
          <p className="text-sm text-red-500">{blogForm.formState.errors.image.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="imageAlt">Image Description</Label>
        <Input id="imageAlt" {...attractionForm.register('imageAlt')} />
        {attractionForm.formState.errors.imageAlt && (
          <p className="text-sm text-red-500">
            {attractionForm.formState.errors.imageAlt.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="tripId">Trip</Label>
        <Select
          value={attractionForm.watch('tripId') || ''}
          onValueChange={(value) => attractionForm.setValue('tripId', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select trip" />
          </SelectTrigger>
          <SelectContent>
            {trips.map((trip) => (
              <SelectItem key={trip._id} value={trip._id}>
                {trip.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {attractionForm.formState.errors.tripId && (
          <p className="text-sm text-red-500">
            {attractionForm.formState.errors.tripId.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="packageId">Package</Label>
        <Select
          value={attractionForm.watch('packageId') || ''}
          onValueChange={(value) => attractionForm.setValue('packageId', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select package" />
          </SelectTrigger>
          <SelectContent>
            {packages.map((pkg) => (
              <SelectItem key={pkg._id} value={pkg._id}>
                {pkg.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {attractionForm.formState.errors.packageId && (
          <p className="text-sm text-red-500">
            {attractionForm.formState.errors.packageId.message}
          </p>
        )}
      </div>
      <Button onClick={attractionForm.handleSubmit(onSubmitAttraction)}>
      {uploading ? 'Uploading...' : isEditing ? 'Update' : 'Create'}{' '}
      {uploading ? '' : 'Attraction'}
      </Button>
    </div>
  );
};

export default AttractionForm;
