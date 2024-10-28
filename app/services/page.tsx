import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Heart, Home, Car, Clock, Shield } from 'lucide-react';
import { ServiceCard } from '@/components/services/service-card';
import { PricingCard } from '@/components/services/pricing-card';
import { AddOnService } from '@/components/services/add-on-service';

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3"
            alt="Professional caregiver with client"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 text-white leading-tight animate-fade-up">
              Comprehensive Care Services
              <span className="block">Tailored to Your Needs</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed animate-fade-up animate-delay-100">
              From personal care to companionship, we offer a full range of home care services designed to help your loved ones live comfortably and independently.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 animate-fade-up animate-delay-200"
            >
              View Our Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive care solutions tailored to meet your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard
              icon={<Heart className="h-12 w-12 text-primary" />}
              title="Personal Care & Assistance"
              description="Our dedicated caregivers provide compassionate support with daily activities, including bathing, dressing, mobility assistance, and medication reminders, ensuring your loved one's comfort and well-being."
              features={[
                "Personal hygiene assistance",
                "Medication reminders",
                "Mobility support",
                "Dressing assistance"
              ]}
            />
            <ServiceCard
              icon={<Clock className="h-12 w-12 text-primary" />}
              title="Companionship & Social Support"
              description="We believe that emotional health is just as important as physical care. Our companionship services offer friendly conversation, shared activities, and meaningful engagement to brighten each day."
              features={[
                "Friendly conversation",
                "Social activities",
                "Hobby assistance",
                "Emotional support"
              ]}
            />
            <ServiceCard
              icon={<Home className="h-12 w-12 text-primary" />}
              title="Home Maintenance & Errands"
              description="We take care of everyday tasks such as light housekeeping, laundry, meal preparation, and running errands so your loved one can focus on enjoying a safe and comfortable home environment."
              features={[
                "Light housekeeping",
                "Laundry services",
                "Meal preparation",
                "Grocery shopping"
              ]}
            />
            <ServiceCard
              icon={<Car className="h-12 w-12 text-primary" />}
              title="Transportation & Mobility Services"
              description="From appointments and errands to social outings, we provide safe and reliable transportation to help your loved one stay connected and active within the community."
              features={[
                "Medical appointments",
                "Shopping trips",
                "Social outings",
                "Community events"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the care package that best fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <PricingCard
              title="Hourly Standard Care"
              price="33.51"
              description="Perfect for short-term or occasional care needs"
              features={[
                "Flexible scheduling",
                "No long-term commitment",
                "Compassionate support",
                "Daily activity assistance"
              ]}
            />
            <PricingCard
              title="Bronze Package"
              price="30"
              description="10 hours/week of consistent care"
              features={[
                "Regular caregiver",
                "Personalized care plan",
                "Weekly scheduling",
                "Progress reports"
              ]}
              highlight
            />
            <PricingCard
              title="Silver Package"
              price="28"
              description="20 hours/week of comprehensive care"
              features={[
                "Dedicated caregiver",
                "Care plan reviews",
                "Family updates",
                "Enhanced support"
              ]}
            />
            <PricingCard
              title="Gold Package"
              price="26"
              description="30+ hours/week of premium care"
              features={[
                "Priority scheduling",
                "Care team leader",
                "Monthly assessments",
                "24/7 support access"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enhance your care plan with these specialized services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AddOnService
              title="Home & Yard"
              services={[
                { name: "Snow Removal", price: "20", unit: "visit" },
                { name: "Home Cleaning", price: "25", unit: "hour" }
              ]}
            />
            <AddOnService
              title="Daily Living"
              services={[
                { name: "Grocery Shopping", price: "25", unit: "hour" },
                { name: "Meal Preparation", price: "30", unit: "hour" }
              ]}
            />
            <AddOnService
              title="Transportation"
              services={[
                { name: "Transportation Assistance", price: "30", unit: "hour" }
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Get Started with a Free Consultation</h2>
            <p className="text-xl mb-8 text-white/90">
              Choosing the right care plan can feel overwhelming, but we're here to guide you. Book a free consultation today to create a custom care plan that matches your family's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}