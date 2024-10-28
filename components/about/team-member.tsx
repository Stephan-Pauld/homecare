import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export function TeamMember({ name, role, image, bio }: TeamMemberProps) {
  return (
    <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 group">
      <div className="relative h-72">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-1">{name}</h3>
          <p className="text-white/90">{role}</p>
        </div>
      </div>
      <CardContent className="p-6">
        <p className="text-muted-foreground leading-relaxed">{bio}</p>
      </CardContent>
    </Card>
  );
}