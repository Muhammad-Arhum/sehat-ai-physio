import { AlertTriangle, Clock, Users } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Users,
      title: "Patients often skip home exercises",
      description: "Without proper guidance, many patients abandon their recovery routine"
    },
    {
      icon: AlertTriangle,
      title: "Incorrect posture slows down recovery",
      description: "Poor form can worsen injuries and extend healing time"
    },
    {
      icon: Clock,
      title: "Doctors can't monitor patients after discharge",
      description: "Limited visibility into patient progress between appointments"
    }
  ];

  return (
    <section className="py-20 bg-medical-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Challenge in{" "}
            <span className="text-primary">Home Recovery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional physiotherapy faces significant barriers when patients return home
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="medical-card p-8 text-center group hover:shadow-lg transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-destructive/20 transition-colors">
                  <problem.icon className="h-8 w-8 text-destructive" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;