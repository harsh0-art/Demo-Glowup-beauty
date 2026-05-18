import { motion } from 'motion/react';
import { Check, MessageCircle } from 'lucide-react';

export default function BridalHighlight() {
  const benefits = [
    'Traditional & Modern Bridal Looks',
    'Exclusive Bridal Suite for Dressing',
    'High-End International Makeup Brands',
    'Hair Styling & Dupatta Draping',
    'Pre-Bridal Skincare Packages',
    'Trial Session Available (On Request)',
  ];

  return (
    <section id="bridal" className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 glass-card p-4"
            >
              <img 
                src="/src/assets/images/bridal_makeup_accent_1778998015380.png" 
                alt="Bridal Makeup" 
                className="rounded-2xl shadow-lg w-full object-cover aspect-[4/5]"
              />
            </motion.div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-4 md:right-10 glass-panel p-6 shadow-xl z-20 max-w-[200px]">
              <div className="text-4xl font-serif font-bold text-gold mb-1">500+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-brand-text/60">Happy Brides Transformed</div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs block mb-4">Bridal Packages</span>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-heading mb-8 leading-tight italic">Your Dream Wedding Look, <br />Crafted with Artistry.</h2>
              <p className="text-brand-text mb-10 leading-relaxed text-lg font-light">
                Customized premium packages starting from <span className="text-gold font-bold">₹15,000</span>. We specialize in creating stunning, long-lasting looks that highlight your natural beauty.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {benefits.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-brand-text">
                    <div className="w-5 h-5 rounded-full bg-rose-glass flex items-center justify-center text-rose-500 shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/919988776655"
                  className="btn-primary"
                >
                  Book Catalog
                </a>
                <button className="px-8 py-4 bg-white/40 backdrop-blur-md border border-white/40 rounded-full font-bold shadow-sm hover:bg-white/60 transition-all">
                  Download Brochure
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
