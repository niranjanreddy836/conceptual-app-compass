
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#b7dcf9] via-[#ffffff] to-[#b5deff] overflow-hidden">
      <div className="container mx-auto px-6 py-20 md:py-28 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 animate-fade-in">
            <span className="text-[#0073e6]">Innovative</span> Technology Solutions
          </h1>
          
          <p className="text-xl text-slate-700 mb-8 max-w-3xl mx-auto animate-fade-in delay-150">
            Transforming businesses with cutting-edge technology services. 
            From consulting to implementation, we deliver solutions that drive growth and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-300">
            <Link to="/portfolio">
              <Button className="bg-[#0073e6] hover:bg-[#0059b3] text-white px-8 py-6 text-lg transition-all duration-300 transform hover:translate-x-1">
                Our Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-[#0073e6] text-[#0073e6] hover:bg-[#0073e6]/10 px-8 py-6 text-lg transition-all duration-300">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
