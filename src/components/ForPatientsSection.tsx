import { Smartphone, Mic, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ForPatientsSection = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Intuitive Interface",
      description: "Easy-to-follow UI designed for all ages and technical abilities"
    },
    {
      icon: Mic,
      title: "Voice Guidance",
      description: "Real-time audio instructions help you maintain perfect form"
    },
    {
      icon: CheckCircle,
      title: "Confidence Building",
      description: "Remove uncertainty about exercise form with instant feedback"
    }
  ];

  return (
    <section className="py-20 bg-medical-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                For{" "}
                <span className="text-primary">Patients</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Experience personalized physiotherapy guidance from the comfort of your home with our patient-focused design.
              </p>
            </div>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 group animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                What Patients Say
              </h3>
              <blockquote className="text-muted-foreground italic">
                "The AI feedback helped me recover 30% faster than my previous injury. I never felt unsure about my exercises."
              </blockquote>
              <div className="mt-3 text-sm font-medium text-primary">
                - Sarah M., Knee Rehabilitation Patient
              </div>
            </div>
            
            <Button variant="medical" size="lg" className="animate-bounce-hover">
              Start Your Recovery Journey
            </Button>
          </div>
          
          {/* Character Illustration */}
          <div className="relative animate-slide-in-right">
            <div className="medical-card p-8">
              <div className="bg-gradient-to-br from-accent/10 to-primary/5 rounded-xl p-8 text-center">
                <div className="w-40 h-40 bg-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse-slow">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                    <Smartphone className="h-12 w-12 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Your AI Exercise Coach
                </h3>
                
                <div className="space-y-3">
                  <div className="bg-medical-success/10 rounded-lg p-3 text-left">
                    <div className="text-sm font-medium text-medical-success">✓ Perfect form detected</div>
                    <div className="text-xs text-muted-foreground">Keep up the great work!</div>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-3 text-left">
                    <div className="text-sm font-medium text-primary">💬 "Raise your arm slightly higher"</div>
                    <div className="text-xs text-muted-foreground">Real-time guidance</div>
                  </div>
                  <div className="bg-accent/20 rounded-lg p-3 text-left">
                    <div className="text-sm font-medium text-foreground">📊 Session Complete</div>
                    <div className="text-xs text-muted-foreground">Report sent to Dr. Smith</div>
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

export default ForPatientsSection;