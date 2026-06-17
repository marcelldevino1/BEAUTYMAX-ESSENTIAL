"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  // Data untuk Slider Hero
  const heroSlides = [
    {
      label: "Introduction",
      title: "Beauty for Every Expression",
      description: "Beautymax Essential is a dynamic beauty company built on one belief: beauty should be accessible, expressive, and empowering for everyone.",
      buttonText: "Explore Collections",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=1000",
    },
    {
      label: "New Generation",
      title: "Be Kind. Be Kool. Be You.",
      description: "BK brings together different beauty brands with one shared spirit. A space for every side of you to explore, play, and express.",
      buttonText: "Discover BK",
      image: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&q=80&w=1000",
    },
    {
      label: "Eye Artistry",
      title: "Your Eyes, Your Magic",
      description: "High-performance products that enhance, define, and transform every gaze with precision-engineered eye artistry.",
      buttonText: "Discover ME5",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=1000",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slider setiap 5 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <>
      {/* TopNavBar */}
      <nav className="bg-surface/80 dark:bg-primary-container/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-outline-variant dark:border-on-surface-variant/10">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-base max-w-container-max mx-auto">
          {/* Brand Logo */}
          <Link className="font-headline-md text-headline-md tracking-tighter text-primary dark:text-primary-fixed hover:opacity-70 transition-opacity duration-300" href="/">
            BEAUTYMAX ESSENTIAL
          </Link>
          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex space-x-8 items-center font-label-sm text-label-sm uppercase tracking-widest">
            <Link className="text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1 cursor-pointer transition-all duration-300 hover:opacity-70" href="/">
              Home
            </Link>
            <Link className="text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors cursor-pointer duration-300 hover:opacity-70" href="/about">
              About
            </Link>
            <Link className="text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors cursor-pointer duration-300 hover:opacity-70" href="/brands">
              Brands
            </Link>
            <Link className="text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors cursor-pointer duration-300 hover:opacity-70" href="/contact">
              Contact
            </Link>
          </div>
          {/* Trailing Action */}
          <div className="hidden md:block">
            <button className="bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest px-6 py-3 hover:bg-muted-gold transition-colors duration-300">
              Shop Now
            </button>
          </div>
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <span className="material-symbols-outlined text-primary cursor-pointer">menu</span>
          </div>
        </div>
      </nav>

      <main className="pt-24 md:pt-32">
        {/* HERO SECTION (Tanpa animasi scroll karena langsung terlihat di awal) */}
        <section className="w-full relative overflow-hidden pb-section-gap">
          
          {/* Efek Blur Kiri */}
          <div className="absolute top-0 left-0 bottom-0 w-12 md:w-32 z-20 pointer-events-none bg-gradient-to-r from-surface to-transparent backdrop-blur-[3px] [mask-image:linear-gradient(to_right,black,transparent)]"></div>
          
          {/* Efek Blur Kanan */}
          <div className="absolute top-0 right-0 bottom-0 w-12 md:w-32 z-20 pointer-events-none bg-gradient-to-l from-surface to-transparent backdrop-blur-[3px] [mask-image:linear-gradient(to_left,black,transparent)]"></div>

          {/* Container Slider */}
          <div 
            className="flex transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {heroSlides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-12 items-center min-h-[716px]">
                {/* Teks Content */}
                <div className="md:col-span-5 flex flex-col justify-center order-2 md:order-1 mt-8 md:mt-0 px-8 md:pl-16 lg:pl-24 xl:pl-32 md:pr-12">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-4 block">
                    {slide.label}
                  </span>
                  <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-6">
                    {slide.title}
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-md">
                    {slide.description}
                  </p>
                  <div>
                    <button className="border border-primary text-primary font-label-sm text-label-sm uppercase tracking-widest px-8 py-4 hover:bg-muted-gold hover:border-muted-gold hover:text-on-primary transition-colors duration-300 relative z-30">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
                {/* Image */}
                <div className="md:col-span-7 h-[512px] md:h-full w-full order-1 md:order-2 bg-surface-container-low relative overflow-hidden">
                  <img 
                    alt={slide.title} 
                    className="absolute inset-0 w-full h-full object-cover object-center" 
                    src={slide.image} 
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Indikator Slider */}
          <div className="absolute bottom-12 md:bottom-24 left-1/2 transform -translate-x-1/2 flex gap-4 z-30">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-[2px] transition-all duration-500 ${
                  currentSlide === index ? "w-12 bg-primary" : "w-6 bg-outline-variant"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Our Mission Section */}
        <ScrollReveal>
          <section className="bg-surface-container-low py-section-gap px-margin-mobile md:px-margin-desktop">
            <div className="max-w-container-max mx-auto text-center flex flex-col items-center">
              <span className="inline-block px-4 py-1 rounded-full bg-soft-beige text-charcoal-text font-label-sm text-label-sm uppercase tracking-widest mb-8">
                Our Purpose
              </span>
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary max-w-3xl mb-6">
                Our Mission
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Empowering individuality through high-quality, meticulously crafted beauty solutions that celebrate the unique essence of every individual.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* The Brands Section */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <ScrollReveal>
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary">
                  The Brands
                </h2>
              </div>
              <div className="hidden md:block">
                <Link className="font-label-sm text-label-sm uppercase tracking-widest text-primary hover:text-muted-gold transition-colors duration-300 flex items-center gap-2" href="/brands">
                  View All Directory <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Brand 1: BK */}
              <div className="group cursor-pointer">
                <div className="w-full aspect-[3/4] bg-surface-container overflow-hidden mb-6">
                  <img alt="BK Cosmetics makeup layout" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&q=80&w=1000" />
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">BK Cosmetics</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">Precision engineered artistry.</p>
                <Link href="/brands#bk" className="inline-block border border-primary text-primary font-label-sm text-label-sm uppercase tracking-widest px-6 py-2 group-hover:bg-muted-gold group-hover:border-muted-gold group-hover:text-on-primary transition-all duration-300">
                  Discover
                </Link>
              </div>
              
              {/* Brand 2: ME5 */}
              <div className="group cursor-pointer">
                <div className="w-full aspect-[3/4] bg-surface-container overflow-hidden mb-6">
                  <img alt="ME5 Skincare textures" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=1000" />
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">ME5</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">Advanced dermal vitality.</p>
                <Link href="/brands#me5" className="inline-block border border-primary text-primary font-label-sm text-label-sm uppercase tracking-widest px-6 py-2 group-hover:bg-muted-gold group-hover:border-muted-gold group-hover:text-on-primary transition-all duration-300">
                  Discover
                </Link>
              </div>
              
              {/* Brand 3: AG */}
              <div className="group cursor-pointer">
                <div className="w-full aspect-[3/4] bg-surface-container overflow-hidden mb-6 md:mt-12">
                  <img alt="AG Fragrance bottle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000" />
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">AG</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">Heritage botanical fragrances.</p>
                <Link href="/brands#ag" className="inline-block border border-primary text-primary font-label-sm text-label-sm uppercase tracking-widest px-6 py-2 group-hover:bg-muted-gold group-hover:border-muted-gold group-hover:text-on-primary transition-all duration-300">
                  Discover
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Corporate Philosophy */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-6 relative h-[614px] md:h-[819px]">
              <ScrollReveal>
                <img alt="Modern minimalist architecture reflecting corporate ethos" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000" />
                <div className="absolute inset-0 bg-surface/10 backdrop-blur-[2px]"></div>
              </ScrollReveal>
            </div>
            <div className="md:col-span-5 md:col-start-8 mt-12 md:mt-0 flex flex-col justify-center">
              <ScrollReveal delay={150}>
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-6">
                  Corporate Philosophy
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                  At the core of Beautymax Essential lies a relentless drive for innovation paired with an unwavering commitment to quality. We do not just follow trends; we engineer the future of beauty.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                  Our laboratories and creative studios work in strict unison to ensure that every product passing through our global supply chain meets a standard of quiet luxury—substantive, effective, and ethically sound.
                </p>
                <div className="border-t border-outline-variant pt-8">
                  <Link className="font-label-sm text-label-sm uppercase tracking-widest text-primary hover:text-muted-gold transition-colors duration-300 flex items-center gap-2" href="/about">
                    Read Our Full Philosophy <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <ScrollReveal>
        <footer id="contact" className="bg-primary-container dark:bg-black w-full py-section-gap">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-on-primary-container dark:text-on-primary-fixed-variant font-body-md text-body-md">
            {/* Logo & Copyright */}
            <div className="md:col-span-2 flex flex-col justify-between">
              <div>
                <span className="font-headline-md text-headline-md text-white block mb-4">
                  BEAUTYMAX ESSENTIAL
                </span>
              </div>
              <div className="mt-12 md:mt-auto">
                <p className="font-label-sm text-label-sm uppercase tracking-widest opacity-60">
                  © {new Date().getFullYear()} BEAUTYMAX ESSENTIAL. EMPOWERING BEAUTY GLOBALLY.
                </p>
              </div>
            </div>
            {/* Links Column 1 */}
            <div className="flex flex-col space-y-4 mt-8 md:mt-0">
              <Link className="text-on-primary-container/60 hover:text-muted-gold transition-colors duration-300" href="#">Privacy Policy</Link>
              <Link className="text-on-primary-container/60 hover:text-muted-gold transition-colors duration-300" href="#">Terms of Service</Link>
            </div>
            {/* Links Column 2 */}
            <div className="flex flex-col space-y-4 mt-8 md:mt-0">
              <Link className="text-on-primary-container/60 hover:text-muted-gold transition-colors duration-300" href="#">Sustainability</Link>
              <Link className="text-on-primary-container/60 hover:text-muted-gold transition-colors duration-300" href="#">Global Offices</Link>
            </div>
          </div>
        </footer>
      </ScrollReveal>
    </>
  );
}