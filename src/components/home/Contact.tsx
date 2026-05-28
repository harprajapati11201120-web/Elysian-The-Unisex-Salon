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
            Reach out for appointments or academy inquiries. We look forward to welcoming you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          
          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col h-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
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

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <Clock size={24} className="text-gold-500 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-white mb-2">Hours</h4>
                  <p className="text-sm font-light text-gray-400 leading-relaxed">
                    Everyday<br />
                    9:30 AM – 9:00 PM
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <Phone size={24} className="text-gold-500 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-white mb-2">Phone</h4>
                  <a href="tel:+919876543210" className="text-sm font-light text-gray-400 hover:text-gold-500 transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
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
            <div className="aspect-video sm:aspect-[21/9] w-full bg-gray-900 border border-white/10 relative filter grayscale contrast-125">
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

        </div>
      </div>
    </section>
  );
}
