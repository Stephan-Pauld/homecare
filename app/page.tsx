import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Home, Clock, Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3"
            alt="Caring nurse with elderly patient"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Compassionate Home Care for Your Loved Ones
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
              At Affinity Home Care, we provide personalized care services that promote independence, dignity, and quality of life in the comfort of home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg bg-primary hover:bg-primary/90">
                Book a Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-white/10 hover:bg-white/20 text-white border-white">
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive care solutions tailored to meet your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Heart className="h-12 w-12 text-primary" />}
              title="Personal Care & Assistance"
              description="Our dedicated caregivers provide compassionate support with daily activities, including bathing, dressing, mobility assistance, and medication reminders."
            />
            <ServiceCard
              icon={<Home className="h-12 w-12 text-primary" />}
              title="Companionship & Social Support"
              description="We believe that emotional health is just as important as physical care. Our companionship services offer friendly conversation and meaningful engagement."
            />
            <ServiceCard
              icon={<Clock className="h-12 w-12 text-primary" />}
              title="Home Maintenance & Errands"
              description="We take care of everyday tasks such as light housekeeping, laundry, meal preparation, and running errands."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <ContactInfo icon={<Phone className="h-6 w-6" />} text="403-809-4900" />
                <ContactInfo icon={<Mail className="h-6 w-6" />} text="Info@affinityhomecare.ca" />
                <ContactInfo icon={<MapPin className="h-6 w-6" />} text="Lethbridge, Alberta, Canada" />
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-primary">Book a Free Consultation</h3>
              <Button size="lg" className="w-full">
                Schedule Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="p-6">
      <CardContent className="space-y-4">
        {icon}
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function ContactInfo({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-4">
      {icon}
      <p className="text-xl">{text}</p>
    </div>
  );
}