import { Facebook, MessageSquare, Search, Zap } from 'lucide-react';

export const metadataObj = {
  default: {
    title: 'The Kailash Yatra',
    description:
      'Kailash Mansarovar Yatra is a sacred pilgrimage that leads to Kailash Mansarovar, the abode of Lord Shiva, located in Tibet.',
    image: '/home-banner.jpg', // Image in public folder
    url: `${process.env.NEXT_PUBLIC_URL}`,
    type: 'website',
  },
  blogs: {
    title: 'Blogs - The Kilash Yatra',
    description:
      "Dive into the world of 'The Kailash Yatra' with insightful articles, travel tips, spiritual guides, and updates.",
    url: `${process.env.NEXT_PUBLIC_URL}/blog`,
  },
};

export const slideTexts = [
  {
    heading: 'Discover Your Next Adventure',
    subheading:
      'Embark on a journey to remember with our curated travel experiences',
  },
  {
    heading: 'Explore Breathtaking Destinations',
    subheading: 'Uncover hidden gems and iconic landmarks across the globe',
  },
  {
    heading: 'Create Unforgettable Memories',
    subheading: 'Turn your travel dreams into lasting experiences',
  },
  {
    heading: "Experience the World's Wonders",
    subheading: 'Immerse yourself in diverse cultures and natural beauty',
  },
];

