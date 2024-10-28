import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock } from 'lucide-react';

interface JobCardProps {
  title: string;
  type: string;
  location: string;
  description: string;
}

export function JobCard({ title, type, location, description }: JobCardProps) {
  return (
    <Card className="group hover:border-primary/30 transition-colors">
      <CardContent className="p-6 space-y-6">
        <div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{type}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
          </div>
          <p className="text-muted-foreground mb-6">{description}</p>
        </div>
        <Button className="w-full">Apply Now</Button>
      </CardContent>
    </Card>
  );
}