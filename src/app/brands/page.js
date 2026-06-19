"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function BrandsPage() {
  return (
    <main className="pt-24 flex-grow pb-16 md:pb-24">
      {/* Hero */}
      <ScrollReveal>
        <section className="relative h-[600px] md:h-[800px] flex items-center justify-center overflow-hidden bg-surface-container-low">
          <div className="absolute inset-0 z-0">
            <img alt="Brand Universe Hero" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1615397323145-2b47e2db7159?auto=format&fit=crop&q=80&w=2000" />
          </div>
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1 rounded-full bg-soft-beige text-primary text-xs font-semibold uppercase tracking-widest mb-6">Our Portfolio</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">The Beauty Universe.</h1>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">Discover our house of distinguished brands. Each meticulously crafted to serve a unique aesthetic, united by our commitment to uncompromising quality.</p>
          </div>
        </section>
      </ScrollReveal>

      {/* Brand 1: BK */}
      <section className="py-16 md:py-24 px-6 md:px-16 max-w-7xl mx-auto" id="bk">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <ScrollReveal>
              <span className="font-serif text-3xl md:text-4xl block mb-2">BK</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-gold block mb-6">New Generation Beauty</span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-6">Be Kind.<br />Be Kool.<br />Be You.</h2>
              <p className="text-base text-on-surface-variant mb-8 max-w-md">A vibrant celebration of individuality. BK breaks the mold with highly pigmented, playful formulas designed for the unapologetic creator.</p>
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="px-4 py-2 rounded-full bg-surface-container-high text-xs font-semibold uppercase tracking-widest">Cruelty-Free</span>
                <span className="px-4 py-2 rounded-full bg-surface-container-high text-xs font-semibold uppercase tracking-widest">Vivid Pigments</span>
                <span className="px-4 py-2 rounded-full bg-surface-container-high text-xs font-semibold uppercase tracking-widest">Gen-Z</span>
              </div>
              {/* 👇 Rute Eksternal ke Toko BK (Tab Baru) 👇 */}
              <a href="https://bkcosmetics.idn" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest hover:text-muted-gold transition-colors pb-1 border-b border-primary hover:border-muted-gold">
                Explore BK Collection <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </ScrollReveal>
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="col-span-1 h-[400px] md:h-[600px] rounded overflow-hidden group">
                  <img alt="BK Swatches" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512496015851-a1dc8a477d5d?auto=format&fit=crop&q=80&w=1000" />
                </div>
                <div className="col-span-1 flex flex-col gap-4">
                  <div className="h-[200px] md:h-[290px] rounded overflow-hidden group">
                    <img alt="BK Product" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=1000" />
                  </div>
                  <div className="h-[200px] md:h-[290px] rounded bg-surface-container-high p-6 flex items-center justify-center">
                    <span className="font-serif text-2xl text-center italic opacity-80">&quot;Color without compromise.&quot;</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Brand 2: ME5 */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-surface-container-low" id="me5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 h-[400px] md:h-[600px] rounded overflow-hidden relative group">
            <ScrollReveal>
              <img alt="ME5 Artistry" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&q=80&w=1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-widest border border-white/30">Precision Tech</span>
              </div>
            </ScrollReveal>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <ScrollReveal delay={200}>
              <span className="font-serif text-3xl md:text-4xl block mb-2">ME5</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-gold block mb-6">Magic Eye Makeup</span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-6">High-Performance<br />Artistry.</h2>
              <p className="text-base text-on-surface-variant mb-8 max-w-md">Engineered for the most demanding environments. ME5 combines cutting-edge cosmetic technology with intense, long-lasting wear.</p>
              <ul className="space-y-4 mb-10 border-l border-outline-variant pl-6">
                <li>
                  <h4 className="text-xs font-semibold uppercase tracking-widest mb-1">Micro-Precision Pens</h4>
                  <p className="text-sm text-on-surface-variant">0.1mm tips for architectural line work.</p>
                </li>
                <li>
                  <h4 className="text-xs font-semibold uppercase tracking-widest mb-1">24H Bonding Technology</h4>
                  <p className="text-sm text-on-surface-variant">Smudge-proof formulations engineered for endurance.</p>
                </li>
              </ul>
              {/* 👇 Rute Eksternal ke Toko ME5 (Tab Baru) 👇 */}
              <a href="https://me5.idn" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest hover:text-muted-gold transition-colors pb-1 border-b border-primary hover:border-muted-gold">
                Discover ME5 Technology <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Brand 3: AG (Angela Glamor) - Tambahan Baru! */}
      <section className="py-16 md:py-24 px-6 md:px-16 max-w-7xl mx-auto" id="ag">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <ScrollReveal>
              <span className="font-serif text-3xl md:text-4xl block mb-2">AG</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-gold block mb-6">Heritage Botanical Fragrances</span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-6">The Essence<br />of Nature.</h2>
              <p className="text-base text-on-surface-variant mb-8 max-w-md">Crafted from the world&apos;s finest botanicals, AG brings a timeless, organic touch to modern perfumery. Scent profiles that linger as elegant memories.</p>
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="px-4 py-2 rounded-full bg-surface-container-high text-xs font-semibold uppercase tracking-widest">Artisanal</span>
                <span className="px-4 py-2 rounded-full bg-surface-container-high text-xs font-semibold uppercase tracking-widest">Vegan</span>
                <span className="px-4 py-2 rounded-full bg-surface-container-high text-xs font-semibold uppercase tracking-widest">Sustainable</span>
              </div>
              {/* 👇 Rute Eksternal ke Toko AG (Tab Baru) 👇 */}
              <a href="https://ag.idn" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest hover:text-muted-gold transition-colors pb-1 border-b border-primary hover:border-muted-gold">
                Explore AG Fragrance <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </ScrollReveal>
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <ScrollReveal delay={200}>
              <div className="w-full h-[500px] md:h-[700px] rounded overflow-hidden group relative">
                <img alt="AG Fragrance Bottle" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000" />
                <div className="absolute inset-0 border-[16px] border-surface z-10 pointer-events-none"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}