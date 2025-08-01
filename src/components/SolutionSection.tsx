import { Camera, Volume2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  const solutions = [
    {
      icon: Camera,
      title: "AI Posture Tracking",
      description: "Advanced computer vision analyzes your movement through your webcam or phone camera"
    },
    {
      icon: Volume2,
      title: "Real-time Voice Instructions",
      description: "Instant audio feedback guides you to correct your form and posture"
    },
    {
      icon: FileText,
      title: "Doctor Integration",
      description: "Exercise videos and posture reports are automatically sent to your healthcare provider"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our{" "}
                <span className="medical-gradient bg-clip-text text-transparent">
                  AI-Powered
                </span>{" "}
                Solution
              </h2>
              <p className="text-xl text-muted-foreground">
                Sehat.PK combines cutting-edge AI technology with healthcare expertise to revolutionize home physiotherapy.
              </p>
            </div>
            
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 group animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <solution.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="medical" size="lg" className="animate-bounce-hover">
              Learn More About Our Technology
            </Button>
          </div>
          
          {/* Mockup */}
          <div className="relative animate-slide-in-right">
            <div className="medical-card p-8">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 text-center">
                <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse-slow">
                  <Camera className="h-16 w-16 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  AI Vision Analysis
                </h3>
                <p className="text-muted-foreground mb-6">
                  Real-time posture detection and movement analysis
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-medical-success/10 rounded-lg p-3">
                    <div className="text-medical-success font-semibold">✓ Correct</div>
                    <div className="text-muted-foreground">Posture</div>
                  </div>
                  <div className="bg-destructive/10 rounded-lg p-3">
                    <div className="text-destructive font-semibold">⚠ Adjust</div>
                    <div className="text-muted-foreground">Angle</div>
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

export default SolutionSection;