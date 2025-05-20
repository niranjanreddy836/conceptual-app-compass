
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-slate-700 hover:text-[#0073e6] transition-colors duration-300">
              Home
            </Link>
            
            {/* Portfolio Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-[#0073e6] text-slate-700 focus:bg-transparent">Portfolio</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/portfolio"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#b5deff]/20 hover:text-[#0073e6]"
                          >
                            <div className="text-lg font-medium text-slate-700 hover:text-[#0073e6]">All Services</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                              View our complete range of technology solutions
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/portfolio/consulting"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#b5deff]/20 hover:text-[#0073e6]"
                          >
                            <div className="text-lg font-medium text-slate-700 hover:text-[#0073e6]">Technology Consulting</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                              Expert guidance on technology strategy and implementation
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/portfolio/cloud-solutions"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#b5deff]/20 hover:text-[#0073e6]"
                          >
                            <div className="text-lg font-medium text-slate-700 hover:text-[#0073e6]">Cloud Solutions</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                              Secure and scalable cloud infrastructure solutions
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/portfolio/data-center"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#b5deff]/20 hover:text-[#0073e6]"
                          >
                            <div className="text-lg font-medium text-slate-700 hover:text-[#0073e6]">Data Center Modernization</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                              Transform your data center with modern solutions
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/portfolio/network-transformation"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#b5deff]/20 hover:text-[#0073e6]"
                          >
                            <div className="text-lg font-medium text-slate-700 hover:text-[#0073e6]">Network Transformation</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                              Optimize your network architecture for better performance
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/about" className="text-slate-700 hover:text-[#0073e6] transition-colors duration-300">
              About
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
            
            {/* Portfolio with submenu */}
            <div className="space-y-2">
              <Link 
                to="/portfolio" 
                className="text-slate-700 hover:text-[#0073e6] transition-colors flex items-center justify-between"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <div className="pl-4 border-l border-[#b7dcf9] space-y-2">
                <Link 
                  to="/portfolio/consulting" 
                  className="text-slate-700 hover:text-[#0073e6] transition-colors block text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Technology Consulting
                </Link>
                <Link 
                  to="/portfolio/cloud-solutions" 
                  className="text-slate-700 hover:text-[#0073e6] transition-colors block text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cloud Solutions
                </Link>
                <Link 
                  to="/portfolio/data-center" 
                  className="text-slate-700 hover:text-[#0073e6] transition-colors block text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Data Center Modernization
                </Link>
                <Link 
                  to="/portfolio/network-transformation" 
                  className="text-slate-700 hover:text-[#0073e6] transition-colors block text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Network Transformation
                </Link>
              </div>
            </div>
            
            <Link 
              to="/about" 
              className="text-slate-700 hover:text-[#0073e6] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
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
