import PackageInfo from '../_components/PackageInfo';
import axiosInstance from '@/utils/axios';

export async function generateMetadata({ params }){
  try {
    const res = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/packages/${params.id}`);
    const packageData = res.data;
    return {
      title: packageData?.metaTitle || packageData?.title,
      description: packageData?.metaDescription || packageData?.description.substring(0, 160), // Shortened description for SEO
      openGraph: {
        type:"website",
        title: packageData?.metaTitle || packageData?.title,
        description: packageData?.metaDescription || packageData?.description.substring(0, 160),
        images: [
          {
            url: packageData?.image,
            width: 1200, 
            height: 630,  
            alt: packageData?.imageAlt || packageData?.title
          },
        ],
        url: `${process.env.NEXT_PUBLIC_URL}/package/${params.id}`,
      },
      twitter: {
        title: packageData?.metaTitle || packageData?.title,
        description: packageData?.metaDescription || packageData?.description.substring(0, 160),
        images: [
          {
            url: packageData?.image,
            width: 1200,  // recommended dimensions for OG images
            height: 630,  // recommended dimensions for OG images
            alt: packageData?.imageAlt || packageData?.title
          },
        ],
      },
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_URL}/package/${params.id}`,
      },
    };
  } catch (error) {
    console.error('Error fetching tour data:', error);
    return {
      title: 'The Kailash Yatra',
      description: 'Explore our tour packages and discover exciting travel opportunities.',
    };
  }
}

export default async function PackageDetails({params}) {
  try {
    const resPackage = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/packages/${params.id}`);
    const data = resPackage.data;

    const resBlogs = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/blogs/package/${params.id}`);
    const blogs = resBlogs.data;

    const resAttractions = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/attractions/package/${params.id}`);
    const attractions = resAttractions.data;

    console.log({data,blogs,attractions})

    return (
      <PackageInfo
        data={data}
        blogs={blogs}
        attractions={attractions}
        error={null}
      />
    );
  } catch (error) {
    console.log('Error fetching data:', error.message);
    return <PackageInfo data={null} blogs={[]} attractions={[]} error="Failed to load data" />;
  }
}
