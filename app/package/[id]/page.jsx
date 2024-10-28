'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Star,
  Clock,
  MapPin,
  Tag,
  Phone,
  Mail,
  MessageCircle,
  CheckIcon,
  XIcon,
  Loader2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BlogCard from '@/components/ui/home/BlogCard';
import TripCard from '@/components/ui/home/TripCard';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useParams } from 'next/navigation';
import axios from 'axios';
import PackageSlider from '@/components/ui/custom/PackageSlider';
import BlogSlider from '@/components/ui/custom/BlogSlider';
import AttractionSlider from '@/components/ui/custom/AttractionSlider';
import UserForm from '@/components/ui/custom/UserForm';
import BackButton from '@/components/ui/custom/BackButton';
import Header from '@/components/ui/custom/Header';
import Footer from '@/components/ui/custom/Footer';
import AttractionCard from '@/components/ui/custom/AttractionCard';
import { handleEmailClick, handleSupportClick, handleWhatsAppClick } from '@/lib/utils';

export default function TourDetailPage() {
  const params = useParams();
  const [tourData, setTourData] = useState(null);
  const [otherTrips, setOtherTrips] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingBlogs, setLoadingBlogs] = useState(true);
  const [loadingAttractions, setLoadingAttractions] = useState(true);
  const id = params?.id;

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  // Split the description into words
  const words = tourData?.description.split(' ');
  const displayedText = isExpanded
    ? tourData?.description
    : words?.slice(0, 25).join(' ');

  useEffect(() => {
    const fetchTourData = async () => {
      if (id) {
        try {
          setLoading(true);
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/trips/${id}`
          );
          setTourData(response.data.trip);
          setOtherTrips(response.data.otherTrips);
        } catch (error) {
          console.error('Error fetching tour data:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    const fetchBlogs = async () => {
      try {
        setLoadingBlogs(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/blogs/trip/${id}`
        );
        console.log(response.data);
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoadingBlogs(false);
      }
    };

    const fetchAttractions = async () => {
      try {
        setLoadingAttractions(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/attractions/trip/${id}`
        );

        setAttractions(response.data);
      } catch (error) {
        console.error('Error fetching attractions:', error);
      } finally {
        setLoadingAttractions(false);
      }
    };

    fetchTourData();
    fetchBlogs();
    fetchAttractions();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 color="orange" className="w-16 h-16 animate-spin" />
      </div>
    );
  }

  if (!tourData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Tour not found.</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 ">
        <div className="mb-4">
          <BackButton />
        </div>
        <div className="md:flex md:space-x-8">
          <div className="md:w-2/3">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">{tourData?.name}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {tourData?.days} days & {tourData?.days - 1} nights
                </span>
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {tourData?.location}
                </span>
                {/* <span className="flex items-center">
                  <Tag className="w-4 h-4 mr-1" />
                  {tourData?.tags?.join(', ')}
                </span> */}
              </div>
            </div>

            <div className="mb-6 h-[400px]">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${tourData.image}`}
                alt="Tour"
                width={500}
                height={500}
                className="rounded-lg object-cover object-top w-full h-full"
              />
            </div>

            <Tabs defaultValue="overview" className="mb-6">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="highlights">Highlights</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <div className="bg-white rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Trip Overview</h2>
                  <p className="mt-4 text-gray-700">
                    {displayedText}
                    {!isExpanded && words.length > 30 && '...'}
                  </p>
                  {words.length > 30 && (
                    <button
                      onClick={handleToggle}
                      className="text-blue-500 mt-2 focus:outline-none"
                    >
                      {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="itinerary">
                <div className="bg-white rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {tourData?.itinerary?.map((day, index) => (
                      <AccordionItem key={index} value={`day-${day.day}`}>
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center">
                            <span className="bg-primary text-white py-1 px-2 rounded-full text-sm font-semibold mr-2">
                              Day {day.day}
                            </span>
                            <span className="font-medium">{day.title}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2">
                            {day.description.map((activity, actIndex) => (
                              <li key={actIndex} className="flex ml-12">
                                <span className="text-primary mr-2">•</span>
                                <span className="text-sm text-gray-600">
                                  {activity}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>
              <TabsContent value="highlights">
                <div className="bg-white rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Trip Highlights
                  </h2>
                  <ul className="space-y-2">
                    {tourData?.highlights?.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon className="w-5 h-5 text-[#ff5722] mr-2 mt-1 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            </Tabs>

            <div className="md:hidden mb-8">
              <PriceCard tourData={tourData} />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Inclusions</h2>
                <ul className="space-y-2">
                  {tourData?.inclusions?.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Exclusions</h2>
                <ul className="space-y-2">
                  {tourData?.exclusions?.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <XIcon className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:w-1/3 space-y-4">
            <PriceCard tourData={tourData} />
            <UserForm
              price={tourData?.price}
              originalPrice={tourData?.realPrice}
              title={tourData?.name}
              tripId={tourData?._id}
            />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Other Related Trips</h2>
          <PackageSlider trips={otherTrips} />
        </div>

        {!loadingAttractions && attractions.length > 0 && (
          <div className="mb-8 max-w-7xl">
            <h2 className="text-2xl font-bold mb-4">Other Related Blogs</h2>
            <AttractionSlider attractions={attractions} />
          </div>
        )}

        {!loadingBlogs && blogs.length > 0 && (
          <div className="mb-8 max-w-7xl">
            <h2 className="text-2xl font-bold mb-4">Other Related Blogs</h2>
            <BlogSlider blogs={blogs} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

function PriceCard({ tourData }) {
  return (
    <div className="border rounded-lg p-6 top-6 bg-white">
      <div className="flex justify-between items-center mb-4">
        <div className="flex w-full items-baseline justify-between">
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold">INR {tourData?.price}</span>
            <span className="text-gray-400 line-through text-xs">
              INR {tourData?.realPrice}
            </span>
          </div>
          <span className="bg-green-100 text-green-800 text-[10px] px-2 py-1 rounded-full">
            SAVE INR {tourData?.realPrice - tourData?.price}
          </span>
        </div>
      </div>
      <div className="space-y-4 mt-6">
        <h3 className="font-semibold text-lg">Contact Us</h3>
        <Button
          className="w-full flex items-center justify-center"
          variant="outline"
          onClick={handleSupportClick}
        >
          <Phone className="w-4 h-4 mr-2" />
          Call Support
        </Button>
        <Button
          className="w-full flex items-center justify-center"
          variant="outline"
          onClick={handleEmailClick}
        >
          <Mail className="w-4 h-4 mr-2" />
          Email Us
        </Button>
        <Button className="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white"
        onClick={handleWhatsAppClick}>
          <MessageCircle className="w-4 h-4 mr-2" />
          WhatsApp
        </Button>
      </div>
    </div>
  );
}
