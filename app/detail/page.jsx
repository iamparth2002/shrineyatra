'use client';

import Image from 'next/image';
import { Star, Clock, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { blogs, PACKAGES } from '@/utils/data';
import TripCard2 from '@/components/ui/home/TripCard2';
import BlogCard from '@/components/ui/home/BlogCard';

export default function PackageDetails() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[400px] md:h-[500px]">
        <Image
          src="https://images.pexels.com/photos/19010047/pexels-photo-19010047/free-photo-of-crowd-walking-on-street-with-tents-around-in-village-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Dubai Skyline"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Kailash Mansarovar Yatra Packages
            </h1>
            <p className="text-lg sm:text-xl mb-8">
              Experience the magic of Kailasha
            </p>
            {/* <Button className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-3">
              Explore Tours
            </Button> */}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Staff Handpicked */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mt-12">Kailash Mansarovar Yatra Packages </h2>
          <h2 className="text-gray-600 mt-2 mb-10">
            Embark on a spiritual journey to Kailash Mansarovar, experiencing
            breathtaking views and spiritual serenity with multiple trips by air
            or road.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {PACKAGES.packages[0].trips.map((trip, subIndex) => (
              <div key={subIndex} className="flex-[0_0_360px] mr-4">
                <TripCard2
                  title={trip.name}
                  description={trip.description}
                  days={trip.days}
                  images={trip.images}
                  price={trip.price}
                  rating={trip.rating}
                  reviews={trip.reviews}
                  location={trip.location}
                  realPrice={trip.realPrice}
                  tripId={trip.tripId}
                />
              </div>
            ))}
          </div>
        </section>
        <div className="mb-8 max-w-7xl">
          <h2 className="text-2xl font-bold mb-4">Related Blogs</h2>
          <div className="flex flex-col md:flex-row gap-4">
            {blogs.map((blog, index) => (
              <BlogCard blog={blog} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
