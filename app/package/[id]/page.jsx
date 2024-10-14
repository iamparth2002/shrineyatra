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
import { blogs, PACKAGES } from '@/utils/data';
import PackageSlider from '@/components/ui/custom/PackageSlider';
import UserForm from '@/components/ui/custom/UserForm';
import BackButton from '@/components/ui/custom/BackButton';

const tourData = {
  tripId: 'TRP001',
  name: 'Kailash Mansarovar via Helicopter',
  days: 10,
  location: 'Kailash, Tibet',
  tags: ['Spiritual', 'Adventure'],
  reviews: 50,
  price: 2200,
  realPrice: 2500,
  currency: 'USD',
  images: [
    'https://images.pexels.com/photos/12151764/pexels-photo-12151764.jpeg',
    'https://images.pexels.com/photos/18358503/pexels-photo-18358503/free-photo-of-horses-and-people-on-a-mountainside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/18359762/pexels-photo-18359762/free-photo-of-people-walking-in-parade-on-road-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/19010047/pexels-photo-19010047/free-photo-of-crowd-walking-on-street-with-tents-around-in-village-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/19010051/pexels-photo-19010051/free-photo-of-crowd-on-street-in-village-in-mountains.jpeg',
  ],
  description:
    'Experience the spiritual serenity of Kailash Mansarovar through a helicopter journey. The 10-day trip starts from Kathmandu with a picturesque helicopter ride into Tibet. Upon arrival, you will be greeted with views of the sacred Mount Kailash, where pilgrims come from all over the world to attain enlightenment. This trip is designed for those looking for comfort, as helicopter rides offer a smoother journey through the challenging terrains. Once in Tibet, you will stay in comfortable accommodations and partake in religious ceremonies around the holy lake, Mansarovar. Every day, you will witness the deep spiritual traditions of the region, making this a fulfilling journey for spiritual seekers.',
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Kathmandu',
      activities: [
        'Arrival at Kathmandu and transfer to hotel',
        'Sightseeing and preparation for the Yatra',
        'Evening briefing and welcome dinner',
      ],
    },
    {
      day: 2,
      title: 'Kathmandu to Tibet',
      activities: [
        'Helicopter journey to the border',
        'Transfer to Tibet and check-in at the lodge',
        'Leisure time and acclimatization',
      ],
    },
    {
      day: 3,
      title: 'Drive to Mansarovar Lake',
      activities: [
        'Drive to Mansarovar Lake through the scenic Tibetan landscapes',
        'First view of Mount Kailash',
        'Evening prayers and rituals by the holy lake',
      ],
    },
    {
      day: 4,
      title: 'Mansarovar Lake rituals',
      activities: [
        'Morning bath and spiritual dip in Mansarovar Lake',
        'Participate in local religious ceremonies',
        'Explore the spiritual surroundings of Mansarovar Lake',
      ],
    },
    {
      day: 5,
      title: 'Trek to Darchen',
      activities: [
        'Short trek to Darchen, the base camp for Kailash parikrama',
        'Check-in to a guesthouse and rest for the next day’s activities',
      ],
    },
    {
      day: 6,
      title: 'Kailash Parikrama - Day 1 ',
      activities: [
        'Start the 3-day parikrama of Mount Kailash',
        'Trek to Dirapuk, offering magnificent views of the north face of Kailash',
        'Overnight stay in Dirapuk',
      ],
    },
    {
      day: 7,
      title: 'Kailash Parikrama - Day 2 ',
      activities: [
        'Trek from Dirapuk to Zuthulpuk, passing the Dolma La Pass (5,636 meters)',
        'This is the toughest day of the trek but offers breathtaking views',
        'Reach Zuthulpuk and rest',
      ],
    },
    {
      day: 8,
      title: 'Kailash Parikrama - Day 3 ',
      activities: [
        'Complete the final leg of the parikrama',
        'Return to Darchen for rest and relaxation',
        'Free time for personal reflection or exploration',
      ],
    },
    {
      day: 9,
      title: 'Return to Mansarovar ',
      activities: [
        'Return journey to Mansarovar Lake',
        'Optional participation in meditation or religious activities',
        'Evening rest and preparation for departure',
      ],
    },
    {
      day: 10,
      title: 'Return to Kathmandu',
      activities: [
        'Helicopter ride back to Kathmandu',
        'Free time for souvenir shopping or exploring the city',
        'Final farewell dinner and end of Yatra',
      ],
    },
  ],
  highlights: [
    'Helicopter ride over the Himalayas, offering stunning aerial views',
    'Darshan of Mount Kailash from multiple angles during the parikrama',
    'Spiritual cleansing bath at Mansarovar Lake',
    'Dolma La Pass, the highest point of the Kailash parikrama at 5,636 meters',
    'Opportunity to witness and participate in traditional Tibetan ceremonies',
    'Cultural immersion in the spiritual customs of both Nepal and Tibet',
    'Comfortable accommodation in remote areas of Tibet',
    'Guided parikrama around Mount Kailash with expert local guides',
    'Picturesque landscapes of the Tibetan plateau and Himalayan mountain range',
    'Religious and spiritual experience amidst serene, sacred settings',
    'Personal time for reflection and meditation in the peaceful surroundings of Mansarovar',
  ],
  inclusions: [
    'Helicopter rides from Kathmandu to Tibet',
    'Accommodation in comfortable hotels',
    'Daily meals (breakfast, lunch, and dinner)',
    'Tibet entry permits and Kailash parikrama passes',
    'Professional guide for the entire trip',
  ],
  exclusions: [
    'Personal expenses such as shopping and tips',
    'Visa fees for Tibet and Nepal',
    'Travel insurance and health insurance',
    'Optional pony rides during parikrama',
    'Meals not mentioned in the itinerary',
  ],
};


