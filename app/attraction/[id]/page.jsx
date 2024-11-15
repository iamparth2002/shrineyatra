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
import UserForm from '@/components/ui/custom/UserForm';
import Image from 'next/image';

export async function generateMetadata({ params }) {
  const { id } = params;

  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + `/attractions/${id}`
    );
    const attractionData = response.data.attractions;
    const cleanDescription = attractionData.details.replace(/<[^>]*>/g, '').slice(0, 170);

  console.log(attractionData)

    return {
      title: attractionData.metaTitle || attractionData.heading || 'The Kailash yatra Attraction',
      description: attractionData.metaDescription || cleanDescription,
      openGraph: {
        title: attractionData.metaTitle || attractionData.heading || 'The Kailash yatra Attraction',
        description: attractionData.metaDescription || cleanDescription,
        url: `${process.env.NEXT_PUBLIC_URL}/attraction/${attractionData.urlName}`,
        images: [
          {
            url: attractionData.image,
            width: 800,
            height: 600,
            alt: attractionData.imageAlt || attractionData.title,
          },
        ],
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: attractionData.metaTitle || attractionData.heading || 'The Kailash yatra Attraction',
        description: attractionData.metaDescription || cleanDescription,
        images: [
          {
            url: attractionData.image,
            width: 800,
            height: 600,
            alt: attractionData.imageAlt || attractionData.title,
          },
        ],
      },
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_URL}/attraction/${attractionData.urlName}`,
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
  const response = await axios.get(
    process.env.NEXT_PUBLIC_API_URL + `/attractions/${id}`
  );
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
    <>
      <Header />
      <main className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 text-gray-900 p-4">
        <BackButton />
        <div className="flex flex-col lg:flex-row gap-8 mt-4">
          <article className="lg:w-2/3" itemScope itemType="https://schema.org/TouristAttraction">
            <meta itemProp="name" content={attractionData.heading} />
            <meta itemProp="description" content={attractionData.description} />
            <meta itemProp="image" content={attractionData.image} />
            <meta itemProp="datePublished" content={attractionData.createdAt} />

            <header className="mb-6">
              <p className="text-primary mt-2">
                Published on {format(new Date(attractionData.createdAt), 'MMMM do, yyyy')}
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4" itemProp="headline">
                {attractionData.heading}
              </h1>
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                <span>12 min read</span>
              </div>
            </header>

            <Image
              src={attractionData.image}
              alt={attractionData.heading}
              width={800}
              height={450}
              className="w-full h-96 object-cover rounded-2xl mb-6"
            />

            <div
              className="text-left html-content"
              itemProp="description"
              dangerouslySetInnerHTML={{ __html: attractionData.details }}
            />
          </article>

          <aside className="lg:w-1/3">
            <UserForm />
          </aside>
        </div>

        <section className="mt-8">
          <div className="text-3xl font-bold mb-8">Related Packages</div>
          <PackageSlider trips={relatedTrips} />
        </section>
      </main>
      <Footer />
    </>
  );
}
