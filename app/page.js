'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  MenuIcon,
  XIcon,
  SearchIcon,
  CalendarIcon,
  MapPinIcon,
  UserIcon,
  ChevronRightIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  Search,
  MessageSquare,
} from 'lucide-react';
import * as Icons from 'lucide-react';
import Image from 'next/image';
import { DATA } from '@/utils/data';
import TripCard from '@/components/ui/home/TripCard';
import Review from '@/components/ui/home/Review';
import BlogCard from '@/components/ui/home/BlogCard';
import Link from 'next/link';
import TripCard2 from '@/components/ui/home/TripCard2';
import PackageSlider from '@/components/ui/custom/PackageSlider';
import BlogSlider from '@/components/ui/custom/BlogSlider';
import Header from '@/components/ui/custom/Header';
import Footer from '@/components/ui/custom/Footer';
import axios from 'axios';

export default function TravelLandingPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const [packages, setPackages] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [packagesRes, blogsRes] = await Promise.all([
          axios.get(process.env.NEXT_PUBLIC_API_URL + '/packages/all'),
          axios.get(process.env.NEXT_PUBLIC_API_URL + '/blogs/all'),
        ]);
        setPackages(packagesRes.data);
        setBlogs(blogsRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">
        <Header />
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="container mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
              <motion.div
                className="lg:w-1/2 space-y-6 lg:pt-8"
                variants={containerVariants}
              >
                <motion.h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  variants={textVariants}
                >
                  You can give us a tour to{' '}
                  <span className="text-primary">Remember</span> forever!
                </motion.h2>
                <motion.p
                  className="text-gray-600 max-w-md"
                  variants={textVariants}
                >
                  We guarantee you that you will get many benefits when you tour
                  with our agency. we guarantee you that you will get many
                  benefits when you tour with our agency
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  variants={textVariants}
                >
                  <Link
                    href="#plan"
                    className="inline-flex justify-center items-center px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-700 transition-colors"
                  >
                    Plan a trip
                  </Link>
                  <Link
                    href="#search"
                    className="inline-flex justify-center items-center px-8 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary-50 transition-colors"
                  >
                    Search a trip
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                className="lg:w-1/2 grid grid-cols-6 grid-rows-6 gap-4 h-[500px]"
                variants={containerVariants}
              >
                <motion.div
                  className="col-span-3 row-span-3"
                  variants={imageVariants}
                >
                  <Image
                    src="https://images.pexels.com/photos/16542959/pexels-photo-16542959/free-photo-of-boats-are-docked-in-the-water-near-a-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Beach umbrellas"
                    width={300}
                    height={300}
                    className="rounded-lg object-cover w-full h-full shadow-2xl"
                  />
                </motion.div>
                <motion.div
                  className="mt-20 col-span-3 row-span-5 col-start-4 row-start-1"
                  variants={imageVariants}
                >
                  <Image
                    src="https://images.pexels.com/photos/13251146/pexels-photo-13251146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Venice canal"
                    width={300}
                    height={400}
                    className="rounded-lg object-cover w-full h-full shadow-2xl"
                  />
                </motion.div>
                <motion.div
                  className="col-span-3 row-span-3 col-start-1 row-start-4"
                  variants={imageVariants}
                >
                  <Image
                    src="https://images.pexels.com/photos/19296851/pexels-photo-19296851/free-photo-of-an-old-man-with-a-long-beard-and-orange-turban.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Sailboat"
                    width={300}
                    height={300}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold">10M+</p>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div>
                <p className="text-4xl font-bold">09+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold">12K</p>
                <p className="text-gray-600">Destinations</p>
              </div>
              <div>
                <p className="text-4xl font-bold">5.0</p>
                <p className="text-gray-600">Overall Rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* Indonesian Tourism Section */}
        {/* <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Glimpses of Our Tours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="col-span-2 relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Bromo Tengger Tour"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-xl font-semibold text-white">
                    Nepal Tour
                  </h3>
                </div>
              </div>
              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/4185836/pexels-photo-4185836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Bali Beach Tourism"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-xl font-semibold text-white">
                    Adi Kailash Tour
                  </h3>
                </div>
              </div>
              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/2410391/pexels-photo-2410391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Borobudur Temple Tour"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-xl font-semibold text-white">
                    Chardham Temple Tour
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* One Click Section */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid md:grid-cols-2 gap-8 items-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="relative h-[400px] rounded-lg overflow-hidden"
                variants={itemVariants}
              >
                <Image
                  src="https://images.pexels.com/photos/57901/pexels-photo-57901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="One click for you"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-center justify-center">
                  <motion.p
                    className="text-3xl text-center font-bold text-white px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    Embark on your spiritual journey easily with us.
                  </motion.p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <motion.p
                  className="text-lg max-md:text-center font-bold mb-2 text-primary/80"
                  variants={itemVariants}
                >
                  How it works?
                </motion.p>
                <motion.h2
                  className="text-3xl font-bold mb-6 max-md:text-center"
                  variants={itemVariants}
                >
                  One click for you
                </motion.h2>
                <motion.ul className="space-y-4" variants={containerVariants}>
                  {DATA.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex gap-4 items-start hover:shadow-lg p-4 rounded-xl hover:bg-white hover:cursor-pointer transition-all duration-300"
                      variants={itemVariants}
                      onHoverStart={() => setHoveredIndex(index)}
                      onHoverEnd={() => setHoveredIndex(null)}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className={`p-4 rounded-full flex items-center justify-center ${
                          index === 0
                            ? 'bg-blue-500'
                            : index === 1
                            ? 'bg-red-500'
                            : 'bg-green-500'
                        }`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <feature.icon
                          size={15}
                          className="w-6 h-6"
                          color="white"
                        />
                      </motion.div>
                      <div>
                        <motion.h3
                          className="font-bold"
                          animate={{
                            scale: hoveredIndex === index ? 1 : 1,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {feature.heading}
                        </motion.h3>
                        <motion.p
                          className="text-gray-500 text-sm mt-2"
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: hoveredIndex === index ? 1 : 0.7,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {feature.subheading}
                        </motion.p>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {packages?.map((packageItem, index) => (
              <div key={index}>
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-3xl font-bold mt-12">
                      {packageItem.title}
                    </h2>
                    <h2 className="text-gray-600 mt-2 mb-10">
                      {packageItem.subHeading}
                    </h2>
                  </div>
                  <Link href={`/detail/${packageItem._id}`}>
                  
                    <Button className="max-md:hidden" onClick={() => {}}>
                      View All
                      <Icons.ArrowRight size={20} className="ml-2" />
                    </Button>
                  </Link>
                </div>

                <div>
                  <PackageSlider trips={packageItem.trips} />
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
            <h2 className="text-3xl font-bold mb-8">Our Blogs</h2>
            <BlogSlider blogs={blogs} />
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
