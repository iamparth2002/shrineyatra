'use client'
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { X } from 'lucide-react';
import axiosInstance from '@/utils/axios'; // Import axios instance

export default function TripForm({
  tripForm,
  packages,
  removeExclusion,
  removeHighlight,
  removeInclusion,
  removeItinerary,
  appendExclusion,
  appendHighlight,
  appendInclusion,
  appendItinerary,
  exclusionFields,
  itineraryFields,
  highlightFields,
  inclusionFields,
  isEditing,
  trips,
  setIsEditing,
  setIsCreating,
  setSelectedItem,
  setTrips
}) {
  const [uploading, setUploading] = useState(false);

  const onSubmitTrip = async (data) => {
    console.log('hi')
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('days', data.days);
      formData.append('location', data.location);
      formData.append('price', data.price);
      formData.append('realPrice', data.realPrice);
      formData.append('description', data.description);
      formData.append('packageId', data.packageId);

      // Convert arrays to JSON strings
      data.itinerary.map(item => {
        item.description = item.description.split(",");
      });
      formData.append('itinerary', JSON.stringify(data.itinerary));
      formData.append('highlights', JSON.stringify(data.highlights));
      formData.append('inclusions', JSON.stringify(data.inclusions));
      formData.append('exclusions', JSON.stringify(data.exclusions));

      if (data.image instanceof File) {
        formData.append('image', data.image); // Add image file to formData
      }
      
      const response = await axiosInstance.post('/trips/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setTrips([...trips, { ...response.data}]);

      console.log('Trip created:', data);

    } catch (error) {
      console.error('Error submitting trip:', error.response ? error.response.data : error.message);
    } finally {
      setUploading(false);
    }
    tripForm.reset();
    setIsEditing(false);
    setIsCreating(false);
    setSelectedItem(null);
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...tripForm.register('name')} />
        {tripForm.formState.errors.name && (
          <p className="text-sm text-red-500">
            {tripForm.formState.errors.name.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="days">Days</Label>
        <Input
          id="days"
          type="number"
          {...tripForm.register('days', { valueAsNumber: true })}
        />
        {tripForm.formState.errors.days && (
          <p className="text-sm text-red-500">
            {tripForm.formState.errors.days.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="location">Location</Label>
        <Input id="location" {...tripForm.register('location')} />
        {tripForm.formState.errors.location && (
          <p className="text-sm text-red-500">
            {tripForm.formState.errors.location.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="price">Price</Label>
        <Input
          id="price"
          type="number"
          {...tripForm.register('price', { valueAsNumber: true })}
        />
        {tripForm.formState.errors.price && (
          <p className="text-sm text-red-500">
            {tripForm.formState.errors.price.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="realPrice">Real Price</Label>
        <Input
          id="realPrice"
          type="number"
          {...tripForm.register('realPrice', { valueAsNumber: true })}
        />
        {tripForm.formState.errors.realPrice && (
          <p className="text-sm text-red-500">
            {tripForm.formState.errors.realPrice.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" {...tripForm.register('description')} />
        {tripForm.formState.errors.description && (
          <p className="text-sm text-red-500">
            {tripForm.formState.errors.description.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="packageId">Package</Label>
        <Select
          onValueChange={(value) => tripForm.setValue('packageId', value)}
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
        {tripForm.formState.errors.packageId && (
          <p className="text-sm text-red-500">
            {tripForm.formState.errors.packageId.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="image">Image</Label>

        <Input
          id="image"
          type="file"
          accept="image/*"
          onChange={(e) => tripForm.setValue('image', e.target.files[0])}
        />
        {tripForm.formState.errors.image && (
          <p className="text-sm text-red-500">
            {tripForm.formState.errors.image.message}
          </p>
        )}
      </div>
      <div>
        <Label>Itinerary</Label>
        {itineraryFields.map((field, index) => (
          <div key={field.id} className="flex flex-wrap gap-2 items-center mt-2">
            <div className='flex flex-row gap-2 w-full'>
            <Input
              type="number"
              placeholder="Day"
              {...tripForm.register(`itinerary.${index}.day`, {
                valueAsNumber: true,
              })}
              className="w-20"
            />
            <Input
              
              placeholder="Title"
              {...tripForm.register(`itinerary.${index}.title`)}
              className=" flex-grow"
            />
            </div>
            
            <Input
              placeholder="Description"
              {...tripForm.register(`itinerary.${index}.description`)}
              className="flex-grow"
            />
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => removeItinerary(index)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          onClick={() =>
            appendItinerary({
              day: itineraryFields.length + 1,
              description: '',
            })
          }
          className="mt-2"
        >
          Add Itinerary Item
        </Button>
        {tripForm.formState.errors.itinerary && (
          <p className="text-sm text-red-500">
            {tripForm.formState.errors.itinerary.message}
          </p>
        )}
      </div>
      <div>
        <Label>Highlights</Label>
        {highlightFields.map((field, index) => (
          <div key={field.id} className="flex items-center space-x-2 mt-2">
            <Input
              placeholder="Highlight"
              {...tripForm.register(`highlights.${index}`)}
              className="flex-grow"
            />
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => removeHighlight(index)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          onClick={() => appendHighlight('')}
          className="mt-2"
        >
          Add Highlight
        </Button>
        {tripForm.formState.errors.highlights && (
          <p className="text-sm text-red-500">
            {tripForm.formState.errors.highlights.message}
          </p>
        )}
      </div>
      <div>
        <Label>Inclusions</Label>
        {inclusionFields.map((field, index) => (
          <div key={field.id} className="flex items-center space-x-2 mt-2">
            <Input
              placeholder="Inclusion"
              {...tripForm.register(`inclusions.${index}`)}
              className="flex-grow"
            />
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => removeInclusion(index)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          onClick={() => appendInclusion('')}
          className="mt-2"
        >
          Add Inclusion
        </Button>
        {tripForm.formState.errors.inclusions && (
          <p className="text-sm text-red-500">
            {tripForm.formState.errors.inclusions.message}
          </p>
        )}
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
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => removeExclusion(index)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          onClick={() => appendExclusion('')}
          className="mt-2"
        >
          Add Exclusion
        </Button>
        {tripForm.formState.errors.exclusions && (
          <p className="text-sm text-red-500">
            {tripForm.formState.errors.exclusions.message}
          </p>
        )}
      </div>
      <Button onClick={tripForm.handleSubmit(onSubmitTrip)}>
        {uploading ? 'Uploading...' : (isEditing ? 'Update' : 'Create')} {uploading?"":"Trip"}
      </Button>
    </div>
  );
}