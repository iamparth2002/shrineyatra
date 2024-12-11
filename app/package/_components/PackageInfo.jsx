import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import TripCard2 from '@/components/ui/home/TripCard2';
import Header from '@/components/ui/custom/Header';
import Footer from '@/components/ui/custom/Footer';
import BlogSlider from '@/components/ui/custom/BlogSlider';
import AttractionSlider from '@/components/ui/custom/AttractionSlider';
import BackButton from '@/components/ui/custom/BackButton';
import Component from './MoreAbout';
import { MobileBar } from '@/components/ui/custom/MobileBar';


export default function PackageInfo({ data, blogs, attractions, error }) {
  console.log({data,blogs,error,attractions})
  if (!data || error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">{error || 'Failed to load data'}</p>
      </div>
    );
  }

  const { title, subHeading, description, trips, image, urlName, points } = data;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <section className="relative h-[620px] md:h-[500px]">
        <Image
          src={image}
          alt="Package Image"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {title}
            </h1>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='my-4'>
          <BackButton />
        </div>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-justify">{subHeading}</h2>
          <div
            className="text-gray-600 mt-2 mb-10 text-justify"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.map((trip, subIndex) => (
              <div key={subIndex} className="flex-[0_0_360px] mr-4">
                <TripCard2
                  title={trip.name}
                  description={trip.description}
                  days={trip.days}
                  image={trip.image}
                  price={trip.price}
                  rating={trip.rating}
                  reviews={trip.reviews}
                  location={trip.location}
                  realPrice={trip.realPrice}
                  tripId={trip._id}
                  urlName={trip.urlName}
                  className="w-[380px]"
                  packageUrlName={urlName}
                />
              </div>
            ))}
          </div>
        </section>

        <Component title={title} points={points}/>

        {blogs.length > 0 && (
          <div className="mb-8 max-w-7xl">
            <h3 className="text-2xl font-bold mb-4">Other Related Blogs</h3>
            <BlogSlider blogs={blogs} />
          </div>
        )}

        {attractions.length > 0 && (
          <div className="mb-8 max-w-7xl">
            <h3 className="text-2xl font-bold mb-4">Other Related Attractions</h3>
            <AttractionSlider attractions={attractions} />
          </div>
        )}
      </main>

      <Footer />
      <MobileBar/>
    </div>
  );
}
