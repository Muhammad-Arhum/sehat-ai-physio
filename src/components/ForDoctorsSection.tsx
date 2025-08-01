import { TrendingUp, FileText, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const ForDoctorsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Improved Patient Compliance",
      description: "Real-time monitoring ensures patients follow their prescribed routines"
    },
    {
      icon: FileText,
      title: "Automated Reports",
      description: "Receive detailed session videos and progress reports automatically"
    },
    {
      icon: Activity,
      title: "Remote Monitoring",
      description: "Track patient recovery status and adjust treatment plans remotely"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Infographic */}
          <div className="relative animate-slide-in-left">
            <div className="medical-card p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Doctor Dashboard
                </h3>
                <div className="w-full h-64 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                    <div className="bg-card rounded-lg p-4 shadow-sm">
                      <div className="text-sm text-muted-foreground">Compliance</div>
                      <div className="text-2xl font-bold text-medical-success">94%</div>
                    </div>
                    <div className="bg-card rounded-lg p-4 shadow-sm">
                      <div className="text-sm text-muted-foreground">Sessions</div>
                      <div className="text-2xl font-bold text-primary">28</div>
                    </div>
                    <div className="bg-card rounded-lg p-4 shadow-sm">
                      <div className="text-sm text-muted-foreground">Progress</div>
                      <div className="text-2xl font-bold text-medical-success">+15%</div>
                    </div>
                    <div className="bg-card rounded-lg p-4 shadow-sm">
                      <div className="text-sm text-muted-foreground">Alerts</div>
                      <div className="text-2xl font-bold text-destructive">2</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-8 animate-slide-in-right">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                For{" "}
                <span className="text-primary">Healthcare Providers</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Enhance patient outcomes with data-driven insights and continuous monitoring capabilities.
              </p>
            </div>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 group animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-medical-success/10 rounded-lg flex items-center justify-center group-hover:bg-medical-success/20 transition-colors">
                      <benefit.icon className="h-6 w-6 text-medical-success" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="animate-bounce-hover">
                Request Healthcare Demo
              </Button>
              <Button variant="outline" size="lg" className="animate-bounce-hover">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForDoctorsSection;