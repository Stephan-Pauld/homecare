import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Award, Clock, Shield, Send } from 'lucide-react';
import { JobCard } from '@/components/career/job-card';
import { BenefitCard } from '@/components/career/benefit-card';
import { ApplicationForm } from '@/components/career/application-form';

const benefits = [
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Flexible Scheduling",
    description: "Work hours that fit your lifestyle with our flexible scheduling options"
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Professional Growth",
    description: "Ongoing training and development opportunities to advance your career"
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Meaningful Work",
    description: "Make a real difference in people's lives every single day"
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Supportive Environment",
    description: "Join a team that values and supports each member's success"
  }
];

const openPositions = [
  {
    title: "Personal Care Aide",
    type: "Full-time / Part-time",
    location: "Lethbridge, AB",
    description: "Join our team as a Personal Care Aide, providing essential support to clients in their homes."
  },
  {
    title: "Registered Nurse",
    type: "Full-time",
    location: "Lethbridge, AB",
    description: "We're seeking experienced RNs to provide skilled nursing care to our clients."
  },
  {
    title: "Care Coordinator",
    type: "Full-time",
    location: "Lethbridge, AB",
    description: "Help manage and coordinate care services for our clients in this key role."
  }
];

export default function CareerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3"
            alt="Caring professional with patient"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 text-white leading-tight animate-fade-up">
              Make a Difference
              <span className="block">Join Our Team</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed animate-fade-up animate-delay-100">
              We're looking for compassionate individuals who share our mission to improve the quality of life for those we serve. By 2050, 1.6 billion people will be over age 65 - that's over a billion reasons to care.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 animate-fade-up animate-delay-200"
            >
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Join Us?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the rewards of being part of our caring team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find your perfect role in our growing team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openPositions.map((position, index) => (
              <JobCard key={index} {...position} />
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Apply Now</h2>
              <p className="text-xl text-muted-foreground">
                Take the first step towards a rewarding career in healthcare. All staff must have valid CPR and First Aid Certificates.
              </p>
            </div>

            <ApplicationForm />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl mb-8 text-white/90">
              Guided by our core values, we're committed to providing exceptional care and support to seniors, helping them remain independent in their homes.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}