import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Mail, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    if (formData.name && formData.email && formData.role && formData.message) {
      setIsSubmitted(true);
      toast({
        title: "Thank you for your interest!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", role: "", message: "" });
      }, 3000);
    } else {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to submit the form.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center animate-scale-in">
            <div className="medical-card p-12">
              <div className="w-20 h-20 bg-medical-success/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
                <CheckCircle className="h-10 w-10 text-medical-success" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Thank You!
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Your message has been received. We'll contact you within 24 hours to discuss how Sehat.PK can help.
              </p>
              <div className="text-sm text-muted-foreground">
                Redirecting back to form in a few seconds...
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join the{" "}
            <span className="text-primary">Beta Program</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be among the first to experience AI-powered physiotherapy. Get early access and help shape the future of home rehabilitation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="medical-card p-8 animate-slide-in-left">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Get Early Access
              </h3>
              <p className="text-muted-foreground">
                Fill out the form below and we'll reach out with beta access details.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter your full name"
                  className="animate-bounce-hover focus:scale-105 transition-transform"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter your email"
                  className="animate-bounce-hover focus:scale-105 transition-transform"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="role">I am a...</Label>
                <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
                  <SelectTrigger className="animate-bounce-hover focus:scale-105 transition-transform">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="patient">Patient</SelectItem>
                    <SelectItem value="doctor">Healthcare Provider</SelectItem>
                    <SelectItem value="clinic">Clinic Administrator</SelectItem>
                    <SelectItem value="researcher">Researcher</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us about your interest in Sehat.PK..."
                  rows={4}
                  className="animate-bounce-hover focus:scale-105 transition-transform"
                />
              </div>
              
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full animate-bounce-hover"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Submit Application
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="medical-card p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Direct Contact
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Have specific questions? Reach out to us directly.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">General Inquiries:</span>
                      <br />
                      <a href="mailto:hello@sehat.pk" className="text-primary hover:underline">
                        hello@sehat.pk
                      </a>
                    </div>
                    <div>
                      <span className="font-medium">Healthcare Partnerships:</span>
                      <br />
                      <a href="mailto:partnerships@sehat.pk" className="text-primary hover:underline">
                        partnerships@sehat.pk
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="medical-card p-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                What to Expect
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-medical-success mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    Response within 24 hours
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-medical-success mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    Personalized demo session
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-medical-success mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    Early access to beta features
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-medical-success mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    Ongoing support and training
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;