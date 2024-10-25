'use client';
import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import BackButton from '@/components/ui/custom/BackButton';
import Footer from '@/components/ui/custom/Footer';
import Header from '@/components/ui/custom/Header';
import { ArrowLeft, Clock, Loader2 } from 'lucide-react';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const { id } = useParams();

  // State to manage blog data and loading status
  const [attractionData, setAttractionData] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect to fetch blog data
  useEffect(() => {
    const fetchattractionData = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API_URL + `/attractions/${id}`
        );
        console.log(response.data);
        setAttractionData(response.data); // Assuming response contains blog data
      } catch (error) {
        console.error('Error fetching blog data:', error);
        // Optional: Redirect or handle error
      } finally {
        setLoading(false); // Stop loading when data is fetched or an error occurs
      }
    };

    fetchattractionData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="w-16 h-16 text-primary animate-spin" />
      </div>
    );
  }

  if (!attractionData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Attracton not found.</p>
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
              Published {attractionData?.createdAt}
            </div>
            <h1 className="text-3xl font-bold mb-4">{attractionData?.heading}</h1>
            {/* Uncomment and customize tags if needed */}
            {/* <div className="flex flex-wrap justify-center gap-2 mb-4">
              {attractionData.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className={tag.color}>
                  {tag.name}
                </Badge>
              ))}
            </div> */}
            <div className="flex items-center justify-center text-gray-600 mb-4">
              <Clock className="w-4 h-4 mr-1" />
              <span>12 min read</span>
            </div>
            <img
              src={process.env.NEXT_PUBLIC_IMAGE_URL + attractionData?.image}
              alt={'image'}
              className="w-full h-64 object-cover rounded-2xl mb-6"
            />
            <div
              className="text-left"
              dangerouslySetInnerHTML={{ __html: attractionData.details }}
            />
          </article>
        </main>
      </div>
      <Footer />
    </div>
  );
}
