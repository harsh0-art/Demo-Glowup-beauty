import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How do I book an appointment?',
    a: 'You can easily book by clicking the "Book on WhatsApp" button or by calling us directly. We recommend booking at least 2-3 days in advance for weekends.'
  },
  {
    q: 'Do you provide home services?',
    a: 'Yes, we provide home services for bridal makeup, party makeup, and selected beauty treatments within Surat city limits.'
  },
  {
    q: 'Is advance payment required for bridal bookings?',
    a: 'Yes, we require a 30% advance payment to confirm your bridal slot. This is non-refundable but adjustable in case of date changes (subject to availability).'
  },
  {
    q: 'Can I get a trial for bridal makeup?',
    a: 'Absolutely! We offer paid bridal trials. If you book your wedding with us, the trial amount is adjusted in the final package.'
  },
  {
    q: 'What professional brands do you use?',
    a: 'We use premium international brands including MAC, Bobbi Brown, Huda Beauty, Kryolan, and professional skincare ranges like O3+ and Cheryls.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] block mb-4">Support</span>
          <h2 className="text-4xl font-serif text-brand-heading italic">Quick FAQ</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-panel overflow-hidden border-white/20">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center group transition-colors hover:bg-white/40"
              >
                <span className="font-bold text-brand-heading pr-8 text-sm">{faq.q}</span>
                <ChevronDown 
                  className={`text-gold transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} 
                  size={16} 
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-brand-text/70 text-xs leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
