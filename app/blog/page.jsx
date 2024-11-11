'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/ui/custom/Footer';
import Header from '@/components/ui/custom/Header';
import UserForm from '@/components/ui/custom/UserForm';
import axiosInstance from '@/utils/axios';
import { format } from 'date-fns';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Component() {
  const [blogs, setBlogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(2); // Initial count of blogs to display
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axiosInstance.get(
          `${process.env.NEXT_PUBLIC_API_URL}/blogs/all`
        );
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching package data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Function to load more blogs
  const loadMoreBlogs = () => {
    setVisibleCount((prevCount) => prevCount + 5); // Increase the count by 5
  };

  return (
    <div>
      <Header />
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {loading ? (
              <div className="flex items-center justify-center h-96">
                <Loader2 className="w-16 h-16 text-primary animate-spin" />
              </div>
            ) : (
              <>
                {/* Main Blog Post */}
                {blogs[0] && (
                  <article className="bg-white rounded-lg overflow-hidden shadow-sm mb-8">
                    <img
                      src={blogs[0].image}
                      alt={blogs[0].title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="p-6">
                      <div className="text-sm text-muted-foreground mb-2">
                        {format(new Date(blogs[0].createdAt), 'MMMM do, yyyy')}
                      </div>
                      <h1 className="text-3xl font-serif mb-4 hover:text-orange-500 transition-colors">
                        {blogs[0].title}
                      </h1>
                      <p className="mb-4 text-gray-600 line-clamp-3">
                        {blogs[0].content.replace(/<[^>]*>/g, '')}
                      </p>
                      <Link href={`/blog/${blogs[0].urlName}`}>
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </article>
                )}

                {/* Grid of Other Posts */}
                <div className="grid md:grid-cols-2 gap-8">
                  {blogs.slice(1, visibleCount).map((post) => (
                    <article
                      key={post.id}
                      className="bg-white rounded-lg overflow-hidden shadow-sm"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <div className="text-sm text-muted-foreground mb-2">
                          {format(new Date(post.createdAt), 'MMMM do, yyyy')}
                        </div>
                        <h2 className="text-xl font-serif mb-2 hover:text-orange-500 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground text-sm mb-4">
                          {post.content
                            .replace(/<[^>]*>/g, '')
                            .substring(0, 100)}
                          ...
                        </p>
                        <Link href={`/blog/${post.urlName}`}>
                          <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm">
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Load More Button */}
                {visibleCount < blogs.length && (
                  <div className="flex justify-center mt-8">
                    <Button
                      onClick={loadMoreBlogs}
                      className="bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      Load More
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <UserForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
