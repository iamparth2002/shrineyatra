import Header from '@/components/ui/custom/Header';
import Footer from '@/components/ui/custom/Footer';
import axiosInstance from '@/utils/axios';
import TripDetail from '../../_components/TripDetails';
import { MobileBar } from '@/components/ui/custom/MobileBar';

export async function generateMetadata({ params }){
console.log(params)
  try {
    const res = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/trips/${params.trip}`);
    const tourData = res.data.trip;
    console.log({tourData})
    return {
      title: tourData?.name,
      description: tourData?.description.substring(0, 160), // Shortened description for SEO
      openGraph: {
        type:"website",
        title: tourData?.name,
        description: tourData?.description.substring(0, 160),
        images: [
          {
            url: tourData?.image,
            width: 1200,  // recommended dimensions for OG images
            height: 630,  // recommended dimensions for OG images
            alt: "Description of the image"
          },
        ],
        url: `${process.env.NEXT_PUBLIC_URL}/${tourData?.packageId?.urlName}/${params.trip}`,
      },
      twitter: {
        title: tourData?.name,
        description: tourData?.description.substring(0, 160),
        images: [
          {
            url: tourData?.image,
            width: 1200,  // recommended dimensions for OG images
            height: 630,  // recommended dimensions for OG images
            alt: "Description of the image"
          },
        ],
      },
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_URL}/${tourData?.packageId?.urlName}/${params.trip}`,
      },
    };
  } catch (error) {
    // console.error('Error fetching tour data:', error);
    return {
      title: 'Tour Package',
      description: 'Explore our tour packages and discover exciting travel opportunities.',
    };
  }
}

export default function TourDetailPage() {
  return (
    <div>
      <Header />
        <TripDetail/>
      <Footer />
      <MobileBar/>
    </div>
  );
}


