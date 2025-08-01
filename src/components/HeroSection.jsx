import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="medical-hero-bg min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                AI-Powered{" "}
                <span className="medical-gradient bg-clip-text text-transparent">
                  Physiotherapy
                </span>{" "}
                At Home
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                Guiding your recovery with real-time feedback and doctor-connected monitoring.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="hero" 
                className="text-lg px-8 py-6 animate-bounce-hover"
              >
                Join Beta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 animate-bounce-hover"
              >
                <Play className="mr-2 h-5 w-5" />
                See How It Works
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center animate-scale-in">
                <div className="text-2xl md:text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center animate-scale-in">
                <div className="text-2xl md:text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">AI Monitoring</div>
              </div>
              <div className="text-center animate-scale-in">
                <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Patients Helped</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={heroImage} 
                alt="AI-Powered Physiotherapy At Home"
                className="w-full h-auto object-cover animate-scale-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-card rounded-full p-4 shadow-lg animate-pulse-slow">
              <div className="w-3 h-3 bg-medical-success rounded-full"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card rounded-full p-6 shadow-lg animate-bounce-hover">
              <div className="text-sm font-semibold text-primary">AI Active</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;