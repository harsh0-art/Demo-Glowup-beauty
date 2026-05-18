import { motion } from 'motion/react';
import { Tag, Sparkles } from 'lucide-react';

export default function Offers() {
  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Weekday Offer */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="group relative rounded-3xl overflow-hidden glass-card p-10 flex flex-col justify-center border-l-4 border-l-rose-400"
          >
            <div className="absolute top-2 right-4 text-rose-300 transform group-hover:scale-110 transition-transform duration-500 opacity-20">
              <Tag size={100} strokeWidth={0.5} />
            </div>
            
            <div className="relative z-10">
              <div className="bg-[#FCE4EC] rounded-full px-3 py-1 text-[10px] font-bold text-[#880E4F] uppercase tracking-widest mb-4 inline-block shadow-sm">
                Special Mid-Week Offer
              </div>
              <h3 className="text-2xl font-serif text-brand-heading mb-3">20% OFF on All Services</h3>
              <p className="text-brand-text text-sm mb-6 max-w-xs">Valid every Tuesday to Thursday. Pre-book your slot to avail.</p>
              <a 
                href="https://wa.me/919988776655"
                className="bg-[#2D2D2D] text-white px-6 py-2.5 rounded-full text-xs font-bold hover:brightness-110 transition-all w-fit shadow-md"
              >
                Claim Offer
              </a>
            </div>
          </motion.div>

          {/* Bridal Consult */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="group relative rounded-3xl overflow-hidden glass-card p-10 flex flex-col justify-center border-l-4 border-l-gold"
          >
            <div className="absolute top-2 right-4 text-gold opacity-10 transform group-hover:-translate-y-2 transition-transform duration-500">
              <Sparkles size={100} strokeWidth={0.5} />
            </div>

            <div className="relative z-10">
              <div className="bg-amber-50 rounded-full px-3 py-1 text-[10px] font-bold text-gold uppercase tracking-widest mb-4 inline-block shadow-sm">
                Complimentary
              </div>
              <h3 className="text-2xl font-serif text-brand-heading mb-3">Free Bridal Consultation</h3>
              <p className="text-brand-text text-sm mb-6 max-w-xs">Sit with our chief artist to discuss your dream look & trials.</p>
              <a 
                href="https://wa.me/919988776655"
                className="btn-primary !px-6 !py-2.5 !text-xs"
              >
                Book Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
