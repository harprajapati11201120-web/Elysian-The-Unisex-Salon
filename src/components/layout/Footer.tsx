import { Instagram, Facebook, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-luxury-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <a href="#home" className="inline-block font-serif text-2xl tracking-wider font-bold text-white flex-col uppercase mb-6">
              Elysian
              <span className="block font-sans text-[10px] tracking-[0.2em] text-gold-500 font-normal mt-0.5">
                The Unisex Salon
              </span>
            </a>
            <p className="text-gray-400 font-light text-sm leading-relaxed max-w-xs mb-8">
              Redefining beauty and style through expert care, premium products, and an elite training academy.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-gold-500 hover:text-gold-500 transition-colors">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-gold-500 hover:text-gold-500 transition-colors">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-gold-500 hover:text-gold-500 transition-colors">
                <MessageCircle size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-white mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-400 hover:text-gold-500 text-sm font-light transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gold-500 text-sm font-light transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-gold-500 text-sm font-light transition-colors">Gallery</a></li>
              <li><a href="#academy" className="text-gray-400 hover:text-gold-500 text-sm font-light transition-colors">Academy</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-gold-500 text-sm font-light transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-white mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-400 hover:text-white text-sm font-light transition-colors">Hair Cutting & Styling</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white text-sm font-light transition-colors">Facial & Skincare</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white text-sm font-light transition-colors">Bridal Makeup</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white text-sm font-light transition-colors">Grooming</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm font-light">Shop 19-22, Shiv Arcade, Patan, Gujarat 384265</li>
              <li><a href="tel:+919876543210" className="text-gray-400 hover:text-gold-500 text-sm font-light transition-colors">+91 98765 43210</a></li>
              <li><a href="mailto:ElysianUnisexSalon@gmail.com" className="text-gray-400 hover:text-gold-500 text-sm font-light transition-colors break-all">ElysianUnisexSalon@gmail.com</a></li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 tracking-wider">
            &copy; 2026 Elysian The Unisex Salon. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-500 tracking-wider">
            Design & Developed by PH Technologies
          </p>
        </div>

      </div>
    </footer>
  );
}
