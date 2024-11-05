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
    <>
      <Header />
      <main className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 text-gray-900 p-4">
        <BackButton />
        <div className="flex flex-col lg:flex-row gap-8 mt-4">
          <article className="lg:w-2/3" itemScope itemType="https://schema.org/Article">
            <meta itemProp="author" content="ShrineYatra" />
            <meta itemProp="datePublished" content={blogData.createdAt} />
            <meta itemProp="dateModified" content={blogData.updatedAt || blogData.createdAt} />
            <meta itemProp="image" content={blogData.image} />
            
            <header className="mb-6">
              <p className="text-primary mt-2" itemProp="datePublished">
                Published on {format(new Date(blogData?.createdAt), 'MMMM do, yyyy')}
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4" itemProp="headline">
                {blogData?.title}
              </h1>
              <div className="flex items-center text-gray-600">
                <span >Author : Parth Gandhi</span>
              </div>
            </header>
            
            <Image
              src={blogData?.image}
              alt={blogData.title}
              width={800}
              height={450}
              className="w-full h-96 object-cover rounded-2xl mb-6"
            />

            <div
              className="text-left html-content"
              itemProp="articleBody"
              dangerouslySetInnerHTML={{ __html: blogData.content }}
            />
          </article>

          <aside className="lg:w-1/3">
            <UserForm />
            <Card className="w-full mt-4">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">RECENT BLOGS</CardTitle>
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
          <div className="text-3xl font-bold mb-8">Related Packages</div>
          <PackageSlider trips={relatedTrips} />
        </section>
      </main>
      <Footer />
    </>
  );
}
