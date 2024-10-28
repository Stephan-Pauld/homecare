import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Service {
  name: string;
  price: string;
  unit: string;
}

interface AddOnServiceProps {
  title: string;
  services: Service[];
}

export function AddOnService({ title, services }: AddOnServiceProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {services.map((service, index) => (
            <li key={index} className="flex justify-between items-center">
              <span className="text-muted-foreground">{service.name}</span>
              <span className="font-medium">
                ${service.price}/{service.unit}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}