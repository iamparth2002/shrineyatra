'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axiosInstance from '@/utils/axios';
import { details, footerDetails } from '@/utils/data';
import Logo from './Logo';
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  Pinterest,
} from 'lucide-react';

import UserForm from './UserForm';
import Obfuscate from 'react-obfuscate';

export default function Footer() {
  const [packages, setPackages] = useState([
    {
      _id: '67122efe0d0ae1217eeae8dd',
      title: 'Adi Kailash Yatra Packages',
      trips: [
        {
          _id: '6712d803663dbf24584b3aba',
          name: 'Adi Kailash And Om Parvat Aerial Darshan 2024',
        },
        {
          _id: '6712d803663dbf24584b3abb',
          name: 'Adi Kailash Trekking Adventure',
        },
        {
          _id: '6712d803663dbf24584b3abc',
          name: 'Adi Kailash Spiritual Journey 2024',
        },
        {
          _id: '6712d803663dbf24584b3abd',
          name: 'Adi Kailash Helicopter Tour',
        },
      ],
    },
    {
      _id: '671b54352dad3b65a682494f',
      title: 'Chardham Yatra Packages',
      trips: [
        {
          _id: '671b56622dad3b65a6824951',
          name: 'Super Deluxe Char Dham Yatra 2024',
        },
        {
          _id: '671b56622dad3b65a6824952',
          name: 'Luxury Char Dham Package',
        },
        {
          _id: '671b56622dad3b65a6824953',
          name: 'Economy Char Dham Pilgrimage',
        },
        {
          _id: '671b56622dad3b65a6824954',
          name: 'Char Dham Budget Tour 2024',
        },
      ],
    },
    {
      _id: '671c65432dfe3c75a6824960',
      title: 'Kedarnath Yatra Packages',
      trips: [
        {
          _id: '671c67632dfe3c75a6824961',
          name: 'Kedarnath Helicopter Tour 2024',
        },
        {
          _id: '671c67632dfe3c75a6824962',
          name: 'Kedarnath Trekking Expedition',
        },
        {
          _id: '671c67632dfe3c75a6824963',
          name: 'Kedarnath Pilgrimage by Road',
        },
        {
          _id: '671c67632dfe3c75a6824964',
          name: 'Kedarnath Yatra VIP Darshan',
        },
      ],
    },
    {
      _id: '671d74342efe7a35a6824971',
      title: 'Badrinath Yatra Packages',
      trips: [
        {
          _id: '671d76542efe7a35a6824972',
          name: 'Badrinath Helicopter Yatra 2024',
        },
        {
          _id: '671d76542efe7a35a6824973',
          name: 'Badrinath by Luxury Bus',
        },
        {
          _id: '671d76542efe7a35a6824974',
          name: 'Badrinath Trek and Temple Tour',
        },
        {
          _id: '671d76542efe7a35a6824975',
          name: 'VIP Badrinath Yatra',
        },
      ],
    },
    {
      _id: '671e85442dca8b55a6824982',
      title: 'Gangotri Yatra Packages',
      trips: [
        {
          _id: '671e87642dca8b55a6824983',
          name: 'Gangotri Temple Darshan 2024',
        },
        {
          _id: '671e87642dca8b55a6824984',
          name: 'Gangotri and Yamunotri Twin Yatra',
        },
        {
          _id: '671e87642dca8b55a6824985',
          name: 'Gangotri Spiritual Tour Package',
        },
        {
          _id: '671e87642dca8b55a6824986',
          name: 'Gangotri River Exploration',
        },
      ],
    },
  ]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axiosInstance.get('/packages');
        setPackages(response.data);
      } catch (error) {
        console.error('Error fetching packages:', error);
      }
    };

    fetchPackages();
  }, []);

  return (
    <footer className="bg-[#1e1b3c] text-white">
      <div className="container max-w-7xl p-4 lg:p-8 mx-auto">
        <div className="flex flex-wrap gap-6 mt-4">
          {/* Form Section */}
          <div className="rounded-lg">
            <UserForm />
            <div className="mt-8">
              <h3 className="font-bold mb-4">Connect with us :</h3>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="hover:opacity-80 bg-primary p-2 rounded-full"
                >
                  <Facebook className="w-8 h-8" />
                </Link>
                <Link
                  href="#"
                  className="hover:opacity-80 p-2 rounded-full bg-primary"
                >
                  <Instagram className="w-8 h-8" />
                </Link>
                <Link
                  href="#"
                  className="hover:opacity-80 p-2 rounded-full bg-primary"
                >
                  <Youtube className="w-8 h-8" />
                </Link>
                <Link
                  href="#"
                  className="hover:opacity-80 p-2 rounded-full bg-primary"
                >
                  <Twitter className="w-8 h-8" />
                </Link>
                <Link
                  href="#"
                  className="hover:opacity-80 p-2 rounded-full bg-primary"
                >
                  <Linkedin className="w-8 h-8" />
                </Link>
              </div>
            </div>

            {/* Office Address Section */}
            <div className="mt-8 flex flex-col gap-2">
              <h3 className="font-bold mb-2">Office Address :</h3>
              <address className="not-italic flex flex-col gap-2">
                <p>The Kailash Yatra, R-112</p>
                <p>East Vinod Nagar</p>
                <p>New Delhi-110091, India</p>
                <p>
                  Call :{' '}
                  <a href={`tel:${details.contact}`}>{details.contact}</a>
                </p>
                <p>
                  E-mail : <Obfuscate email={details.email} />
                </p>
              </address>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4 flex-1">
            <div>
              <h3 className="font-bold mb-2">Quick Links :</h3>
              <div className="text-sm space-y-1">
                <p>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>{' '}
                  /
                  <Link href="/about-us" className="hover:underline">
                    {' '}
                    About us
                  </Link>{' '}
                  /
                  <Link href="/contact-us" className="hover:underline">
                    {' '}
                    Contact Us
                  </Link>{' '}
                  /
                  <Link href="/privacy-policy" className="hover:underline">
                    {' '}
                    Privacy Policy
                  </Link>{' '}
                  /
                  <Link href="/terms-and-conditions" className="hover:underline">
                    {' '}
                    Terms & Conditions
                  </Link>{' '}
                  /
          
                  <Link href="/blog" className="hover:underline">
                    {' '}
                    Blogs
                  </Link>
                </p>
              </div>
            </div>

            <div>
              {packages.map((item, index) => (
                <div key={index} className="mb-4 w-full">
                  <h3 className="font-bold mb-2">{item.title} :</h3>
                  <div className="text-sm w-full flex flex-wrap gap-1">
                    {item.trips.map((trip, tripIndex) => (
                      <p
                        key={tripIndex}
                        className="whitespace-nowrap leading-7"
                      >
                        <Link href={`/package/${trip.urlName}`}>{trip.name} /</Link>
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Connect with us Section */}

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {footerDetails.year} The Kailash Yatra. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href='/privacy-policy'>Privacy Policy</a>
            <a href='/terms-and-conditions'>Terms & Conditions</a>
            <a href='/contact-us'>Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
