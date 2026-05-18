import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-brand-heading">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/salon_hero_bg_1778997982543.png" 
          alt="Salon Interior" 
          className="w-full h-full object-cover opacity-60 scale-100"
        />
        <div className="absolute inset-0 bg-neutral-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-heading via-transparent to-brand-heading/60" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center glass-card bg-neutral-900/20 backdrop-blur-md p-12 md:p-16 lg:p-20 relative z-10 border border-white/10 shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gold/10 border border-gold/40 text-gold text-[10px] font-bold uppercase tracking-widest leading-none">
              Premium Salon & Bridal Makeup in Surat
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-8">
              Experience the fusion of <br />
              <span className="italic text-gold italic">Elegance</span> & Beauty.
            </h1>
            <p className="text-base md:text-lg text-white/80 mb-10 max-w-xl mx-auto font-light leading-relaxed italic">
              Professional salon services, exquisite bridal makeup, and modern beauty techniques at the heart of Surat.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://wa.me/919988776655"
                className="btn-primary"
              >
                Book Service
              </a>
              <button 
                className="px-8 py-3 bg-white/10 border border-white/20 text-white rounded-full font-bold shadow-sm hover:bg-white/20 backdrop-blur-sm transition-all"
              >
                Get Trial
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical text */}
      <div className="absolute right-10 bottom-20 hidden lg:block">
        <div className="rotate-90 origin-right text-gold/60 font-serif text-sm uppercase tracking-[1em] whitespace-nowrap">
          GLOWUP BEAUTY STUDIO • SURAT
        </div>
      </div>
    </section>
  );
}
