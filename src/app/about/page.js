"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <main className="pt-24 flex-grow pb-0 bg-surface">
      
      {/* HERO SECTION - EDITORIAL STYLE */}
      <ScrollReveal>
        <section className="px-6 md:px-16 max-w-7xl mx-auto py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
            <div className="md:col-span-7">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-muted-gold mb-6 border-b border-muted-gold pb-1">PT BEAUTYMAX Essential Indonesia</span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] text-primary mb-8">
                Beauty for<br/>Every Expression.
              </h1>
            </div>
            <div className="md:col-span-5 md:pt-12 flex flex-col gap-6 text-base md:text-lg leading-relaxed text-on-surface-variant">
              <p>
                Pioneering the color cosmetics industry Since 2002, PT Beautymax Essential Indonesia is a dynamic beauty pioneer that seamlessly bridges high-caliber, global-standard manufacturing with strategic brand management.
              </p>
              <p>
                Operating from state-of-the-art facilities, the company delivers premium OEM/ODM services to international leaders while nurturing a diverse portfolio of proprietary, trend-driven beauty brands. Driven by deep consumer insight and market agility, Beautymax empowers individuality across all generations and lifestyles.
              </p>
            </div>
          </div>
          
          {/* Gambar Hero - Sharp Edges */}
          <div className="mt-16 md:mt-24 w-full md:h-[600px] lg:h-[700px] overflow-hidden relative rounded-sm">
            <img 
              alt="Beautymax Essential Introduction" 
              className="w-full h-auto md:h-full object-cover object-center grayscale-[10%] hover:grayscale-0 transition-all duration-1000" 
              src="/images/about-main-page.webp" 
            />
          </div>
        </section>
      </ScrollReveal>

      {/* VISION & MISSION - ASYMMETRICAL TYPOGRAPHY */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto py-16 md:py-32 border-t border-outline-variant/50">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          
          <ScrollReveal className="md:w-1/2">
            <div className="border-t border-primary pt-6">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-6">Our Vision</span>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-primary leading-tight">
                "Shaping a world where diverse, trend-forward beauty experiences empower everyone to express their authentic selves."
              </h3>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150} className="md:w-1/2">
            <div className="border-t border-outline-variant pt-6 flex flex-col h-full">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-6">Our Mission</span>
              <p className="text-lg md:text-xl leading-relaxed text-on-surface-variant max-w-lg">
                To create accessible, insight-driven beauty products, foster purposeful partnerships, champion responsible brand development, and deliver sustainable value for our global communities.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* CORE PILLARS & COMMITMENT - HIGH CONTRAST */}
      <section className="w-full py-20 md:py-32 bg-primary text-surface">
        <div className="px-6 md:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Kiri: Gambar Model Berjas - Flat & Elegant */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ScrollReveal>
                <div className="overflow-hidden relative rounded-sm">
                  <img 
                    src="/images/our-commitment.webp" 
                    alt="Our Commitment & Strength" 
                    className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000" 
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Kanan: Teks 4 Pilar */}
            <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-10">
              <ScrollReveal>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-muted-gold mb-4">Operational Strength</span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-16">Core Pillars</h2>
              </ScrollReveal>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16">
                
                <ScrollReveal delay={100}>
                  <div className="border-t border-white/20 pt-6">
                    <h3 className="text-xl md:text-2xl font-serif font-medium mb-4 text-muted-gold">Premium OEM/ODM</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Premium OEM/ODM services backed by world-class production infrastructure. Trusted manufacturing partner for prominent international beauty brands like L.A. Colors and S.he.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <div className="border-t border-white/20 pt-6">
                    <h3 className="text-xl md:text-2xl font-serif font-medium mb-4 text-muted-gold">Global Certifications</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Facilities strictly certified by international and regional standards, including GMPC, ISO 22716, FDA, Indonesian BPOM, and HALAL, ensuring seamless global market entry.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <div className="border-t border-white/20 pt-6">
                    <h3 className="text-xl md:text-2xl font-serif font-medium mb-4 text-muted-gold">Retail Presence</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Commanding a massive global retail presence with tier-1 partners including Walmart, MINISO, KKV and SANFU, among many others.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <div className="border-t border-white/20 pt-6">
                    <h3 className="text-xl md:text-2xl font-serif font-medium mb-4 text-muted-gold">IP Partnerships</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Amplifying market engagement through high-profile intellectual property partnerships, including exclusive collaborations with Disney and B.Duck, alongside a growing portfolio of global icons.
                    </p>
                  </div>
                </ScrollReveal>

              </div>

              <ScrollReveal delay={500}>
                <div className="mt-16 pt-8 border-t border-white/20 flex justify-start lg:justify-end">
                  <Link className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest hover:text-muted-gold transition-colors pb-1 border-b border-white hover:border-muted-gold" href="/contact">
                    Partner With Us <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}