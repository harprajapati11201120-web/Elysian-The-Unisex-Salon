import { motion } from "motion/react";
import { Scissors, Palette, Sparkles, Heart, UserCircle, GraduationCap } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Hair Cutting & Styling",
      description: "Precision cuts and modern styling tailored to your unique face shape and lifestyle.",
      icon: <Scissors size={32} strokeWidth={1} />
    },
    {
      title: "Hair Coloring",
      description: "From subtle highlights to complete transformations using premium salon-grade products.",
      icon: <Palette size={32} strokeWidth={1} />
    },
    {
      title: "Facial & Skincare",
      description: "Rejuvenating treatments designed to restore your glow and address specific skin concerns.",
      icon: <Sparkles size={32} strokeWidth={1} />
    },
    {
      title: "Bridal Makeup",
      description: "Flawless, long-lasting wedding day looks crafted by our specialized bridal artists.",
      icon: <Heart size={32} strokeWidth={1} />
    },
    {
      title: "Grooming (Men)",
      description: "Classic barbering, exact beard trims, and restorative skin treatments for gentlemen.",
      icon: <UserCircle size={32} strokeWidth={1} />
    },
    {
      title: "Academy Training",
      description: "Professional certification courses for aspiring stylists and makeup artists.",
      icon: <GraduationCap size={32} strokeWidth={1} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 bg-[#0d0d0d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-[1px] bg-gold-500"></span>
            <span className="text-gold-500 uppercase tracking-[0.2em] text-xs font-medium">What We Offer</span>
            <span className="w-8 h-[1px] bg-gold-500"></span>
          </div>
          <h2 className="text-4xl sm:text-5xl mb-6">
            Our <span className="italic text-gray-400 font-light">Services</span>
          </h2>
          <p className="text-gray-400 font-light max-w-2xl mx-auto">
            A comprehensive suite of luxury grooming and beauty therapies, delivered with precision.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group glass-panel p-10 hover:bg-white/5 transition-all duration-500 rounded-none relative overflow-hidden"
            >
              {/* Hover line effect */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="text-gold-500 mb-8 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-serif text-white mb-4 group-hover:text-gold-500 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs uppercase tracking-widest text-gold-500">Explore Form</span>
                <span className="text-gold-500">→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
