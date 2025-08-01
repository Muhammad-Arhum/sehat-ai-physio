import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ForDoctorsSection from "@/components/ForDoctorsSection";
import ForPatientsSection from "@/components/ForPatientsSection";
import DemoPreviewSection from "@/components/DemoPreviewSection";
import AboutUsSection from "@/components/AboutUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <ForDoctorsSection />
      <ForPatientsSection />
      <DemoPreviewSection />
      <AboutUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
