import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const DemoPreviewSection = () => {
  const [currentDemo, setCurrentDemo] = useState(0);
  
  const demos = [
    {
      title: "Real-time Posture Analysis",
      description: "Watch how our AI tracks and corrects movement in real-time",
      placeholder: "Demo 1: AI analyzing shoulder exercises"
    },
    {
      title: "Voice Guidance System",
      description: "Experience personalized audio feedback during exercises",
      placeholder: "Demo 2: Voice instructions for proper form"
    },
    {
      title: "Doctor Dashboard",
      description: "See how healthcare providers monitor patient progress",
      placeholder: "Demo 3: Healthcare provider interface"
    }
  ];

  const nextDemo = () => {
    setCurrentDemo((prev) => (prev + 1) % demos.length);
  };

  const prevDemo = () => {
    setCurrentDemo((prev) => (prev - 1 + demos.length) % demos.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See{" "}
            <span className="text-primary">Sehat.PK</span>{" "}
            in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our AI-powered physiotherapy platform through interactive demos
          </p>
        </div>
        
        {/* Demo Carousel */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="medical-card overflow-hidden animate-scale-in">
            <div className="relative aspect-video bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
              {/* Demo Content */}
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto animate-pulse-slow">
                  <Play className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {demos[currentDemo].title}
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  {demos[currentDemo].placeholder}
                </p>
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevDemo}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-card rounded-full shadow-lg flex items-center justify-center hover:bg-accent transition-colors animate-bounce-hover"
              >
                <ChevronLeft className="h-6 w-6 text-foreground" />
              </button>
              <button
                onClick={nextDemo}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-card rounded-full shadow-lg flex items-center justify-center hover:bg-accent transition-colors animate-bounce-hover"
              >
                <ChevronRight className="h-6 w-6 text-foreground" />
              </button>
            </div>
            
            {/* Demo Info */}
            <div className="p-6 bg-card">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {demos[currentDemo].title}
              </h3>
              <p className="text-muted-foreground">
                {demos[currentDemo].description}
              </p>
            </div>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {demos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentDemo(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentDemo ? 'bg-primary' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* YouTube Placeholder */}
        <div className="max-w-3xl mx-auto animate-fade-up">
          <div className="medical-card overflow-hidden">
            <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto animate-pulse-slow">
                  <Play className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Full Product Demo
                </h3>
                <p className="text-muted-foreground">
                  Complete walkthrough of Sehat.PK platform
                </p>
                <Button variant="hero" size="lg" className="animate-bounce-hover">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo Video
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoPreviewSection;