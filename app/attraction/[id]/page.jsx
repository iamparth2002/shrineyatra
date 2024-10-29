// app/attraction/[id]/page.js

import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import BackButton from '@/components/ui/custom/BackButton';
import Footer from '@/components/ui/custom/Footer';
import Header from '@/components/ui/custom/Header';
import { ArrowLeft, Clock, Loader2 } from 'lucide-react';
import PackageSlider from '@/components/ui/custom/PackageSlider';
import axios from 'axios';

export async function generateMetadata({ params }) {
  const { id } = params;

  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + `/attractions/${id}`
    );
    const attractionData = response.data.attractions;

    return {
      title: attractionData.heading || 'ShrineYatra Attraction',
      description: attractionData.description || 'Discover breathtaking attractions with ShrineYatra.',
      openGraph: {
        title: attractionData.heading,
        description: attractionData.description,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/attractions/${attractionData._id}`,
        images: [
          {
            url: process.env.NEXT_PUBLIC_IMAGE_URL + attractionData.image,
            width: 800,
            height: 600,
            alt: attractionData.heading,
          },
        ],
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: attractionData.heading,
        description: attractionData.description,
        images: [process.env.NEXT_PUBLIC_IMAGE_URL + attractionData.image],
      },
    };
  } catch (error) {
    console.error('Error fetching attraction data:', error);
    return {
      title: 'ShrineYatra Attraction',
      description: 'Discover breathtaking attractions with ShrineYatra.',
    };
  }
}

export default async function Page({ params }) {
  const { id } = params;

  // Fetch attraction and related data for the page
  const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + `/attractions/${id}`);
  const attractionData = response.data.attractions;
  const relatedTrips = response.data.relatedTrips;

  if (!attractionData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Attraction not found.</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 text-gray-900 p-4">
        <main>
          <BackButton />
          <article className="text-center">
            <div className="text-primary mb-2">
              Published on {format(new Date(attractionData?.createdAt), 'MMMM do, yyyy')}
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">{attractionData?.heading}</h1>
            <div className="flex items-center justify-center text-gray-600 mb-4">
              <Clock className="w-4 h-4 mr-1" />
              <span>12 min read</span>
            </div>
            <img
              src={attractionData?.image}
              alt={'image'}
              className="w-full h-96 object-cover rounded-2xl mb-6"
            />
            <div
              className="text-left html-content"
              dangerouslySetInnerHTML={{ __html: attractionData.details }}
            />
          </article>

          <section className="mt-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Related Packages</h2>
              <PackageSlider trips={relatedTrips} />
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
