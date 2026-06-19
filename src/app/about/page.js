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
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
                Beauty is an unapologetic form of self-expression.
              </h1>
            </div>
            <div className="md:col-span-4 pb-4">
              <p className="text-lg leading-relaxed text-on-surface-variant">
                We believe that true elegance lies in authenticity. Our heritage is built on providing the essential tools to help you articulate your unique identity to the world.
              </p>
            </div>
          </div>
          <div className="mt-16 w-full h-[500px] md:h-[700px] bg-surface-container relative overflow-hidden">
            <img alt="Editorial beauty" className="w-full h-full object-cover object-center filter saturate-[0.85] contrast-[1.05]" src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=2000" />
          </div>
        </section>
      </ScrollReveal>

      {/* Our Story Section */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 order-2 md:order-1 relative">
            <ScrollReveal delay={100}>
              <div className="aspect-[3/4] w-full bg-surface-container-low overflow-hidden">
                <img alt="Premium products" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=1000" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-soft-beige/50 -z-10"></div>
            </ScrollReveal>
          </div>
          <div className="md:col-span-6 md:col-start-7 order-1 md:order-2">
            <ScrollReveal>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-muted-gold mb-4 border-b border-muted-gold pb-1">Our Story</span>
              <h2 className="font-serif text-3xl md:text-5xl font-medium leading-tight mb-8">From singular cosmetics to universal beauty staples.</h2>
              <div className="space-y-6 text-base text-on-surface-variant leading-relaxed">
                <p>What began as a curated collection of foundational color cosmetics has evolved into a comprehensive philosophy. BEAUTYMAX ESSENTIAL was founded on a simple premise: the best products don&apos;t mask who you are; they reveal it.</p>
                <p>Over the decades, we have refined our formulations, stripping away the unnecessary to focus purely on performance, texture, and wear. We are meticulous in our craftsmanship, ensuring every staple we offer meets the rigorous demands of professional artists and beauty purists alike.</p>
                <p>Today, we are recognized globally not just for what we make, but for what we stand for—a commitment to uncompromised quality and the quiet confidence it inspires.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="bg-surface-container-low p-10 md:p-16 flex flex-col justify-between min-h-[400px]">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-6">Vision</span>
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-6">Empowering every individual to express their unique beauty confidently.</h3>
              </div>
              <p className="text-base text-on-surface-variant mt-auto max-w-md">We envision a world where beauty routines are not obligations, but deliberate acts of self-care and self-definition.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="bg-soft-beige p-10 md:p-16 flex flex-col justify-between min-h-[400px]">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-6">Mission</span>
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-6">Delivering high-quality, innovative, and reliable beauty solutions.</h3>
              </div>
              <p className="text-base text-on-surface-variant mt-auto max-w-md">Our mission is to engineer products that perform flawlessly. By combining cutting-edge innovation with timeless aesthetic principles.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Commitment */}
      <section className="w-full py-16 md:py-24 bg-primary text-white mt-12">
        <div className="px-6 md:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <ScrollReveal>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-muted-gold mb-4">Our Commitment</span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-8">Sustainable value and responsible brand development.</h2>
                <p className="text-base text-gray-300 mb-10 max-w-md">Luxury must be responsible. We are dedicated to transparent sourcing, reducing our environmental footprint, and developing packaging that respects the planet without compromising on elegance.</p>
                {/* 👇 Rute diupdate ke /sustainability 👇 */}
                <Link 
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest hover:text-muted-gold transition-colors pb-1 border-b border-white hover:border-muted-gold" 
                href="/contact"
                >
                Discuss Our Commitment <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </ScrollReveal>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <ScrollReveal delay={150}>
                <div className="aspect-square w-full overflow-hidden">
                  <img alt="Sustainable" className="w-full h-full object-cover filter grayscale-[0.2]" src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}