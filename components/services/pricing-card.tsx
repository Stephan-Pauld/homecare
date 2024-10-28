import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

export function PricingCard({ title, price, description, features, highlight = false }: PricingCardProps) {
  return (
    <Card className={`relative ${highlight ? 'border-primary shadow-lg' : 'border-border'}`}>
      {highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      <CardHeader className="text-center pt-8">
        <CardTitle className="text-2xl font-bold mb-2">{title}</CardTitle>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-muted-foreground">/hour</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <Button className="w-full mt-6" variant={highlight ? 'default' : 'outline'}>
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
}