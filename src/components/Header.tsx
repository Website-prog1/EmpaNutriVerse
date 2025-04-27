import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-brown-dark/95 backdrop-blur-sm z-50 shadow-lg border-b border-beige/10">
      <div className="container mx-auto px-4">
        <nav className="py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="images/logo.png" 
              alt="EmpaNutriVerse Logo" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-2xl md:text-3xl font-display font-bold text-beige group-hover:text-sage transition-colors duration-300">
              EmpaNutriVerse
            </span>
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            <Link 
              to="/" 
              className="text-beige/90 hover:text-sage transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sage group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/about" 
              className="text-beige/90 hover:text-sage transition-colors duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sage group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/menu" 
              className="text-beige/90 hover:text-sage transition-colors duration-300 relative group"
            >
              Menu
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sage group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/contact" 
              className="text-beige/90 hover:text-sage transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sage group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden text-beige hover:bg-beige/10 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden py-4 px-2 space-y-4 border-t border-beige/10">
            <Link 
              to="/" 
              className="block text-beige/90 hover:text-sage transition-colors duration-300 py-2 px-4 hover:bg-beige/5 rounded-lg"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block text-beige/90 hover:text-sage transition-colors duration-300 py-2 px-4 hover:bg-beige/5 rounded-lg"
            >
              About
            </Link>
            <Link 
              to="/menu" 
              className="block text-beige/90 hover:text-sage transition-colors duration-300 py-2 px-4 hover:bg-beige/5 rounded-lg"
            >
              Menu
            </Link>
            <Link 
              to="/contact" 
              className="block text-beige/90 hover:text-sage transition-colors duration-300 py-2 px-4 hover:bg-beige/5 rounded-lg"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
