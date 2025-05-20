
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
    <nav className="bg-[#b5deff]/95 backdrop-blur-sm sticky top-0 z-50 border-b border-[#b7dcf9]/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-slate-800 transition-all duration-300 hover:scale-105">
            <span className="text-[#0073e6]">Primitive</span>Wave
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-slate-700 hover:text-[#0073e6] transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" className="text-slate-700 hover:text-[#0073e6] transition-colors duration-300">
              About
            </Link>
            <Link to="/portfolio" className="text-slate-700 hover:text-[#0073e6] transition-colors duration-300">
              Portfolio
            </Link>
            <Link to="/partners" className="text-slate-700 hover:text-[#0073e6] transition-colors duration-300">
              Partners
            </Link>
          </div>

          <div className="hidden md:block">
            <Link to="/contact">
              <Button variant="secondary" className="bg-[#0073e6] hover:bg-[#0059b3] text-white transition-all duration-300 transform hover:scale-105">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-slate-700 hover:text-[#0073e6] transition-colors"
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col space-y-4 animate-fade-in">
            <Link 
              to="/" 
              className="text-slate-700 hover:text-[#0073e6] transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-slate-700 hover:text-[#0073e6] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/portfolio" 
              className="text-slate-700 hover:text-[#0073e6] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              to="/partners" 
              className="text-slate-700 hover:text-[#0073e6] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Partners
            </Link>
            <Link 
              to="/contact" 
              className="text-slate-700 hover:text-[#0073e6] transition-colors"
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
