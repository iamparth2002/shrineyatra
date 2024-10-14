'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import BackButton from '@/components/ui/custom/BackButton';
import { blogs } from '@/utils/data';
import { ArrowLeft, Clock } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const { id } = useParams();
  const blogData = blogs[id];

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 text-gray-900 p-4">

      <main>
        <BackButton/>
        <article className="text-center">
          <div className="text-primary mb-2">
            Published {blogData.publishDate}
          </div>
          <h1 className="text-3xl font-bold mb-4">{blogData.title}</h1>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {blogData.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className={tag.color}>
                {tag.name}
              </Badge>
            ))}
          </div>
          <div className="flex items-center justify-center text-gray-600 mb-4">
            <Clock className="w-4 h-4 mr-1" />
            <span>{blogData.readTime} min read</span>
          </div>
          <img
            src={blogData.imageUrl}
            alt={blogData.imageAlt}
            className="w-full h-64 object-cover rounded-2xl mb-6"
          />
          <div
            className="text-left"
            dangerouslySetInnerHTML={{ __html: blogData.content }}
          />
        </article>
      </main>
    </div>
  );
}
