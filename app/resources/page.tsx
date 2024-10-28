import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BlogCard } from '@/components/resources/blog-card';
import { CalendarDays } from 'lucide-react';

const blogPosts = [
  {
    title: "Ensuring Peace of Mind: The Safety Measures in Place at Our Care Home",
    excerpt: "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments…",
    date: "May 21, 2023",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3",
    category: "Health",
    slug: "ensuring-peace-of-mind"
  },
  {
    title: "Celebrating Life's Journey: Enriching Activities for Seniors in Our Care",
    excerpt: "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments…",
    date: "May 21, 2023",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3",
    category: "Activities",
    slug: "celebrating-life-journey"
  },
  {
    title: "A Home Away from Home: Our Care Home's Warm and Welcoming Atmosphere",
    excerpt: "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments…",
    date: "May 21, 2023",
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3",
    category: "Nursing",
    slug: "home-away-from-home"
  },
  {
    title: "Providing Compassionate Care: Understanding the Needs of Elderly Residents",
    excerpt: "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments…",
    date: "May 21, 2023",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3",
    category: "Health",
    slug: "providing-compassionate-care"
  },
  {
    title: "Enhancing Quality of Life: How Our Care Home Promotes Well-being",
    excerpt: "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments…",
    date: "May 21, 2023",
    image: "https://images.unsplash.com/photo-1581579438747-104c53e81cd4?ixlib=rb-4.0.3",
    category: "Events",
    slug: "enhancing-quality-of-life"
  },
  {
    title: "Creating a Safe and Supportive Environment: Our Commitment to Elderly Care",
    excerpt: "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments…",
    date: "May 21, 2023",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3",
    category: "Health",
    slug: "creating-safe-environment"
  }
];

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Resources & Insights
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Stay informed with the latest insights, tips, and news about elderly care, wellness, and creating a supportive environment for your loved ones.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <Tabs defaultValue="all" className="space-y-8">
            <TabsList className="bg-white p-1 space-x-2">
              <TabsTrigger value="all">All Posts</TabsTrigger>
              <TabsTrigger value="health">Health</TabsTrigger>
              <TabsTrigger value="activities">Activities</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="nursing">Nursing</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <BlogCard key={index} {...post} />
                ))}
              </div>
            </TabsContent>

            {['health', 'activities', 'events', 'nursing'].map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts
                    .filter((post) => post.category.toLowerCase() === category)
                    .map((post, index) => (
                      <BlogCard key={index} {...post} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest insights and updates about elderly care and wellness.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}