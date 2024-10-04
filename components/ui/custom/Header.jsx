// Header.jsx
'use client'
import React, { useState } from 'react';
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
  import { Button } from '@/components/ui/button';// Import your custom Button component

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden mr-2"
          onClick={() => setSidebarOpen(true)}
        >
          <MenuIcon className="h-6 w-6" />
        </Button>

        {/* Logo */}
        <span className="text-2xl font-bold">ShrineYatra</span>

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

        {/* Sign In/Sign Up Buttons */}
        <div className="flex items-center space-x-4">
          {/* <Button variant="ghost" size="sm">
            Sign In
          </Button> */}
          <Button size="sm">Contact Us</Button>
        </div>
      </div>

      {/* Sidebar for mobile */}
      {sidebarOpen && (
        <aside className="fixed inset-0 bg-black bg-opacity-50 z-40 flex lg:hidden">
          <div className="w-64 bg-white p-4">
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
          </div>
        </aside>
      )}
    </header>
  );
};

export default Header;
