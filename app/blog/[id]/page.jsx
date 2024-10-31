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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import axios from 'axios';
import UserForm from '@/components/ui/custom/UserForm';
import Link from 'next/link';
import Image from 'next/image';

export async function generateMetadata({ params }) {
  const { id } = params;

  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + `/blogs/${id}`
    );
    const blogData = response.data.blogs;

    return {
      title: blogData.title || 'ShrineYatra Blog',
      description:
        blogData.description ||
        'Explore insightful travel blogs on ShrineYatra.',
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
  const response = await axios.get(
    process.env.NEXT_PUBLIC_API_URL + `/blogs/${id}`
  );
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
        <BackButton />
        <div className="flex flex-col lg:flex-row gap-8 mt-4">
          <main className="lg:w-2/3">
            <article className="">
              <div className="text-primary mb-2">
                Published on{' '}
                {format(new Date(blogData?.createdAt), 'MMMM do, yyyy')}
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                {blogData?.title}
              </h1>
              <div className="flex items-center justify-start text-gray-600 mb-4">
                <Clock className="w-4 h-4 mr-1" />
                <span>12 min read</span>
              </div>
              <img
                src={blogData?.image}
                alt={'image'}
                className="w-full h-96 object-cover rounded-2xl mb-6"
              />
              <div
                className="text-left html-content"
                dangerouslySetInnerHTML={{ __html: blogData.content }}
              />
            </article>

            {/* <section className="mt-8">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Other Blogs</h2>
                <BlogSlider blogs={relatedBlogs} />
              </div>
            </section> */}
            
          </main>
          <aside className="lg:w-1/3 ">
            <UserForm />

            <Card className="w-full mt-4">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  RECENT BLOGS
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6">
                {relatedBlogs.map((post) => (
                  <Link
                    key={post._id}
                    href={`/blog/${post._id}`}
                    className="flex gap-4 group items-start"
                  >
                    <div className="relative w-[100px] h-[70px] overflow-hidden rounded-md">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h3 className="font-serif text-lg leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                      {format(new Date(post?.createdAt), 'MMMM do, yyyy')}
                      </p>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </aside>
        </div>
        <section className="mt-8">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Related Packages</h2>
                <PackageSlider trips={relatedTrips} />
              </div>
            </section>
      </div>
      <Footer />
    </div>
  );
}
