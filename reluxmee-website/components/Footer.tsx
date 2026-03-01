import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-gray-400 py-16 border-t border-gray-800 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand Section */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-6 tracking-wide uppercase">Reluxmee Hotel</h3>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Modern comfort in the heart of Anuradhapura. Experience newly renovated luxury with breathtaking rooftop views of the Sacred City.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-gold transition-colors" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-gold transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-gold transition-colors" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
              <li><Link href="/rooms" className="hover:text-brand-gold transition-colors">Rooms</Link></li>
              <li><Link href="/gallery" className="hover:text-brand-gold transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">📍</span>
                <span>
                  Reluxmee Hotel pvt ltd,<br />
                  523/27B, Dahayyagama Junction,<br />
                  Stage 2, Anuradhapura
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-gold">📞</span>
                <a href="tel:+94712025025" className="hover:text-white transition-colors">+94 71 202 5025</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-gold">✉️</span>
                <a href="mailto:reluxmeehotel@gmail.com" className="hover:text-white transition-colors">reluxmeehotel@gmail.com</a>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="https://maps.app.goo.gl/XkLqgqMaAk9aANbSA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold hover:text-white underline text-sm transition-colors"
              >
                Get Directions on Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <p>&copy; {new Date().getFullYear()} Reluxmee Hotel. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
