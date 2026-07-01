"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function BrandsPage() {
  const glassButtonStyle = "bg-black/35 backdrop-blur-md border-[3px] border-white text-white rounded-full shadow-lg hover:bg-black/50 hover:scale-105 transition-all duration-300";

  return (
    <main className="pt-24 flex-grow pb-20 bg-[linear-gradient(to_bottom,#EADCE0_0%,#F5E6DF_25%,#EBBEC0_60%,#DDA8AB_100%)] min-h-screen relative overflow-hidden">
      
      {/* ========================================== */}
      {/* GLOBAL FLOATING ORNAMENTS */}
      {/* ========================================== */}
      <img src="/images/blur-floral-left.webp" alt="petal" loading="lazy" className="absolute top-[10%] right-[-5%] w-32 md:w-64 z-0 pointer-events-none opacity-60" />
      <img src="/images/floral-right.webp" alt="petal" loading="lazy" className="absolute top-[40%] left-[-5%] w-32 md:w-52 z-0 pointer-events-none opacity-60" />
      <img src="/images/blur-floral-left.webp" alt="petal" loading="lazy" className="absolute bottom-[20%] right-[-2%] w-24 md:w-48 z-0 pointer-events-none opacity-70" />

      {/* ========================================== */}
      {/* HERO SECTION (REVISED: SIMPLIFIED) */}
      {/* ========================================== */}
      <ScrollReveal>
        <section className="pt-12 md:pt-20 pb-16 md:pb-20 px-6 md:px-16 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
            
            <div className="lg:col-span-6">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-[#766350] drop-shadow-sm">
                Proprietary<br />Brands.
              </h1>
            </div>
            
            <div className="lg:col-span-6 flex flex-col gap-6 lg:pl-12 pt-2">
              <p className="text-base md:text-lg text-[#766350] leading-relaxed font-medium">
                Nurturing a diverse portfolio of proprietary, trend-driven beauty brands. Driven by deep consumer insight and market agility, Beautymax empowers individuality across all generations and lifestyles.
              </p>
              {/* Tombol Explore Portfolio telah dihapus sesuai instruksi penyederhanaan format */}
            </div>

          </div>

          <div className="relative w-full flex flex-col items-center mt-10 md:mt-20">
            {/* REVISI: Kutipan "We believe..." DIHAPUS sesuai panah "Remove" */}
            
            <div className="w-full max-w-6xl relative flex justify-center rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border-[6px] md:border-[8px] border-white/60 shadow-2xl">
              <img 
                alt="Brand Universe Hero" 
                fetchPriority="high" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000" 
                src="/images/all-brands-hero.webp" 
              />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ========================================== */}
{/* BRAND 1: BK COSMETICS */}
{/* ========================================== */}
<section className="w-full py-20 md:py-32 relative z-10" id="bk">
  <div className="px-6 md:px-16 max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
    
    <div className="md:col-span-5 order-2 md:order-1 flex flex-col justify-center">
      <ScrollReveal>
        <div className="mb-6 flex items-center gap-4">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#766350]">BK Cosmetics</h2>
        </div>
        
        {/* FONT: Alex Brush (Distinctive, Script, tapi JELAS BACA) */}
        <h3 className="text-[#766350] mb-6 font-normal tracking-wide" style={{ fontFamily: '"Alex Brush", cursive' }}>
          <span className="text-4xl md:text-6xl lg:text-7xl xl:text-[5rem] leading-tight block">
            Be kind. Be kool. Be You
          </span>
        </h3>
        
        <p className="text-sm md:text-base lg:text-lg text-[#766350] font-medium mb-8 md:mb-10 leading-relaxed max-w-md">
          A vibrant beauty universe tailored for the new generation. Encompassing three core lines—BUTYKISS, BUTYKOOL, and BUTYKLEAN—BK breaks traditional boundaries to offer a diverse, playful range across lips, skin, nails, and everyday self-care.
        </p>
        
        <div className="flex flex-col gap-3 md:gap-4 pt-4">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#766350]">Core Line — BUTYKISS</span>
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#766350]">Core Line — BUTYKOOL</span>
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#766350]">Core Line — BUTYKLEAN</span>
        </div>

        <h4 className="mt-8 md:mt-12 text-base md:text-xl font-bold uppercase tracking-widest text-[#766350] opacity-90">
          NEW GENERATION BEAUTY
        </h4>
      </ScrollReveal>
    </div>
    
    <div className="md:col-span-7 order-1 md:order-2">
      <ScrollReveal delay={200} className="w-full h-full flex justify-center lg:justify-end">
        <div className="w-full md:w-[120%] lg:w-[130%] -ml-0 lg:-ml-20"> 
          <img alt="BK Banner" loading="lazy" className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700" src="/images/bk-brand-new.webp" />
        </div>
      </ScrollReveal>
    </div>

  </div>
</section>

{/* ========================================== */}
{/* BRAND 2: ME5 */}
{/* ========================================== */}
<section className="w-full py-20 md:py-32 relative z-10" id="me5">
  <div className="px-6 md:px-16 max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
    
    <div className="md:col-span-7 flex justify-center lg:justify-start">
      <ScrollReveal className="w-full h-full">
        <div className="w-full md:w-[120%] lg:w-[130%] -mr-0 lg:-mr-20 lg:-ml-10">
          <img alt="ME5 Artistry" loading="lazy" className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700" src="/images/me5-brand-new.webp" />
        </div>
      </ScrollReveal>
    </div>
    
    <div className="md:col-span-5 flex flex-col justify-center">
      <ScrollReveal delay={200}>
        <div className="mb-6">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#766350] mb-6 md:mb-8">ME5</h2>
        </div>
        
        {/* FONT: Alex Brush (Sekarang ME5 sudah "match" dengan BK & AG) */}
        <h3 className="text-[#766350] mb-6 md:mb-8 leading-tight tracking-wide drop-shadow-sm font-normal" style={{ fontFamily: '"Alex Brush", cursive' }}>
          <span className="text-3xl md:text-5xl lg:text-6xl xl:text-[4.5rem] block">
            Your Eyes. Your Magic. Your ME5.
          </span>
        </h3>
        
        <p className="text-sm md:text-base lg:text-lg text-[#766350] font-medium leading-relaxed max-w-md mb-8 md:mb-12">
          A dedicated eye-beauty brand that treats makeup as a language of confidence. ME5 utilizes advanced textures, vibrant high-definition pigments, and ultra-long-lasting wear to elevate, define, and transform every gaze.
        </p>

        <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-[#766350] opacity-90 drop-shadow-sm">
          Dedicated to the Art of Eye Makeup
        </h4>
      </ScrollReveal>
    </div>

  </div>
</section>

{/* ========================================== */}
{/* BRAND 3: ANGELA GLAMOR */}
{/* ========================================== */}
<section className="w-full py-20 md:py-32 relative z-10" id="ag">
  <div className="px-6 md:px-16 max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
    
    <div className="md:col-span-5 order-2 md:order-1 flex flex-col justify-center">
      <ScrollReveal>
        <div className="mb-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#766350] mb-6 md:mb-8">ANGELA GLAMOR</h2>
        </div>
        
        {/* FONT: Alex Brush (Jauh lebih rapi dan mudah dibaca dibanding Freestyle Script) */}
        <h3 className="text-[#766350] mb-6 md:mb-8 font-normal leading-snug tracking-wide" style={{ fontFamily: '"Alex Brush", cursive' }}>
          <span className="text-3xl md:text-5xl lg:text-6xl xl:text-[4.5rem] block">
            Flawless Skin. Impeccable Gel Nails. Professional Glamor.
          </span>
        </h3>
        
        <p className="text-sm md:text-base lg:text-lg text-[#766350] font-medium mb-8 md:mb-10 leading-relaxed max-w-md">
          A high-performance, professional-grade beauty brand built for enthusiasts and salon experts alike. AG focuses on engineered, seamless base makeup formulas and premium, high-gloss, ultra-durable gel nail polishes that bring professional artistry into daily routines.
        </p>

        <div className="flex flex-col gap-3 md:gap-4 pt-4">
          <span className="text-xs md:text-sm font-bold text-[#766350]">Engineered Base Makeup</span>
          <span className="text-xs md:text-sm font-bold text-[#766350]">High-Gloss Gel Nails</span>
          <span className="text-xs md:text-sm font-bold text-[#766350]">Professional Salon Grade</span>
        </div>
      </ScrollReveal>
    </div>
    
    <div className="md:col-span-7 order-1 md:order-2 flex justify-center lg:justify-end">
      <ScrollReveal delay={200} className="w-full h-full">
        <div className="w-full md:w-[120%] lg:w-[130%] -ml-0 lg:-ml-20">
          <img alt="AG Beauty Banner" loading="lazy" className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700" src="/images/ag-brand-new.webp" />
        </div>
      </ScrollReveal>
    </div>

  </div>
</section>

    </main>
  );
}