'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2, AlertCircle, Loader } from "lucide-react"
import axiosInstance from '@/utils/axios'

export default function UserForm({ title , price , originalPrice , tripId  }) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [minDate, setMinDate] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState('')

  useEffect(() => {
    const today = new Date()
    const formattedDate = today.toISOString().split('T')[0]
    setMinDate(formattedDate)
  }, [])

  const validateForm = (formData) => {
    const newErrors = {}

    // Email validation
    const email = formData.get('email')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Phone number validation
    const phoneno = formData.get('phoneno')
    if (!/^\d{10}$/.test(phoneno)) {
      newErrors.phoneno = 'Phone number must be 10 digits'
    }

    // Travel date validation
    const travelDate = formData.get('travelDate')
    if (new Date(travelDate) < new Date(minDate)) {
      newErrors.travelDate = 'Travel date cannot be in the past'
    }

    // Traveller count validation
    const travelCount = Number(formData.get('travelCount'))
    if (travelCount <= 0) {
      newErrors.travelCount = 'Traveller count must be greater than zero'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    setServerError('')

    const formData = new FormData(event.currentTarget)
    if (validateForm(formData)) {
      const formValues = Object.fromEntries(formData.entries())

      try {
        const response = await axiosInstance.post('/query/create', formValues)

        if (response.status === 201) {
          console.log('Form submitted with values:', formValues)
          setIsSubmitted(true)
        } else {
          setServerError(response.data.message || 'An error occurred while submitting the form')
        }
      } catch (error) {
        console.error('Error:', error)
        setServerError('Failed to submit the form. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    } else {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto border-0">
        <CardContent className="pt-6">
          <Alert className="bg-green-50 border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-800">Success!</AlertTitle>
            <AlertDescription className="text-green-700">
              Your enquiry has been sent successfully. We'll get back to you soon.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto border-0">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">INR {price}</span>
          <span className="text-sm text-muted-foreground line-through">INR {originalPrice}</span>
          <span className="text-xs text-green-600 font-semibold">SAVE INR {originalPrice - price}</span>
        </div>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="name">Full Name*</Label>
            <Input id="name" name="name" placeholder="Full Name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email*</Label>
            <Input id="email" name="email" type="email" placeholder="Email" required />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="grid grid-cols-4 gap-2">
            <Select name="countryCode" defaultValue="+91">
              <SelectTrigger>
                <SelectValue placeholder="Code" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+91">+91</SelectItem>
                {/* Add more country codes as needed */}
              </SelectContent>
            </Select>
            <div className="col-span-3">
              <Input name="phoneno" placeholder="Your Phone*" required />
              {errors.phoneno && <p className="text-red-500 text-sm">{errors.phoneno}</p>}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label htmlFor="travelDate">Travel Date*</Label>
              <Input id="travelDate" name="travelDate" type="date" min={minDate} required />
              {errors.travelDate && <p className="text-red-500 text-sm">{errors.travelDate}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="travelCount">Traveller Count*</Label>
              <Input id="travelCount" name="travelCount" type="number" min="1" required />
              {errors.travelCount && <p className="text-red-500 text-sm">{errors.travelCount}</p>}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Message (optional)" />
          </div>
          <input type="hidden" name="tripId" value={tripId} />

          {serverError && (
            <Alert className="bg-red-50 border-red-200">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <AlertTitle className="text-red-800">Error!</AlertTitle>--
              <AlertDescription className="text-red-700">{serverError}</AlertDescription>
            </Alert>
          )}

          <Button className="w-full bg-orange-500 hover:bg-orange-600" type="submit" disabled={isLoading}>
            {isLoading ? <Loader className="animate-spin h-4 w-4" /> : 'Send Enquiry'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
