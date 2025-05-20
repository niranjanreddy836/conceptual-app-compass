
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-cyan-500 mr-2" />
              <h3 className="text-xl font-bold text-white">
                <span className="text-cyan-500">Cyber</span>Shield
              </h3>
            </div>
            <p className="text-sm mb-6">
              Providing enterprise-grade cybersecurity solutions and services to protect your digital assets.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services#consulting" className="text-sm hover:text-cyan-400 transition-colors">
                  Cybersecurity Consulting
                </Link>
              </li>
              <li>
                <Link to="/services#cloud-security" className="text-sm hover:text-cyan-400 transition-colors">
                  Cloud Security
                </Link>
              </li>
              <li>
                <Link to="/services#data-center" className="text-sm hover:text-cyan-400 transition-colors">
                  Data Center Modernization
                </Link>
              </li>
              <li>
                <Link to="/services#network" className="text-sm hover:text-cyan-400 transition-colors">
                  Network Transformation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm hover:text-cyan-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-sm hover:text-cyan-400 transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-sm hover:text-cyan-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-sm hover:text-cyan-400 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-cyan-400 transition-colors">
                  Blog & Insights
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <p className="text-sm mb-2">contact@cybershield.com</p>
            <p className="text-sm">+1 (555) 123-4567</p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © {currentYear} CyberShield. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-sm hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
