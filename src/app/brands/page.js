"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function BrandsPage() {
  return (
    <main className="pt-24 flex-grow pb-0 bg-surface">
      
      {/* --- HERO SECTION --- */}
      <ScrollReveal>
        <section className="pt-12 md:pt-20 pb-16 md:pb-28 px-6 md:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-7">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-muted-gold mb-4">Our Portfolio</span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] text-primary uppercase">
                Proprietary<br />Brands.
              </h1>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-8 lg:pt-8 border-t lg:border-t-0 lg:border-l border-outline-variant/60 lg:pl-12">
              <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
                Nurturing a diverse portfolio of proprietary, trend-driven beauty brands. Driven by deep consumer insight and market agility, Beautymax empowers individuality across all generations and lifestyles.
              </p>
              <div>
                <a href="#bk" className="inline-block border-b border-primary text-primary text-xs font-semibold uppercase tracking-widest pb-2 hover:text-muted-gold hover:border-muted-gold transition-all duration-300">
                  Explore Portfolio ↓
                </a>
              </div>
            </div>
          </div>

          <div className="relative w-full">
            <div className="w-full overflow-hidden bg-surface-container-low rounded-sm">
              <img alt="Brand Universe Hero" className="w-full h-auto object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000" src="/images/all-brands-hero.webp" />
            </div>
            
            {/* Teks Atribut Pengganti Pola Pill AI */}
            <div className="flex flex-row gap-8 md:gap-12 mt-8 border-t border-outline-variant/40 pt-6">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-primary/80">01 / Trend-Driven</span>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-primary/80">02 / Global Standard</span>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-primary/80">03 / Accessible</span>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* --- BRAND LIST SECTION --- */}
      
      {/* Brand 1: BK Cosmetics (Soft Blush Background) */}
      <section className="w-full py-20 md:py-32 bg-brand-bk border-t border-outline-variant/40" id="bk">
        <div className="px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <ScrollReveal>
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-gold block mb-2">01 / Sub-Identity</span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-primary">BK Cosmetics</h2>
              </div>
              
              <h3 className="font-serif text-xl md:text-2xl italic text-on-surface-variant mb-6 border-l-2 border-muted-gold pl-4">
                Beauty is never limited.
              </h3>
              
              <p className="text-base text-on-surface-variant mb-10 leading-relaxed max-w-md">
                A vibrant beauty universe tailored for the new generation. Encompassing three core lines—BUTYKISS, BUTYKOOL, and BUTYKLEAN—BK breaks traditional boundaries to offer a diverse, playful range across lips, skin, nails, and everyday self-care.
              </p>
              
              {/* List Minimalis Pengganti Pill Badges AI */}
              <div className="flex flex-col gap-3 border-t border-outline-variant/40 pt-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary/70 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-muted-gold"></span> Core Line — BUTYKISS
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary/70 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-muted-gold"></span> Core Line — BUTYKOOL
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary/70 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-muted-gold"></span> Core Line — BUTYKLEAN
                </span>
              </div>
            </ScrollReveal>
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <ScrollReveal delay={200}>
              <div className="w-full overflow-hidden bg-white rounded-sm">
                <img alt="BK Banner" className="w-full h-auto object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000" src="/images/bk-banner.webp" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Brand 2: ME5 (Champagne Sand Background) */}
      <section className="w-full py-20 md:py-32 bg-brand-me5 border-t border-outline-variant/40" id="me5">
        <div className="px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="md:col-span-7">
            <ScrollReveal>
              <div className="w-full overflow-hidden bg-white rounded-sm">
                <img alt="ME5 Artistry" className="w-full h-auto object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000" src="/images/me5-banner.webp" />
              </div>
            </ScrollReveal>
          </div>
          <div className="md:col-span-5 md:pl-8">
            <ScrollReveal delay={200}>
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-gold block mb-2">02 / Sub-Identity</span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-primary">ME5</h2>
              </div>
              
              <h3 className="font-serif text-xl md:text-2xl italic text-on-surface-variant mb-6 border-l-2 border-muted-gold pl-4">
                Your Eyes, Your Magic, Your ME5.
              </h3>
              
              <p className="text-base text-on-surface-variant leading-relaxed max-w-md">
                A dedicated eye-beauty brand that treats makeup as a language of confidence. ME5 utilizes advanced textures, vibrant high-definition pigments, and ultra-long-lasting wear to elevate, define, and transform every gaze.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Brand 3: AG - Angela Glamor (Cool Slate Background) */}
      <section className="w-full py-20 md:py-32 bg-brand-ag border-t border-b border-outline-variant/40" id="ag">
        <div className="px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <ScrollReveal>
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-gold block mb-2">03 / Sub-Identity</span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-primary">AG (Angela Glamor)</h2>
              </div>
              
              <h3 className="font-serif text-xl md:text-2xl italic text-on-surface-variant mb-6 border-l-2 border-muted-gold pl-4">
                Flawless Skin. Impeccable Gel Nails. Professional Glamor.
              </h3>
              
              <p className="text-base text-on-surface-variant mb-10 leading-relaxed max-w-md">
                A high-performance, professional-grade beauty brand built for enthusiasts and salon experts alike. AG focuses on engineered, seamless base makeup formulas and premium, high-gloss, ultra-durable gel nail polishes that bring professional artistry into daily routines.
              </p>

              {/* List Minimalis Pengganti Pill Badges AI */}
              <div className="flex flex-col gap-3 border-t border-outline-variant/40 pt-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary/70 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-muted-gold"></span> Engineered Base Makeup
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary/70 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-muted-gold"></span> High-Gloss Gel Nails
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary/70 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-muted-gold"></span> Professional Salon Grade
                </span>
              </div>
            </ScrollReveal>
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <ScrollReveal delay={200}>
              <div className="w-full overflow-hidden bg-white rounded-sm">
                <img alt="AG Beauty Banner" className="w-full h-auto object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000" src="/images/ag-banner.webp" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

    </main>
  );
}