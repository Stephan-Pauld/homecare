import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  slug: string;
}

export function BlogCard({ title, excerpt, date, image, category, slug }: BlogCardProps) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-sm font-medium bg-primary text-white rounded-full">
            {category}
          </span>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <CalendarDays className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {excerpt}
        </p>
        <Link href={`/resources/${slug}`}>
          <Button variant="outline" className="w-full">
            Read More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}