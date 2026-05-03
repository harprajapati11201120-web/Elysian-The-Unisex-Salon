import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Hair", "Makeup", "Bridal", "Academy", "Interior"];

  const galleryItems = [
    { id: 1, category: "Hair", img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800" },
    { id: 2, category: "Makeup", img: "https://images.unsplash.com/photo-1512496115851-a521151ce121?auto=format&fit=crop&q=80&w=800" },
    { id: 3, category: "Bridal", img: "https://images.unsplash.com/photo-1594990924909-b4bebf0890bf?auto=format&fit=crop&q=80&w=800" },
    { id: 4, category: "Hair", img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=800" },
    { id: 5, category: "Academy", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800" },
    { id: 6, category: "Makeup", img: "https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&q=80&w=800" },
    { id: 7, category: "Interior", img: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=80&w=800" },
    { id: 8, category: "Interior", img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800" },
    { id: 9, category: "Interior", img: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=800" },
    { id: 10, category: "Interior", img: "https://images.unsplash.com/photo-1600948836101-f9ffcb64c3d8?auto=format&fit=crop&q=80&w=800" },
  ];

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    const galleryElement = document.getElementById("gallery");
    if (galleryElement) {
      const yOffset = -80; // offset for navbar
      const y = galleryElement.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl mb-6">
            Our <span className="italic text-gold-500 font-light">Gallery</span>
          </h2>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={cn(
                "text-xs sm:text-sm uppercase tracking-widest pb-2 border-b-2 transition-all duration-300",
                activeCategory === cat 
                  ? "border-gold-500 text-gold-500" 
                  : "border-transparent text-gray-500 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-square overflow-hidden group"
              >
                <img 
                  src={item.img} 
                  alt={item.category} 
                  className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-luxury-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="border border-gold-500/50 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white font-serif italic text-xl">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-white/20 text-white text-xs uppercase tracking-widest hover:border-gold-500 hover:text-gold-500 transition-colors duration-300"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
