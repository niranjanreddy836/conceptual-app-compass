
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import CaseStudyPreview from "@/components/home/CaseStudyPreview";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <CaseStudyPreview />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;
