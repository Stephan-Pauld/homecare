import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Target, Eye, Star, Users, Award, Shield } from 'lucide-react';
import { StatCard } from '@/components/about/stat-card';
import { ValueCard } from '@/components/about/value-card';
import { TeamMember } from '@/components/about/team-member';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3"
            alt="Caring medical professional"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 text-white leading-tight animate-fade-up">
              Compassionate Care, 
              <span className="block">Personal Touch</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed animate-fade-up animate-delay-100">
              We create tailored healthcare plans that prioritize the cultural, physical, emotional, and mental well-being of every individual, ensuring they receive the support they need to thrive in the comfort of their home.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 animate-fade-up animate-delay-200"
            >
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard
              icon={<Users className="h-8 w-8 text-primary" />}
              number="500+"
              label="Happy Clients"
            />
            <StatCard
              icon={<Award className="h-8 w-8 text-primary" />}
              number="15+"
              label="Years Experience"
            />
            <StatCard
              icon={<Shield className="h-8 w-8 text-primary" />}
              number="100%"
              label="Client Satisfaction"
            />
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Commitment</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building trust through exceptional care and unwavering dedication to our clients' well-being
            </p>
          </div>
          <Tabs defaultValue="mission" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-primary/5">
              <TabsTrigger 
                value="mission" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white py-3"
              >
                Our Mission
              </TabsTrigger>
              <TabsTrigger 
                value="vision"
                className="data-[state=active]:bg-primary data-[state=active]:text-white py-3"
              >
                Our Vision
              </TabsTrigger>
              <TabsTrigger 
                value="values"
                className="data-[state=active]:bg-primary data-[state=active]:text-white py-3"
              >
                Our Values
              </TabsTrigger>
            </TabsList>
            <TabsContent value="mission" className="mt-8">
              <Card className="border-primary/10 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        To deliver compassionate, professional, and individualized home care that enhances the quality of life for our clients. We strive to be the beacon of hope and support for families seeking exceptional care for their loved ones.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="vision" className="mt-8">
              <Card className="border-primary/10 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Eye className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        To be the leading provider of personalized health care services, empowering individuals to live healthier, independent lives through customized healthcare solutions that address their unique needs and aspirations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="values" className="mt-8">
              <Card className="border-primary/10 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Star className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-primary">Our Values</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ValueCard title="Compassion" description="Treating every client with kindness and understanding" />
                        <ValueCard title="Excellence" description="Maintaining the highest standards of care and service" />
                        <ValueCard title="Personalization" description="Tailoring our care to individual needs and preferences" />
                        <ValueCard title="Collaboration" description="Working together with families and healthcare providers" />
                        <ValueCard title="Respect" description="Honoring the dignity and independence of each client" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals committed to providing exceptional care
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <TeamMember
              name="Efe"
              role="Care Coordinator"
              image="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3"
              bio="Hi, I'm Efe! I'm passionate about creating strong, supportive teams and building a sense of community wherever I go. I've always loved working with people, and I take pride in my ability to bring out the best in others through collaboration and teamwork."
            />
            <TeamMember
              name="Kindra"
              role="Client Care Manager"
              image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3"
              bio="I am Kindra, and caring for others has always been a big part of my life. I have a Bachelor's degree in Community Rehabilitation and Disabilities and a Juris Doctor, but my most meaningful experience comes from working directly with clients."
            />
            <TeamMember
              name="Tamika"
              role="Lead Care Provider"
              image="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3"
              bio="Hi, I'm Tamika. I found my calling in nursing through a deep-seated desire to provide compassionate care and support to those in need. My journey in the healthcare field has been shaped by a commitment to making a difference."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="container relative z-10">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl mb-8 text-white/90">
              Ready to learn more about our compassionate home care services? Get in touch with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Book a Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}