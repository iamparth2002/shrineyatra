import Blogs from './_components/Blogs';
import Footer from '@/components/ui/custom/Footer';
import Header from '@/components/ui/custom/Header';
import { MobileBar } from '@/components/ui/custom/MobileBar';
import axiosInstance from '@/utils/axios';
import { metadataObj } from '@/utils/data';

export async function generateMetadata({ params }) {
  try {
    return {
      title: metadataObj.blogs.title,
      description: metadataObj.blogs.description,
      alternates: {
        canonical: metadataObj.blogs.url,
      },
    };
  } catch (error) {
    console.error('Error fetching tour data:', error);
    return {
      title: metadataObj.blogs.title,
      description: metadataObj.blogs.description,
    };
  }
}

export default function Component() {
  return (
    <div>
      <Header />
      <Blogs />
      <Footer />
      <MobileBar/>
    </div>
  );
}
