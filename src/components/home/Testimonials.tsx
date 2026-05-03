import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Quote } from "lucide-react";
import { cn } from "../../lib/utils";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Aarti Patel",
      role: "Bridal Client",
      text: "The team at Elysian made my wedding day incredibly special. The bridal makeup was flawless and lasted throughout the entire event. Highly professional and truly talented.",
      rating: 5
    },
    {
      id: 2,
      name: "Rahul Desai",
      role: "Regular Client",
      text: "Best grooming service in town. The attention to detail during the haircut and beard styling is unmatched. The ambiance is pure luxury.",
      rating: 5
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Academy Student",
      text: "Joining the Elysian Academy was the best decision for my career. The mentors are experts, and the hands-on training gave me the confidence to start my own journey.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-16 sm:py-24 bg-[#0a0a0a] relative flex items-center justify-center overflow-hidden min-h-[500px]">
      
      {/* Background large quote */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
        <Quote size={400} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center w-full">
        <h2 className="text-sm uppercase tracking-widest text-gold-500 mb-12 sm:mb-16">Client Stories</h2>

        <div className="relative min-h-[350px] sm:min-h-[250px] md:min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="flex gap-1 mb-6 text-gold-500">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-xl sm:text-2xl md:text-3xl font-serif text-white mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div>
                <p className="text-sm uppercase tracking-widest text-white font-medium">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "h-1 transition-all duration-300 rounded-full",
                index === currentIndex ? "w-8 bg-gold-500" : "w-2 bg-white/20 hover:bg-white/50"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
