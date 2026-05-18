import { motion } from 'motion/react';

const pricingData = [
  {
    category: 'Hair Styling',
    items: [
      { name: 'Classic Haircut', price: '₹499' },
      { name: 'Designer Haircut', price: '₹899' },
      { name: 'Deep Conditioning Hair Spa', price: '₹1,299' },
      { name: 'Global Hair Color', price: '₹2,999' },
      { name: 'Keratin Treatment', price: '₹4,500' },
    ]
  },
  {
    category: 'Skin & Body',
    items: [
      { name: 'Fruit Facial', price: '₹999' },
      { name: 'O3+ Luxury Facial', price: '₹2,499' },
      { name: 'Insta-Glow Cleanup', price: '₹799' },
      { name: 'Aroma Body Massage', price: '₹1,800' },
      { name: 'Chocolate Waxing (Full Body)', price: '₹1,500' },
    ]
  },
  {
    category: 'Makeup Artistry',
    items: [
      { name: 'Party Makeup', price: '₹2,500' },
      { name: 'Reception Makeup', price: '₹5,000' },
      { name: 'Engagement Makeup', price: '₹4,000' },
      { name: 'Signature Bridal HD', price: '₹15,000' },
      { name: 'Airbrush Bridal', price: '₹22,000' },
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs block mb-4">Price Menu</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-heading italic">Our Services & Pricing</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData.map((section, idx) => (
            <motion.div 
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-10 relative overflow-hidden flex flex-col"
            >
              <h3 className="text-xs font-bold uppercase tracking-widest text-gold mb-8 border-b border-white/20 pb-4">
                {section.category}
              </h3>
              
              <div className="space-y-4 flex-1">
                {section.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-center p-2 rounded-lg hover:bg-white/20 transition-all group">
                    <span className="text-sm font-medium text-brand-text group-hover:text-brand-heading transition-colors">{item.name}</span>
                    <div className="flex-grow border-b border-dotted border-brand-text/20 mx-3 opacity-30" />
                    <span className="text-xs font-bold text-brand-heading">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-6 text-[10px] text-brand-text/50 text-center italic border-t border-white/10">
                * Prices may vary based on length and volume.
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
