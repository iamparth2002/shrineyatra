import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/ui/custom/Header';
import Footer from '@/components/ui/custom/Footer';
import UserForm from '@/components/ui/custom/UserForm';
import { details } from '@/utils/data';

export default function ContactUs() {
  const offices = [
    {
      name: 'Delhi (Head Office)',
      address: 'R-112, East Vinod Nagar, New Delhi-110091, India.',
      tel: '+91 9971-133-205',
      whatsapp: '+91 9971-133-205',
    },
    {
      name: 'Mumbai (Branch Office)',
      address:
        'Shrine Yatra-14, Ashirwad, Poonam Sagar, Santi Nagar, Mira Road East, Thane, Mumbai-401107, India.',
      tel: '+91 9971-133-206',
      whatsapp: '+91 9971-133-206',
    },
    {
      name: 'Rishikesh (Branch Office)',
      address:
        'Shrine Yatra-34, Bangali Mandir Marg, Rishikesh, Uttrakhand-249201, India.',
      tel: '+91 9958647371',
      whatsapp: '+91 9958647371',
    },
  ];

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
            <div className="space-y-8">
              {offices.map((office, index) => (
                <Card key={index} className="bg-white shadow-lg w-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">
                      {office.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
                        <p>{office.address}</p>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 mr-2 text-primary" />
                        <a
                          href={`tel:${office.tel}`}
                          className="hover:underline"
                        >
                          {office.tel}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-5 h-5 mr-2 text-primary"
                        >
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                        <a
                          href={`https://wa.me/${office.whatsapp.replace(
                            /[^0-9]/g,
                            ''
                          )}`}
                          className="hover:underline"
                        >
                          {office.whatsapp}
                        </a>
                      </div>
                      <Separator />
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 mr-2 text-primary" />
                        <a
                          href="mailto:info@shrineyatra.com"
                          className="hover:underline"
                        >
                          {details?.email}
                        </a>
                      </div>
                      <div className="flex items-start">
                        <Globe className="w-5 h-5 mr-2 text-primary mt-1" />
                        <div className="flex flex-col">

                          <a
                            href="https://www.thekailashyatra.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            www.thekailashyatra.com
                          </a>
                          <a
                            href="https://www.shrineyatra.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            www.shrineyatra.com
                          </a>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex justify-center space-x-4">
                        <a
                          href={details?.links?.facebook}
                          target="_blank"
                          className="text-primary hover:text-primary-dark"
                        >
                          <Facebook className="w-6 h-6" />
                          <span className="sr-only">Facebook</span>
                        </a>
                        <a
                          href={details?.links?.twitter}
                          target="_blank"
                          className="text-primary hover:text-primary-dark"
                        >
                          <Twitter className="w-6 h-6" />
                          <span className="sr-only">Twitter</span>
                        </a>
                        <a
                          href={details?.links?.linkedin}
                          target="_blank"
                          className="text-primary hover:text-primary-dark"
                        >
                          <Linkedin className="w-6 h-6" />
                          <span className="sr-only">LinkedIn</span>
                        </a>
                        <a
                          href={details?.links?.youtube}
                          target="_blank"
                          className="text-primary hover:text-primary-dark"
                        >
                          <Youtube className="w-6 h-6" />
                          <span className="sr-only">YouTube</span>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="lg:w-1/3">
            <UserForm />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
