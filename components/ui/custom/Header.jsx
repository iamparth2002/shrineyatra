'use client';
import React, { useState, useEffect } from 'react';
import {
  MenuIcon,
  ChevronDown,
  Home,
  Mail,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import axiosInstance from '@/utils/axios';
import { useRouter } from 'next/navigation';
import Logo from './Logo';
import Link from 'next/link';
import { handleEmailClick, handleSupportClick, handleWhatsAppClick } from '@/lib/utils';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [packages, setPackages] = useState([]);
  const router = useRouter();

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

  const handlePackageClick = (pkgId) => {
    router.push(`/detail/${pkgId}`);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6  py-4 flex items-center justify-between">
        {/* Left-aligned logo */}
        <span className="text-2xl font-bold lg:hidden">
          <Logo />
        </span>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden ml-auto"
          onClick={() => setSidebarOpen(true)}
        >
          <MenuIcon className="h-6 w-6" />
        </Button>

        {/* Full logo on larger screens */}
        <span className="hidden lg:inline text-2xl font-bold">
          <Logo />
        </span>

        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="/"
            className="bg-primary p-2 rounded-full hover:cursor-pointer hover:bg-primary-dark hover:scale-105 transition-all duration-200 ease-in-out"
          >
            <Home color="white" />
          </a>
          <div className="bg-primary p-2 rounded-full hover:cursor-pointer hover:bg-primary-dark hover:scale-105 transition-all duration-200 ease-in-out" 
          onClick={handleEmailClick}>
            <Mail color="white" />
          </div>
          <div className="bg-primary p-2 rounded-full hover:cursor-pointer hover:bg-primary-dark hover:scale-105 transition-all duration-200 ease-in-out"
          onClick={handleSupportClick}>
            <Phone color="white" />
          </div>
          <div className="bg-primary p-2 rounded-full hover:cursor-pointer hover:bg-primary-dark hover:scale-105 transition-all duration-200 ease-in-out"
          onClick={handleWhatsAppClick}>
            <MessageCircle color="white" />
          </div>
        </div>
      </div>
      <nav className="hidden lg:block bg-primary text-white">
        <div className="container max-w-7xl mx-auto text-white flex justify-end py-2 px-4">
          <div className="flex gap-6">
            <div className="flex space-x-2">
              {packages.map((pkg, index) => (
                <div
                  key={pkg._id}
                  className="relative group cursor-pointer px-2"
                >
                  <div
                    onClick={() => handlePackageClick(pkg._id)}
                    className="flex items-center text-white hover:text-gray-200"
                  >
                    <span>{pkg.navName}</span>
                    <ChevronDown className="ml-1 h-4 w-4 transform transition-transform duration-200 group-hover:rotate-180" />
                  </div>

                  {/* Dropdown for trips */}
                  <div
                    className={`absolute z-50 w-[350px] p-2 bg-white shadow-lg rounded-lg opacity-0 pointer-events-none transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100 ${
                      index === packages.length - 1 ? 'right-0' : 'left-0'
                    }`}
                  >
                    {pkg.trips.map((trip, tripIndex) => (
                      <a
                        key={trip._id}
                        href={`/package/${trip._id}`}
                        className={`block px-6 py-2 text-gray-700 hover:bg-gray-100 hover:text-black rounded-md font-medium ${
                          tripIndex < pkg.trips.length - 1
                            ? 'border-b border-gray-200'
                            : ''
                        }`}
                      >
                        {trip.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* "Packages" Link */}
            {/* "Packages" Link */}
            <div className="relative group">
              <div className="text-white flex items-center hover:cursor-pointer">
                Packages
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </div>

              {/* Dropdown Content */}
              <div className="absolute right-0 top-full  z-50 w-64 bg-white rounded-lg shadow-lg opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto p-2">
                {packages.map((pkg) => (
                  <div
                    key={pkg._id}
                    onClick={() => handlePackageClick(pkg._id)}
                    className="py-2 px-3 cursor-pointer text-gray-700 hover:text-black hover:bg-gray-100 rounded-md"
                  >
                    {pkg.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <aside
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } flex lg:hidden`}
        onClick={() => setSidebarOpen(false)}
      >
        <div
          className="w-64 bg-white p-4 transform transition-transform duration-300"
          onClick={(e) => e.stopPropagation()} // Prevents closing sidebar when clicking inside
        >
          <div className="flex items-center justify-between mb-6">
            <span className="text-2xl font-bold">ShrineYatra</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(false)}
            >
              ✕
            </Button>
          </div>
          <nav>
            <a
              href="/"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
            >
              Home
            </a>

            <div className="mt-4">
              <div className="mb-2 py-2 px-4 font-semibold text-gray-900 cursor-pointer hover:bg-gray-200 rounded-md">
                Packages
              </div>
              {packages.map((pkg, index) => (
                <div
                  key={pkg._id}
                  onClick={() => handlePackageClick(pkg._id)}
                  className={`block px-6 py-1 text-gray-600 hover:bg-gray-100 rounded-md ${
                    index < packages.length - 1
                      ? 'border-b border-gray-200'
                      : ' '
                  }`}
                >
                  {pkg.title}
                </div>
              ))}
            </div>
            <div className="mt-4">
              {packages.map((pkg) => (
                <div key={pkg._id} className="mb-2">
                  <div
                    onClick={() => handlePackageClick(pkg._id)}
                    className="block py-2 px-4 font-semibold text-gray-900 cursor-pointer hover:bg-gray-200 rounded-md"
                  >
                    {pkg.title}
                  </div>
                  {pkg.trips.map((trip, index) => (
                    <a
                      key={trip._id}
                      href={`/package/${trip._id}`}
                      className={`block px-6 py-1 text-gray-600 hover:bg-gray-100 rounded-md ${
                        index < pkg.trips.length - 1
                          ? 'border-b border-gray-200'
                          : ''
                      }`}
                    >
                      {trip.name}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </aside>
    </header>
  );
};

export default Header;
