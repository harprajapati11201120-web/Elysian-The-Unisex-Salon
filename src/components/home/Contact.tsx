import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">
            Get in <span className="italic text-gold-500 font-light">Touch</span>
          </h2>
          <p className="text-gray-400 font-light max-w-xl mx-auto">
            Book your appointment or reach out for academy inquiries. We look forward to welcoming you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col h-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4">
                <MapPin size={24} className="text-gold-500 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-white mb-2">Location</h4>
                  <p className="text-sm font-light text-gray-400 leading-relaxed">
                    Shop number 19-22, Shiv Arcade,<br />
                    Padmanabh Rd, Chowk,<br />
                    Patan, Gujarat – 384265
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock size={24} className="text-gold-500 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-white mb-2">Hours</h4>
                  <p className="text-sm font-light text-gray-400 leading-relaxed">
                    Everyday<br />
                    9:30 AM – 9:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone size={24} className="text-gold-500 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-white mb-2">Phone</h4>
                  <a href="tel:+919876543210" className="text-sm font-light text-gray-400 hover:text-gold-500 transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail size={24} className="text-gold-500 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-white mb-2">Email</h4>
                  <a href="mailto:StylouraUnisexSalon@gmail.com" className="text-sm font-light text-gray-400 hover:text-gold-500 transition-colors break-all">
                    StylouraUnisexSalon@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="mt-auto aspect-video sm:aspect-[21/9] lg:aspect-video w-full bg-gray-900 border border-white/10 relative filter grayscale contrast-125">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7144701267493!2d72.1228225!3d23.837862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c87cd1b11b5e5%3A0xe54955f1f0a8274d!2sShiv%20Arcade!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-panel p-8 sm:p-12">
              <h3 className="text-2xl font-serif text-white mb-8">Send a Message</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-gold-500 transition-colors font-light text-sm"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-gold-500 transition-colors font-light text-sm"
                    placeholder="+91 "
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Service Required</label>
                  <select 
                    id="service" 
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-gray-300 focus:outline-none focus:border-gold-500 transition-colors font-light text-sm appearance-none"
                  >
                    <option value="" className="bg-luxury-black text-gray-400">Select a service</option>
                    <option value="hair" className="bg-luxury-black text-white">Hair Styling & Cut</option>
                    <option value="color" className="bg-luxury-black text-white">Hair Coloring</option>
                    <option value="bridal" className="bg-luxury-black text-white">Bridal Makeup</option>
                    <option value="facial" className="bg-luxury-black text-white">Facial & Skincare</option>
                    <option value="academy" className="bg-luxury-black text-white">Academy Enrollment</option>
                    <option value="other" className="bg-luxury-black text-white">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-gold-500 transition-colors font-light text-sm resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-4 bg-gold-500 text-luxury-black text-sm uppercase tracking-widest font-medium hover:bg-white transition-colors duration-300 mt-4"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
