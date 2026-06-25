"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const heroSlides = [
    { 
      alt: "Beauty for Every Expression", 
      image: "/images/main-page-beauty.webp",
      link: "/about" 
    },
    { 
      alt: "Be Kind. Be Kool. Be You.", 
      image: "/images/bk-main-page.webp",
      link: "/brands#bk" 
    },
    { 
      alt: "Your Eyes, Your Magic, Your ME5.", 
      image: "/images/me5-main-page.webp",
      link: "/brands#me5"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => { 
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1)); 
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleSlideClick = (index, link) => {
    if (index === currentSlide) {
      window.location.href = link;
    } else {
      setCurrentSlide(index);
    }
  };

  const getSlideStyle = (index) => {
  if (index === currentSlide) {
    return "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100 z-20 drop-shadow-2xl";
  } else if (index === (currentSlide - 1 + heroSlides.length) % heroSlides.length) {
    return "left-[2%] md:left-[15%] top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.72] md:scale-[0.80] opacity-25 z-10";
  } else if (index === (currentSlide + 1) % heroSlides.length) {
    return "left-[98%] md:left-[85%] top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.72] md:scale-[0.80] opacity-25 z-10";
  } else {
    return "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 opacity-0 z-0 pointer-events-none";
  }
};

  return (
    <main className="pt-24 pb-16 md:pb-24 flex-grow bg-surface">
      
      {/* HERO SECTION - 3D CAROUSEL */}
<section className="w-full bg-surface pt-4 md:pt-8 pb-10 md:pb-20">
  <div className="relative w-full max-w-[1600px] mx-auto">

    <div className="relative h-[220px] sm:h-[300px] md:h-[650px] overflow-hidden">

      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-[94vw] sm:w-[90vw] md:w-[70vw] max-w-6xl transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer ${getSlideStyle(index)}`}
          onClick={() => handleSlideClick(index, slide.link)}
        >
          <img
            alt={slide.alt}
            src={slide.image}
            className="w-full h-auto rounded-xl md:rounded-[24px] object-cover shadow-2xl"
          />
        </div>
      ))}

    </div>

    <div className="flex justify-center gap-3 mt-5 md:mt-8">
      {heroSlides.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`rounded-full transition-all duration-500 ${
            currentSlide === index
              ? "w-8 h-2 bg-primary"
              : "w-2 h-2 bg-primary/20 hover:bg-primary/50"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>

  </div>
</section>

      {/* VISION & MISSION - EDITORIAL LAYOUT */}
      <ScrollReveal>
        <section className="py-20 md:py-32 px-6 md:px-16 bg-surface-container-low border-y border-outline-variant/50">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
            
            <div className="md:w-1/3">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-muted-gold mb-4">Our Purpose</span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-primary leading-tight">
                Beauty for<br/>Every Expression.
              </h2>
            </div>

            <div className="md:w-2/3 flex flex-col gap-10 md:border-l border-outline-variant md:pl-16">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-4">Vision</h3>
                <p className="font-serif text-2xl md:text-3xl text-primary leading-snug">
                  &quot;Shaping a world where diverse, trend-forward beauty experiences empower everyone to express their authentic selves.&quot;
                </p>
              </div>
              <div className="pt-8 border-t border-outline-variant/50">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-4">Mission</h3>
                <p className="text-base text-on-surface-variant leading-relaxed max-w-2xl">
                  To create accessible, insight-driven beauty products, foster purposeful partnerships, champion responsible brand development, and deliver sustainable value for our global communities.
                </p>
              </div>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* THE BRANDS - MINIMALIST GALLERY */}
      <section className="py-20 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex justify-between items-end mb-16 border-b border-outline-variant pb-6">
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-primary">Proprietary Brands</h2>
            <Link className="hidden md:flex text-xs font-semibold uppercase tracking-widest text-primary hover:text-muted-gold transition-colors duration-300 items-center gap-2" href="/brands">
              View Directory <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            
            {/* Brand 1: BK */}
            <div className="group cursor-pointer flex flex-col">
              <div className="w-full aspect-[3/4] bg-surface-container overflow-hidden mb-8 rounded-none">
                <img alt="BK Cosmetics" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" src="/images/bk-discover.webp" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-primary mb-2">BK Cosmetics</h3>
              <p className="text-sm text-on-surface-variant mb-6">Be Kind. Be Kool. Be You.</p>
              <Link href="/brands#bk" className="mt-auto text-xs font-semibold uppercase tracking-widest text-primary hover:text-muted-gold flex items-center gap-2 transition-colors">
                Discover <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
            
            {/* Brand 2: ME5 */}
            <div className="group cursor-pointer flex flex-col mt-0 md:mt-12">
              <div className="w-full aspect-[3/4] bg-surface-container overflow-hidden mb-8 rounded-none">
                <img alt="ME5 Skincare" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" src="/images/me5-discover.webp" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-primary mb-2">ME5</h3>
              <p className="text-sm text-on-surface-variant mb-6">Your Eyes, Your Magic, Your ME5.</p>
              <Link href="/brands#me5" className="mt-auto text-xs font-semibold uppercase tracking-widest text-primary hover:text-muted-gold flex items-center gap-2 transition-colors">
                Discover <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
            
            {/* Brand 3: AG */}
            <div className="group cursor-pointer flex flex-col mt-0 md:mt-24">
              <div className="w-full aspect-[3/4] bg-surface-container overflow-hidden mb-8 rounded-none">
                <img alt="AG Fragrance" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" src="/images/ag-discover.webp" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-primary mb-2">AG (Angela Glamor)</h3>
              <p className="text-sm text-on-surface-variant mb-6">Flawless Skin. Impeccable Gel Nails.</p>
              <Link href="/brands#ag" className="mt-auto text-xs font-semibold uppercase tracking-widest text-primary hover:text-muted-gold flex items-center gap-2 transition-colors">
                Discover <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* ABOUT US - BESPOKE LAYOUT */}
      <section className="py-20 md:py-32 px-6 md:px-16 bg-surface-container-low border-t border-outline-variant/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 flex flex-col justify-center order-2 md:order-1">
            <ScrollReveal>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-muted-gold mb-4">About The Company</span>
              <h2 className="font-serif text-3xl md:text-5xl font-medium leading-tight text-primary mb-8">
                Pioneering the color cosmetics industry Since 2002.
              </h2>
              <div className="text-base leading-relaxed text-on-surface-variant space-y-6">
                <p>
                  PT Beautymax Essential Indonesia is a dynamic beauty pioneer that seamlessly bridges high-caliber, global-standard manufacturing with strategic brand management.
                </p>
                <p>
                  Operating from state-of-the-art facilities, the company delivers premium OEM/ODM services to international leaders while nurturing a diverse portfolio of proprietary, trend-driven beauty brands.
                </p>
                <p>
                  Driven by deep consumer insight and market agility, Beautymax empowers individuality across all generations and lifestyles.
                </p>
              </div>
              <div className="mt-10 pt-8 border-t border-outline-variant">
                <Link className="text-xs font-semibold uppercase tracking-widest text-primary hover:text-muted-gold flex items-center gap-2 transition-colors" href="/about">
                  Discover Our Profile <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
          <div className="md:col-span-6 md:col-start-7 h-[500px] md:h-[800px] order-1 md:order-2">
            <ScrollReveal className="w-full h-full">
              <img 
                alt="Beautymax Essential HQ" 
                className="w-full h-full object-cover rounded-sm" 
                src="/images/about-building.webp" 
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

    </main>
  );
}