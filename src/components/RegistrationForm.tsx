import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.guests) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Registration Successful! 🎉",
      description: `Thank you ${formData.name}! We look forward to celebrating with you.`,
    });

    setFormData({ name: "", email: "", guests: "" });
  };

  return (
    <section id="register" className="py-20 px-4 bg-muted/30">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-soft border-2 border-primary/10 bg-gradient-card">
          <CardHeader className="text-center">
            <CardTitle className="font-playfair text-4xl mb-2 text-primary">
              Join Our Celebration
            </CardTitle>
            <CardDescription className="text-lg">
              Please let us know if you'll be attending
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base">Your Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="h-12 border-2 focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-base">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="h-12 border-2 focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests" className="text-base">Number of Guests</Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  placeholder="How many will attend?"
                  className="h-12 border-2 focus:border-primary transition-colors"
                />
              </div>

              <Button 
                type="submit"
                className="w-full h-12 text-lg bg-primary hover:bg-primary/90 shadow-soft hover:shadow-glow transition-all"
              >
                Confirm Attendance
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
