import localFont from 'next/font/local';
import './globals.css';
import { metadataObj, schemas } from '@/utils/data';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

// Metadata for the App Router
const pageMetadata = metadataObj.default;

export const metadata = {
  title: pageMetadata.title,
  description: pageMetadata.description,
  openGraph: {
    type: pageMetadata.type,
    title: pageMetadata.title,
    description: pageMetadata.description,
    images: [
      {
        url: pageMetadata.image,
        width: 1200,
        height: 630,
        alt: 'Kailash Mansarovar view',
      },
    ],
    url: pageMetadata.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: pageMetadata.title,
    description: pageMetadata.description,
    image: pageMetadata.image,
  },
  alternates: {
    canonical: pageMetadata.url,
  },
  links: [
    {
      rel: 'canonical',
      href: pageMetadata.url,
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        {/* JSON-LD scripts are directly inserted */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.website) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemas.localBusiness),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemas.organization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemas.siteNavigation),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
