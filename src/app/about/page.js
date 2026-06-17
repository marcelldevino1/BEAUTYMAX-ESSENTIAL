"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-primary-container/80 backdrop-blur-md border-b border-outline-variant dark:border-on-surface-variant/10 transition-all duration-300">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-base max-w-container-max mx-auto h-[72px]">
          <Link className="font-headline-md text-headline-md tracking-tighter text-primary dark:text-primary-fixed" href="/">
            BEAUTYMAX ESSENTIAL
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {/* Home: Inactive */}
            <Link className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors cursor-pointer duration-300" href="/">
              Home
            </Link>
            {/* About: Active */}
            <Link className="font-label-sm text-label-sm uppercase tracking-widest text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1 cursor-pointer transition-all duration-300" href="/about">
              About
            </Link>
            {/* Brands: Inactive */}
            <Link className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors cursor-pointer duration-300" href="/brands">
              Brands
            </Link>
            {/* Contact: Inactive */}
            <Link className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors cursor-pointer duration-300" href="/contact">
              Contact
            </Link>
          </div>
          <button className="hidden md:block bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest px-6 py-3 hover:bg-muted-gold transition-colors duration-300">
            Shop Now
          </button>
          {/* Mobile Menu Icon */}
          <button className="md:hidden text-primary">
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-[80px]">
        {/* Hero Section */}
        <ScrollReveal>
          <section className="w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-gap">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-end">
              <div className="md:col-span-8">
                <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-6">
                  Beauty is an unapologetic form of self-expression.
                </h1>
              </div>
              <div className="md:col-span-4 pb-4">
                <p className="font-body-lg text-body-lg text-charcoal-text leading-relaxed">
                  We believe that true elegance lies in authenticity. Our heritage is built on providing the essential tools to help you articulate your unique identity to the world.
                </p>
              </div>
            </div>
            <div className="mt-16 w-full h-[614px] md:h-[819px] bg-surface-container relative overflow-hidden">
              <img 
                alt="Editorial beauty photography" 
                className="w-full h-full object-cover object-center filter saturate-[0.85] contrast-[1.05]" 
                src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=2000" 
              />
            </div>
          </section>
        </ScrollReveal>

        {/* Our Story Section */}
        <section className="w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-gap">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-5 order-2 md:order-1 mt-12 md:mt-0 relative">
              <ScrollReveal delay={100}>
                <div className="aspect-[3/4] w-full bg-surface-container-low overflow-hidden">
                  <img 
                    alt="Premium cosmetic products" 
                    className="w-full h-full object-cover" 
                    src="https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=1000" 
                  />
                </div>
                {/* Decorative subtle accent */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-soft-beige/50 -z-10"></div>
              </ScrollReveal>
            </div>
            <div className="md:col-span-6 md:col-start-7 order-1 md:order-2">
              <ScrollReveal>
                <span className="inline-block font-label-sm text-label-sm uppercase tracking-widest text-muted-gold mb-4 border-b border-muted-gold pb-1">
                  Our Story
                </span>
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-8">
                  From singular cosmetics to universal beauty staples.
                </h2>
                <div className="space-y-6 font-body-md text-body-md text-on-surface-variant">
                  <p>
                    What began as a curated collection of foundational color cosmetics has evolved into a comprehensive philosophy. BEAUTYMAX ESSENTIAL was founded on a simple premise: the best products don&apos;t mask who you are; they reveal it.
                  </p>
                  <p>
                    Over the decades, we have refined our formulations, stripping away the unnecessary to focus purely on performance, texture, and wear. We are meticulous in our craftsmanship, ensuring every staple we offer meets the rigorous demands of professional artists and beauty purists alike.
                  </p>
                  <p>
                    Today, we are recognized globally not just for what we make, but for what we stand for—a commitment to uncompromised quality and the quiet confidence it inspires.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Vision & Mission (Bento/Asymmetric Layout) */}
        <section className="w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-gap">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Vision Card */}
            <ScrollReveal>
              <div className="bg-surface-container-low p-12 md:p-16 flex flex-col justify-between min-h-[500px]">
                <div>
                  <span className="inline-block font-label-sm text-label-sm uppercase tracking-widest text-primary mb-6">
                    Vision
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary mb-6">
                    Empowering every individual to express their unique beauty confidently.
                  </h3>
                </div>
                <p className="font-body-md text-body-md text-charcoal-text mt-auto max-w-md">
                  We envision a world where beauty routines are not obligations, but deliberate acts of self-care and self-definition. A world where confidence is the ultimate result of every interaction with our brand.
                </p>
              </div>
            </ScrollReveal>
            {/* Mission Card */}
            <ScrollReveal delay={150}>
              <div className="bg-soft-beige p-12 md:p-16 flex flex-col justify-between min-h-[500px]">
                <div>
                  <span className="inline-block font-label-sm text-label-sm uppercase tracking-widest text-primary mb-6">
                    Mission
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary mb-6">
                    Delivering high-quality, innovative, and reliable beauty solutions.
                  </h3>
                </div>
                <p className="font-body-md text-body-md text-charcoal-text mt-auto max-w-md">
                  Our mission is to engineer products that perform flawlessly. By combining cutting-edge innovation with timeless aesthetic principles, we provide reliable solutions that serve as the foundation of any sophisticated beauty wardrobe.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="w-full py-section-gap bg-primary text-on-primary">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
              <div className="md:col-span-5">
                <ScrollReveal>
                  <span className="inline-block font-label-sm text-label-sm uppercase tracking-widest text-muted-gold mb-4">
                    Our Commitment
                  </span>
                  <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg mb-8">
                    Sustainable value and responsible brand development.
                  </h2>
                  <p className="font-body-md text-body-md text-surface-variant mb-10 max-w-md">
                    Luxury must be responsible. We are dedicated to transparent sourcing, reducing our environmental footprint, and developing packaging that respects the planet without compromising on elegance. True beauty is sustainable.
                  </p>
                  <Link className="inline-flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-widest hover:text-muted-gold transition-colors duration-300 pb-1 border-b border-on-primary hover:border-muted-gold" href="#">
                    Read our Sustainability Report
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </ScrollReveal>
              </div>
              <div className="md:col-span-6 md:col-start-7 mt-12 md:mt-0">
                <ScrollReveal delay={150}>
                  <div className="aspect-square w-full overflow-hidden">
                    <img 
                      alt="Sustainable botanical elements" 
                      className="w-full h-full object-cover filter grayscale-[0.2]" 
                      src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000" 
                    />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <ScrollReveal>
        <footer className="w-full py-section-gap bg-primary-container dark:bg-black">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            {/* Brand */}
            <div className="md:col-span-1 mb-8 md:mb-0">
              <span className="font-headline-md text-headline-md text-white block mb-4">BEAUTYMAX ESSENTIAL</span>
              <p className="font-body-md text-body-md text-on-primary-container/60">
                © {new Date().getFullYear()} BEAUTYMAX ESSENTIAL. EMPOWERING BEAUTY GLOBALLY.
              </p>
            </div>
            {/* Links */}
            <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col gap-4">
                <Link className="font-body-md text-body-md text-on-primary-container/60 hover:text-muted-gold transition-colors duration-300" href="#">Privacy Policy</Link>
              </div>
              <div className="flex flex-col gap-4">
                <Link className="font-body-md text-body-md text-on-primary-container/60 hover:text-muted-gold transition-colors duration-300" href="#">Terms of Service</Link>
              </div>
              <div className="flex flex-col gap-4">
                <Link className="font-body-md text-body-md text-on-primary-container/60 hover:text-muted-gold transition-colors duration-300" href="#">Sustainability</Link>
              </div>
              <div className="flex flex-col gap-4">
                <Link className="font-body-md text-body-md text-on-primary-container/60 hover:text-muted-gold transition-colors duration-300" href="#">Global Offices</Link>
              </div>
            </div>
          </div>
        </footer>
      </ScrollReveal>
    </>
  );
}