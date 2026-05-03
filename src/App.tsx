/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/home/Hero";
import { About } from "./components/home/About";
import { Services } from "./components/home/Services";
import { Offers } from "./components/home/Offers";
import { Gallery } from "./components/home/Gallery";
import { Academy } from "./components/home/Academy";
import { Testimonials } from "./components/home/Testimonials";
import { Contact } from "./components/home/Contact";
import { FloatingWhatsApp } from "./components/common/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-luxury-black text-white selection:bg-gold-500 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Offers />
        <Gallery />
        <Academy />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
