import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

import { Facebook, Instagram, Youtube, Twitter, Linkedin, Pinterest } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer2() {
  return (
    <footer className="bg-[#1e1b3c] text-white">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Form Section */}
          <div className="bg-yellow-400 p-6 rounded-lg">
            <h2 className="text-black text-xl font-bold mb-4">Need More Information About Yatra 2024</h2>
            <form className="space-y-4">
              <Input type="text" placeholder="Name *" className="bg-white" />
              <Input type="email" placeholder="E-mail *" className="bg-white" />
              
              
              <Textarea placeholder="Comment" className="bg-white" />
              <Button className="bg-red-600 hover:bg-red-700">Submit</Button>
            </form>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold mb-2">Quick Links :</h3>
              <div className="text-sm space-y-1">
                <p>
                  <Link href="/" className="hover:underline">Home</Link> / 
                  <Link href="/about-us" className="hover:underline"> About us</Link> / 
                  <Link href="/contact-us" className="hover:underline"> Contact Us</Link> / 
                  <Link href="/b2b" className="hover:underline"> B2B</Link> / 
                  <Link href="/career" className="hover:underline"> Career</Link> / 
                  <Link href="/faqs" className="hover:underline"> FAQs</Link>
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-2">Tour Resources :</h3>
              <div className="text-sm space-y-1">
                <p>
                  <Link href="/videos" className="hover:underline">Videos</Link> / 
                  <Link href="/gallery" className="hover:underline"> Gallery</Link> / 
                  <Link href="/reviews" className="hover:underline"> Traveller Reviews</Link> / 
                  <Link href="/news" className="hover:underline"> News</Link>
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-2">Trip To Temples Packages :</h3>
              <div className="text-sm space-y-1">
                <p>
                  <Link href="/packages/helicopter" className="hover:underline">Kailash Yatra By Helicopter from Lucknow (11 Days)</Link> / 
                  <Link href="/packages/overland" className="hover:underline"> Overland Kailash Mansarovar Yatra (14 Days)</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Connect with us Section */}
        <div className="mt-8">
          <h3 className="font-bold mb-4">Connect with us :</h3>
          <div className="flex gap-4">
            <Link href="#" className="hover:opacity-80">
              <Facebook className="w-8 h-8" />
            </Link>
            <Link href="#" className="hover:opacity-80">
              <Instagram className="w-8 h-8" />
            </Link>
            <Link href="#" className="hover:opacity-80">
              <Youtube className="w-8 h-8" />
            </Link>
            <Link href="#" className="hover:opacity-80">
              <Twitter className="w-8 h-8" />
            </Link>
            <Link href="#" className="hover:opacity-80">
              <Linkedin className="w-8 h-8" />
            </Link>
            <Link href="#" className="hover:opacity-80">
              <Pinterest className="w-8 h-8" />
            </Link>
          </div>
        </div>

        {/* Office Address Section */}
        <div className="mt-8">
          <h3 className="font-bold mb-2">Office Address :</h3>
          <address className="not-italic">
            <p>Trip To Temples, 201, JOP Plaza</p>
            <p>Sector 18, Noida, 201301</p>
            <p>Uttar Pradesh, India</p>
            <p>Call : +91-8510007751</p>
            <p>E-mail : info@triptotemples.com</p>
          </address>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2024 Trip To Temples. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
            <Link href="/contact" className="hover:underline">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}