import { Card, CardContent } from '@/components/ui/card';

interface StatCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
}

export function StatCard({ icon, number, label }: StatCardProps) {
  return (
    <Card className="text-center p-6 border-primary/10 hover:border-primary/20 transition-colors">
      <CardContent className="space-y-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
          {icon}
        </div>
        <div>
          <p className="text-3xl font-bold text-primary">{number}</p>
          <p className="text-muted-foreground">{label}</p>
        </div>
      </CardContent>
    </Card>
  );
}