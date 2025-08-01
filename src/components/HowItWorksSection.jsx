import { Play, Eye, BarChart3 } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Play,
      title: "Choose Your Exercise",
      description: "Select from your prescribed physiotherapy routine",
      step: "01"
    },
    {
      icon: Eye,
      title: "Follow AI Feedback",
      description: "Get real-time guidance during your exercise session",
      step: "02"
    },
    {
      icon: BarChart3,
      title: "Doctor Tracks Progress",
      description: "Your healthcare provider receives automated reports",
      step: "03"
    }
  ];

  return (
    <section className="py-20 bg-medical-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How{" "}
            <span className="text-primary">Sehat.PK</span>{" "}
            Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, effective, and seamlessly integrated into your recovery journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="medical-card p-8 text-center group-hover:shadow-xl transition-all duration-300 animate-bounce-hover">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
              
              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-primary/30"></div>
                  <div className="absolute -right-1 -top-1 w-0 h-0 border-l-4 border-l-primary/30 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;