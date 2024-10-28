import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Upload } from 'lucide-react';

export function ApplicationForm() {
  return (
    <Card>
      <CardContent className="p-6">
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">First Name</label>
              <Input placeholder="Enter your first name" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Last Name</label>
              <Input placeholder="Enter your last name" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input type="email" placeholder="Enter your email" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Phone</label>
            <Input type="tel" placeholder="Enter your phone number" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Position Applying For</label>
            <Input placeholder="Select position" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Cover Letter</label>
            <Textarea placeholder="Tell us why you'd be a great fit..." />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Resume</label>
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground mb-2">
                Drag and drop your resume here, or click to browse
              </p>
              <input type="file" className="hidden" />
              <Button variant="outline" size="sm">Browse Files</Button>
            </div>
          </div>

          <Button type="submit" className="w-full">Submit Application</Button>
        </form>
      </CardContent>
    </Card>
  );
}