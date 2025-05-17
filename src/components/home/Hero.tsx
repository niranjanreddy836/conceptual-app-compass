
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0yNCAzNHYtNGgtMnY0aDJ6bTYgMGgtMnYtNGgydjR6TTI0IDI0di00aC0ydjRoMnptNiAwdi00aC0ydjRoMnptNiAwdi00aC0ydjRoMnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-cyan-500/20 p-4 rounded-full">
              <ShieldCheck className="h-12 w-12 text-cyan-400" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Enterprise Cybersecurity Solutions for the Modern World
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Protect your organization with our comprehensive cybersecurity services. 
            From consulting to implementation, we secure your digital assets against evolving threats.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/services">
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg">
                Our Services
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
