
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ReadingTypesSection from "@/components/ReadingTypesSection";
import ComparisonSection from "@/components/ComparisonSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-mystical-900">
      <HeroSection />
      <AboutSection />
      <ReadingTypesSection />
      <ComparisonSection />
      <HowItWorksSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
