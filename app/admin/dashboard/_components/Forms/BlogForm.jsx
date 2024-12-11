import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import axiosInstance from '@/utils/axios';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill CSS for styling
import { modules } from '@/utils/data';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

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
  const [showImageInput, setShowImageInput] = useState(!isEditing);
  const [existingImage, setExistingImage] = useState(null);

  useEffect(() => {
    if (isEditing && blogForm.watch('image')) {
      setExistingImage(blogForm.watch('image'));
    }
  }, [isEditing, blogForm]);

  const quillRef = useRef(null);

  useEffect(() => {
    const quill = quillRef.current?.getEditor();  // Safe check for quillRef

    if (quill) {
      const imageHandler = () => {
        const range = quill.getSelection();
        const value = prompt('Enter image URL or base64:');

        if (value) {
          let altText = '';

          // Check if the value is a base64 image
          if (value.startsWith('data:image')) {
            // Generate a default alt text based on the image type (jpeg, png, etc.)
            const type = value.split(';')[0].split('/')[1];
            altText = `image-${type}`;  // e.g., 'image-jpeg', 'image-png'
          } else {
            // If it's a URL, extract the filename and use it as alt text
            const filename = value.split('/').pop();
            altText = filename ? filename.split('.')[0] : 'image'; // Remove extension
          }

          const image = `<img src="${value}" alt="${altText}">`;
          quill.clipboard.dangerouslyPasteHTML(range.index, image);
        }
      };

      // Get the quill toolbar and add the custom image handler
      const toolbar = quill.getModule('toolbar');
      toolbar.addHandler('image', imageHandler);
    }
  }, []);

  const onSubmitBlog = async (data) => {
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('content', data.content); // HTML content
      formData.append('trip', data.tripId);
      formData.append('package', data.packageId);
      formData.append('urlName', data.urlName);
      formData.append('metaTitle', data.metaTitle);
      formData.append('metaDescription', data.metaDescription);
      formData.append('imageAlt', data.imageAlt);

      if (data.image instanceof File) {
        formData.append('image', data.image);
      }

      if (isEditing) {
        const response = await axiosInstance.put(`/blogs/update/${data.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setBlogs(blogs.map((blog) => (blog._id === response.data._id ? response.data : blog)));
      } else {
        const response = await axiosInstance.post('/blogs/create', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setBlogs([...blogs, response.data]);
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
        <Label htmlFor="urlName">URL Name</Label>
        <Input id="urlName" {...blogForm.register('urlName')} />
        {blogForm.formState.errors.urlName && (
          <p className="text-sm text-red-500">{blogForm.formState.errors.urlName.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="metaTitle">Meta Title</Label>
        <Input id="metaTitle" {...blogForm.register('metaTitle')} />
        {blogForm.formState.errors.metaTitle && (
          <p className="text-sm text-red-500">{blogForm.formState.errors.metaTitle.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="metaDescription">Meta Descripition</Label>
        <Input id="metaDescription" {...blogForm.register('metaDescription')} />
        {blogForm.formState.errors.metaDescription && (
          <p className="text-sm text-red-500">{blogForm.formState.errors.metaDescription.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="content">Content</Label>
        <ReactQuill
          ref={quillRef}
          value={blogForm.watch('content') || ''}
          onChange={(value) => blogForm.setValue('content', value)}
          modules={modules}
        />
        {blogForm.formState.errors.content && (
          <p className="text-sm text-red-500">{blogForm.formState.errors.content.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="image">Image</Label>
        {showImageInput || !isEditing ? (
          <Input
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) => blogForm.setValue('image', e.target.files[0])}
          />
        ) : (
          <div>
            <p className='mt-2'>{existingImage ? existingImage : 'No image selected'}</p>
            <Button onClick={() => setShowImageInput(true)}>Change Image</Button>
          </div>
        )}
        {blogForm.formState.errors.image && (
          <p className="text-sm text-red-500">{blogForm.formState.errors.image.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="imageAlt">Image Description</Label>
        <Input id="imageAlt" {...blogForm.register('imageAlt')} />
        {blogForm.formState.errors.imageAlt && (
          <p className="text-sm text-red-500">{blogForm.formState.errors.imageAlt.message}</p>
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
