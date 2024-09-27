import React from 'react';
import { Card, CardContent, CardFooter } from '../card';
import Image from 'next/image';

const BlogCard = () => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-[200px]">
          <Image
            src="https://images.pexels.com/photos/19877297/pexels-photo-19877297/free-photo-of-chopta-tungnath-chandrashila-trek.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="2023 Travel Trends"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">
            2023 Travel Trends - what you need to know
          </h3>
          <p className="text-gray-600">
            Discover the latest travel trends for 2023, including sustainable
            tourism, wellness retreats, and off-the-beaten-path destinations.
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
