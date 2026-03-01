"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ROOMS', href: '/rooms' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 font-sans ${scrolled
        ? 'bg-white/90 backdrop-blur-md shadow-sm text-brand-charcoal py-3'
        : 'bg-gradient-to-b from-black/50 to-transparent text-white py-5'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-wider uppercase">
          Reluxmee Hotel
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors hover:text-brand-gold ${scrolled ? 'text-brand-charcoal' : 'text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://www.booking.com/Share-DiVxJe"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-brand-gold text-white rounded-sm hover:bg-yellow-600 transition-all uppercase text-xs font-bold tracking-widest"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className={scrolled ? "text-brand-charcoal" : "text-white"} /> : <Menu className={scrolled ? "text-brand-charcoal" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
          }`}
      >
        <div className="flex flex-col px-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="py-2 border-b border-gray-100 text-brand-charcoal hover:text-brand-gold text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://www.booking.com/Share-DiVxJe"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 text-center bg-brand-gold text-white uppercase text-xs font-bold tracking-widest rounded-sm"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
