import { MessageSquare, Search, Zap } from 'lucide-react';

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

export const PACKAGES = {
  packages: [
    {
      title: 'Kailash Mansarovar Yatra',
      subHeading:
        'Embark on a spiritual journey to Kailash Mansarovar, experiencing breathtaking views and spiritual serenity with multiple trips by air or road.',
      trips: [
        {
          tripId: 'TRP001',
          name: 'Kailash Mansarovar via Helicopter',
          days: 10,
          location: 'Kailash, Tibet',
          tags: ['Spiritual', 'Adventure'],
          reviews: 50,
          price: 2200,
          realPrice: 2500,
          currency: 'USD',
          images: [
            'https://images.pexels.com/photos/12151764/pexels-photo-12151764.jpeg',
            'https://images.pexels.com/photos/18358503/pexels-photo-18358503/free-photo-of-horses-and-people-on-a-mountainside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/18359762/pexels-photo-18359762/free-photo-of-people-walking-in-parade-on-road-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/19010047/pexels-photo-19010047/free-photo-of-crowd-walking-on-street-with-tents-around-in-village-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/19010051/pexels-photo-19010051/free-photo-of-crowd-on-street-in-village-in-mountains.jpeg',
          ],
          description:
            'Experience the spiritual serenity of Kailash Mansarovar through a helicopter journey. The 10-day trip starts from Kathmandu with a picturesque helicopter ride into Tibet. Upon arrival, you will be greeted with views of the sacred Mount Kailash, where pilgrims come from all over the world to attain enlightenment. This trip is designed for those looking for comfort, as helicopter rides offer a smoother journey through the challenging terrains. Once in Tibet, you will stay in comfortable accommodations and partake in religious ceremonies around the holy lake, Mansarovar. Every day, you will witness the deep spiritual traditions of the region, making this a fulfilling journey for spiritual seekers.',
          itinerary: [
            {
              day: 1,
              title: 'Arrival in Kathmandu',
              activities: [
                'Arrival at Kathmandu and transfer to hotel',
                'Sightseeing and preparation for the Yatra',
              ],
            },
            {
              day: 2,
              title: 'Kathmandu to Tibet via Helicopter',
              activities: [
                'Helicopter journey to the border',
                'Transfer to Tibet and check-in at the lodge',
              ],
            },
            // Additional days...
          ],
          highlights: [
            'Helicopter ride over the Himalayas',
            'Darshan of Mount Kailash',
          ],
          inclusions: [
            'Helicopter rides from Kathmandu to Tibet',
            'Accommodation in comfortable hotels',
            'Daily meals (breakfast, lunch, and dinner)',
            'Tibet entry permits and Kailash parikrama passes',
            'Professional guide for the entire trip',
          ],
          exclusions: [
            'Personal expenses such as shopping and tips',
            'Visa fees for Tibet and Nepal',
            'Travel insurance and health insurance',
            'Optional pony rides during parikrama',
            'Meals not mentioned in the itinerary',
          ],
        },
        {
          name: 'Kailash Mansarovar via Road',
          days: 12,
          location: 'Kailash, Tibet',
          tags: ['Spiritual', 'Adventure'],
          reviews: 40,
          price: 1800,
          realPrice: 2000,
          currency: 'USD',
          images: [
            'https://images.pexels.com/photos/10881642/pexels-photo-10881642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          ],
          description:
            'Join us on a road trip to Kailash Mansarovar for an unforgettable spiritual experience. This 12-day road journey begins in Kathmandu and continues through the scenic Himalayan ranges until you reach Tibet. Along the way, you will witness breathtaking landscapes, remote monasteries, and have the opportunity to interact with local Tibetan communities. The trip includes a visit to Lake Mansarovar, believed to be the abode of Lord Shiva, and a complete parikrama of Mount Kailash. The journey is physically demanding, especially the trek around Kailash, but it rewards participants with unmatched spiritual fulfillment and a sense of achievement.',
          itinerary: [
            {
              day: 1,
              title: 'Kathmandu Arrival',
              activities: [
                'Arrival at Kathmandu',
                'Welcome meeting and orientation',
              ],
            },
            {
              day: 2,
              title: 'Drive from Kathmandu to Tibet Border',
              activities: [
                'Long scenic drive to the Tibet border',
                'Overnight stay at the border lodge',
              ],
            },
            // Additional days...
          ],
          highlights: [
            'Road trip through the Tibetan plateau',
            'Scenic views of Mount Kailash',
          ],
          inclusions: [
            'Overland transport from Kathmandu to Tibet',
            'Accommodation in hotels and guesthouses',
            'Daily meals (breakfast, lunch, and dinner)',
            'Tibet entry permits and Kailash parikrama passes',
            'Professional guide for the journey',
          ],
          exclusions: [
            'Personal expenses like phone calls and shopping',
            'Visa fees for Tibet and Nepal',
            'Travel and health insurance',
            'Pony rides or personal transportation during parikrama',
            'Meals not mentioned in the itinerary',
          ],
        },
        {
          name: 'Kailash Full Moon Pilgrimage',
          days: 14,
          location: 'Kailash, Tibet',
          tags: ['Spiritual'],
          reviews: 30,
          price: 2500,
          realPrice: 2800,
          currency: 'USD',
          images: [
            'https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          ],
          description:
            'This 14-day full moon pilgrimage to Kailash Mansarovar is a special spiritual experience that coincides with the full moon. Starting in Kathmandu, you will journey into Tibet, visiting Lake Mansarovar and participating in the parikrama around Mount Kailash. The full moon night at Mansarovar is considered particularly auspicious and provides an unforgettable spiritual atmosphere. The pilgrimage includes prayers, rituals, and meditation sessions under the full moon. The trip also includes visits to sacred Tibetan monasteries along the way.',
          itinerary: [
            {
              day: 1,
              title: 'Arrival in Kathmandu',
              activities: [
                'Arrival at Kathmandu and transfer to hotel',
                'Preparation for the Yatra',
              ],
            },
            {
              day: 2,
              title: 'Kathmandu to Tibet by Road',
              activities: [
                'Road journey to Tibet',
                'Overnight stay at the border',
              ],
            },
            // Additional days...
          ],
          highlights: [
            'Full moon parikrama around Mount Kailash',
            'Night at Mansarovar under the full moon',
          ],
          inclusions: [
            'Full moon ceremony and prayers',
            'Accommodation in comfortable lodges and hotels',
            'Daily meals (breakfast, lunch, and dinner)',
            'Tibet entry permits and Kailash parikrama passes',
            'Professional guide throughout the journey',
          ],
          exclusions: [
            'Personal items like phone bills and tips',
            'Visa fees for Tibet and Nepal',
            'Travel insurance',
            'Optional pony rides during parikrama',
            'Meals not listed in the itinerary',
          ],
        },
        {
          name: 'Kailash Mansarovar Inner Kora',
          days: 16,
          location: 'Kailash, Tibet',
          tags: ['Spiritual', 'Adventure'],
          reviews: 35,
          price: 2800,
          realPrice: 3200,
          currency: 'USD',
          images: [
            'https://images.pexels.com/photos/10792604/pexels-photo-10792604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          ],
          description:
            'The Inner Kora of Kailash is the most sacred and challenging route for devout pilgrims. This 16-day trip takes you deep into the spiritual and physical journey of Kailash. Starting from Kathmandu, you will travel by road to Tibet and begin the Inner Kora trek, which circles closer to Mount Kailash than the standard outer kora. The journey is physically demanding, with high-altitude trekking and rugged terrains, but is believed to bring immense spiritual blessings to those who complete it. Suitable for those with high fitness levels and strong faith, this is a once-in-a-lifetime pilgrimage.',
          itinerary: [
            {
              day: 1,
              title: 'Kathmandu Arrival',
              activities: [
                'Arrival at Kathmandu',
                'Orientation and trek preparation',
              ],
            },
            {
              day: 2,
              title: 'Road journey to Tibet',
              activities: [
                'Drive from Kathmandu to the Tibet border',
                'Overnight stay in Tibet',
              ],
            },
            // Additional days...
          ],
          highlights: [
            'Trekking through high-altitude terrains',
            'Inner Kora around Mount Kailash',
          ],
          inclusions: [
            'Road transport from Kathmandu to Tibet',
            'Accommodation in basic lodges during the trek',
            'Meals throughout the trip (breakfast, lunch, dinner)',
            'Inner Kora permits and guide services',
            'Support staff and medical assistance during the trek',
          ],
          exclusions: [
            'Personal expenses like shopping and souvenirs',
            'Visa fees for Tibet and Nepal',
            'Travel and health insurance',
            'Optional trekking equipment rentals',
            'Meals outside the provided itinerary',
          ],
        },
        {
          name: 'Kailash Mansarovar Heritage Trek',
          days: 18,
          location: 'Kailash, Tibet',
          tags: ['Spiritual', 'Adventure'],
          reviews: 28,
          price: 3000,
          realPrice: 3400,
          currency: 'USD',
          images: [
            'https://images.pexels.com/photos/826311/pexels-photo-826311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          ],
          description:
            'The 18-day Kailash Mansarovar Heritage Trek offers a deep dive into the ancient pilgrimage routes taken by sages and devotees for centuries. This trek is physically challenging, as you will traverse high-altitude passes, cross glacial rivers, and walk through the Tibetan plateau. Along the journey, you will visit sacred monasteries, participate in rituals at Lake Mansarovar, and complete the parikrama of Mount Kailash. The trek allows participants to experience the raw beauty of the Tibetan landscape while following in the footsteps of ancient pilgrims, making it a transformative spiritual journey.',
          itinerary: [
            {
              day: 1,
              title: 'Kathmandu Arrival',
              activities: [
                'Arrival at Kathmandu',
                'Welcome dinner and briefing',
              ],
            },
            {
              day: 2,
              title: 'Drive from Kathmandu to Tibet',
              activities: [
                'Road journey to Tibet',
                'Overnight at a guesthouse',
              ],
            },
            // Additional days...
          ],
          highlights: [
            'Visit to ancient monasteries',
            'Trek through high passes to Mount Kailash',
          ],
          inclusions: [
            'Trek permits and entrance fees to sacred sites',
            'Accommodation in basic lodges and tents',
            'All meals (breakfast, lunch, dinner)',
            'Professional trekking guide and support staff',
            'Trekking gear and emergency medical supplies',
          ],
          exclusions: [
            'Personal trekking gear (available for rent)',
            'Visa fees and permits for Tibet and Nepal',
            'Travel insurance',
            'Personal expenses like laundry and phone calls',
            'Meals outside the itinerary',
          ],
        },
      ],
    },
    {
      title: 'Adi Kailash Yatra Packages',
      subHeading:
        'Discover the serene beauty of Adi Kailash with exclusive helicopter packages, providing a comfortable journey and mesmerizing views.',
      trips: [
        {
          name: 'Adi Kailash Heli Darshan',
          days: 8,
          location: 'Adi Kailash, India',
          tags: ['Spiritual', 'Adventure'],
          reviews: 20,
          price: 1500,
          realPrice: 1700,
          currency: 'INR',
          images: [
            'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          ],
          description:
            'Fly to Adi Kailash and experience the spiritual aura of this holy mountain. The 8-day heli darshan package is designed for those seeking a comfortable yet spiritually enriching experience. Starting from Pithoragarh, you will board a helicopter to Adi Kailash, cutting down the travel time significantly. The package includes darshan at the Adi Kailash shrine and visits to local temples. The majestic views of the snow-capped mountains and the serene environment create a deep spiritual connection for all pilgrims. This trip is suitable for families and senior citizens looking for an easier way to complete the pilgrimage.',
          itinerary: [
            {
              day: 1,
              title: 'Arrival at Pithoragarh',
              activities: [
                'Arrival at Pithoragarh and transfer to hotel',
                'Sightseeing around town',
              ],
            },
            {
              day: 2,
              title: 'Helicopter to Adi Kailash',
              activities: [
                'Helicopter ride to Adi Kailash',
                'Check-in and Darshan at Adi Kailash',
              ],
            },
            // Additional days...
          ],
          highlights: [
            'Helicopter ride over the Himalayas',
            'Darshan of Adi Kailash',
          ],
          inclusions: [
            'Helicopter rides from Pithoragarh to Adi Kailash',
            'Accommodation in comfortable hotels',
            'Meals throughout the trip (breakfast, lunch, dinner)',
            'Local guides and religious rituals',
            'Professional guide for the trip',
          ],
          exclusions: [
            'Personal expenses such as souvenirs and tips',
            'Pony or additional transportation fees',
            'Travel insurance',
            'Medical emergencies or evacuation costs',
            'Meals not listed in the itinerary',
          ],
        },
        {
          name: 'Adi Kailash via Trek',
          days: 10,
          location: 'Adi Kailash, India',
          tags: ['Spiritual', 'Adventure'],
          reviews: 15,
          price: 1400,
          realPrice: 1600,
          currency: 'INR',
          images: [
            'https://images.pexels.com/photos/2132002/pexels-photo-2132002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          ],
          description:
            'A scenic trek to Adi Kailash through the breathtaking Himalayan landscapes. The 10-day trek starts from Pithoragarh, and over the course of several days, you will ascend the mountainous trails to reach the holy shrine. The trek is moderately challenging and includes several days of camping along the way. You will visit local villages, interact with the inhabitants, and learn about the region’s rich spiritual heritage. The highlight of the trip is the final darshan at Adi Kailash, where the spiritual energy of the mountain and the surrounding peaks creates a powerful connection to the divine.',
          itinerary: [
            {
              day: 1,
              title: 'Arrival at Kathgodam',
              activities: ['Drive to the base camp', 'Welcome and briefing'],
            },
            {
              day: 2,
              title: 'Start the trek',
              activities: ['Trek through scenic valleys', 'Overnight camping'],
            },
            // Additional days...
          ],
          highlights: [
            'Trek through scenic Himalayan valleys',
            'Darshan at Adi Kailash',
          ],
          inclusions: [
            'Trek permits and camping fees',
            'Accommodation in tents and guesthouses',
            'Meals during the trek (breakfast, lunch, dinner)',
            'Professional trekking guide and porters',
            'Medical support and emergency services',
          ],
          exclusions: [
            'Personal trekking gear and clothing',
            'Travel and health insurance',
            'Meals not listed in the itinerary',
            'Pony services and extra transport',
            'Personal expenses like laundry or phone calls',
          ],
        },
        {
          name: 'Adi Kailash Heritage Route',
          days: 12,
          location: 'Adi Kailash, India',
          tags: ['Spiritual', 'Adventure'],
          reviews: 18,
          price: 1600,
          realPrice: 1800,
          currency: 'INR',
          images: [
            'https://images.pexels.com/photos/3643920/pexels-photo-3643920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          ],
          description:
            'Follow the traditional routes to Adi Kailash taken by sages in ancient times. The 12-day journey through the heritage route brings you closer to the spiritual essence of the region. This trek is steeped in history, with stops at several ancient temples and monasteries along the way. You will travel through remote villages and cross over high mountain passes, experiencing both the physical and spiritual challenge of this pilgrimage. The heritage trek is ideal for those who want to experience the old ways of reaching Adi Kailash, in the same spirit as pilgrims did centuries ago.',
          itinerary: [
            {
              day: 1,
              title: 'Arrival in Kathgodam',
              activities: [
                'Transfer to the trek base',
                'Trek briefing and preparations',
              ],
            },
            {
              day: 2,
              title: 'Trek begins',
              activities: [
                'Start trekking through forests and valleys',
                'Camping under the stars',
              ],
            },
            // Additional days...
          ],
          highlights: [
            'Visit ancient temples and monasteries',
            'Trek through remote villages',
          ],
          inclusions: [
            'Trek permits and guide services',
            'Accommodation in lodges and camps',
            'Meals during the trek (breakfast, lunch, dinner)',
            'Support staff including porters and cook',
            'Emergency medical supplies and assistance',
          ],
          exclusions: [
            'Personal trekking gear (available for rent)',
            'Visa and entry fees to restricted areas',
            'Travel and health insurance',
            'Personal expenses like phone bills',
            'Meals outside the planned itinerary',
          ],
        },
        {
          name: 'Adi Kailash & Om Parvat Yatra',
          days: 11,
          location: 'Adi Kailash & Om Parvat, India',
          tags: ['Spiritual', 'Adventure'],
          reviews: 25,
          price: 1800,
          realPrice: 2000,
          currency: 'INR',
          images: [
            'https://images.pexels.com/photos/3013256/pexels-photo-3013256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          ],
          description:
            'Visit both Adi Kailash and Om Parvat in this spiritually enriching yatra. The 11-day journey begins with a trek to Adi Kailash, where you will stay for two nights to perform rituals and partake in religious ceremonies. Following this, the group will travel to Om Parvat, a mountain revered by Hindus for its natural snow formation resembling the sacred "Om" symbol. This journey combines both spiritual and natural beauty, as the landscapes and the energy of the sacred mountains leave a deep impression on all who visit.',
          itinerary: [
            {
              day: 1,
              title: 'Arrival in Kathgodam',
              activities: [
                'Drive to the base camp',
                'Briefing and preparations for the yatra',
              ],
            },
            {
              day: 2,
              title: 'Trek to Adi Kailash',
              activities: [
                'Begin the trek to Adi Kailash',
                'Camping along the way',
              ],
            },
            // Additional days...
          ],
          highlights: [
            'Darshan at Adi Kailash and Om Parvat',
            'View the "Om" symbol snow formation',
          ],
          inclusions: [
            'Trek permits and guide services',
            'Accommodation in lodges and tents',
            'Meals during the trek (breakfast, lunch, dinner)',
            'Support staff including cook and porters',
            'Religious rituals and ceremonies at both locations',
          ],
          exclusions: [
            'Personal expenses and shopping',
            'Travel insurance',
            'Medical emergencies or evacuations',
            'Pony services or extra transportation',
            'Meals not mentioned in the itinerary',
          ],
        },
        {
          name: 'Adi Kailash Full Moon Journey',
          days: 14,
          location: 'Adi Kailash, India',
          tags: ['Spiritual', 'Adventure'],
          reviews: 22,
          price: 2000,
          realPrice: 2200,
          currency: 'INR',
          images: [
            'https://images.pexels.com/photos/3736486/pexels-photo-3736486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          ],
          description:
            'Experience Adi Kailash under the spiritual light of the full moon in this special journey. This 14-day trip takes you to Adi Kailash during the full moon, where pilgrims can perform religious ceremonies during this auspicious time. The full moon is considered a powerful spiritual event, and spending the night at Adi Kailash under its light enhances the spiritual energy of the yatra. This journey is designed for those seeking a deeper spiritual connection, with nightly rituals and meditation sessions along the way. The full moon trek is a truly transformative spiritual experience.',
          itinerary: [
            {
              day: 1,
              title: 'Arrival at Kathgodam',
              activities: [
                'Drive to the base camp',
                'Welcome dinner and yatra preparations',
              ],
            },
            {
              day: 2,
              title: 'Start trek to Adi Kailash',
              activities: [
                'Trek through the valleys to reach the base of Adi Kailash',
                'Camping under the stars',
              ],
            },
            // Additional days...
          ],
          highlights: [
            'Full moon rituals and ceremonies',
            'Meditation under the full moon at Adi Kailash',
          ],
          inclusions: [
            'Full moon meditation sessions',
            'Accommodation in camps and lodges',
            'Meals throughout the trek (breakfast, lunch, dinner)',
            'Support staff and guide services',
            'Religious rituals and ceremonies',
          ],
          exclusions: [
            'Personal expenses like shopping and tips',
            'Pony services for carrying personal luggage',
            'Medical insurance and evacuation charges',
            'Meals outside the planned itinerary',
            'Personal trekking gear',
          ],
        },
      ],
    },
  ],
};

export const modules = {
  toolbar: [
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
    ['link', 'image', 'video'],
    ['clean'],
  ],
};

export const blogs = [
  {
    title: 'Exploring the Serene Beauty of Ladakh',
    publishDate: 'July 20, 2023',
    readTime: 12,
    tags: [
      { name: 'Travel', color: 'bg-red-400 text-white' },
      { name: 'Adventure', color: 'bg-green-400 text-white' },
      { name: 'Nature', color: 'bg-purple-400 text-white' },
    ],
    imageUrl:
      'https://images.pexels.com/photos/356365/pexels-photo-356365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Landscape view of Ladakh',
    content: `
        <h2>Introduction</h2>
        <p>Ladakh, often referred to as the 'Land of High Passes,' is a region that offers breathtaking landscapes, serene monasteries, and unique culture. Nestled between the mighty Himalayas and the Karakoram mountain range, Ladakh is a paradise for travelers seeking adventure, spirituality, and tranquility. This blog takes you on a journey through Ladakh's beautiful valleys, crystal-clear lakes, and magnificent monasteries, capturing the essence of what makes this destination so extraordinary.</p>
        <h2>The Majestic Monasteries</h2>
        <p>Ladakh is home to numerous monasteries that reflect the region's deep spiritual roots and vibrant Buddhist culture. The Thiksey Monastery, often compared to the Potala Palace in Lhasa, stands atop a hill and offers panoramic views of the Indus Valley. Hemis Monastery, the largest in Ladakh, is known for its annual Hemis Festival, where masked dances are performed to celebrate the birth of Guru Padmasambhava.</p>
        <p>The Diskit Monastery, located in the Nubra Valley, is famous for its 32-meter tall statue of Maitreya Buddha, which symbolizes peace and protection. Visiting these monasteries not only offers a glimpse into the rich cultural heritage of Ladakh but also provides a sense of tranquility and a chance to connect with oneself.</p>
      `,
  },
  {
    title: 'A Journey Through the Backwaters of Kerala',
    publishDate: 'August 5, 2023',
    readTime: 9,
    tags: [
      { name: 'Travel', color: 'bg-yellow-400 text-white' },
      { name: 'Culture', color: 'bg-green-400 text-white' },
      { name: 'Nature', color: 'bg-blue-400 text-white' },
    ],
    imageUrl:
      'https://images.pexels.com/photos/1459498/pexels-photo-1459498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Houseboat on the backwaters of Kerala',
    content: `
        <h2>Introduction</h2>
        <p>Kerala, known as 'God's Own Country,' is famous for its scenic backwaters, lush greenery, and vibrant culture. The backwaters, a network of interconnected canals, rivers, and lakes, stretch for hundreds of kilometers and are a major attraction for travelers from all over the world. A journey through these tranquil waters, aboard a traditional houseboat, offers a unique perspective on the lifestyle and culture of the people living along these waterways.</p>
        <h2>Houseboat Experience</h2>
        <p>Staying on a houseboat is one of the most memorable experiences one can have in Kerala. These houseboats, known locally as 'kettuvallams,' are equipped with all modern amenities and provide a comfortable stay amidst the natural beauty of the backwaters. As you glide through the serene waters, you'll witness lush paddy fields, coconut groves, and quaint villages. The boat ride also offers a chance to savor authentic Kerala cuisine, with freshly cooked seafood and other traditional delicacies served on board.</p>
      `,
  },
  {
    title: 'Discovering the Wonders of the Andaman Islands',
    publishDate: 'September 10, 2023',
    readTime: 10,
    tags: [
      { name: 'Travel', color: 'bg-teal-400 text-white' },
      { name: 'Beaches', color: 'bg-blue-400 text-white' },
      { name: 'Adventure', color: 'bg-orange-400 text-white' },
    ],
    imageUrl:
      'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Aerial view of a beach in the Andaman Islands',
    content: `
        <h2>Introduction</h2>
        <p>The Andaman Islands, a tropical paradise in the Bay of Bengal, are known for their pristine beaches, crystal-clear waters, and vibrant marine life. With their lush green rainforests, exotic wildlife, and an array of adventure activities, the Andaman Islands offer an unforgettable experience for nature lovers and thrill-seekers alike. In this blog, we will explore the stunning beaches, historical landmarks, and exciting water sports that make the Andaman Islands a perfect holiday destination.</p>
        <h2>Radhanagar Beach: A Slice of Paradise</h2>
        <p>Radhanagar Beach, located on Havelock Island, is one of the most famous beaches in the Andaman Islands and has been ranked among the best beaches in Asia. The soft white sands, turquoise waters, and breathtaking sunsets make this beach an ideal spot for relaxation and rejuvenation. Whether you want to take a leisurely stroll along the shore, swim in the clear waters, or simply soak in the beauty of the surroundings, Radhanagar Beach has something for everyone.</p>
      `,
  },
];
