import { motion } from "motion/react";
import { useState } from "react";

import bridalImg from "../assets/images/bridal_makeup_accent_1778998015380.png";
import salonImg from "../assets/images/salon_hero_bg_1778997982543.png";
import skincareImg from "../assets/images/skincare_salon_1778998037938.png";

const galleryItems = [
  { id: 1, type: "Bridal", image: bridalImg },
  { id: 2, type: "Hair", image: salonImg },
  { id: 3, type: "Skin", image: skincareImg },
  { id: 4, type: "Bridal", image: bridalImg },
  { id: 5, type: "Party", image: salonImg },
  { id: 6, type: "Hair", image: skincareImg },
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Bridal", "Hair", "Skin", "Party"];

  const filteredItems =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.type === filter);

  return (
    <section id="gallery" className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="glass-card p-10">
          <div className="text-center mb-12">
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs block mb-4">
              Real Transformations
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-heading mb-8">
              Service Showcase
            </h2>

            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                    filter === cat
                      ? "bg-gold text-white shadow-lg"
                      : "bg-white/40 backdrop-blur-md text-brand-text hover:bg-white/60 border border-white/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border-4 border-white/60 shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.type}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-heading/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-white font-serif text-2xl italic mb-2">
                    {item.type}
                  </span>
                  <div className="text-gold text-[10px] tracking-widest uppercase font-bold">
                    View Transformation
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