export const DATA = {
  features: [
    {
      icon: Search,
      heading: 'Find you destination',
      subheading:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
    {
      icon: MessageSquare,
      heading: 'Book a ticket',
      subheading:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
    {
      icon: Zap,
      heading: 'Explore Destination',
      subheading:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
  ],
};

export const Numbers = {
  customers: '10M+',
  experience: '09+',
  destinations: '12K',
  rating: '5.0',
};

export const reviews = [
  {
    name: 'Rajesh Sharma',
    rating: 5,
    description:
      'The journey to Kedarnath was truly a life-changing experience. The majestic Himalayas, the challenging trek, and the serene atmosphere around the temple filled me with a sense of peace and spiritual awakening. The early morning aarti at the temple was soul-stirring. Despite the difficult terrain, every step felt like a step closer to divinity. A must-visit for every spiritual seeker.',
    image: '/placeholder.jpg',
    location: 'Kedarnath, Uttarakhand',
    date: 'Pilgrimage in May 2023',
  },
  {
    name: 'Priya Gupta',
    rating: 5,
    description:
      'Badrinath left me in awe of its divine beauty. The sacred Badrinarayan Temple, nestled in the Garhwal Himalayas, exudes a powerful spiritual energy. The hot springs of Tapt Kund were rejuvenating. Witnessing the evening aarti by the Alaknanda River was a magical experience. The peaceful atmosphere and the kindness of locals made this pilgrimage unforgettable.',
    image: '/placeholder.jpg',
    location: 'Badrinath, Uttarakhand',
    date: 'Visited in June 2023',
  },
  {
    name: 'Amit Patel',
    rating: 4,
    description:
      'The Amarnath Yatra was an incredible test of faith and endurance. The journey through the stunning landscapes of Kashmir to reach the holy cave was challenging but deeply rewarding. Seeing the natural ice lingam of Lord Shiva was a profound spiritual moment. The camaraderie among fellow pilgrims and the support of the locals and army personnel made the tough journey manageable.',
    image: '/placeholder.jpg',
    location: 'Amarnath, Jammu and Kashmir',
    date: 'Yatra in July 2023',
  },
  {
    name: 'Sunita Reddy',
    rating: 5,
    description:
      "Attending the Kumbh Mela in Prayagraj was an extraordinary experience. The sheer scale of devotion, with millions of pilgrims gathering for the holy dip at the Sangam, was awe-inspiring. The atmosphere was charged with spiritual energy. From sadhus performing rituals to the colorful processions, every moment felt sacred. It's a celebration of faith that everyone should witness at least once in their lifetime.",
    image: '/placeholder.jpg',
    location: 'Kumbh Mela, Prayagraj',
    date: 'Attended in February 2024',
  },
  {
    name: 'Vikram Malhotra',
    rating: 5,
    description:
      'The Char Dham Yatra covering Yamunotri, Gangotri, Kedarnath, and Badrinath was the most fulfilling journey of my life. Each destination had its unique spiritual significance and natural beauty. The challenging treks, especially to Kedarnath, tested our physical limits but strengthened our spiritual resolve. The darshan at each temple left us feeling blessed and at peace. A must-do for every devotee of Lord Shiva and Vishnu.',
    image: '/placeholder.jpg',
    location: 'Char Dham, Uttarakhand',
    date: 'Yatra completed in September 2023',
  },
];

export const details = {
  contact: '919958647371',
  address:
    'The Kailash Yatra, R-112, East Vinod Nagar, New Delhi-110091, India.',
  email: 'info@thekailashyatra.com',
  links: {
    facebook:'https://www.facebook.com/ShrineYatra',
    twitter: 'https://twitter.com/ShrineYatra',
    instagram: 'https://www.instagram.com/shrineyatra/',
    linkedin: 'https://www.linkedin.com/company/shrineyatra',
    youtube:'https://www.youtube.com/@shrineyatra'
  },
};
export const footerDetails = {
  year: '2024',
  subheading:
    'Trusted in more than 100 countries & 5 million customers. Have any query? Contact us, we are here for you.',
};



export const schemas = {
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": metadataObj.default.title,
    "alternateName": "The Kailash Yatra",
    "url": metadataObj.default.url,
  },
  localBusiness: {
    "@context": "http://schema.org/",
    "@type": "LocalBusiness",
    "url": metadataObj.default.url,
    "name": metadataObj.default.title,
    "email": details.email,
    "telephone": `+${details.contact}`,
    "image": "/home-banner.jpg",
    "sameAs": Object.values(details.links).filter(Boolean),
    "address": {
      "@type": "PostalAddress",
      "addressCountry": { "@type": "Country", "name": "IN" },
      "streetAddress": "R-112, East Vinod Nagar",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110091",
    },
    "priceRange": "Rs.14999-Rs.500000",
  },
  organization: {
    "@context": "http://schema.org",
    "@type": "Organization",
    "url": metadataObj.default.url,
    "name": metadataObj.default.title,
    "logo": "/home-banner.jpg",
    "sameAs": Object.values(details.links).filter(Boolean),
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "email": details.email,
        "telephone": `+${details.contact}`,
        "contactType": "Customer Service",
        "ContactOption": "Customer Service"
      },
    ],
  },
  siteNavigation: {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SiteNavigationElement", "name": "Home", "url": metadataObj.default.url },
      { "@type": "SiteNavigationElement", "name": "Blogs", "url": metadataObj.blogs.url },

    ],
  },
};


export const modules = {
  toolbar: {
    container: [
      [
        { header: '1' },
        { header: '2' },
        { header: '3' },
        { header: '4' },
        { header: '5' },
        { header: '6' },
        { font: [] },
      ],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ script: 'sub' }, { script: 'super' }],
      [{ align: [] }],
      ['blockquote', 'code-block'],
      [{ color: [] }, { background: [] }],
      ['link', 'image', 'video'], // Link option included
      ['clean'],
    ],
  },
  
};
export const config = {
  readonly: false, // Enables editing
  height:500,
  uploader: { insertImageAsBase64URI: true }, // Enable base64 image uploads
  buttons: [
    'source', 'bold', 'italic', 'underline', 'strikethrough', 'eraser', 'ul', 'ol', 'outdent',
    'indent', 'superscript', 'subscript', 'font', 'fontsize', 'brush', 'paragraph', 'image',
    'video', 'table', 'link', 'align', 'undo', 'redo', 'cut', 'copy', 'paste', 'hr', 'symbol',
    'fullsize', 'print', 'about',
  ],
};





