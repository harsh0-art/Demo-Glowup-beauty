/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BridalHighlight from './components/BridalHighlight';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import WhyChooseUs from './components/WhyChooseUs';
import Offers from './components/Offers';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text relative overflow-x-hidden">
      {/* Decorative Blobs from Frosted Glass Theme */}
      <div className="fixed top-[-100px] left-[-100px] w-96 h-96 bg-rose-200/40 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-100px] right-[-100px] w-96 h-96 bg-amber-100/40 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        <BridalHighlight />
        <Offers />
        <Gallery />
        <WhyChooseUs />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
