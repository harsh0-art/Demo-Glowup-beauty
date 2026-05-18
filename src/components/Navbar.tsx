import { motion, useScroll, useTransform } from 'motion/react';
import { Phone, MessageCircle, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.85)', 'rgba(250, 250, 249, 0.98)']
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ['0 4px 30px rgba(0, 0, 0, 0.05)', '0 10px 15px -3px rgb(0 0 0 / 0.1)']
  );

  return (
    <motion.nav
      style={{ backgroundColor, boxShadow }}
      className="fixed top-4 left-4 right-4 md:left-10 md:right-10 z-50 glass-panel px-6 py-3 flex items-center justify-between border-white/80"
    >
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-white font-serif italic text-xl">
          G
        </div>
        <span className="font-serif text-2xl tracking-tight text-brand-heading">
          GlowUp <span className="text-gold font-light italic text-xl hidden xs:inline">Beauty Studio</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#services" className="hover:text-gold transition-colors">Services</a>
        <a href="#bridal" className="hover:text-gold transition-colors">Bridal</a>
        <a href="#gallery" className="hover:text-gold transition-colors">Gallery</a>
        <a href="#pricing" className="hover:text-gold transition-colors">Menu</a>
        <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
      </div>

      <div className="flex items-center gap-4">
        <a 
          href="https://wa.me/919988776655" 
          target="_blank" 
          rel="noreferrer"
          className="btn-whatsapp"
        >
          <MessageCircle size={18} />
          <span className="hidden lg:inline">Book Appointment</span>
        </a>
      </div>
    </motion.nav>
  );
}
