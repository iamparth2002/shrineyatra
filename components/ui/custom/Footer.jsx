'use client';
import React, { useEffect, useState } from 'react';
import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import axiosInstance from '@/utils/axios';
import { footerDetails } from '@/utils/data';
import Logo from './Logo';

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
        console.error("Error fetching packages:", error);
      }
    };

    fetchPackages();
  }, []);

  return (
    <footer className="bg-primary/80 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info and Social Media */}
          <div className="bg-white text-gray-500 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">
              <Logo/>
            </h2>
            <p>
              {footerDetails?.subheading}
            </p>
            
            <div className="flex flex-col  mt-4">
              <div>Connect with us :</div>
              <div className="flex gap-4 mt-2">
                <Link href="#" className="bg-white p-2 rounded-full">
                  <Twitter className="h-5 w-5 text-orange-600" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="bg-white p-2 rounded-full">
                  <Instagram className="h-5 w-5 text-orange-600" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="bg-white p-2 rounded-full">
                  <Linkedin className="h-5 w-5 text-orange-600" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="bg-white p-2 rounded-full">
                  <Youtube className="h-5 w-5 text-orange-600" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>
            <ul className="space-y-2 mt-4">
              <li>Email - support@shrineyatra.com</li>
              <li>Contact - +91 945 658 3256</li>
              <li>Office Address : Trip To Temples, 201, JOP Plaza Sector 18, Noida,
              201301 Uttar Pradesh, India </li>
            </ul>
          </div>

          {/* Quick Links with Packages and Trips */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="grid gap-4">
              {packages.map((pkg) => (
                <div key={pkg._id}>
                  <Link
                    href={`/detail/${pkg._id}`}
                    className="hover:underline font-semibold block mb-1"
                  >
                    {pkg.title}
                  </Link>
                  <div className="flex flex-wrap gap-x-2 whitespace-nowrap">
                    {pkg.trips.map((trip, index) => (
                      <span key={trip._id} className="text-sm text-gray-100">
                        <Link
                          href={`/package/${trip._id}`}
                          className="hover:underline"
                        >
                          {trip.name}
                        </Link>
                        {index < pkg.trips.length - 1 && <span> /</span>}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="flex justify-between border-t border-white  mt-8 pt-8">
          <p>&copy; {footerDetails?.year} All Rights Reserved ShrineYatra.</p>
          <p>Created By @Parth Gandhi</p>
        </div>
      </div>
    </footer>
  );
}
