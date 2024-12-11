// 'use client'; // Remove this line because we are turning this into a server component

import React from 'react';
import { Button } from '@/components/ui/button';
import * as Icons from 'lucide-react';
import Image from 'next/image';
import { DATA, Numbers } from '@/utils/data';
import Review from '@/components/ui/home/Review';
import Link from 'next/link';
import PackageSlider from '@/components/ui/custom/PackageSlider';
import BlogSlider from '@/components/ui/custom/BlogSlider';
import Header from '@/components/ui/custom/Header';
import Footer from '@/components/ui/custom/Footer';
import axios from 'axios';
import Hero from '@/components/ui/home/Hero';

// Fetch the packages and blogs data on the server
const fetchData = async () => {
  try {
    const [packagesRes, blogsRes] = await Promise.all([
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/packages/all`),
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blogs/all`)
    ]);
    return {
      packages: packagesRes.data,
      blogs: blogsRes.data
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { packages: [], blogs: [] };
  }
};

const HomePage = async () => {
  // Fetch data directly on the server
  const { packages, blogs } = await fetchData();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">
        <Header />

        <Hero />
        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold">{Numbers.customers}</p>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div>
                <p className="text-4xl font-bold">{Numbers.experience}</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold">{Numbers.destinations}</p>
                <p className="text-gray-600">Destinations</p>
              </div>
              <div>
                <p className="text-4xl font-bold">{Numbers.rating}</p>
                <p className="text-gray-600">Overall Rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* One Click Section */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/57901/pexels-photo-57901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="One click for you"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-center justify-center">
                  <p className="text-3xl text-center font-bold text-white px-4">
                    Embark on your spiritual journey easily with us.
                  </p>
                </div>
              </div>
              <div>
                <p className="text-lg max-md:text-center font-bold mb-2 text-primary/80">
                  How it works?
                </p>
                <div className="text-3xl font-bold mb-6 max-md:text-center">
                  One click for you
                </div>
                <ul className="space-y-4">
                  {DATA.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex gap-4 items-start hover:shadow-lg p-4 rounded-xl hover:bg-white hover:cursor-pointer transition-all duration-300"
                    >
                      <div
                        className={`p-4 rounded-full flex items-center justify-center ${index === 0
                          ? 'bg-blue-500'
                          : index === 1
                            ? 'bg-red-500'
                            : 'bg-green-500'
                          }`}
                      >
                        <feature.icon size={15} className="w-6 h-6" color="white" />
                      </div>
                      <div>
                        <div className="font-bold">{feature.heading}</div>
                        <p className="text-gray-500 text-sm mt-2">
                          {feature.subheading}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="" id="packages">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {packages?.map((packageItem, index) => (
              <div key={index}>
                <div>
                  <div className="flex items-center justify-between mt-12">
                    <h2 className="text-3xl font-bold">{packageItem.title}</h2>
                    <Link href={`/package/${packageItem.urlName}`}>
                      <div className="max-md:hidden flex items-center bg-primary p-2 text-white rounded-lg">
                        View All
                        <Icons.ArrowRight size={20} className="ml-2" />
                      </div>
                    </Link>
                  </div>

                  <p className="text-gray-600 mt-2 mb-10">
                    {packageItem.subHeading}
                  </p>
                </div>

                <div>
                  <PackageSlider trips={packageItem.trips} packageUrlName={packageItem?.urlName} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="pt-8 bg-gray-100">
          <Review />
        </section>

        {/* Travel Memories Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold">Our Blogs</h3>
              <Link href={`/blog`}>
                <div className="max-md:hidden flex items-center bg-primary p-2 text-white rounded-lg">
                  View All
                  <Icons.ArrowRight size={20} className="ml-2" />
                </div>
              </Link>
            </div>

            <BlogSlider blogs={blogs} />
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
