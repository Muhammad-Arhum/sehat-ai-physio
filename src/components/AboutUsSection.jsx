import { Stethoscope, Code, Heart } from "lucide-react";

const AboutUsSection = () => {
  const team = [
    {
      name: "Dr. Amna Shah",
      role: "Co-Founder & Medical Director",
      icon: Stethoscope,
      description: "Orthopedic specialist with 10+ years in rehabilitation medicine"
    },
    {
      name: "Ahmad Ali",
      role: "Co-Founder & CTO",
      icon: Code,
      description: "AI researcher and software engineer specializing in computer vision"
    }
  ];

  return (
    <section className="py-20 bg-medical-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About{" "}
            <span className="text-primary">Sehat.PK</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Born from the collaboration of healthcare expertise and cutting-edge technology
          </p>
        </div>
        
        {/* Founder Story */}
        <div className="max-w-4xl mx-auto mb-16 animate-slide-in-left">
          <div className="medical-card p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Our Vision
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded by tech entrepreneur Ahmad Ali and orthopedic specialist Dr. Amna Shah, 
              Sehat.PK was born from a shared vision to democratize physiotherapy through AI and telemedicine. 
              After witnessing countless patients struggle with home rehabilitation, we set out to bridge 
              the gap between clinical care and home recovery.
            </p>
          </div>
        </div>
        
        {/* Team */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div 
              key={index}
              className="medical-card p-8 text-center group hover:shadow-lg transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Avatar Placeholder */}
              <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <member.icon className="h-12 w-12 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {member.name}
              </h3>
              <div className="text-primary font-medium mb-4">
                {member.role}
              </div>
              <p className="text-muted-foreground">
                {member.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mt-16 animate-fade-up">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To revolutionize physiotherapy by making expert-level guidance accessible to every patient, 
              everywhere. We believe that technology should enhance, not replace, the human touch in healthcare.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center animate-scale-in">
              <div className="text-3xl font-bold text-primary mb-2">2023</div>
              <div className="text-muted-foreground">Founded</div>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Patients Helped</div>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Partner Clinics</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;