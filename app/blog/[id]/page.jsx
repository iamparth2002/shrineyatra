// app/blog/[id]/page.js

import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import BackButton from '@/components/ui/custom/BackButton';
import Footer from '@/components/ui/custom/Footer';
import Header from '@/components/ui/custom/Header';
import { ArrowLeft, Clock, Loader2 } from 'lucide-react';
import BlogSlider from '@/components/ui/custom/BlogSlider';
import PackageSlider from '@/components/ui/custom/PackageSlider';
import axios from 'axios';

export async function generateMetadata({ params }) {
  const { id } = params;

  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + `/blogs/${id}`
    );
    const blogData = response.data.blogs;

    return {
      title: blogData.title || 'ShrineYatra Blog',
      description: blogData.description || 'Explore insightful travel blogs on ShrineYatra.',
      openGraph: {
        title: blogData.title,
        description: blogData.description,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${blogData._id}`,
        images: [
          {
            url: process.env.NEXT_PUBLIC_IMAGE_URL + blogData.image,
            width: 800,
            height: 600,
            alt: blogData.title,
          },
        ],
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: blogData.title,
        description: blogData.description,
        images: [process.env.NEXT_PUBLIC_IMAGE_URL + blogData.image],
      },
    };
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return {
      title: 'ShrineYatra Blog',
      description: 'Explore insightful travel blogs on ShrineYatra.',
    };
  }
}

export default async function Page({ params }) {
  const { id } = params;

  // Fetch blog and related data for the page
  const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + `/blogs/${id}`);
  const blogData = response.data.blogs;
  const relatedBlogs = response.data.otherBlogs;
  const relatedTrips = response.data.relatedTrips;

  if (!blogData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Blog not found.</p>
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
              Published on {format(new Date(blogData?.createdAt), 'MMMM do, yyyy')}
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">{blogData?.title}</h1>
            <div className="flex items-center justify-center text-gray-600 mb-4">
              <Clock className="w-4 h-4 mr-1" />
              <span>12 min read</span>
            </div>
            <img
              src={process.env.NEXT_PUBLIC_IMAGE_URL + blogData?.image}
              alt={'image'}
              className="w-full h-96 object-cover rounded-2xl mb-6"
            />
            <div
              className="text-left html-content"
              dangerouslySetInnerHTML={{ __html: blogData.content }}
            />
          </article>

          <section className="mt-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Other Blogs</h2>
              <BlogSlider blogs={relatedBlogs} />
            </div>
          </section>
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
