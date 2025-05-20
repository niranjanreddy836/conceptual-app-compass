
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const reasons = [
  "Expert team with deep industry knowledge",
  "End-to-end solutions from consulting to implementation",
  "Vendor-agnostic approach focused on your needs",
  "Commitment to long-term partnership",
  "Proven track record of successful implementations"
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="max-w-lg animate-fade-in">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Why Businesses Choose PrimitiveWave
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                We combine deep technical expertise with business acumen to deliver solutions that drive tangible results. Our collaborative approach ensures solutions aligned with your strategic objectives.
              </p>
              
              <ul className="space-y-4 mb-8">
                {reasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${150 * (index + 1)}ms` }}>
                    <CheckCircle className="h-6 w-6 text-[#0073e6] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{reason}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/about">
                <Button className="bg-[#0073e6] hover:bg-[#0059b3] text-white transition-all duration-300">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="flex-1 order-first lg:order-last">
            <div className="relative animate-fade-in">
              <div className="absolute -top-6 -left-6 w-64 h-64 rounded-full bg-[#b5deff]/30 blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-full bg-[#0073e6]/20 blur-2xl" />
              
              <div className="relative bg-gradient-to-br from-[#0073e6]/80 to-[#0059b3] rounded-lg p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Partner with PrimitiveWave</h3>
                <p className="text-slate-100 mb-6">
                  Ready to transform your technology landscape? Our experts are ready to help you navigate the complexities of modern IT.
                </p>
                
                <Link to="/contact">
                  <Button variant="secondary" className="text-[#0073e6] bg-white hover:bg-slate-100 transition-all duration-300">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
