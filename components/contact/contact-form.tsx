import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

export function ContactForm() {
  return (
    <Card>
      <CardContent className="p-6">
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">First Name *</label>
              <Input placeholder="Enter your first name" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Last Name *</label>
              <Input placeholder="Enter your last name" required />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Email *</label>
            <Input type="email" placeholder="Enter your email" required />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Phone Number *</label>
            <Input type="tel" placeholder="Enter your phone number" required />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Message *</label>
            <Textarea 
              placeholder="How can we help you?"
              className="min-h-[150px]"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}