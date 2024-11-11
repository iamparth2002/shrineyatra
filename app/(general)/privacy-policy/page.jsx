import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Footer from '@/components/ui/custom/Footer';
import Header from '@/components/ui/custom/Header';
import UserForm from '@/components/ui/custom/UserForm';

export default function PrivacyPolicy() {
  const privacyPolicyData = {
    lastUpdated: 'June 15, 2023',
    sections: [
      {
        title: 'Introduction',
        content:
          'Welcome to the Kailash Yatra privacy policy. This policy explains how we collect, use, disclose, and safeguard your information when you use our website or services related to Kailash Yatra pilgrimages.',
      },
      {
        title: 'Information We Collect',
        content:
          'We collect personal information that you provide to us, such as your name, email address, phone number, and passport details when you register for our Kailash Yatra services. We also collect non-personal information about your device and how you interact with our website.',
      },
      {
        title: 'How We Use Your Information',
        content:
          'We use your information to process your pilgrimage bookings, communicate with you about your trip, improve our services, and comply with legal obligations. We may also use your information to send you promotional materials about other spiritual journeys, but you can opt out of these communications at any time.',
      },
      {
        title: 'Information Sharing and Disclosure',
        content:
          'We may share your information with third-party service providers who help us operate our business, such as travel agencies and accommodation providers. We may also disclose your information if required by law or to protect our rights and the safety of our users.',
      },
      {
        title: 'Data Security',
        content:
          'We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.',
      },
      {
        title: 'Your Rights',
        content:
          'You have the right to access, correct, or delete your personal information. You can also object to the processing of your data or request a restriction on its use. To exercise these rights, please contact us using the information provided at the end of this policy.',
      },
      {
        title: 'Changes to This Policy',
        content:
          "We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the 'Last Updated' date at the top of this policy.",
      },
      {
        title: 'Contact Us',
        content:
          'If you have any questions about this privacy policy, please contact us at privacy@kailashyatra.com or write to us at: Kailash Yatra, R-112, East Vinod Nagar, New Delhi-110091, India.',
      },
    ],
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-left">
                  Privacy Policy
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Last Updated: {privacyPolicyData.lastUpdated}
                </p>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {privacyPolicyData.sections.map((section, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger className="text-lg font-semibold">
                        {section.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="mt-2 text-muted-foreground">
                          {section.content}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
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
