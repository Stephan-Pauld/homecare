import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  details: string;
  link?: string;
}

export function ContactInfo({ icon, title, details, link }: ContactInfoProps) {
  const content = (
    <Card className="bg-white">
      <CardContent className="p-6 text-center">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <div className="text-primary">{icon}</div>
        </div>
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{details}</p>
      </CardContent>
    </Card>
  );

  if (link) {
    return (
      <Link href={link} className="block hover:scale-105 transition-transform">
        {content}
      </Link>
    );
  }

  return content;
}