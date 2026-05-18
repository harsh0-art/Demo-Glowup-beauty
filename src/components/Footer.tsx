import { Instagram, Facebook, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-transparent pt-24 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-white font-serif italic text-xl">
                G
              </div>
              <span className="font-serif text-2xl tracking-tight text-brand-heading">
                GlowUp
              </span>
            </div>
            <p className="text-brand-text/60 text-xs leading-relaxed mb-8">
              Transforming beauty into art since 2015. Surat's most trusted bridal and premium salon studio.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-brand-text hover:bg-gold hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-brand-text hover:bg-gold hover:text-white transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-8 text-brand-heading">Services</h4>
            <ul className="space-y-4 text-xs text-brand-text/70 uppercase tracking-widest">
              <li><a href="#services" className="hover:text-gold transition-colors">Salon Treatments</a></li>
              <li><a href="#bridal" className="hover:text-gold transition-colors">Bridal Packages</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors">Portfolio</a></li>
              <li><a href="#pricing" className="hover:text-gold transition-colors">Service Menu</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-8 text-brand-heading">Information</h4>
            <ul className="space-y-4 text-xs text-brand-text/70 uppercase tracking-widest">
              <li><a href="#" className="hover:text-gold transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Sanitization</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Policies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-8 text-brand-heading">Book Slot</h4>
            <div className="space-y-4 text-xs text-brand-text/70">
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-gold shrink-0 mt-0.5" />
                <span className="font-bold text-brand-heading tracking-widest">+91 99887 76655</span>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle size={16} className="text-gold shrink-0 mt-0.5" />
                <span>WhatsApp support available daily.</span>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gold block mb-4">Trusted Presence</span>
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-rose-glass flex items-center justify-center text-[8px] font-bold text-rose-500`} >★</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] text-brand-text/40 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} GlowUp Beauty Studio Surat. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-brand-text/40 text-[9px] uppercase tracking-[0.2em]">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
