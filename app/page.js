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
import { DATA, Numbers } from '@/utils/data';
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
import Hero from '@/components/ui/home/Hero';

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
  const bannerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
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
                <motion.div
                  className="text-3xl font-bold mb-6 max-md:text-center"
                  variants={itemVariants}
                >
                  One click for you
                </motion.div>
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
                        <motion.div
                          className="font-bold"
                          animate={{
                            scale: hoveredIndex === index ? 1 : 1,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {feature.heading}
                        </motion.div>
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

        <section className="" id="packages">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {packages?.map((packageItem, index) => (
              <div key={index}>
                <div>
                  <div className="flex items-center justify-between mt-12">
                    <h2 className="text-3xl font-bold">{packageItem.title}</h2>
                    <Link href={`/detail/${packageItem.urlName}`}>
                      <Button className="max-md:hidden" onClick={() => {}}>
                        View All
                        <Icons.ArrowRight size={20} className="ml-2" />
                      </Button>
                    </Link>
                  </div>

                  <p className="text-gray-600 mt-2 mb-10">
                    {packageItem.subHeading}
                  </p>
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
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold">Our Blogs</h3>
              <Link href={`/blog`}>
                <Button className="max-md:hidden">
                  View All
                  <Icons.ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
            </div>

            <BlogSlider blogs={blogs} />
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
