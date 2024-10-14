'use client';
import { Star, ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../button';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import UserForm from '../custom/UserForm';

const TripCard2 = ({
  images,
  title,
  days,
  price,
  originalPrice,
  realPrice,
  tripId,
}) => {
  const formatPrice = (value) => {
    return value ? value.toLocaleString() : 'N/A';
  };

  const router = useRouter();

  return (
    <div className="w-[360px] rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Banner */}
      {/* <div className="bg-primary text-white text-center py-1 px-4 text-xs font-bold">
        THRILL FEST | Get Up To 3 International Trips Free!
      </div> */}

      {/* Image Carousel */}
      <div className="relative h-[300px]">
        <Image src={images[0]} alt={title} layout="fill" objectFit="cover" />
        {/* <button className="absolute top-1/2 left-2 -translate-y-1/2 bg-white rounded-full p-1">
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-white rounded-full p-1">
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
        <div className="absolute bottom-2 right-2 flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-white rounded-full opacity-50" />
          ))}
        </div> */}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-600">
            {days} days & {days - 1} nights
          </p>
          {/* <div className="flex items-center">
            <Star className="w-4 h-4 fill-green-500 text-green-500" />
            <span className="text-green-500 font-bold text-sm ml-1">
              {rating}
            </span>
            <span className="text-gray-400 text-xs ml-1">({reviews})</span>
          </div> */}
        </div>

        <h2 className="text-base font-bold line-clamp-2">{title}</h2>

        <div className="flex items-baseline justify-between">
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold">INR {formatPrice(price)}</span>
            <span className="text-gray-400 line-through text-xs">
              INR {formatPrice(realPrice)}
            </span>
          </div>
          <span className="bg-green-100 text-green-800 text-[10px] px-2 py-1 rounded-full">
            SAVE INR {formatPrice(realPrice - price)}
          </span>
        </div>

        <div className="flex justify-between w-full gap-2">
          <button
            className="flex-1 bg-white border border-primary text-primary py-2 rounded-lg text-sm font-semibold"
            onClick={() => {
              router.push(`/package/${tripId}`);
            }}
          >
            View Details
          </button>
        </div>

        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 flex-shrink-0 border border-primary"
          >
            <Phone className="h-4 w-4" color="#f97316" />
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex-grow w-full ml-2 h-12 bg-primary hover:bg-primary/90 text-sm">
                Avail This Offer
              </Button>
            </DialogTrigger>
            <DialogContent>
              <UserForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default TripCard2;
