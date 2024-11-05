import React from 'react';
import { Card, CardContent, CardFooter } from '../card';
import Image from 'next/image';
import { Button } from '../button';
import Link from 'next/link';

const BlogCard = ({ blog }) => {
  const { title, image, content,_id } = blog;
  // Convert HTML to plain text
  const plainTextContent = content.replace(/<[^>]*>/g, '');

  return (
    <Card className="w-[360px] overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-[200px]">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </CardContent>
      <CardFooter className=" flex flex-col gap-4 items-start p-4">
        <div>
          <h4 className="text-xl font-semibold mb-2 h-14 line-clamp-2">{title}</h4>
          <p className="text-gray-600 line-clamp-3">{plainTextContent}</p>
        </div>
        <Link href={`/blog/${_id}`}>
          <Button>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
