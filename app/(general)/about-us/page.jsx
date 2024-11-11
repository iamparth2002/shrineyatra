import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import Footer from '@/components/ui/custom/Footer';
import Header from '@/components/ui/custom/Header';
import UserForm from '@/components/ui/custom/UserForm';

export default function KailashYatraAbout() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <Card className="w-full">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-primary text-left">
                  About The Kailash Yatra
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 text-gray-700 text-justify">
                  <p>
                    When it comes to finding the best travel agency and tour
                    operator for any trip, The Kailash Yatra stands at the
                    forefront. With a rich experience spanning over 7 years,
                    Kailash Yatra has dedicated itself to the noble cause of
                    helping pilgrims fulfill their long-standing desire to
                    complete their pilgrimage. What sets us apart is our
                    commitment to providing the most cost-effective packages
                    without compromising on quality or devotion.
                  </p>

                  <p>
                    The Kailash Yatra is a registered company under the Indian
                    Government, renowned for conducting pilgrimage travel
                    packages with unparalleled service. Our head office is
                    strategically located in Delhi, and we have expanded our
                    reach with branch offices in Haridwar, Prayagraj, Jaipur,
                    Varanasi, Mumbai, and Ahmedabad. This extensive network
                    allows us to serve pilgrims from various parts of the
                    country with ease and efficiency.
                  </p>

                  <p>
                    At The Kailash Yatra, we understand that embarking on a
                    difficult journey like the Kailash Yatra requires
                    professional help coupled with devotion and dedication. This
                    is where our expertise truly shines. Every year, we assist
                    thousands of pilgrims in realizing their lifetime dream of
                    undertaking spiritual trips, including the revered Kailash
                    Mansarovar Yatra. Our team's deep understanding of the
                    spiritual significance of these journeys, combined with our
                    logistical expertise, ensures a seamless and fulfilling
                    experience for every pilgrim.
                  </p>

                  <p>
                    Our offerings extend beyond the Kailash Yatra. We are famous
                    for organizing a wide array of spiritual tours, including
                    the Chardham Yatra in Uttarakhand, Amarnath Yatra, Nau Devi
                    Yatra, Manimahesh Yatra, Shrikhand Mahadev Yatra, Kinnaur
                    Kailash, Adi Kailash, Varanasi Ayodhya Prayagraj Yatra,
                    Haridwar Rishikesh Yatra, Vaishno Devi Yatra, Dwarka Somnath
                    Yatra, Pashupatinath Yatra, and Muktinath Yatra.
                    Additionally, we offer comprehensive trips to the spiritual
                    heartlands of Uttarakhand, Himachal Pradesh, and Kashmir.
                  </p>

                  <p>
                    What makes The Kailash Yatra cost-effective compared to others
                    in the industry is our strong foothold in the travel sector.
                    Our fair dealing and operational policies have allowed us to
                    forge strong partnerships within the industry. These
                    relationships enable us to secure excellent deals with our
                    travel partners, the benefits of which we pass on directly
                    to our clients, ensuring you get the best value for your
                    spiritual journey.
                  </p>

                  <p>
                    One of our key strengths is our unwavering commitment to
                    customer service. We offer round-the-clock assistance, with
                    our dedicated travel consultants working tirelessly to
                    support you at any time during your spiritual and religious
                    yatra. Our seamless support network is designed to ensure
                    that you face no difficulties or inconveniences throughout
                    your journey, allowing you to focus entirely on your
                    spiritual experience.
                  </p>

                  <p>
                    When you choose Kailash Yatra for your Kailash Mansarovar
                    Yatra or any other spiritual expedition, you're entrusting
                    your journey to the best in the business. We pride ourselves
                    on being the top travel agent in Delhi and the premier tour
                    operator in Haridwar and Rishikesh for Uttarakhand tour
                    packages. Our commitment to excellence and our deep-rooted
                    understanding of these sacred journeys set us apart in the
                    industry.
                  </p>

                  <p>
                    At Kailash Yatra, we stand by every word of our commitment.
                    Our track record speaks for itself, and we assure you that
                    we never disappoint. We invite you to explore our website or
                    reach out to our travel consultants to learn more about our
                    attractive pilgrimage tour packages and detailed travel
                    schedules. Let us help you embark on a transformative
                    religious and spiritual journey to connect with the divine.
                  </p>

                  <p>
                    Choose Kailash Yatra for your Kailash Mansarovar Yatra, and
                    let us guide you on a path of spiritual enlightenment and
                    self-discovery. With our expertise, dedication, and
                    comprehensive support, your journey to the abode of Lord
                    Shiva will be an unforgettable experience, filled with
                    comfort, safety, and profound spiritual significance. Get
                    ready to embark on a life-changing pilgrimage with Kailash
                    Yatra – your trusted partner in spiritual journeys.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="lg:w-1/3">
            <UserForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
