import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, Facebook, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-transparent backdrop-blur-3xl">
      <div className="container mx-auto px-6">
        <div className="glass-card overflow-hidden flex flex-col lg:flex-row shadow-2xl border-white/60">
          {/* Info Side */}
          <div className="w-full lg:w-2/5 bg-brand-heading p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold opacity-10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative z-10"
            >
              <h2 className="text-4xl font-serif mb-12 italic">Let's connect</h2>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-gold">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-1">Our Studio</h4>
                    <p className="text-white/60 text-[10px] leading-relaxed uppercase tracking-wider">
                      402, Elegance Plaza, Adajan, <br />
                      Surat, Gujarat - 395009
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-gold text-sm font-bold">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-1">Call/WhatsApp</h4>
                    <p className="text-gold font-bold text-lg">+91 99887 76655</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 bg-[#F5F1EE]/10 p-5 rounded-2xl border border-dashed border-white/20">
                <p className="text-center font-bold text-white text-[10px] uppercase tracking-widest mb-3">Scan for Location</p>
                <div className="w-20 h-20 bg-white mx-auto flex items-center justify-center rounded border border-white/20">
                  <div className="grid grid-cols-3 gap-1">
                    <div className="w-4 h-4 bg-gray-800"></div>
                    <div className="w-4 h-4 bg-gray-200"></div>
                    <div className="w-4 h-4 bg-gray-800"></div>
                    <div className="w-4 h-4 bg-gray-200"></div>
                    <div className="w-4 h-4 bg-gray-800"></div>
                    <div className="w-4 h-4 bg-gray-200"></div>
                    <div className="w-4 h-4 bg-gray-800"></div>
                    <div className="w-4 h-4 bg-gray-200"></div>
                    <div className="w-4 h-4 bg-gray-800"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-3/5 p-12 lg:p-16">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold mb-8">Professional Bookings</h3>
            
            <form 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you! Our team will contact you shortly.');
              }}
            >
              <input type="text" required className="w-full bg-white/40 border border-white/40 rounded-xl p-4 text-sm outline-none focus:bg-white/60 transition-all" placeholder="Your Name" />
              <input type="tel" required className="w-full bg-white/40 border border-white/40 rounded-xl p-4 text-sm outline-none focus:bg-white/60 transition-all" placeholder="Phone Number" />
              <div className="sm:col-span-2">
                <select className="w-full bg-white/40 border border-white/40 rounded-xl p-4 text-sm outline-none appearance-none cursor-pointer">
                  <option>Select Package</option>
                  <option>Bridal Package</option>
                  <option>Premium Facial</option>
                  <option>Hair Treatment</option>
                </select>
              </div>
              <textarea rows={3} className="sm:col-span-2 w-full bg-white/40 border border-white/40 rounded-xl p-4 text-sm outline-none focus:bg-white/60 transition-all" placeholder="Any special requests?"></textarea>
              
              <div className="sm:col-span-2 flex flex-col sm:flex-row gap-4 pt-4">
                <button type="submit" className="flex-1 btn-primary !py-4">
                  Request Callback
                </button>
                <a 
                  href="https://wa.me/919988776655"
                  className="flex-1 btn-whatsapp !py-4 flex items-center justify-center"
                >
                  <MessageCircle size={20} />
                  Instant WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
