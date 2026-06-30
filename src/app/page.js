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
  // FIX: GLASSMORPHISM PEKAT (Sesuai gambar Preview klien)
  // bg-black/35  : Memberikan warna dasar gelap transparan (pekat)
  // border-[3px] : Border putih tebal
  // text-white   : Teks putih tegas
  // ==========================================
  const glassHeaderStyle = "bg-black/45 backdrop-blur-md border-[3px] border-white text-white rounded-full shadow-lg";
  const glassButtonStyle = "bg-black/45 backdrop-blur-md border-[3px] border-white text-white rounded-full shadow-lg hover:bg-black/50 hover:scale-105 transition-all duration-300";

  return (
    <main className="flex-grow bg-[linear-gradient(to_bottom,#C1AEC1_30%,#EED5D0_35%,#E2B6B7_70%,#786680_150%)] min-h-screen relative overflow-hidden">
      
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
                  fetchPriority={index === 0 ? "high" : "auto"}
                  decoding="async"
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
          <div className="max-w-6xl mx-auto bg-white/40 backdrop-blur-xl p-10 md:p-16 shadow-2xl flex flex-col md:flex-row gap-12 md:gap-24 border border-white/50 rounded-2xl">
            
            <div className="md:w-1/3">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#766350]/80 mb-4">Our Purpose</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#766350] leading-tight drop-shadow-sm">
                Beauty for<br/>Every Expression.
              </h2>
            </div>

            <div className="md:w-2/3 flex flex-col gap-10 md:border-l border-[#766350]/20 md:pl-16">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#766350]/80 mb-4">Vision</h3>
                <p className="text-xl md:text-2xl text-[#766350] leading-snug font-medium italic">
                  &quot;Shaping a world where diverse, trend-forward beauty experiences empower everyone to express their authentic selves.&quot;
                </p>
              </div>
              <div className="pt-8 border-t border-[#766350]/20">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#766350]/80 mb-4">Mission</h3>
                <p className="text-base text-[#766350] leading-relaxed max-w-2xl font-medium">
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
        
        <img 
          src="/images/blur-floral-left.webp" 
          alt="floral" 
          loading="lazy"
          className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-28 md:w-56 z-0 pointer-events-none opacity-90 drop-shadow-lg"
        />

        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 items-center mb-16 gap-6">
              
              <div className="flex justify-center md:justify-start">
                {/* Poin 3: Font Size Proprietary Brands diperkecil */}
                <h2 className={`${glassHeaderStyle} px-6 py-2 md:py-2.5 text-lg md:text-xl font-bold tracking-wide whitespace-nowrap w-max`}>
                  Proprietary Brands
                </h2>
              </div>

              <div className="flex justify-center order-first md:order-none mb-4 md:mb-0">
                 <img 
                   src="/images/love-ornament.webp" 
                   alt="Love Accent" 
                   className="h-8 md:h-12 w-auto object-contain drop-shadow-md" 
                 />
              </div>

              <div className="flex justify-center md:justify-end">
                {/* Poin 3: Font Size View Directory diperkecil */}
                <Link className={`${glassButtonStyle} px-6 py-2 md:py-2.5 text-xs font-bold flex items-center gap-2`} href="/brands">
                  View Directory <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>

            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            {/* Poin 5: items-start untuk memungkinkan stepped layout (berundak) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mt-4 items-start">
              
              {/* Brand 1: BK (Paling Atas) */}
              <Link href="/brands#bk" className="flex flex-col group mt-0">
                <div className="w-full aspect-[4/5] overflow-hidden rounded-[2rem] border-[4px] border-white/60 shadow-xl mb-4">
                  <img alt="BK Cosmetics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="/images/bk-discover.webp" loading="lazy" />
                </div>
                {/* Poin 4: Teks berada murni di bawah gambar tanpa pill Discover */}
                <div className="px-2 text-left">
                  <h3 className="font-serif text-[#766350] text-xl md:text-2xl font-bold mb-1 group-hover:opacity-70 transition-opacity">BK Cosmetics</h3>
                  <p className="text-[#766350]/80 text-xs md:text-sm font-medium">Be Kind. Be Kool. Be You.</p>
                </div>
              </Link>
              
              {/* Brand 2: ME5 (Poin 5: Stepped / Turun Sedikit) */}
              <Link href="/brands#me5" className="flex flex-col group mt-0 md:mt-16">
                <div className="w-full aspect-[4/5] overflow-hidden rounded-[2rem] border-[4px] border-white/60 shadow-xl mb-4">
                  <img alt="ME5 Skincare" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="/images/me5-discover.webp" loading="lazy" />
                </div>
                <div className="px-2 text-left">
                  <h3 className="font-serif text-[#766350] text-xl md:text-2xl font-bold mb-1 group-hover:opacity-70 transition-opacity">ME5</h3>
                  <p className="text-[#766350]/80 text-xs md:text-sm font-medium">Your Eyes, Your Magic, Your ME5.</p>
                </div>
              </Link>
              
              {/* Brand 3: AG (Poin 5: Stepped / Turun Paling Bawah) */}
              <Link href="/brands#ag" className="flex flex-col group mt-0 md:mt-32">
                <div className="w-full aspect-[4/5] overflow-hidden rounded-[2rem] border-[4px] border-white/60 shadow-xl mb-4">
                  <img alt="AG Fragrance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="/images/ag-discover.webp" loading="lazy" />
                </div>
                <div className="px-2 text-left">
                  <h3 className="font-serif text-[#766350] text-xl md:text-2xl font-bold mb-1 group-hover:opacity-70 transition-opacity">AG (Angela Glamor)</h3>
                  <p className="text-[#766350]/80 text-xs md:text-sm font-medium">Flawless Skin. Impeccable Gel Nails.</p>
                </div>
              </Link>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ======================================= */}
{/* ABOUT THE COMPANY & BUILDING (REVISED MOBILE LAYOUT) */}
{/* ======================================= */}
<section className="relative w-full py-16 md:py-24">

  {/* FLORAL 2: About The Company - Kanan Atas */}
  <img 
    src="/images/floral-right.webp" 
    alt="floral" 
    loading="lazy"
    className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-32 md:w-60 z-0 pointer-events-none opacity-90 drop-shadow-lg"
  />

  <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
    <ScrollReveal>
      <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
        
        {/* Kolom Kiri: Konten Teks */}
        {/* Mobile: order-2 (di bawah), Desktop: lg:order-1 (di kiri) */}
        <div className="w-full lg:w-1/2 py-4 flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
          
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#B45D6A] mb-4 block">
            About The Company
          </span>
          
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#766350] leading-tight mb-6 lg:mb-8">
            Pioneering the color cosmetics industry Since 2002.
          </h3>
          
          <div className="space-y-4 md:space-y-6 text-sm md:text-base text-[#766350]/90 leading-relaxed font-medium">
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
          
          <Link href="/about" className="mt-8 md:mt-10 text-xs font-bold uppercase tracking-widest text-[#766350] hover:text-[#B45D6A] flex items-center justify-center lg:justify-start gap-2 transition-colors w-full lg:w-max group">
            DISCOVER OUR PROFILE 
            <span className="material-symbols-outlined text-[16px] transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>

        {/* Kolom Kanan: Gambar Gedung */}
        {/* Mobile: order-1 (di atas), Desktop: lg:order-2 (di kanan) */}
        <div className="w-full lg:w-1/2 relative rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-2xl order-1 lg:order-2">
          {/* Gambar untuk MOBILE (no background) */}
          <img
            alt="Beautymax Essential HQ"
            loading="lazy"
            className="w-full h-full aspect-[4/3] object-cover object-center lg:hidden hover:scale-105 transition-transform duration-1000 ease-out"
            src="/images/office-building2.webp"
          />
          {/* Gambar untuk DESKTOP (with background) */}
          <img
            alt="Beautymax Essential HQ"
            loading="lazy"
            className="w-full h-full aspect-[4/3] lg:aspect-[4/5] object-cover object-center hidden lg:block hover:scale-105 transition-transform duration-1000 ease-out"
            src="/images/office-building.webp"
          />
        </div>
        
      </div>
    </ScrollReveal>
  </div>
