"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  // Slider sekarang difokuskan pada Full Image karena teks sudah ada di dalam gambar
  const heroSlides = [
    { 
      alt: "Beauty for Every Expression", 
      image: "/images/main-page-beauty.webp", // Pastikan gambar ada di public/images/
      link: "/about" 
    },
    { 
      alt: "Be Kind. Be Kool. Be You.", 
      image: "/images/bk-main-page.png",
      link: "/brands#bk" 
    },
    { 
      alt: "Your Eyes, Your Magic, Your ME5.", 
      image: "/images/me5-main-page.png",
      link: "/brands#me5"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => { setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1)); }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <main className="pt-24 pb-16 md:pb-24 flex-grow">
      
      {/* HERO SECTION - FIT TO SCREEN (L'OREAL STYLE) */}
      <section className="w-full relative overflow-hidden h-[calc(100vh-96px)] bg-surface-container-lowest flex items-center justify-center">
        
        {/* Slider Track */}
        <div className="flex w-full h-full transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {heroSlides.map((slide, index) => (
            <div 
              key={index} 
              className="w-full h-full flex-shrink-0 relative group cursor-pointer flex items-center justify-center"
              onClick={() => window.location.href = slide.link}
            >
              {/* object-contain memastikan gambar tidak terpotong dan mengecil/membesar otomatis pas di tengah layar */}
              <img 
                alt={slide.alt} 
                className="w-full h-full object-contain" 
                src={slide.image} 
              />
              {/* Overlay gelap tipis agar dots navigasi tetap terlihat jelas */}
              <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* L'Oreal Style Navigation Dots */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
          {heroSlides.map((_, index) => (
            <button 
              key={index} 
              onClick={() => setCurrentSlide(index)} 
              className={`rounded-full transition-all duration-500 shadow-sm ${currentSlide === index ? "w-3 h-3 bg-primary" : "w-3 h-3 bg-primary/30 hover:bg-primary/60"}`} 
              aria-label={`Go to slide ${index + 1}`} 
            />
          ))}
        </div>
      </section>

      {/* VISION & MISSION */}
      <ScrollReveal>
        <section className="bg-surface-container-low py-16 md:py-24 px-6 md:px-16 mt-12 md:mt-0">
          <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
            <span className="inline-block px-4 py-1 rounded-full bg-soft-beige text-primary text-xs font-semibold uppercase tracking-widest mb-8">Vision & Mission</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-primary max-w-4xl mb-6">
              Shaping a world where diverse, trend-forward beauty experiences empower everyone to express their authentic selves.
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-on-surface-variant max-w-3xl">
              To create accessible, insight-driven beauty products, foster purposeful partnerships, champion responsible brand development, and deliver sustainable value for our global communities.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* THE BRANDS */}
      <section className="py-16 md:py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex justify-between items-end mb-12 md:mb-16">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl font-medium leading-tight text-primary">Proprietary Brands</h2>
            </div>
            <div className="hidden md:block">
              <Link className="text-xs font-semibold uppercase tracking-widest text-primary hover:text-muted-gold transition-colors duration-300 flex items-center gap-2" href="/brands">
                View Directory <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand 1: BK */}
            <div className="group cursor-pointer">
              <div className="w-full aspect-[3/4] bg-surface-container overflow-hidden mb-6">
                <img alt="BK Cosmetics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=1000" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-primary mb-2">BK</h3>
              <p className="text-base text-on-surface-variant mb-6">Be Kind. Be Kool. Be You.</p>
              <Link href="/brands#bk" className="inline-block border border-primary text-primary text-xs font-semibold uppercase tracking-widest px-6 py-2 hover:bg-muted-gold hover:border-muted-gold hover:text-white transition-all duration-300">Discover</Link>
            </div>
            
            {/* Brand 2: ME5 */}
            <div className="group cursor-pointer">
              <div className="w-full aspect-[3/4] bg-surface-container overflow-hidden mb-6">
                <img alt="ME5 Skincare" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=1000" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-primary mb-2">ME5</h3>
              <p className="text-base text-on-surface-variant mb-6">Your Eyes, Your Magic, Your ME5.</p>
              <Link href="/brands#me5" className="inline-block border border-primary text-primary text-xs font-semibold uppercase tracking-widest px-6 py-2 hover:bg-muted-gold hover:border-muted-gold hover:text-white transition-all duration-300">Discover</Link>
            </div>
            
            {/* Brand 3: AG */}
            <div className="group cursor-pointer">
              <div className="w-full aspect-[3/4] bg-surface-container overflow-hidden mb-6">
                <img alt="AG Fragrance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-primary mb-2">AG</h3>
              <p className="text-base text-on-surface-variant mb-6">Flawless Skin. Impeccable Gel Nails.</p>
              <Link href="/brands#ag" className="inline-block border border-primary text-primary text-xs font-semibold uppercase tracking-widest px-6 py-2 hover:bg-muted-gold hover:border-muted-gold hover:text-white transition-all duration-300">Discover</Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ABOUT US */}
      <section className="py-16 md:py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 h-[400px] md:h-[700px]">
            <ScrollReveal className="w-full h-full">
              <img alt="Architecture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" />
            </ScrollReveal>
          </div>
          <div className="md:col-span-5 md:col-start-8 flex flex-col justify-center">
            <ScrollReveal delay={150}>
              <h2 className="font-serif text-3xl md:text-5xl font-medium leading-tight text-primary mb-6">Beauty for Every Expression.</h2>
              <p className="text-base leading-relaxed text-on-surface-variant mb-6">
                Pioneering the color cosmetics industry Since 2002, PT Beautymax Essential Indonesia is a dynamic beauty pioneer that seamlessly bridges high-caliber, global-standard manufacturing with strategic brand management.
              </p>
              <p className="text-base leading-relaxed text-on-surface-variant mb-8">
                Operating from state-of-the-art facilities, the company delivers premium OEM/ODM services to international leaders while nurturing a diverse portfolio of proprietary, trend-driven beauty brands.
              </p>
              <div className="border-t border-outline-variant pt-8">
                <Link className="text-xs font-semibold uppercase tracking-widest text-primary hover:text-muted-gold flex items-center gap-2" href="/about">
                  Company Profile <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}