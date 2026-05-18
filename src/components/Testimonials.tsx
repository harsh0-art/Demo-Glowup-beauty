import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const reviews = [
  {
    name: 'Priya Sharma',
    role: 'Bride',
    text: 'GlowUp did my bridal makeup and I couldn\'t have been happier! The glow was natural and it lasted all through the reception. Highly recommended!',
    rating: 5
  },
  {
    name: 'Anjali V.',
    role: 'Regular Client',
    text: 'The hair spa here is therapeutic. The staff is so polite and the hygiene standards are top-notch. Surat finally has a premium salon that cares.',
    rating: 5
  },
  {
    name: 'Megha Patel',
    role: 'Party Guest',
    text: 'Got my party makeup done and received so many compliments. They understood exactly what I wanted. Definitely my go-to place now!',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-transparent backdrop-blur-3xl">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs block mb-4">Voices of Glow</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-heading italic">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={12} className="fill-gold text-gold" />
                ))}
              </div>

              <p className="text-brand-text/80 text-sm leading-relaxed italic mb-8 flex-grow">
                "{review.text}"
              </p>

              <div className="pt-6 border-t border-white/20 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-rose-glass flex items-center justify-center text-[#880E4F] font-bold text-sm">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-brand-heading text-sm">{review.name}</h4>
                  <p className="text-gold text-[10px] font-bold uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
