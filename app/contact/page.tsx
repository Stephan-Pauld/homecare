import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ContactForm } from '@/components/contact/contact-form';
import { ContactInfo } from '@/components/contact/contact-info';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-primary">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Have questions about our services? We're here to help. Reach out to us and let's discuss how we can support you or your loved ones.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
            <ContactInfo
              icon={<MapPin className="h-6 w-6" />}
              title="Office Address"
              details="Lethbridge, Alberta, Canada"
              link="https://maps.google.com/maps?q=Lethbridge%2C%20Alberta%2C%20Canada"
            />
            <ContactInfo
              icon={<Phone className="h-6 w-6" />}
              title="Phone Number"
              details="403-809-4900"
              link="tel:403-809-4900"
            />
            <ContactInfo
              icon={<Mail className="h-6 w-6" />}
              title="Email Address"
              details="info@affinityhomecare.ca"
              link="mailto:info@affinityhomecare.ca"
            />
            <ContactInfo
              icon={<Clock className="h-6 w-6" />}
              title="Working Hours"
              details="9 AM - 7 PM, Monday - Saturday"
            />
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Map */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Location</h2>
                <p className="text-muted-foreground">
                  Serving the Lethbridge community and surrounding areas with compassionate care.
                </p>
              </div>
              <div className="aspect-square lg:aspect-auto lg:h-[600px] rounded-lg overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=Lethbridge%2C%20Alberta%2C%20Canada&t=m&z=10&output=embed&iwloc=near"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book a free consultation to discuss your care needs and learn how we can help.
            </p>
            <Button size="lg" className="min-w-[200px]">
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}