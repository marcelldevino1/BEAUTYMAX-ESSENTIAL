"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function BrandsPage() {
  return (
    <main className="pt-24 flex-grow pb-16 md:pb-24">
      
      {/* --- HERO SECTION BARU (GAYA EDITORIAL/ARSITEKTUR) --- */}
      <ScrollReveal>
        <section className="pt-12 md:pt-16 pb-16 md:pb-24 px-6 md:px-16 max-w-7xl mx-auto">
          
          {/* Header Grid: Judul di kiri, Deskripsi & Tombol di Kanan */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            <div className="md:col-span-7">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-[72px] font-medium leading-[1.1] text-primary uppercase">
                The Beauty<br />Universe.
              </h1>
            </div>
            <div className="md:col-span-5 flex flex-col gap-8 md:pt-4">
              <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
                Discover our house of distinguished brands. Each meticulously crafted to serve a unique aesthetic, united by our commitment to uncompromising quality.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <a href="#bk" className="bg-primary text-white text-xs font-semibold uppercase tracking-widest px-8 py-4 hover:bg-muted-gold transition-colors">
                  Explore Portfolio
                </a>
              </div>
            </div>
          </div>

          {/* Gambar & Overlapping Card */}
          <div className="relative w-full mb-12 md:mb-20">
            {/* Gambar Utama */}
            <div className="w-full h-[400px] md:h-[550px] overflow-hidden bg-surface-container-low relative">
              <img 
                alt="Brand Universe Hero" 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=2000" 
              />
            </div>

            {/* Overlapping Dark Card (Kotak Hitam Menimpa Gambar) */}
            <div className="static md:absolute md:-bottom-10 md:right-8 w-full md:w-[460px] bg-primary text-white p-8 md:shadow-2xl z-20 mt-6 md:mt-0">
              <p className="font-serif text-lg leading-relaxed text-gray-200 mb-8">
                &quot;We do not just follow trends; we engineer the future of beauty. A curated portfolio designed to empower every expression.&quot;
              </p>
              <div className="flex justify-between items-end border-t border-white/20 pt-6">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-gold">Our Directory</span>
                <div className="flex items-center gap-6">
                  {/* Penanda Identitas Korporat */}
                  <span className="text-[10px] font-medium opacity-60 font-mono tracking-widest uppercase">Est. 2026</span>
                  {/* Functional Scroll Down Button */}
                  <a href="#bk" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-muted-gold hover:border-muted-gold transition-all duration-300 cursor-pointer bg-white text-primary hover:text-white">
                    <span className="material-symbols-outlined text-[16px] animate-bounce mt-1">arrow_downward</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Tags (Di bawah gambar, di sebelah kiri kotak hitam mewakili 3 Brand) */}
            <div className="flex flex-wrap gap-3 mt-6 md:mt-8 md:max-w-[50%]">
              <span className="px-5 py-2 rounded-full border border-outline-variant text-[10px] font-semibold uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-colors cursor-default">New Generation</span>
              <span className="px-5 py-2 rounded-full border border-outline-variant text-[10px] font-semibold uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-colors cursor-default">Eye Artistry</span>
              <span className="px-5 py-2 rounded-full border border-outline-variant text-[10px] font-semibold uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-colors cursor-default">Professional Glamor</span>
            </div>
          </div>

        </section>
      </ScrollReveal>

      {/* --- BRAND LIST SECTION --- */}
      {/* Brand 1: BK */}
      <section className="py-16 md:py-24 px-6 md:px-16 max-w-7xl mx-auto" id="bk">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <ScrollReveal>
              <span className="font-serif text-3xl md:text-4xl block mb-2">BK</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-gold block mb-6">New Generation Beauty</span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-6">Be Kind.<br />Be Kool.<br />Be You.</h2>
              <p className="text-base text-on-surface-variant mb-8 max-w-md">
                A beauty universe made for the new generation. From lips to skin, nails to everyday self-care, BK brings together different beauty brands with one shared spirit. Here, you are free to try new colors, discover new textures, and build your own beauty story.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="px-4 py-2 rounded-full bg-surface-container-high text-xs font-semibold uppercase tracking-widest">Colorful</span>
                <span className="px-4 py-2 rounded-full bg-surface-container-high text-xs font-semibold uppercase tracking-widest">Personal</span>
                <span className="px-4 py-2 rounded-full bg-surface-container-high text-xs font-semibold uppercase tracking-widest">Fun</span>
              </div>
              <a href="https://bkcosmetics.idn" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest hover:text-muted-gold transition-colors pb-1 border-b border-primary hover:border-muted-gold">
                Explore BK Collection <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </ScrollReveal>
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="col-span-1 h-[400px] md:h-[600px] rounded overflow-hidden group">
                  <img alt="BK Swatches" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=1000" />
                </div>
                <div className="col-span-1 flex flex-col gap-4">
                  <div className="h-[200px] md:h-[290px] rounded overflow-hidden group">
                    <img alt="BK Product" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1571781526291-c477ebfd024b?auto=format&fit=crop&q=80&w=1000" />
                  </div>
                  <div className="h-[200px] md:h-[290px] rounded bg-surface-container-high p-6 flex items-center justify-center">
                    <span className="font-serif text-2xl text-center italic opacity-80">&quot;Beauty is never limited.&quot;</span>
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
              <img alt="ME5 Artistry" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-widest border border-white/30">Eye Artistry</span>
              </div>
            </ScrollReveal>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <ScrollReveal delay={200}>
              <span className="font-serif text-3xl md:text-4xl block mb-2">ME5</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-gold block mb-6">Dedicated to the Art of Eye Makeup</span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-6">Your Eyes,<br />Your Magic,<br />Your ME5.</h2>
              <p className="text-base text-on-surface-variant mb-10 max-w-md">
                Inspired by the power and mystery of the eyes, we create high-performance products that enhance, define, and transform every gaze. ME5 combines cutting-edge technology with richly pigmented formulas to deliver long-lasting, expressive, and effortless eye artistry.
              </p>
              <a href="https://me5.idn" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest hover:text-muted-gold transition-colors pb-1 border-b border-primary hover:border-muted-gold">
                Discover ME5 Technology <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Brand 3: AG */}
      <section className="py-16 md:py-24 px-6 md:px-16 max-w-7xl mx-auto" id="ag">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <ScrollReveal>
              <span className="font-serif text-3xl md:text-4xl block mb-2">AG</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-gold block mb-6">Angela Glamor</span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-6">Flawless Skin.<br />Polished Nails.<br />Professional Glamor.</h2>
              <p className="text-base text-on-surface-variant mb-8 max-w-md">
                A professional beauty brand dedicated to flawless base makeup and salon-grade nail artistry. Created for modern beauty lovers and professionals, AG believes glamour starts with a perfected complexion and ends with polished details.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="px-4 py-2 rounded-full bg-surface-container-high text-xs font-semibold uppercase tracking-widest">Base Makeup</span>
                <span className="px-4 py-2 rounded-full bg-surface-container-high text-xs font-semibold uppercase tracking-widest">Nail Artistry</span>
                <span className="px-4 py-2 rounded-full bg-surface-container-high text-xs font-semibold uppercase tracking-widest">Elegance</span>
              </div>
              <a href="https://ag.idn" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest hover:text-muted-gold transition-colors pb-1 border-b border-primary hover:border-muted-gold">
                Explore AG Fragrance <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </ScrollReveal>
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <ScrollReveal delay={200}>
              <div className="w-full h-[500px] md:h-[700px] rounded overflow-hidden group relative">
                <img alt="AG Beauty Details" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&q=80&w=1000" />
                <div className="absolute inset-0 border-[16px] border-surface z-10 pointer-events-none"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

    </main>
  );
}