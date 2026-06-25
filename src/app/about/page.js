"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <main className="pt-24 flex-grow pb-16 md:pb-24">
      {/* Hero Section */}
      <ScrollReveal>
        <section className="px-6 md:px-16 max-w-7xl mx-auto py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-muted-gold mb-6 border-b border-muted-gold pb-1">PT BEAUTYMAX Essential Indonesia</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
                Beauty for Every Expression.
              </h1>
            </div>
            <div className="md:col-span-4 pb-4">
              <p className="text-lg leading-relaxed text-on-surface-variant">
                Pioneering the color cosmetics industry since 2002. We seamlessly bridge high-caliber, global-standard manufacturing with strategic brand management.
              </p>
            </div>
          </div>
          <div className="mt-16 w-full h-[500px] md:h-[700px] bg-surface-container relative overflow-hidden">
            <img alt="Editorial beauty" className="w-full h-full object-cover object-center filter saturate-[0.85] contrast-[1.05]" src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=2000" />
          </div>
        </section>
      </ScrollReveal>

      {/* Vision & Mission */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="bg-surface-container-low p-10 md:p-16 flex flex-col justify-between min-h-[400px]">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-6">Our Vision</span>
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-6">&quot;Shaping a world where diverse, trend-forward beauty experiences empower everyone to express their authentic selves.&quot;</h3>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="bg-soft-beige p-10 md:p-16 flex flex-col justify-between min-h-[400px]">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-6">Our Mission</span>
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-6">To create accessible, insight-driven beauty products.</h3>
              </div>
              <p className="text-base text-on-surface-variant mt-auto max-w-md">Foster purposeful partnerships, champion responsible brand development, and deliver sustainable value for our global communities.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Pillars (Section Baru sesuai Brief) */}
      <section className="w-full py-16 md:py-24 bg-primary text-white mt-12">
        <div className="px-6 md:px-16 max-w-7xl mx-auto">
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-muted-gold mb-4">Operational Strength</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-16">Core Pillars</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <ScrollReveal delay={100}>
              <div className="border-t border-white/20 pt-6">
                <h3 className="text-xl md:text-2xl font-serif font-medium mb-4 text-muted-gold">Premium OEM/ODM Services</h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">Backed by world-class production infrastructure. We are a trusted manufacturing partner for prominent international beauty brands like L.A. Colors and S.he.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="border-t border-white/20 pt-6">
                <h3 className="text-xl md:text-2xl font-serif font-medium mb-4 text-muted-gold">Global Certifications</h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">Facilities strictly certified by international and regional standards, including GMPC, ISO 22716, FDA, Indonesian BPOM, and HALAL, ensuring seamless global market entry.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="border-t border-white/20 pt-6">
                <h3 className="text-xl md:text-2xl font-serif font-medium mb-4 text-muted-gold">Global Retail Presence</h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">Commanding a massive global retail presence with tier-1 partners including Walmart, MINISO, KKV and SANFU, among many others.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="border-t border-white/20 pt-6">
                <h3 className="text-xl md:text-2xl font-serif font-medium mb-4 text-muted-gold">IP Partnerships</h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">Amplifying market engagement through high-profile intellectual property partnerships, including exclusive collaborations with Disney and B.Duck, alongside a growing portfolio of global icons.</p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={500}>
            <div className="mt-16 pt-12 border-t border-white/20 flex justify-end">
              <Link className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest hover:text-muted-gold transition-colors pb-1 border-b border-white hover:border-muted-gold" href="/contact">
                Partner With Us <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}