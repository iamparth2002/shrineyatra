import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import axiosInstance from '@/utils/axios';

const BlogForm = ({
  blogs,
  setBlogs,
  blogForm,
  isEditing,
  trips,
  packages,
  setSelectedItem,
  setIsEditing,
  setIsCreating,
}) => {
  const [uploading, setUploading] = useState(false);
  const [showImageInput, setShowImageInput] = useState(!isEditing); // Show image input directly if creating
  const [existingImage, setExistingImage] = useState(null); // Store current image (URL)

  useEffect(() => {
    if (isEditing && blogForm.watch('image')) {
      setExistingImage(blogForm.watch('image')); // Pre-fill existing image if editing
    }
  }, [isEditing, blogForm]);

  const onSubmitBlog = async (data) => {
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('content', data.content);
      formData.append('trip', data.tripId);
      formData.append('package', data.packageId);

      // If a new image was uploaded, append it to the FormData
      if (data.image instanceof File) {
        formData.append('image', data.image);
      }

      if (isEditing) {
        // Update logic
        const response = await axiosInstance.put(`/blogs/update/${data.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Blog updated:', response.data);
        setBlogs(blogs.map((blog) => (blog.id === data._id ? response.data : blog)));
      } else {
        // Create logic
        const response = await axiosInstance.post('/blogs/create', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setBlogs([...blogs, response.data]);
        console.log('Blog created:', response.data);
      }
    } catch (error) {
      console.error('Error submitting blog:', error.response ? error.response.data : error.message);
    } finally {
      setUploading(false);
      blogForm.reset();
      setIsEditing(false);
      setIsCreating(false);
      setSelectedItem(null);
    }
  };

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
        <Label htmlFor="image">Image</Label>
        {showImageInput || !isEditing ? (
          // Show image input field for uploading new image
          <Input
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) => blogForm.setValue('image', e.target.files[0])}
          />
        ) : (
          <div>
            {/* Display existing image or placeholder if editing */}
            <p className='mt-2'>{existingImage ? existingImage : 'No image selected'}</p>
            <Button onClick={() => setShowImageInput(true)}>Change Image</Button>
          </div>
        )}
        {blogForm.formState.errors.image && (
          <p className="text-sm text-red-500">{blogForm.formState.errors.image.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="tripId">Trip</Label>
        <Select
          value={blogForm.watch('tripId') || ''}
          onValueChange={(value) => blogForm.setValue('tripId', value)}
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
        {blogForm.formState.errors.tripId && (
          <p className="text-sm text-red-500">{blogForm.formState.errors.tripId.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="packageId">Package</Label>
        <Select
          value={blogForm.watch('packageId') || ''}
          onValueChange={(value) => blogForm.setValue('packageId', value)}
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
        {blogForm.formState.errors.packageId && (
          <p className="text-sm text-red-500">{blogForm.formState.errors.packageId.message}</p>
        )}
      </div>

      <Button onClick={blogForm.handleSubmit(onSubmitBlog)}>
        {uploading ? 'Uploading...' : isEditing ? 'Update Blog' : 'Create Blog'}
      </Button>
    </div>
  );
};

export default BlogForm;
