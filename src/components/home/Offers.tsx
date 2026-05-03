import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Offers() {
  const offers = [
    {
      title: "20% OFF on Hair Spa",
      subtitle: "Rejuvenate your hair with our signature spa.",
      validity: "Valid until end of month",
      bgImg: "https://images.unsplash.com/photo-1516975080661-46bbf6911516?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Bridal Package Discounts",
      subtitle: "Special rates on complete bridal makeovers.",
      validity: "Pre-book now",
      bgImg: "https://images.unsplash.com/photo-1595476108018-0aa3417ceb86?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-luxury-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-[1px] bg-gold-500"></span>
              <span className="text-gold-500 uppercase tracking-[0.2em] text-xs font-medium">Exclusive Deals</span>
            </div>
            <h2 className="text-4xl sm:text-5xl">
              Special <span className="italic text-gray-400 font-light">Offers</span>
            </h2>
          </div>
          <a href="#contact" className="text-xs uppercase tracking-widest text-white border-b border-gold-500 pb-1 hover:text-gold-500 transition-colors self-start md:self-end">
            View All Packages
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {offers.map((offer, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative aspect-[16/9] md:aspect-[3/2] overflow-hidden group cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000"
                style={{ backgroundImage: `url('${offer.bgImg}')` }}
              ></div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-end">
                <span className="inline-block px-3 py-1 bg-gold-500 text-luxury-black text-[10px] uppercase tracking-widest font-bold mb-4 self-start">
                  Limited Time
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-serif text-white mb-2">
                  {offer.title}
                </h3>
                
                <p className="text-gray-300 font-light text-sm mb-6 max-w-sm">
                  {offer.subtitle}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/20">
                  <span className="text-xs uppercase tracking-widest text-gray-400">
                    {offer.validity}
                  </span>
                  <ArrowRight size={20} className="text-gold-500 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
