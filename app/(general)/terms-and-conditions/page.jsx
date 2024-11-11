import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/ui/custom/Footer';
import Header from '@/components/ui/custom/Header';
import UserForm from '@/components/ui/custom/UserForm';

export default function Component() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-left">
                  Terms and Conditions for Kailash Yatra
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Welcome to Kailash Yatra. Please read these terms and
                  conditions carefully before using our services. By using our
                  website and booking our tours, you agree to these terms.
                </p>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="general">
                    <AccordionTrigger>General Information</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          Kailash Yatra offers various tour packages but does
                          not own or control hotels, airlines, or other service
                          providers.
                        </li>
                        <li>
                          We are not responsible for delays or improper services
                          offered by other agencies.
                        </li>
                        <li>
                          Our rates are valid for Indian Nationals. For other
                          nationalities, please contact our tour operators.
                        </li>
                        <li>
                          We advise all customers to review travel advisories
                          and warnings before booking.
                        </li>
                        <li>
                          We reserve the right to alter or withdraw any tour
                          package without prior notice.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="booking">
                    <AccordionTrigger>Booking and Payment</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          Tour packages are subject to availability at the time
                          of booking.
                        </li>
                        <li>
                          Prices may change based on actual availability of
                          services.
                        </li>
                        <li>
                          Full payment is required to confirm your booking.
                        </li>
                        <li>
                          We accept payments via credit/debit cards, net
                          banking, and UPI.
                        </li>
                        <li>
                          Additional taxes or charges may apply if there are
                          government revisions or increases in service costs.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="cancellation">
                    <AccordionTrigger>
                      Cancellation and Refunds
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          Cancellations must be made via email to
                          info@kailashyatra.com at least 7 working days before
                          departure.
                        </li>
                        <li>
                          Cancellation fees may apply and vary depending on the
                          tour package.
                        </li>
                        <li>
                          No refunds will be provided for unused services on the
                          tour.
                        </li>
                        <li>
                          Refund processing may take 15-90 days, depending on
                          the services involved.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="changes">
                    <AccordionTrigger>
                      Changes and Responsibilities
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          We may alter itineraries for customer convenience or
                          safety reasons.
                        </li>
                        <li>
                          We are not liable for changes due to unforeseen
                          circumstances like weather, political restrictions, or
                          other causes.
                        </li>
                        <li>
                          Customers are responsible for being punctual during
                          the tour.
                        </li>
                        <li>
                          We are not responsible for any loss, injury, or damage
                          during the tour.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="disclaimer">
                    <AccordionTrigger>Disclaimer</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Kailash Yatra is not accountable for third-party
                        obligations. We do not guarantee uninterrupted or
                        error-free services. By using our website and services,
                        you agree to assess all information provided and use it
                        at your own risk.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <p className="mt-4 text-sm text-gray-600">
                  By using our website and booking our tours, you acknowledge
                  that you have read, understood, and agree to be bound by these
                  terms and conditions.
                </p>
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
