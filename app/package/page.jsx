import Image from 'next/image';
import {
  Star,
  Clock,
  MapPin,
  Tag,
  Phone,
  Mail,
  MessageCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BlogCard from '@/components/ui/home/BlogCard';
import TripCard from '@/components/ui/home/TripCard';

const tourData = {
    title: 'Kedarnath Package via Road',
    duration: '7 days - 6 nights',
    location: 'Kedarnath, India',
    tags: ['Adventure', 'Spiritual', 'Popular'],
    rating: 4.85,
    reviews: 45,
    price: 899,
    currency: 'USD',
    images: [
      'https://images.pexels.com/photos/18439979/pexels-photo-18439979/free-photo-of-buddhist-temple-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/19010047/pexels-photo-19010047/free-photo-of-crowd-walking-on-street-with-tents-around-in-village-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/18359749/pexels-photo-18359749/free-photo-of-group-travelling-horseback-riding.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/12151764/pexels-photo-12151764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/19877296/pexels-photo-19877296/free-photo-of-chopta-tungnath-chandrashila-trek.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    overview: [
      {
        title: 'Travel Style: Spiritual Journey',
        description:
          'A journey for spiritual seekers looking to connect with the divine amidst the breathtaking landscapes of the Himalayas.',
      },
      {
        title: 'Service Level: Basic',
        description:
          'Comfortable accommodations with essential amenities; shared transport; many opportunities for personal reflection.',
      },
      {
        title: 'Physical Rating: 3 - Moderate',
        description:
          'Moderate trekking and walking; suitable for those with a reasonable level of fitness.',
      },
      {
        title: 'Trip Type: Group Experience',
        description: 'Group experience; Max 15, avg 10.',
      },
    ],
    description:
      "Embark on a spiritual adventure to Kedarnath, one of the most revered pilgrimage sites in India. This package offers a unique opportunity to experience the majestic Himalayas while connecting with your spiritual self. Explore scenic landscapes, immerse yourself in local culture, and partake in the rich traditions of the Kedarnath temple. Whether you seek enlightenment or simply a peaceful retreat, this journey promises unforgettable memories and profound experiences.",
    itinerary: [
      {
        day: 1,
        title: 'DELHI - HARIDWAR',
        activities: [
          'Depart from Delhi to Haridwar by road',
          'Lunch at a local restaurant',
          'Visit Har Ki Pauri for Ganga Aarti',
          'Check-in at hotel & Free program',
        ],
      },
      {
        day: 2,
        title: 'HARIDWAR - GUPTKASHI',
        activities: [
          'Breakfast at the hotel',
          'Depart for Guptkashi',
          'Lunch on the way',
          'Arrive in Guptkashi & check-in at hotel',
          'Evening free for leisure or local exploration',
        ],
      },
      {
        day: 3,
        title: 'GUPTKASHI - KEDARNATH',
        activities: [
          'Breakfast at the hotel',
          'Drive to Gaurikund',
          'Trek to Kedarnath (or optional pony services)',
          'Check-in at lodge & evening darshan at Kedarnath Temple',
          'Dinner and overnight stay at the lodge',
        ],
      },
      {
        day: 4,
        title: 'KEDARNATH - GUPTKASHI',
        activities: [
          'Morning aarti at Kedarnath Temple',
          'Breakfast at the lodge',
          'Trek back to Gaurikund',
          'Drive back to Guptkashi',
          'Dinner and overnight stay at hotel in Guptkashi',
        ],
      },
      {
        day: 5,
        title: 'GUPTKASHI - RISHIKESH',
        activities: [
          'Breakfast at the hotel',
          'Drive to Rishikesh',
          'Lunch at a local restaurant',
          'Visit iconic sites like Laxman Jhula and Ram Jhula',
          'Check-in at hotel & evening free for leisure',
        ],
      },
      {
        day: 6,
        title: 'RISHIKESH - HARIDWAR - DELHI',
        activities: [
          'Breakfast at the hotel',
          'Drive to Haridwar for last-minute shopping',
          'Lunch at a local restaurant',
          'Depart for Delhi',
          'Check-in at hotel & free program',
        ],
      },
      {
        day: 7,
        title: 'DEPARTURE FROM DELHI',
        activities: [
          'Breakfast at the hotel & check-out',
          'Transfer to the airport or railway station for departure',
          'Tour ends',
        ],
      },
    ],
    highlights: [
      'Experience the spiritual aura of Kedarnath Temple',
      'Trek through the majestic Himalayan landscapes',
      'Participate in the evening aarti at Har Ki Pauri',
      'Visit the beautiful town of Rishikesh',
      'Enjoy local cuisine and cultural experiences',
    ],
    relatedBlogs: [
      {
        title: 'Top 10 Instagram Spots in Bali',
        image: '/placeholder.svg?height=100&width=150',
        link: '#',
      },
      {
        title: 'Best Local Cuisines to Try in Nusa Penida',
        image: '/placeholder.svg?height=100&width=150',
        link: '#',
      },
    ],
    relatedTrips: [
      {
        name: 'Kailash Mansarovar 2024 via Lucknow',
        description:
          'Join the 2024 pilgrimage via Lucknow to Kailash Mansarovar.',
        days: 14,
        image:
          'https://images.pexels.com/photos/1242987/pexels-photo-1242987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        rating: 4.6,
        price: 1400,
      },
      {
        name: 'Char Dham Yatra by Road',
        description: 'A soulful journey to the four sacred Dhams by road.',
        days: 10,
        image:
          'https://images.pexels.com/photos/19271393/pexels-photo-19271393/free-photo-of-temple-in-kedarnath.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: 4.4,
        price: 1100,
      },
    ],
  };
  

export default function TourDetailPage() {
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="md:flex md:space-x-8">
        <div className="md:w-2/3">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{tourData.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {tourData.duration}
              </span>
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {tourData.location}
              </span>
              <span className="flex items-center">
                <Tag className="w-4 h-4 mr-1" />
                {tourData.tags.join(', ')}
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
              <Image src={tourData.images[0]} alt="Tour" width={600} height={400} className="rounded-lg object-cover w-full h-full" />
            </div>
            {tourData.images.slice(1).map((img, index) => (
              <Image key={index} src={img} alt={`Tour ${index + 2}`} width={200} height={200} className="hidden md:flex rounded-lg object-cover w-full h-full" />
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
              <p className="mt-4 text-gray-700">{tourData.description}</p>
            </TabsContent>
            <TabsContent value="itinerary">
              <div className="space-y-6">
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
              </div>
            </TabsContent>
            <TabsContent value="highlights">
              <ul className="space-y-2">
                {tourData.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
          <div className="md:hidden mb-8">
            <PriceCard tourData={tourData} />
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Other Related Trips</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {tourData.relatedTrips.map((trip, index) => (
                <TripCard
                  key={index}
                  title={trip.name}
                  description={trip.description}
                  days={trip.days}
                  image={trip.image}
                  price={trip.price}
                  rating={trip.rating}
                />
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Related Blogs</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {tourData.relatedBlogs.map((blog, index) => (
                <BlogCard />
              ))}
            </div>
          </div>
        </div>
        <div className="hidden md:block md:w-1/3">
          <PriceCard tourData={tourData} />
        </div>
      </div>
    </div>
  );
}

function PriceCard({ tourData }) {
  return (
    <div className="border rounded-lg p-6 sticky top-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-2xl font-bold">
            ${tourData.price} {tourData.currency}
          </p>
        </div>
        <div className="flex items-center">
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          <span className="ml-1 font-semibold">{tourData.rating}</span>
          <span className="ml-1 text-sm text-gray-500">
            ({tourData.reviews} reviews)
          </span>
        </div>
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
