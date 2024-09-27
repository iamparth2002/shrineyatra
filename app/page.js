'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from "framer-motion"
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
import { DATA, PACKAGES } from '@/utils/data';
import TripCard from '@/components/ui/home/TripCard';
import Review from '@/components/ui/home/Review';
import BlogCard from '@/components/ui/home/BlogCard';
import Link from 'next/link';

export default function TravelLandingPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null)

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
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar for mobile */}
      <aside
        className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex items-center justify-between p-4">
          <span className="text-2xl font-bold">ShrineYatra</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(false)}
          >
            <XIcon className="h-6 w-6" />
          </Button>
        </div>
        <nav className="mt-8">
          <a
            href="#"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
          >
            Home
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
          >
            Destinations
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
          >
            About
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
          >
            Contact
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden mr-2"
                onClick={() => setSidebarOpen(true)}
              >
                <MenuIcon className="h-6 w-6" />
              </Button>
              <span className="text-2xl font-bold">ShrineYatra</span>
            </div>
            {/* Navigation for large screens */}
            <nav className="hidden lg:flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Destinations
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
              <Button size="sm">Sign Up</Button>
            </div>
          </div>
        </header>

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
        <section className="py-12">
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
                        ? "bg-blue-500"
                        : index === 1
                        ? "bg-red-500"
                        : "bg-green-500"
                    }`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon size={15} className="w-6 h-6" color="white" />
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
                      animate={{ opacity: hoveredIndex === index ? 1 : 0.7 }}
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

        {/* Our Tourist Destination Section */}
        <section className="">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> */}
            {PACKAGES.packages.map((packageItem, index) => (
              <div key={index}>
                <h2 className="text-3xl font-bold mt-12">
                  {packageItem.title}
                </h2>
                <h2 className="text-gray-600 mt-2 mb-10">
                  {packageItem.subHeading}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {packageItem.options.map((option, subIndex) => (
                    <TripCard
                      key={subIndex}
                      title={option.name}
                      description={option.description}
                      days={option.days}
                      image={option.image}
                      price={option.price}
                      rating={option.rating}
                    />
                  ))}
                </div>
              </div>
            ))}
            {/* </div> */}
            <div className="text-center mt-8">
              <Button variant="outline">View more</Button>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-12 bg-gray-100">
          {/* <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/80 backdrop-blur-md rounded-lg p-6 shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="User Avatar"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">Donald Sullivan</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "This travel website is very informative and easy to use. I like
                how they present various destination options and travel packages
                with clear details. Offering customizable itineraries is also a
                great feature. Additionally, the ability to compare prices and
                reviews from other users is very helpful in decision making."
              </p>
            </div>
          </div> */}
          <Review />
        </section>

        {/* Travel Memories Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Our travel memories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <BlogCard />
              <BlogCard />
            </div>
            <div className="text-center mt-8">
              <Button variant="outline">Read more</Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      News & Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      Account
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      Support Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      Feedback
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Tips</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      How to Book
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      How to Pay
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      How to Check In
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                <p className="mb-4">
                  Subscribe to our newsletter for the latest updates and offers.
                </p>
                <form className="flex">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="rounded-r-none"
                  />
                  <Button type="submit" className="rounded-l-none">
                    Subscribe
                  </Button>
                </form>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-white hover:text-gray-300">
                    <FacebookIcon className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-white hover:text-gray-300">
                    <TwitterIcon className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-white hover:text-gray-300">
                    <InstagramIcon className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p>&copy; 2024 Indotravi. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
