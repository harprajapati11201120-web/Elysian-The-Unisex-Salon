import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-luxury-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-gold-500"></span>
              <span className="text-gold-500 uppercase tracking-[0.2em] text-xs font-medium">The Elysian Experience</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-8 leading-tight">
              Elevating the <br/>
              <span className="italic text-gray-400 font-light">Art of Beauty</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed max-w-lg">
              <p>
                Elysian is a premium unisex salon and academy dedicated to enhancing your beauty with expert care and modern techniques. 
              </p>
              <p>
                Our philosophy goes beyond simply styling. We exist to build confidence, to offer an escape, and to continuously raise the standard of the modern salon experience through highly trained staff and an elite academy.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-10 border-t border-white/10 pt-8 max-w-lg">
              <div>
                <p className="text-4xl font-serif text-gold-500 mb-2">10+</p>
                <p className="text-xs uppercase tracking-widest text-gray-400">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-gold-500 mb-2">5k+</p>
                <p className="text-xs uppercase tracking-widest text-gray-400">Happy Clients</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="aspect-[3/4] lg:aspect-[4/5] relative overflow-hidden">
              <div className="absolute inset-0 bg-gold-500/10 mix-blend-overlay z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=80&w=1000" 
                alt="Salon Interior" 
                className="w-full h-full object-cover filter grayscale-[30%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 lg:-bottom-12 lg:-left-12 w-48 h-48 sm:w-64 sm:h-64 border border-gold-500/30 -z-10 rounded-full"></div>
            
            {/* Accent floating box */}
            <div className="absolute top-1/2 -right-8 lg:-right-12 -translate-y-1/2 glass-panel p-6 max-w-[200px] hidden md:block">
              <p className="font-serif italic text-xl mb-2 text-white">"Luxury in every detail."</p>
              <span className="w-8 h-[1px] bg-gold-500 block"></span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