export default function TourDetailPage() {
  // const params = useParams();
  // const [tourData, setTourData] = useState(null); // Set initial state to null
  // const id = params?.id; // Safely retrieve the id from params

  // useEffect(() => {
  //   if (id) {
  //     // Ensure id is not undefined or null
  //     const allTrips = PACKAGES.packages.flatMap(
  //       (packageData) => packageData.trips
  //     );
  //     const trip = allTrips.find((t) => t.tripId === id);

  //     if (trip) {
  //       setTourData(trip);
  //     } else {
  //       console.error('Trip not found');
  //     }
  //   }
  // }, [id]); // Dependency on id to run the effect when id changes

  // if (!tourData) {
  //   // Show a loading state or error message when tourData is null or undefined
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <Loader2 color="orange" className="w-16 h-16 animate-spin" />
  //     </div>
  //   );
  // }
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 ">
      <div className="mb-4">

      <BackButton/>
      </div>
      <div className="md:flex md:space-x-8">
        <div className="md:w-2/3">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{tourData?.name}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />`{tourData?.days} days &{' '}
                {tourData?.days - 1} nights`
              </span>
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {tourData?.location}
              </span>
              <span className="flex items-center">
                <Tag className="w-4 h-4 mr-1" />
                {tourData?.tags?.join(', ')}
              </span>
            </div>
          </div>
          {/* <div className="mb-6 h-[400px]">
            <img
              src={tourData.images[0]}
              alt="Tour"
              width={200}
              height={200}
              className="rounded-lg object-cover object-top w-full h-full"
            />
          </div> */}
          <div className="grid grid-cols-4 gap-2 mb-6">
            <div className="col-span-4 md:col-span-2 row-span-2">
              <Image
                src={tourData?.images[0]}
                alt="Tour"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            {tourData?.images?.slice(1).map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Tour ${index + 2}`}
                width={200}
                height={200}
                className="hidden md:flex rounded-lg object-cover w-full h-full"
              />
            ))}
          </div>
          <Tabs defaultValue="overview" className="mb-6">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
              <TabsTrigger value="highlights">Highlights</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              {/* <div className="grid md:grid-cols-2 gap-4">
                {tourData.overview.map((item, index) => (
                  <div key={index} className="border p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div> */}

              <div className="bg-white rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Trip Overview</h2>
                <p className="mt-4 text-gray-700">{tourData?.description}</p>
              </div>
            </TabsContent>
            <TabsContent value="itinerary">
              {/* <div className="space-y-6">
                {tourData.itinerary.map((day, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <span className="bg-primary/10 text-primary rounded-full w-8 h-8 p-5 flex items-center justify-center mr-2">
                          {String(day.day).padStart(2, '0')}
                        </span>
                        {day.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {day.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex ml-12">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-sm text-gray-600">
                              {activity}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div> */}
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
                          {day.activities.map((activity, actIndex) => (
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
                <h2 className="text-2xl font-semibold mb-4">Trip Highlights</h2>
                <ul className="space-y-2">
                  {tourData?.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-[#ff5722] mr-2 mt-1 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <ul className="space-y-2">
                {tourData.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul> */}
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
          <UserForm/>
        </div>
        
      </div>
      <div className="mb-8 ">
        <h2 className="text-2xl font-bold mb-4">Other Related Trips</h2>
        <div className="">
          <PackageSlider trips={PACKAGES.packages[0].trips} />
        </div>
      </div>
      <div className="mb-8 max-w-7xl">
        <h2 className="text-2xl font-bold mb-4">Related Blogs</h2>
        <div className="flex flex-col md:flex-row gap-4">
          {blogs.map((blog, index) => (
            <BlogCard blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PriceCard({ tourData }) {
  return (
    <div className="border rounded-lg p-6  top-6 bg-white">
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

        {/* <div className="flex items-center">
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          <span className="ml-1 font-semibold">{tourData.rating}</span>
          <span className="ml-1 text-sm text-gray-500">
            ({tourData.reviews} reviews)
          </span>
        </div> */}
      </div>
      <div className="space-y-4 mt-6">
        <h3 className="font-semibold text-lg">Contact Us</h3>
        <Button
          className="w-full flex items-center justify-center"
          variant="outline"
        >
          <Phone className="w-4 h-4 mr-2" />
          Call Support
        </Button>
        <Button
          className="w-full flex items-center justify-center"
          variant="outline"
        >
          <Mail className="w-4 h-4 mr-2" />
          Email Us
        </Button>
        <Button className="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white">
          <MessageCircle className="w-4 h-4 mr-2" />
          WhatsApp
        </Button>
      </div>
    </div>
  );
}
