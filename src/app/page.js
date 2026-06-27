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
  const [facilitySlide, setFacilitySlide] = useState(0);

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
      return "left-[2%] md:left-[15%] top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.72] md:scale-[0.80] opacity-40 z-10";
    } else if (index === (currentSlide + 1) % heroSlides.length) {
      return "left-[98%] md:left-[85%] top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.72] md:scale-[0.80] opacity-40 z-10";
    } else {
      return "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 opacity-0 z-0 pointer-events-none";
    }
  };

  // ==========================================
  // GLASSMORPHISM STYLES (Sama persis dengan Navbar)
  // ==========================================
  const glassHeaderStyle = "bg-design-pill/60 backdrop-blur-md border-[1.5px] border-white/60 text-white rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.15)]";
  const glassButtonStyle = "bg-design-pill/60 backdrop-blur-md border-[1.5px] border-white/60 text-white rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.15)] hover:bg-design-pill/80 hover:scale-105 transition-all duration-300";

  return (
    // DITAMBAHKAN relative dan overflow-hidden agar ornamen tidak membuat layar geser ke samping
    <main className="flex-grow bg-[linear-gradient(to_bottom,#C1AEC1_30%,#EED5D0_35%,#E2B6B7_70%,#786680_100%)] min-h-screen relative overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative w-full pt-28 md:pt-40 pb-20 md:pb-32 bg-[url('/images/floral-bg.webp')] bg-cover bg-top bg-no-repeat">
        <div className="relative w-full max-w-[1600px] mx-auto z-10">
          
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
                  className="w-full h-auto rounded-xl md:rounded-[24px] object-cover border-4 md:border-[8px] border-white/50 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-8 md:mt-12">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`rounded-full transition-all duration-500 shadow-sm ${
                  currentSlide === index
                    ? "w-8 h-2 bg-white"
                    : "w-2 h-2 bg-white/40 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <ScrollReveal>
        <section className="px-6 md:px-16 relative z-30 -mt-16 md:-mt-24 mb-20 md:mb-32">
          <div className="max-w-6xl mx-auto bg-surface-container-lowest p-10 md:p-16 shadow-2xl flex flex-col md:flex-row gap-12 md:gap-24 border border-outline-variant/30 rounded-2xl">
            
            <div className="md:w-1/3">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-muted-gold mb-4">Our Purpose</span>
              <h2 className="text-4xl md:text-5xl font-semibold text-primary leading-tight">
                Beauty for<br/>Every Expression.
              </h2>
            </div>

            <div className="md:w-2/3 flex flex-col gap-10 md:border-l border-outline-variant md:pl-16">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-4">Vision</h3>
                <p className="text-xl md:text-2xl text-primary leading-snug font-medium italic">
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

      {/* ======================================= */}
      {/* THE BRANDS */}
      {/* ======================================= */}
      <section className="relative w-full py-10 md:py-16 mb-20 md:mb-32">
        
        {/* FLORAL 1: Brands - Kiri Atas */}
        <img 
          src="/images/blur-floral-left.webp" 
          alt="floral" 
          className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-28 md:w-56 z-0 pointer-events-none opacity-90 drop-shadow-lg"
        />

        {/* CONTAINER PENGUNCI KONTEN (Agar tidak raksasa) */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 items-center mb-16 gap-6">
              
              <div className="flex justify-center md:justify-start">
                <h2 className={`${glassHeaderStyle} px-8 py-3 text-2xl md:text-3xl font-bold`}>
                  Proprietary Brands
                </h2>
              </div>

              <div className="flex justify-center order-first md:order-none mb-4 md:mb-0">
                 <img 
                   src="/images/love-ornament.webp" 
                   alt="Love Accent" 
                   className="h-10 md:h-14 w-auto object-contain" 
                 />
              </div>

              <div className="flex justify-center md:justify-end">
                <Link className={`${glassButtonStyle} px-8 py-3 text-sm md:text-base font-semibold flex items-center gap-2`} href="/brands">
                  View Directory <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>

            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              
              {/* Brand 1: BK */}
              <div className="flex flex-col items-center group cursor-pointer">
                <h3 className={`${glassHeaderStyle} px-6 py-2 text-lg md:text-xl font-bold mb-6 uppercase tracking-wide z-10`}>BK Cosmetics</h3>
                <div className="w-full aspect-[4/5] overflow-hidden mb-6 rounded-[2rem] border-[6px] md:border-[8px] border-white shadow-xl bg-surface-container">
                  <img alt="BK Cosmetics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="/images/bk-discover.webp" />
                </div>
                <Link href="/brands#bk" className={`${glassButtonStyle} px-10 py-2 text-sm font-bold uppercase tracking-wider`}>
                  Discover
                </Link>
              </div>
              
              {/* Brand 2: ME5 */}
              <div className="flex flex-col items-center group cursor-pointer">
                <h3 className={`${glassHeaderStyle} px-6 py-2 text-lg md:text-xl font-bold mb-6 uppercase tracking-wide z-10`}>ME5</h3>
                <div className="w-full aspect-[4/5] overflow-hidden mb-6 rounded-[2rem] border-[6px] md:border-[8px] border-white shadow-xl bg-surface-container">
                  <img alt="ME5 Skincare" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="/images/me5-discover.webp" />
                </div>
                <Link href="/brands#me5" className={`${glassButtonStyle} px-10 py-2 text-sm font-bold uppercase tracking-wider`}>
                  Discover
                </Link>
              </div>
              
              {/* Brand 3: AG */}
              <div className="flex flex-col items-center group cursor-pointer">
                <h3 className={`${glassHeaderStyle} px-6 py-2 text-lg md:text-xl font-bold mb-6 uppercase tracking-wide z-10`}>Angela Glamour</h3>
                <div className="w-full aspect-[4/5] overflow-hidden mb-6 rounded-[2rem] border-[6px] md:border-[8px] border-white shadow-xl bg-surface-container">
                  <img alt="AG Fragrance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="/images/ag-discover.webp" />
                </div>
                <Link href="/brands#ag" className={`${glassButtonStyle} px-10 py-2 text-sm font-bold uppercase tracking-wider`}>
                  Discover
                </Link>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ======================================= */}
      {/* ABOUT THE COMPANY */}
      {/* ======================================= */}
      <section className="relative w-full pt-10 md:pt-16">

        {/* FLORAL 2: About The Company - Kanan Atas */}
        <img 
          src="/images/floral-right.webp" 
          alt="floral" 
          className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-32 md:w-60 z-0 pointer-events-none opacity-90 drop-shadow-lg"
        />

        {/* CONTAINER PENGUNCI KONTEN */}
        <div className="max-w-6xl mx-auto px-6 md:px-16 relative z-10">
          
          {/* Title Pill */}
          <div className="flex flex-col items-center relative z-30 -mb-6 md:-mb-8">
            <h2 className={`${glassHeaderStyle} px-10 py-3 text-xl md:text-3xl font-bold`}>
              About The Company
            </h2>
          </div>

          {/* Text Box */}
          <ScrollReveal className="relative z-10 w-full bg-white p-8 md:p-12 lg:p-16 pt-16 md:pt-20 shadow-2xl rounded-[2rem]">
            <div className="text-base md:text-lg leading-relaxed text-charcoal-text space-y-6 md:w-[90%] lg:w-[80%]">
              <p>
                Pioneering the color cosmetics industry Since 2002, PT Beautymax Essential Indonesia is a dynamic beauty pioneer that seamlessly bridges high-caliber, global-standard manufacturing with strategic brand management.
              </p>
              <p>
                Operating from state-of-the-art facilities, the company delivers premium OEM/ODM services to international leaders while nurturing a diverse portfolio of proprietary, trend-driven beauty brands. Driven by deep consumer insight and market agility, Beautymax empowers individuality across all generations and lifestyles.
              </p>
            </div>
            <Link className={`${glassButtonStyle} mt-8 px-6 py-2.5 text-xs font-bold uppercase tracking-widest flex items-center gap-2 w-max`} href="/about">
              Discover Our Profile <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* BUILDING IMAGE - RESPONSIVE (Dibiarkan di luar container agar bisa mentok jika perlu) */}
      <ScrollReveal delay={200} className="relative w-full z-20 pointer-events-none -mt-12 sm:-mt-20 md:-mt-48 lg:-mt-[280px] overflow-hidden flex justify-center">
        <img
          alt="Beautymax Essential HQ"
          className="w-full px-6 md:px-0 md:w-[100vw] md:min-w-[1000px] h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]"
          src="/images/office-building.webp"
        />
      </ScrollReveal>

      {/* ======================================= */}
      {/* OUR FACTORY */}
      {/* ======================================= */}
      <section className="relative w-full py-10 md:py-16 mb-20 md:mb-32 mt-10 md:mt-24">
        
        {/* FLORAL 3: Our Factory - Kiri Atas */}
        <img 
          src="/images/blur-floral-left.webp" 
          alt="floral" 
          className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-32 md:w-60 z-0 pointer-events-none opacity-90 drop-shadow-lg"
        />

        {/* CONTAINER PENGUNCI KONTEN */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col items-center mb-16">
              <h2 className={`${glassHeaderStyle} px-10 py-3 text-2xl md:text-3xl font-bold`}>
                Our Factory
              </h2>
            </div>
            
            <div className="relative group">
              <div className="relative w-full h-[400px] sm:h-[500px] md:h-[650px] lg:h-[750px] overflow-hidden rounded-[2.5rem] border-[8px] border-white shadow-2xl bg-surface-container">
                {["/images/factory-1.webp", "/images/factory-2.webp", "/images/factory-3.webp"].map((img, index) => (
                  <img 
                    key={index}
                    src={img}
                    alt={`Factory ${index + 1}`}
                    className={`absolute w-full h-full object-cover transition-opacity duration-700 ease-in-out ${facilitySlide === index ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
              </div>

              <button 
                onClick={() => setFacilitySlide((prev) => (prev === 0 ? 2 : prev - 1))}
                className={`${glassButtonStyle} absolute left-4 md:left-6 top-1/2 -translate-y-1/2 p-3 md:p-4 z-10`}
              >
                <span className="material-symbols-outlined text-xl md:text-2xl">chevron_left</span>
              </button>

              <button 
                onClick={() => setFacilitySlide((prev) => (prev === 2 ? 0 : prev + 1))}
                className={`${glassButtonStyle} absolute right-4 md:right-6 top-1/2 -translate-y-1/2 p-3 md:p-4 z-10`}
              >
                <span className="material-symbols-outlined text-xl md:text-2xl">chevron_right</span>
              </button>

              <div className="flex justify-center gap-3 mt-8">
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    onClick={() => setFacilitySlide(i)}
                    className={`h-2.5 rounded-full transition-all ${facilitySlide === i ? 'w-10 bg-design-pill' : 'w-2.5 bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ABOUT THE COMPANY */}
      {/* 1. Section dibuat w-full agar mentok layar */}
      <section className="relative w-full pt-10 md:pt-16">

        {/* FLORAL 2: About - Pasti mentok kanan layar */}
        <img 
          src="/images/floral-right.webp" 
          alt="floral" 
          className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-32 md:w-60 z-0 pointer-events-none opacity-90 drop-shadow-lg"
        />

        {/* 2. max-w dipindah ke div pembungkus konten ini */}
        <div className="max-w-6xl mx-auto px-6 md:px-16 relative z-10">
          
          {/* Title Pill */}
          <div className="flex flex-col items-center relative z-30 -mb-6 md:-mb-8">
            <h2 className={`${glassHeaderStyle} px-10 py-3 text-xl md:text-3xl font-bold`}>
              About The Company
            </h2>
          </div>

        {/* Text Box */}
        <ScrollReveal className="relative z-10 w-full bg-white p-8 md:p-12 lg:p-16 pt-16 md:pt-20 shadow-2xl rounded-[2rem]">
          <div className="text-base md:text-lg leading-relaxed text-charcoal-text space-y-6 md:w-[90%] lg:w-[80%]">
            <p>
              Pioneering the color cosmetics industry Since 2002, PT Beautymax Essential Indonesia is a dynamic beauty pioneer that seamlessly bridges high-caliber, global-standard manufacturing with strategic brand management.
            </p>
            <p>
              Operating from state-of-the-art facilities, the company delivers premium OEM/ODM services to international leaders while nurturing a diverse portfolio of proprietary, trend-driven beauty brands. Driven by deep consumer insight and market agility, Beautymax empowers individuality across all generations and lifestyles.
            </p>
          </div>
          <Link className={`${glassButtonStyle} mt-8 px-6 py-2.5 text-xs font-bold uppercase tracking-widest flex items-center gap-2 w-max`} href="/about">
            Discover Our Profile <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </ScrollReveal>
        </div>
      </section>

      {/* BUILDING IMAGE - RESPONSIVE */}
      <ScrollReveal delay={200} className="relative w-full z-20 pointer-events-none -mt-12 sm:-mt-20 md:-mt-48 lg:-mt-[280px] overflow-hidden flex justify-center">
        <img
          alt="Beautymax Essential HQ"
          className="w-full px-6 md:px-0 md:w-[100vw] md:min-w-[1000px] h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]"
          src="/images/office-building.webp"
        />
      </ScrollReveal>

      {/* OUR FACTORY */}
      {/* 1. Section dibuat w-full agar mentok layar */}
      <section className="relative w-full py-10 md:py-16 mb-20 md:mb-32 mt-10 md:mt-24">
        
        {/* FLORAL 3: Factory - Pasti mentok kiri layar */}
        <img 
          src="/images/blur-floral-left.webp" 
          alt="floral" 
          className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-32 md:w-60 z-0 pointer-events-none opacity-90 drop-shadow-lg"
        />

        {/* 2. max-w dipindah ke div pembungkus konten ini */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col items-center mb-16">
              <h2 className={`${glassHeaderStyle} px-10 py-3 text-2xl md:text-3xl font-bold`}>
                Our Factory
              </h2>
            </div>
          
          <div className="relative group">
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[650px] lg:h-[750px] overflow-hidden rounded-[2.5rem] border-[8px] border-white shadow-2xl bg-surface-container">
              {["/images/factory-1.webp", "/images/factory-2.webp", "/images/factory-3.webp"].map((img, index) => (
                <img 
                  key={index}
                  src={img}
                  alt={`Factory ${index + 1}`}
                  className={`absolute w-full h-full object-cover transition-opacity duration-700 ease-in-out ${facilitySlide === index ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>

            <button 
              onClick={() => setFacilitySlide((prev) => (prev === 0 ? 2 : prev - 1))}
              className={`${glassButtonStyle} absolute left-4 md:left-6 top-1/2 -translate-y-1/2 p-3 md:p-4 z-10`}
            >
              <span className="material-symbols-outlined text-xl md:text-2xl">chevron_left</span>
            </button>

            <button 
              onClick={() => setFacilitySlide((prev) => (prev === 2 ? 0 : prev + 1))}
              className={`${glassButtonStyle} absolute right-4 md:right-6 top-1/2 -translate-y-1/2 p-3 md:p-4 z-10`}
            >
              <span className="material-symbols-outlined text-xl md:text-2xl">chevron_right</span>
            </button>

            <div className="flex justify-center gap-3 mt-8">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => setFacilitySlide(i)}
                  className={`h-2.5 rounded-full transition-all ${facilitySlide === i ? 'w-10 bg-design-pill' : 'w-2.5 bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
        </div>
      </section>

    </main>
  );
}