</section>

      {/* ======================================= */}
      {/* OUR FACTORY (INFINITE MARQUEE SCROLL) */}
      {/* ======================================= */}
      {/* REVISI POIN 1: Hapus overflow-hidden di sini agar bunga tidak kepotong kotak */}
      <section className="relative w-full py-10 md:py-16 mb-20 md:mb-32 mt-10 md:mt-24">
        
        {/* FLORAL 3: Our Factory - Kiri Atas */}
        <img 
          src="/images/blur-floral-left.webp" 
          alt="floral" 
          loading="lazy"
          className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-32 md:w-60 z-0 pointer-events-none opacity-90 drop-shadow-lg"
        />

        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10 mb-10 md:mb-16">
          <ScrollReveal>
            <div className="flex flex-col items-center">
              <h2 className={`${glassHeaderStyle} px-10 py-3 text-2xl md:text-3xl font-bold tracking-wide`}>
                Our Factory
              </h2>
            </div>
          </ScrollReveal>
        </div>
        
        {/* ==============================================
            CSS ANIMASI KHUSUS (Ditaruh di sini agar rapi) 
            translateX(-50%) akan menggeser tepat setengah lebar kontainer.
        ================================================== */}
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            /* 35s = kecepatan scroll (makin besar angkanya makin lambat/santai) */
            animation: marquee 35s linear infinite;
          }
          /* Efek premium: Berhenti geser kalau cursor di-hover (dipegang) */
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Kontainer Slider - Dibuat w-full biar mentok ujung kiri-kanan layar */}
        <div className="relative w-full flex overflow-hidden group">
          
          {/* Track Animasi: Berisi 2 blok set gambar yang berdampingan */}
          <div className="flex w-max animate-marquee">
            
            {/* BLOK 1: Set 5 Gambar Asli */}
            <div className="flex gap-6 md:gap-10 px-3 md:px-5">
              {["/images/factory-1.webp", "/images/factory-2.webp", "/images/factory-3.webp", "/images/4.webp", "images/5.webp"].map((img, index) => (
                <div key={`set1-${index}`} className="w-[280px] sm:w-[400px] md:w-[600px] aspect-[4/3] flex-shrink-0 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border-[6px] border-white/50 shadow-2xl bg-white/20">
                  <img src={img} alt={`Factory Facility ${index + 1}`} loading="lazy" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* BLOK 2: Duplikat Persis dari Blok 1 (Agar ilusi loop tidak pernah terputus) */}
            <div className="flex gap-6 md:gap-10 px-3 md:px-5">
              {["/images/1.webp", "/images/2.webp", "/images/3.webp", "/images/4.webp", "/images/5.webp"].map((img, index) => (
                <div key={`set2-${index}`} className="w-[280px] sm:w-[400px] md:w-[600px] aspect-[4/3] flex-shrink-0 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border-[6px] border-white/50 shadow-2xl bg-white/20">
                  <img src={img} alt={`Factory Facility Duplicate ${index + 1}`} loading="lazy" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}