import Image from "next/image"
import { Star, Clock, MapPin, Tag, Phone, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const tourData = {
  title: "Bali - Nusa Penida Island Tour",
  duration: "4 days - 3 nights",
  location: "Bali, Indonesia",
  tags: ["Adventure", "Culture/Nature", "Popular"],
  rating: 4.72,
  reviews: 60,
  price: 572,
  currency: "USD",
  images: [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
  ],
  overview: [
    {
      title: "Travel Style: 1-to-Foursomethings",
      description: "Fast, fresh, and fun adventures that never slow down, made for young, budget-minded travellers.",
    },
    {
      title: "Service Level: Basic",
      description: "Simple and clean hotels and hostels; affordable public and private transport; lots of optional activities.",
    },
    {
      title: "Physical Rating: 2 - Light",
      description: "Light walking and hiking suitable for most fitness levels. Nothing too challenging.",
    },
    {
      title: "Trip Type: Small Group",
      description: "Small group experience; Max 20, avg 12.",
    },
  ],
  description: "Now's the time to explore Bali - Nusa Penida Island on your terms with this tour that's affordable for young travellers. Watch the sunset through the Beach of Bali, stretch out on white-sand beaches, drift through the tranquil backwaters, and rise at dawn to see the sunrise — trust us, it's worth not hitting snooze. This scenic tour offers a quick yet intimate introduction to the diversity of south India. Unwind with free time or some yoga, meet the local people, and spend the night with a local family. How's that sound for an authentic cultural experience?",
  itinerary: [
    {
      day: 1,
      title: "AIRPORT - CITY TOUR",
      activities: [
        "Meet and greet Service upon your arrival at Ngurah Rai International Airport",
        "Lunch at local restaurant",
        "Nusa Dua to see Water blow",
        "Uluwatu Temple",
        "Kecak dance (Optional)",
        "Dinner Sea food at Jimbaran Beach",
        "Check-in hotel & Free program"
      ]
    },
    {
      day: 2,
      title: "NUSA PENIDA ISLAND TOUR",
      activities: [
        "Breakfast at the Hotel",
        "Take you to Sanur Harbor and Cruise to Penida Island by Boat",
        "Arrive at Toyapakeh Harbor Nusa Penida",
        "Panoramic Kelingking Beach - Angel Billabong - Broken Beach",
        "Lunch at local restaurant",
        "Back to Sanur Harbour",
        "Shopping at Krisna souvenir shop",
        "Dinner at local restaurant & Back to the Hotel"
      ]
    },
    {
      day: 3,
      title: "BLOOM GARDEN - BERATAN LAKE - TANAH LOT TOUR",
      activities: [
        "Breakfast at the Hotel",
        "Bedugul Area",
        "Bloom Garden",
        "Ulun Danu Temple at Lake Beratan Side",
        "Lunch at local restaurant",
        "Tanah Lot Temple",
        "Dinner at local restaurant & Back to the Hotel"
      ]
    },
    {
      day: 4,
      title: "HOTEL - AIRPORT",
      activities: [
        "Breakfast at the Hotel & Check-out",
        "Last minute shopping",
        "Lunch at local restaurant",
        "Drop you to the Airport and tour is end"
      ]
    }
  ],
  highlights: [
    "Explore the iconic Kelingking Beach",
    "Visit the majestic Uluwatu Temple",
    "Experience the traditional Kecak dance",
    "Cruise to Nusa Penida Island",
    "Discover the beauty of Tanah Lot Temple"
  ],
  relatedBlogs: [
    {
      title: "Top 10 Instagram Spots in Bali",
      image: "/placeholder.svg?height=100&width=150",
      link: "#"
    },
    {
      title: "Best Local Cuisines to Try in Nusa Penida",
      image: "/placeholder.svg?height=100&width=150",
      link: "#"
    }
  ],
  relatedTrips: [
    {
      title: "The Inca Trail",
      duration: "7 Day Tour",
      price: 1104,
      image: "/placeholder.svg?height=200&width=300",
      link: "#"
    },
    {
      title: "Peru: Machu Picchu Adventure",
      duration: "14 Day Tour",
      price: 1789,
      image: "/placeholder.svg?height=200&width=300",
      link: "#"
    }
  ]
}

export default function TourDetailPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="md:flex md:space-x-8">
        <div className="md:w-2/3">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{tourData.title}</h1>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{tourData.duration}</span>
              <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" />{tourData.location}</span>
              <span className="flex items-center"><Tag className="w-4 h-4 mr-1" />{tourData.tags.join(", ")}</span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 mb-6">
            <div className="col-span-2 row-span-2">
              <Image src={tourData.images[0]} alt="Tour" width={600} height={400} className="rounded-lg object-cover w-full h-full" />
            </div>
            {tourData.images.slice(1).map((img, index) => (
              <Image key={index} src={img} alt={`Tour ${index + 2}`} width={200} height={200} className="rounded-lg object-cover w-full h-full" />
            ))}
          </div>
          <Tabs defaultValue="overview" className="mb-6">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
              <TabsTrigger value="highlights">Highlights</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="grid md:grid-cols-2 gap-4">
                {tourData.overview.map((item, index) => (
                  <div key={index} className="border p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-gray-700">{tourData.description}</p>
            </TabsContent>
            <TabsContent value="itinerary">
              <div className="space-y-6">
                {tourData.itinerary.map((day, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-2">
                          {String(day.day).padStart(2, '0')}
                        </span>
                        {day.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {day.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-sm text-gray-600">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="highlights">
              <ul className="space-y-2">
                {tourData.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
          <div className="md:hidden mb-8">
            <PriceCard tourData={tourData} />
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Related Blogs</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {tourData.relatedBlogs.map((blog, index) => (
                <a key={index} href={blog.link} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <Image src={blog.image} alt={blog.title} width={150} height={100} className="rounded-lg" />
                  <h3 className="font-semibold">{blog.title}</h3>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Other Related Trips</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {tourData.relatedTrips.map((trip, index) => (
                <a key={index} href={trip.link} className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <Image src={trip.image} alt={trip.title} width={300} height={200} className="rounded-lg mb-2" />
                  <h3 className="font-semibold">{trip.title}</h3>
                  <p className="text-sm text-gray-600">{trip.duration}</p>
                  <p className="font-bold mt-2">${trip.price} USD</p>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden md:block md:w-1/3">
          <PriceCard tourData={tourData} />
        </div>
      </div>
    </div>
  )
}

function PriceCard({ tourData }) {
  return (
    <div className="border rounded-lg p-6 sticky top-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-2xl font-bold">${tourData.price} {tourData.currency}</p>
        </div>
        <div className="flex items-center">
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          <span className="ml-1 font-semibold">{tourData.rating}</span>
          <span className="ml-1 text-sm text-gray-500">({tourData.reviews} reviews)</span>
        </div>
      </div>
      <div className="space-y-4 mt-6">
        <h3 className="font-semibold text-lg">Contact Us</h3>
        <Button className="w-full flex items-center justify-center" variant="outline">
          <Phone className="w-4 h-4 mr-2" />
          Call Support
        </Button>
        <Button className="w-full flex items-center justify-center" variant="outline">
          <Mail className="w-4 h-4 mr-2" />
          Email Us
        </Button>
        <Button className="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white">
          <MessageCircle className="w-4 h-4 mr-2" />
          WhatsApp
        </Button>
      </div>
    </div>
  )
}