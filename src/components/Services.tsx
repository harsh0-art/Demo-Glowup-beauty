import { motion } from 'motion/react';
import { Scissors, Sparkles, User, Heart, Star, Palette, Camera } from 'lucide-react';

const services = [
  { id: 1, title: 'Designer Haircut', icon: Scissors, description: 'Precision cutting and styling by experts.', price: 'Starts from ₹499' },
  { id: 2, title: 'Luxury Facial', icon: Sparkles, description: 'Premium products for a radiant glow.', price: 'Starts from ₹1,499' },
  { id: 3, title: 'Skin Cleanup', icon: User, description: 'Deep cleansing for healthy, clear skin.', price: 'Starts from ₹799' },
  { id: 4, title: 'Hair Spa', icon: Heart, description: 'Repair and nourish your hair from roots.', price: 'Starts from ₹999' },
  { id: 5, title: 'Bridal Makeup', icon: Star, description: 'Exceptional artistry for your big day.', price: 'Starts from ₹15,000' },
  { id: 6, title: 'Party Makeup', icon: Palette, description: 'Stunning looks for every occasion.', price: 'Starts from ₹2,500' },
  { id: 7, title: 'Advanced Waxing', icon: Heart, description: 'Smooth, painless, and hygienic waxing.', price: 'Starts from ₹399' },
  { id: 8, title: 'Mani & Pedi', icon: Camera, description: 'Relaxing care for your hands and feet.', price: 'Starts from ₹899' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-bold uppercase tracking-[0.3em] text-xs block mb-4"
          >
            Our Services
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-heading italic">Signature Treatments</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 glass-card hover:border-gold/50"
            >
              <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                <service.icon size={24} />
              </div>
              <h3 className="text-lg font-serif font-bold text-brand-heading mb-2">{service.title}</h3>
              <p className="text-brand-text/70 text-xs mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="text-brand-heading font-bold text-sm tracking-wide">
                {service.price}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#pricing"
            className="inline-flex items-center gap-2 text-neutral-900 font-bold border-b-2 border-gold pb-1 hover:text-gold transition-all"
          >
            Explore Full Price Menu
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
