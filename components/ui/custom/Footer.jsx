import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {

    FacebookIcon,
    TwitterIcon,
    InstagramIcon,

  } from 'lucide-react';

const Footer = () => {
  return (
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
  );
};

export default Footer;
