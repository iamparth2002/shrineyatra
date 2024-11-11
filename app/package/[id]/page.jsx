import Header from '@/components/ui/custom/Header';
import Footer from '@/components/ui/custom/Footer';
import PackageDetail from '../_components/PackageDetail';
import axiosInstance from '@/utils/axios';

export async function generateMetadata({ params }){
  try {
    const res = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/trips/${params.id}`);
    const tourData = res.data.trip;

    return {
      title: tourData?.name,
      description: tourData?.description.substring(0, 160), // Shortened description for SEO
      openGraph: {
        title: tourData?.name,
        description: tourData?.description.substring(0, 160),
        image: tourData?.image,
        url: `${process.env.NEXT_PUBLIC_API_URL}/trips/${params.id}`,
      },
      twitter: {
        title: tourData?.name,
        description: tourData?.description.substring(0, 160),
        image: tourData?.image,
      },
    };
  } catch (error) {
    console.error('Error fetching tour data:', error);
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
        <PackageDetail/>
      <Footer />
    </div>
  );
}


