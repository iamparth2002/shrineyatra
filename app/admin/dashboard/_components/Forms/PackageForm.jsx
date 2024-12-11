'use client';
import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import axiosInstance from '@/utils/axios';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill CSS for styling
import { modules } from '@/utils/data';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function PackageForm({
  packageForm,
  isEditing,
  packages,
  setPackages,
  setIsEditing,
  setIsCreating,
  setSelectedItem,
}) {
  const [uploading, setUploading] = useState(false);
  const [showImageInput, setShowImageInput] = useState(!isEditing);
  const [existingImage, setExistingImage] = useState(null);
  const [points, setPoints] = useState([{ title: '', description: '' }]);

  const check = () => {
    console.log(packageForm.getValues())
  }

  const onSubmitPackage = async (data) => {
    setUploading(true);
    try {
      const formData = new FormData();

      formData.append('title', data.title);
      formData.append('subHeading', data.subHeading);
      formData.append('description', data.description);
      formData.append('navName', data.navName);
      formData.append('urlName', data.urlName);
      formData.append('metaTitle', data.metaTitle);
      formData.append('metaDescription', data.metaDescription);
      formData.append('imageAlt', data.imageAlt);
      formData.append('points', JSON.stringify(points));

      if (data.image instanceof File) {
        formData.append('image', data.image); // Add the image file to formData
      }

      if (isEditing) {
        // Update logic
        const response = await axiosInstance.put(
          `/packages/update/${data.id}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        setPackages(
          packages.map((item) => (item._id === response.data._id ? response.data : item))
        );
        console.log(packages)
      } else {
        // Create logic
        const response = await axiosInstance.post('/packages/create', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setPackages([...packages, response.data]);
        console.log('Package created:', response.data);
      }
    } catch (error) {
      console.error(
        'Error submitting package:',
        error.response ? error.response.data : error.message
      );
    } finally {
      setUploading(false);
    }
    packageForm.reset();
    setIsEditing(false);
    setIsCreating(false);
    setSelectedItem(null);
  };

  useEffect(() => {
    if (isEditing && packageForm.watch('image')) {
      setExistingImage(packageForm.watch('image')); // Pre-fill existing image if editing
    }
    if (isEditing && packageForm.watch('points')) {
      setPoints(packageForm.watch('points') || []);
    }
  }, [isEditing, packageForm]);

  const handleAddPoint = () => {
    setPoints([...points, { title: '', description: '' }]);
  };

  const handleRemovePoint = (index) => {
    setPoints(points.filter((_, i) => i !== index));
  };

  const handlePointChange = (index, field, value) => {
    const updatedPoints = [...points];
    if (!updatedPoints[index]) {
      updatedPoints[index] = { title: '', description: '' }; // Ensure it is an object
    }
    updatedPoints[index][field] = value;
    setPoints(updatedPoints);
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input id="title" {...packageForm.register('title')} />
        {packageForm.formState.errors.title && (
          <p className="text-sm text-red-500">
            {packageForm.formState.errors.title.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="navName">Navigation Name</Label>
        <Input id="navName" {...packageForm.register('navName')} />
        {packageForm.formState.errors.navName && (
          <p className="text-sm text-red-500">
            {packageForm.formState.errors.navName.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="urlName">URL Name</Label>
        <Input id="urlName" {...packageForm.register('urlName')} />
        {packageForm.formState.errors.urlName && (
          <p className="text-sm text-red-500">
            {packageForm.formState.errors.urlName.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="metaTitle">Meta Title</Label>
        <Input id="metaTitle" {...packageForm.register('metaTitle')} />
        {packageForm.formState.errors.metaTitle && (
          <p className="text-sm text-red-500">
            {packageForm.formState.errors.metaTitle.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="metaDescription">Meta Description</Label>
        <Input id="metaDescription" {...packageForm.register('metaDescription')} />
        {packageForm.formState.errors.metaDescription && (
          <p className="text-sm text-red-500">
            {packageForm.formState.errors.metaDescription.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="subHeading">Subheading</Label>
        <Input id="subHeading" {...packageForm.register('subHeading')} />
        {packageForm.formState.errors.subHeading && (
          <p className="text-sm text-red-500">
            {packageForm.formState.errors.subHeading.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <ReactQuill
          value={packageForm.watch('description')}
          onChange={(value) => packageForm.setValue('description', value)}
          modules={modules}
        />
        {packageForm.formState.errors.description && (
          <p className="text-sm text-red-500">
            {packageForm.formState.errors.description.message}
          </p>
        )}
      </div>
      <div>
        <Label>Points</Label>
        {points.map((point, index) => (
          <div key={index} className="space-y-2 border p-4 rounded mb-4">
            <div>
              <Label htmlFor={`point-title-${index}`}>Point Title</Label>
              <Input
                id={`point-title-${index}`}
                value={point.title}
                onChange={(e) =>
                  handlePointChange(index, 'title', e.target.value)
                }
              />
            </div>
            <div>
              <Label htmlFor={`point-description-${index}`}>
                Point Description
              </Label>
              <ReactQuill
                value={point.description}
                onChange={(value) =>
                  handlePointChange(index, 'description', value)
                }
                modules={modules}
              />
            </div>
            <Button
              variant="destructive"
              onClick={() => handleRemovePoint(index)}
            >
              Remove Point
            </Button>
          </div>
        ))}
        <Button variant="secondary" onClick={handleAddPoint}>
          Add Point
        </Button>
      </div>

      <div>
        <Label htmlFor="image">Image</Label>
        {showImageInput || !isEditing ? (
          // Show image input field for uploading new image
          <Input
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) => packageForm.setValue('image', e.target.files[0])}
          />
        ) : (
          <div>
            {/* Display existing image or placeholder if editing */}
            <p className="mt-2">
              {existingImage ? existingImage : 'No image selected'}
            </p>
            <Button onClick={() => setShowImageInput(true)}>
              Change Image
            </Button>
          </div>
        )}
        {packageForm.formState.errors.image && (
          <p className="text-sm text-red-500">
            {packageForm.formState.errors.image.message}
          </p>
        )}
        <div>
          <Label htmlFor="imageAlt">Image Description</Label>
          <Textarea id="imageAlt" {...packageForm.register('imageAlt')} />
          {packageForm.formState.errors.imageAlt && (
            <p className="text-sm text-red-500">
              {packageForm.formState.errors.imageAlt.message}
            </p>
          )}
        </div>
      </div>
      <Button
        onClick={packageForm.handleSubmit(onSubmitPackage)}
        // onClick={check}
        disabled={uploading}
      >
        {uploading ? 'Uploading...' : isEditing ? 'Update' : 'Create'}{' '}
        {uploading ? '' : 'Package'}
      </Button>
    </div>
  );
}
