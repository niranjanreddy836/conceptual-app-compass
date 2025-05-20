
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#b5deff] text-slate-700 py-12 border-t border-[#b7dcf9]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-[#0073e6] mr-2" />
              <h3 className="text-xl font-bold text-slate-800">
                <span className="text-[#0073e6]">Primitive</span>Wave
              </h3>
            </div>
            <p className="text-sm mb-6">
              Providing enterprise-grade technology solutions and services to transform your digital assets.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-800 mb-4">Portfolio</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/portfolio#consulting" className="text-sm hover:text-[#0073e6] transition-colors">
                  Technology Consulting
                </Link>
              </li>
              <li>
                <Link to="/portfolio#cloud-solutions" className="text-sm hover:text-[#0073e6] transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link to="/portfolio#data-center" className="text-sm hover:text-[#0073e6] transition-colors">
                  Data Center Modernization
                </Link>
              </li>
              <li>
                <Link to="/portfolio#network" className="text-sm hover:text-[#0073e6] transition-colors">
                  Network Transformation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-800 mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-[#0073e6] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm hover:text-[#0073e6] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-sm hover:text-[#0073e6] transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-[#0073e6] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#b7dcf9] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © {currentYear} PrimitiveWave. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-sm hover:text-[#0073e6] transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-[#0073e6] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
