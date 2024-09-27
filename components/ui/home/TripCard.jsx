import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const TripCard = ({ image, title, days, price, rating }) => {
  return (
    <div className="relative h-[450px] rounded-lg overflow-hidden group transition-all hover:cursor-pointer duration-300 transform hover:scale-105 hover:shadow-2xl">
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
      />

      {/* Days label on top-left */}
      <div className="absolute top-2 left-2 p-2 bg-black/30 backdrop-blur-md rounded-2xl">
        <p className="text-white text-sm font-semibold">{days} Days</p>
      </div>

      {/* Rating label on top-right */}
      <div className="absolute top-2 right-2 p-2 bg-black/30 backdrop-blur-md rounded-lg">
        <p className="text-white text-sm font-semibold flex items-centerjustify-center"><Star className="w-4 h-4 inline mr-1" fill='yellow'  />{rating}</p>
      </div>

      {/* Info section with blur effect */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/30 backdrop-blur-md rounded-2xl mx-2 mb-2 flex justify-between items-center">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="bg-primary text-white p-2 rounded-lg font-semibold">₹{price}</p>
      </div>
    </div>
  );
};

export default TripCard;
