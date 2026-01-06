import React, { useState, useEffect } from 'react';
import Button from './Button';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Concept', href: '#concept' },
    { name: 'Menu', href: '#menu' },
    { name: 'Stylist', href: '#stylist' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Access', href: '#access' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#top" className={`font-serif text-2xl tracking-widest ${scrolled ? 'text-stone-800' : 'text-stone-800 md:text-white'}`}>
          Lumière
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="メインナビゲーション">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm tracking-wide hover:opacity-70 transition-colors ${
                scrolled ? 'text-stone-600' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button 
            primary 
            className="text-sm px-6 py-2" 
            data-booking-trigger
          >
            WEB予約
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-stone-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
          aria-expanded={isOpen}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-stone-100 shadow-lg py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-stone-600 py-2 border-b border-stone-50"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button 
            primary 
            className="w-full mt-2" 
            onClick={() => setIsOpen(false)}
            data-booking-trigger
          >
            WEB予約
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;

