import React from 'react';
import { Card, CardContent, CardFooter } from '../card';
import Image from 'next/image';
import { Button } from '../button';

const BlogCard = ({ title, imageUrl, content }) => {
  // Convert HTML to plain text
  const plainTextContent = content.replace(/<[^>]*>/g, '');

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-[200px]">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            />
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">
            {title}
          </h3>
          <p className="text-gray-600 line-clamp-3">
            {plainTextContent}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
