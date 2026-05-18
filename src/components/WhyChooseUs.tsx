import { motion } from 'motion/react';
import { Award, ShieldCheck, Gem, CalendarCheck, Home } from 'lucide-react';

const reasons = [
  { icon: Award, title: 'Trained Artists', desc: 'Expert stylists with certifications from top beauty academies.' },
  { icon: ShieldCheck, title: 'Hygienic Tools', desc: '100% sanitized tools and single-use kits for every customer.' },
  { icon: Gem, title: 'Branded Products', desc: 'We only use authentic, high-end international brands.' },
  { icon: CalendarCheck, title: 'Confirmed Slots', desc: 'Wait-free experience with our efficient booking system.' },
  { icon: Home, title: 'Home Service', desc: 'Enjoy premium salon services at the comfort of your home.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-transparent text-brand-text overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs block mb-4">The Standard</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight italic">Why <span className="text-gold">GlowUp?</span></h2>
              <p className="text-brand-text/70 leading-relaxed mb-8 font-light">
                We believe beauty is more than skin deep. It's about confidence, hygiene, and the luxury of self-care.
              </p>
              <div className="h-px w-24 bg-gold opacity-30" />
            </motion.div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, i) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 flex flex-col items-center text-center hover:border-gold/30"
                >
                  <div className="w-10 h-10 rounded-full bg-rose-glass flex items-center justify-center text-gold mb-4">
                    <reason.icon size={20} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2">{reason.title}</p>
                  <p className="text-[10px] opacity-60 leading-relaxed max-w-[200px]">
                    {reason.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
