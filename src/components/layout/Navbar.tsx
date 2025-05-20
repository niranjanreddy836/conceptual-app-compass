
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-700/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white">
            <span className="text-cyan-500">Cyber</span>Shield
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-slate-200 hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-slate-200 hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link to="/services" className="text-slate-200 hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <Link to="/portfolio" className="text-slate-200 hover:text-cyan-400 transition-colors">
              Portfolio
            </Link>
            <Link to="/partners" className="text-slate-200 hover:text-cyan-400 transition-colors">
              Partners
            </Link>
            <Link to="/case-studies" className="text-slate-200 hover:text-cyan-400 transition-colors">
              Case Studies
            </Link>
            <Link to="/testimonials" className="text-slate-200 hover:text-cyan-400 transition-colors">
              Testimonials
            </Link>
            <Link to="/blog" className="text-slate-200 hover:text-cyan-400 transition-colors">
              Blog
            </Link>
          </div>

          <div className="hidden md:block">
            <Link to="/contact">
              <Button variant="secondary" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-slate-200 hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-slate-200 hover:text-cyan-400 transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-slate-200 hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="text-slate-200 hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/portfolio" 
              className="text-slate-200 hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              to="/partners" 
              className="text-slate-200 hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Partners
            </Link>
            <Link 
              to="/case-studies" 
              className="text-slate-200 hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link 
              to="/testimonials" 
              className="text-slate-200 hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              to="/blog" 
              className="text-slate-200 hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="text-slate-200 hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
