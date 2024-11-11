'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import TripCard2 from '@/components/ui/home/TripCard2';
import BlogCard from '@/components/ui/home/BlogCard';
import Header from '@/components/ui/custom/Header';
import Footer from '@/components/ui/custom/Footer';
import BlogSlider from '@/components/ui/custom/BlogSlider';
import AttractionSlider from '@/components/ui/custom/AttractionSlider';
import { useParams } from 'next/navigation';
import BackButton from '@/components/ui/custom/BackButton';
import Component from '../_components/MoreAbout';

export default function PackageDetails() {
  const params = useParams();
  const [data, setData] = useState(null); // This will hold packages data
  const [blogs, setBlogs] = useState([]); // Holds blogs data
  const [attractions, setAttractions] = useState([]); // Holds attractions data
  const [loading, setLoading] = useState(true); // Main loader
  const [loadingBlogs, setLoadingBlogs] = useState(true); // Blogs loader
  const [loadingAttractions, setLoadingAttractions] = useState(true); // Attractions loader
  const [error, setError] = useState(null);
  const id = params?.id;

  // Fetching package data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/packages/${id}`
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching package data:', error);
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    const fetchBlogs = async () => {
      try {
        setLoadingBlogs(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/blogs/package/${id}`
        );
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
          `${process.env.NEXT_PUBLIC_API_URL}/attractions/package/${id}`
        );
        setAttractions(response.data);
      } catch (error) {
        console.error('Error fetching attractions:', error);
      } finally {
        setLoadingAttractions(false);
      }
    };

    fetchData();
    fetchBlogs();
    fetchAttractions();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="w-16 h-16 text-primary animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  // Destructuring the fetched data
  const { packages, title, subHeading, description, trips, image } = data;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[400px] md:h-[500px]">
        <Image
          src={image}
          alt="Dubai Skyline"
          layout="fill"
          objectFit="cover"
          />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {title}
            </h1>
            
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Packages Section */}
        <div className='my-4'>

          <BackButton/>
        </div>
        <section className="mb-12">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-gray-600 mt-2 mb-10 text-justify">{description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.map((trip, subIndex) => (
              <div key={subIndex} className="flex-[0_0_360px] mr-4">
                <TripCard2
                  title={trip.name}
                  description={trip.description}
                  days={trip.days}
                  image={`${trip.image}`}
                  price={trip.price}
                  rating={trip.rating}
                  reviews={trip.reviews}
                  location={trip.location}
                  realPrice={trip.realPrice}
                  tripId={trip._id}
                  urlName={trip.urlName}
                  className="w-[380px]"
                />
              </div>
            ))}
          </div>
        </section>

        <Component/>

        {/* Blogs Section */}
        {!loadingBlogs && blogs.length > 0 && (
          <div className="mb-8 max-w-7xl">
            <h3 className="text-2xl font-bold mb-4">Other Related Blogs</h3>
            <BlogSlider blogs={blogs} />
          </div>
        )}
        {loadingBlogs && (
          <div className="flex justify-center items-center h-24">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
        )}

        {/* Attractions Section */}
        {!loadingAttractions && attractions.length > 0 && (
          <div className="mb-8 max-w-7xl">
            <h3 className="text-2xl font-bold mb-4">Other Related Attractions</h3>
            <AttractionSlider attractions={attractions} />
          </div>
        )}
        {loadingAttractions && (
          <div className="flex justify-center items-center h-24">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
