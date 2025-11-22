import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ServicesGrid />
      <Footer />
    </div>
  );
};

export default Index;
