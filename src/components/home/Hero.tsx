import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex border-b border-luxury-gray">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=2000')" }}
      >
        <div className="absolute inset-0 bg-luxury-black/70 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-3xl"
        >
          <p className="text-gold-500 uppercase tracking-[0.3em] text-xs sm:text-sm mb-6 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-gold-500"></span>
            Welcome to Elysian
          </p>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.1] mb-6 text-white">
            Redefining <br/>
            <span className="italic text-gold-500 font-light pr-4">Beauty</span> & Style
          </h1>
          
          <p className="text-gray-300 text-base sm:text-lg max-w-xl mb-10 font-light leading-relaxed">
            Experience luxury grooming and expert care at our premium unisex salon and academy.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-gold-500 text-luxury-black text-sm uppercase tracking-widest text-center hover:bg-gold-400 transition-colors duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Book Appointment</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
            </a>
            
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/30 text-white text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:border-gold-500 hover:text-gold-500 transition-colors duration-300 glass-panel"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 rotate-90 translate-y-[-20px] origin-left">Scroll</span>
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ top: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gold-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
