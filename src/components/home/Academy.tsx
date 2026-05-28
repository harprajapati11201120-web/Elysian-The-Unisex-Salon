import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export function Academy() {
  const benefits = [
    "Professional Certification",
    "Hands-on Live Training",
    "Expert Industry Mentors",
    "100% Placement Assistance"
  ];

  return (
    <section id="academy" className="py-16 sm:py-24 lg:py-32 bg-luxury-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-16 lg:p-20 relative overflow-hidden">
          
          {/* Background image masked */}
          <div 
            className="absolute right-0 top-0 w-1/2 h-full bg-cover bg-center opacity-20 filter grayscale hidden lg:block"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1000')",
              maskImage: "linear-gradient(to right, transparent, black)"
            }}
          ></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
                Styloura <br className="hidden sm:block" />
                <span className="italic text-gold-500 font-light">Academy</span>
              </h2>
              
              <p className="text-gray-300 font-light text-lg mb-8 max-w-md leading-relaxed">
                Turn your passion for beauty into a thriving career. Learn from the best in the industry and master advanced techniques in hair, makeup, and skin science.
              </p>

              <div className="space-y-4 mb-12">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-gold-500" />
                    <span className="text-sm font-light tracking-wide text-gray-200">{benefit}</span>
                  </div>
                ))}
              </div>

              <a 
                href="#contact" 
                className="inline-block px-8 py-4 bg-white text-luxury-black text-sm uppercase tracking-widest font-medium hover:bg-gold-500 hover:text-white transition-colors duration-300"
              >
                Join Academy
              </a>
            </motion.div>

            {/* Mobile/Tablet image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:hidden aspect-video relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1000" 
                alt="Academy Training" 
                className="w-full h-full object-cover grayscale-[30%]"
              />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
