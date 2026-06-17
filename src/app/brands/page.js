"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal"; // 👈 Import komponen animasi

export default function BrandsPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Efek untuk mendeteksi scroll pada Navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="antialiased min-h-screen flex flex-col bg-surface text-on-surface">
      {/* TopNavBar Component */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 bg-surface/80 dark:bg-primary-container/80 backdrop-blur-md border-b ${
          isScrolled
            ? "border-outline-variant dark:border-on-surface-variant/10"
            : "border-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-base max-w-container-max mx-auto h-[72px]">
          {/* Brand Logo */}
          <Link
            className="font-headline-md text-headline-md tracking-tighter text-primary dark:text-primary-fixed hover:opacity-70 transition-opacity duration-300"
            href="/"
          >
            BEAUTYMAX ESSENTIAL
          </Link>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link
              className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors hover:opacity-70 duration-300"
              href="/"
            >
              Home
            </Link>
            <Link
              className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors hover:opacity-70 duration-300"
              href="/about"
            >
              About
            </Link>
            {/* Active State for Brands */}
            <Link
              className="font-label-sm text-label-sm uppercase tracking-widest text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1 transition-all duration-300"
              href="/brands"
            >
              Brands
            </Link>
            <Link
              className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors hover:opacity-70 duration-300"
              href="/contact"
            >
              Contact
            </Link>
          </nav>

          {/* Trailing Action & Mobile Menu */}
          <div className="flex items-center gap-6">
            <button className="hidden md:inline-flex items-center justify-center bg-primary text-on-primary px-6 py-3 font-label-sm text-label-sm uppercase tracking-widest hover:bg-muted-gold transition-colors duration-300 rounded-DEFAULT">
              Shop Now
            </button>
            <button className="md:hidden text-primary p-2">
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-[72px]">
        {/* Hero Section */}
        <ScrollReveal>
          <section className="relative h-[819px] flex items-center justify-center overflow-hidden bg-surface-container-low">
            <div className="absolute inset-0 z-0">
              <img
                alt="Brand Universe Hero"
                className="w-full h-full object-cover opacity-60"
                src="https://images.unsplash.com/photo-1615397323145-2b47e2db7159?auto=format&fit=crop&q=80&w=2000"
              />
            </div>
            <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mt-[-72px]">
              <span className="inline-block px-4 py-1 rounded-full bg-soft-beige text-primary font-label-sm text-label-sm uppercase tracking-widest mb-6">
                Our Portfolio
              </span>
              <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-6 max-w-4xl mx-auto">
                The Beauty Universe.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Discover our house of distinguished brands. Each meticulously crafted to serve a unique aesthetic, united by our commitment to uncompromising quality and professional excellence.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* Brand 1: BK */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface relative" id="bk">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
              {/* Content */}
              <div className="md:col-span-5 order-2 md:order-1 flex flex-col justify-center">
                <ScrollReveal>
                  <div className="mb-8">
                    <span className="font-headline-md text-headline-md text-primary block mb-2">BK</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-muted-gold block mb-6">
                      New Generation Beauty
                    </span>
                    <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6 leading-tight">
                      Be Kind.<br />Be Kool.<br />Be You.
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-md">
                      A vibrant celebration of individuality. BK breaks the mold with highly pigmented, playful formulas designed for the unapologetic creator. It&apos;s personal, it&apos;s colorful, and it&apos;s fundamentally fun.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-10">
                      <span className="px-4 py-2 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-widest">
                        Cruelty-Free
                      </span>
                      <span className="px-4 py-2 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-widest">
                        Vivid Pigments
                      </span>
                      <span className="px-4 py-2 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-widest">
                        Gen-Z
                      </span>
                    </div>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-widest text-primary hover:text-muted-gold transition-colors pb-1 border-b border-primary hover:border-muted-gold w-max"
                    >
                      Explore BK Collection
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </ScrollReveal>
              </div>

              {/* Imagery Grid */}
              <div className="md:col-span-7 order-1 md:order-2">
                <ScrollReveal delay={200}>
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="col-span-1 h-[400px] md:h-[600px] rounded-DEFAULT overflow-hidden group">
                      <img
                        alt="BK Colorful Swatches"
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                        src="https://images.unsplash.com/photo-1512496015851-a1dc8a477d5d?auto=format&fit=crop&q=80&w=1000"
                      />
                    </div>
                    <div className="col-span-1 flex flex-col gap-4">
                      <div className="h-[200px] md:h-[290px] rounded-DEFAULT overflow-hidden group">
                        <img
                          alt="BK Product"
                          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                          src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=1000"
                        />
                      </div>
                      <div className="h-[200px] md:h-[290px] rounded-DEFAULT overflow-hidden bg-surface-container-high p-8 flex items-center justify-center">
                        <span className="font-headline-md text-headline-md text-primary text-center italic opacity-80">
                          &quot;Color without compromise.&quot;
                        </span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Brand 2: ME5 */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low relative" id="me5">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
              {/* Imagery (Full Width Card Style) */}
              <div className="md:col-span-6 h-[500px] md:h-[700px] rounded-DEFAULT overflow-hidden relative group">
                <ScrollReveal>
                  <img
                    alt="ME5 Eye Artistry"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&q=80&w=1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <span className="px-3 py-1 rounded-full bg-on-primary/20 backdrop-blur-md text-on-primary font-label-sm text-label-sm uppercase tracking-widest border border-on-primary/30">
                      Precision Tech
                    </span>
                  </div>
                </ScrollReveal>
              </div>
              
              {/* Content */}
              <div className="md:col-span-5 md:col-start-8 flex flex-col justify-center py-12 md:py-0">
                <ScrollReveal delay={200}>
                  <div className="mb-8">
                    <span className="font-headline-md text-headline-md text-primary block mb-2">ME5</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-muted-gold block mb-6">
                      Magic Eye Makeup
                    </span>
                    <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6 leading-tight">
                      High-Performance<br />Artistry.
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-md">
                      Engineered for the most demanding environments. ME5 combines cutting-edge cosmetic technology with intense, long-lasting wear. Focused entirely on the eye, it delivers unparalleled precision for structural, graphic artistry.
                    </p>
                    
                    {/* Minimalist Feature List */}
                    <ul className="space-y-4 mb-10 border-l border-outline-variant pl-6">
                      <li>
                        <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-primary mb-1">Micro-Precision Pens</h4>
                        <p className="font-body-md text-sm text-on-surface-variant">0.1mm tips for architectural line work.</p>
                      </li>
                      <li>
                        <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-primary mb-1">24H Bonding Technology</h4>
                        <p className="font-body-md text-sm text-on-surface-variant">Smudge-proof formulations engineered for endurance.</p>
                      </li>
                    </ul>
                    
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-widest text-primary hover:text-muted-gold transition-colors pb-1 border-b border-primary hover:border-muted-gold w-max"
                    >
                      Discover ME5 Technology
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Brand 3: AG (Angela Glamor) */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface relative" id="ag">
          <div className="max-w-container-max mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <span className="font-headline-md text-headline-md text-primary block mb-2">AG</span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-muted-gold block mb-4">Angela Glamor</span>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6">Professional Glamor.</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  The definitive standard for flawless execution. AG provides salon-grade nail artistry and impeccable base makeup formulations, curated for the professional who demands perfection in every layer.
                </p>
              </div>
            </ScrollReveal>
            
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] gap-gutter">
              {/* Large Feature Block */}
              <div className="md:col-span-8 row-span-2 rounded-DEFAULT overflow-hidden relative group bg-surface-container">
                <ScrollReveal delay={100} className="h-full">
                  <img
                    alt="AG Flawless Base"
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=1000"
                  />
                  <div className="absolute inset-0 bg-primary/10 transition-colors duration-300 group-hover:bg-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-primary/80 to-transparent">
                    <h3 className="font-headline-md text-headline-md text-on-primary mb-2">The Flawless Base</h3>
                    <p className="font-body-md text-on-primary/80 max-w-md">Silicone-free, buildable coverage engineered for high-definition environments.</p>
                  </div>
                </ScrollReveal>
              </div>
              
              {/* Small Block 1 */}
              <div className="md:col-span-4 row-span-1 rounded-DEFAULT overflow-hidden relative group bg-surface-container">
                <ScrollReveal delay={200} className="h-full">
                  <img
                    alt="AG Nail Artistry"
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1000"
                  />
                  <div className="absolute inset-0 bg-primary/20"></div>
                  <div className="absolute top-6 left-6">
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary">Salon-Grade Polish</span>
                  </div>
                </ScrollReveal>
              </div>
              
              {/* Small Block 2 (Text/Action) */}
              <div className="md:col-span-4 row-span-1 rounded-DEFAULT bg-surface-container-high p-8 flex flex-col justify-between border border-outline-variant/30">
                <ScrollReveal delay={300} className="h-full flex flex-col justify-between">
                  <div>
                    <span className="material-symbols-outlined text-3xl text-primary mb-4">diamond</span>
                    <h4 className="font-headline-md text-xl text-primary mb-2">Uncompromising Quality</h4>
                    <p className="font-body-md text-sm text-on-surface-variant">Developed in collaboration with master aestheticians globally.</p>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-widest text-primary hover:text-muted-gold transition-colors pt-4"
                  >
                    Shop AG Collection
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <footer className="w-full py-section-gap bg-primary-container dark:bg-black">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop max-w-container-max mx-auto">
            {/* Brand Column */}
            <div className="md:col-span-1 mb-8 md:mb-0">
              <Link className="font-headline-md text-headline-md text-white block mb-6" href="/">
                BEAUTYMAX ESSENTIAL
              </Link>
              <p className="font-body-md text-body-md text-on-primary-container/80 text-sm">
                © {new Date().getFullYear()} BEAUTYMAX ESSENTIAL. EMPOWERING BEAUTY GLOBALLY.
              </p>
            </div>
            {/* Links */}
            <div className="md:col-span-3 flex flex-wrap gap-8 md:justify-end items-start">
              <Link className="font-body-md text-body-md text-on-primary-container/60 hover:text-muted-gold transition-colors duration-300 block" href="#">
                Privacy Policy
              </Link>
              <Link className="font-body-md text-body-md text-on-primary-container/60 hover:text-muted-gold transition-colors duration-300 block" href="#">
                Terms of Service
              </Link>
              <Link className="font-body-md text-body-md text-on-primary-container/60 hover:text-muted-gold transition-colors duration-300 block" href="#">
                Sustainability
              </Link>
              <Link className="font-body-md text-body-md text-on-primary-container/60 hover:text-muted-gold transition-colors duration-300 block" href="#">
                Global Offices
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </footer>
    </div>
  );
}