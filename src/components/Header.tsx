import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cloud, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isHome = location.pathname === '/';

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <Cloud className={`h-8 w-8 ${isScrolled || !isHome ? 'text-primary' : 'text-white'} group-hover:scale-110 transition-transform duration-300`} />
            <span className={`text-2xl font-bold ${isScrolled || !isHome ? 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent' : 'text-white'}`}>
              IT Cloud America Inc
            </span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className={`md:hidden ${isScrolled || !isHome ? 'text-gray-600 hover:text-primary' : 'text-white hover:text-gray-200'} transition-colors`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['/', '/about', '/staffing'].map((path) => (
              <Link 
                key={path}
                to={path} 
                className={`nav-link relative ${
                  isActive(path) ? 'text-primary' : isScrolled || !isHome ? 'text-gray-700' : 'text-white'
                } hover:${isScrolled || !isHome ? 'text-primary' : 'text-gray-200'}`}
              >
                <span className="relative">
                  {path === '/' ? 'Home' :
                   path === '/about' ? 'About Us' :
                   path === '/staffing' ? 'IT Staffing' : ''}
                  {isActive(path) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary"></span>
                  )}
                </span>
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="gradient-btn"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden fixed inset-x-0 top-20 bg-white/95 backdrop-blur-md transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {['/', '/about', '/staffing'].map((path) => (
              <Link 
                key={path}
                to={path} 
                className={`nav-link text-lg ${isActive(path) ? 'text-primary' : 'text-gray-700'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {path === '/' ? 'Home' :
                 path === '/about' ? 'About Us' :
                 path === '/staffing' ? 'IT Staffing' : ''}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="gradient-btn text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;