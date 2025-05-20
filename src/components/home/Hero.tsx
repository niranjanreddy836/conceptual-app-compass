
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Server } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full max-w-7xl mx-auto">
          {/* Abstract geometric shapes */}
          <div className="absolute top-20 left-10 w-60 h-60 rounded-full bg-[#0073e6]/10 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-[#b5deff]/10 blur-3xl" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 space-y-8">
              <div>
                <p className="text-[#b5deff] font-medium mb-2 animate-fade-in">Innovative Technology Solutions</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
                  Protect. Transform. <span className="text-[#0073e6]">Accelerate.</span>
                </h1>
                
                <p className="text-lg text-slate-300 mb-8 animate-fade-in delay-150">
                  PrimitiveWave delivers enterprise-grade technology solutions that drive innovation 
                  and secure critical infrastructure. Let's build the future together.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-300">
                <Link to="/portfolio">
                  <Button className="bg-[#0073e6] hover:bg-[#0059b3] text-white px-8 py-6 text-lg transition-all duration-300 transform hover:translate-x-1">
                    Our Solutions
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-[#0073e6] text-white hover:bg-[#0073e6]/10 px-8 py-6 text-lg transition-all duration-300">
                    Contact Us
                  </Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-8 mt-8 pt-4 border-t border-slate-700 animate-fade-in delay-450">
                <div className="flex items-center gap-3">
                  <div className="bg-[#0073e6]/20 p-2 rounded-lg">
                    <Shield className="h-5 w-5 text-[#0073e6]" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Secure Solutions</p>
                    <p className="text-slate-400 text-sm">Enterprise-grade security</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#0073e6]/20 p-2 rounded-lg">
                    <Server className="h-5 w-5 text-[#0073e6]" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Scalable Systems</p>
                    <p className="text-slate-400 text-sm">Built for growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
