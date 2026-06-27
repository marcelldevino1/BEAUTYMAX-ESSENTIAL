"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function BrandsPage() {
  // ==========================================
  // GLASSMORPHISM STYLE UNTUK TOMBOL
  // ==========================================
  const glassButtonStyle = "bg-design-pill/60 backdrop-blur-md border-[1.5px] border-white/60 text-white rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.15)] hover:bg-design-pill/80 hover:scale-105 transition-all duration-300";

  return (
    // Membungkus seluruh halaman dengan gradient yang sama dan overflow-hidden untuk ornamen
    <main className="pt-24 flex-grow pb-20 bg-[linear-gradient(to_bottom,#C1AEC1_0%,#EED5D0_25%,#E2B6B7_60%,#786680_100%)] min-h-screen relative overflow-hidden">
      
      {/* ========================================== */}
      {/* GLOBAL FLOATING ORNAMENTS (Bunga & Hati) */}
      {/* ========================================== */}
      <img src="/images/blur-floral-left.webp" alt="petal" className="absolute top-[10%] right-[-5%] w-32 md:w-64 z-0 pointer-events-none opacity-60" />
      <img src="/images/floral-right.webp" alt="petal" className="absolute top-[40%] left-[-5%] w-32 md:w-52 z-0 pointer-events-none opacity-60" />
      <img src="/images/love-ornament.webp" alt="love" className="absolute top-[38%] right-[10%] w-24 md:w-40 z-0 pointer-events-none opacity-90 drop-shadow-lg" />
      <img src="/images/blur-floral-left.webp" alt="petal" className="absolute bottom-[20%] right-[-2%] w-24 md:w-48 z-0 pointer-events-none opacity-70" />

      {/* ========================================== */}
      {/* HERO SECTION */}
      {/* ========================================== */}
      <ScrollReveal>
        <section className="pt-12 md:pt-20 pb-16 md:pb-20 px-6 md:px-16 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
            
            <div className="lg:col-span-6">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-[#7A6A69] drop-shadow-sm">
                Proprietary<br />Brands.
              </h1>
            </div>
            
            <div className="lg:col-span-6 flex flex-col gap-6 lg:pl-12">
              <p className="text-base md:text-lg text-[#5A4A49] leading-relaxed">
                Nurturing a diverse portfolio of proprietary, trend-driven beauty brands. Driven by deep consumer insight and market agility, Beautymax empowers individuality across all generations and lifestyles.
              </p>
              <div>
                <a href="#bk" className={`${glassButtonStyle} inline-block px-8 py-3 text-sm font-semibold`}>
                  Explore Portfolio
                </a>
              </div>
            </div>

          </div>

          <div className="relative w-full flex flex-col items-center mt-10 md:mt-20">
            {/* Teks Kutipan Melayang di atas Hero Image */}
            <h2 className="text-[#D96B77] font-bold text-2xl md:text-3xl lg:text-4xl text-center max-w-4xl leading-snug mb-8 drop-shadow-sm">
              "We believe beauty is not limited to appearance, but is a form of self expression and personal empowerment."
            </h2>
            
            <div className="w-full relative flex justify-center">
              {/* Gambar Hero (Pastikan menggunakan image PNG/WebP transparan jika ada, atau biarkan full) */}
              <img alt="Brand Universe Hero" className="w-full max-w-6xl h-auto object-contain drop-shadow-2xl" src="/images/all-brands-hero.webp" />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ========================================== */}
      {/* BRAND 1: BK COSMETICS */}
      {/* ========================================== */}
      <section className="w-full py-20 md:py-32 relative z-10" id="bk">
        <div className="px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          
          <div className="md:col-span-5 order-2 md:order-1 flex flex-col justify-center">
            <ScrollReveal>
              <div className="mb-6 flex items-center gap-4">
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#D96B77]">BK Cosmetics</h2>
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl italic text-[#D96B77]/80 mb-6 font-light">
                Beauty is never limited.
              </h3>
              
              <p className="text-base md:text-lg text-[#5A4A49] mb-10 leading-relaxed max-w-md">
                A vibrant beauty universe tailored for the new generation. Encompassing three core lines—BUTYKISS, BUTYKOOL, and BUTYKLEAN—BK breaks traditional boundaries to offer a diverse, playful range across lips, skin, nails, and everyday self-care.
              </p>
              
              <div className="flex flex-col gap-4 pt-4">
                <span className="text-sm font-bold uppercase tracking-widest text-[#D96B77]">Core Line — BUTYKISS</span>
                <span className="text-sm font-bold uppercase tracking-widest text-[#D96B77]">Core Line — BUTYKOOL</span>
                <span className="text-sm font-bold uppercase tracking-widest text-[#D96B77]">Core Line — BUTYKLEAN</span>
              </div>

              <h4 className="mt-12 text-xl font-black uppercase tracking-widest text-[#D96B77] opacity-80">
                NEW GENERATION BEAUTY
              </h4>
            </ScrollReveal>
          </div>
          
          <div className="md:col-span-7 order-1 md:order-2">
            <ScrollReveal delay={200}>
              {/* Gambar dibiarkan tanpa kotak/border agar menyatu dengan background */}
              <div className="w-full flex justify-center">
                <img alt="BK Banner" className="w-full max-w-2xl h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700" src="/images/bk-produk.webp" />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* BRAND 2: ME5 */}
      {/* ========================================== */}
      <section className="w-full py-20 md:py-32 relative z-10" id="me5">
        <div className="px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          
          <div className="md:col-span-6 flex justify-center">
            <ScrollReveal>
              <div className="w-full">
                <img alt="ME5 Artistry" className="w-full max-w-xl h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700" src="/images/me5-produk.webp" />
              </div>
            </ScrollReveal>
          </div>
          
          <div className="md:col-span-6 md:pl-8 flex flex-col justify-center">
            <ScrollReveal delay={200}>
              <div className="mb-6">
                <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#8B6E5A]">ME5</h2>
              </div>
              
              <h3 className="font-serif text-3xl md:text-4xl font-black text-[#6B4F3A] mb-8 leading-tight drop-shadow-sm">
                Your Eyes. Your Magic. Your ME5.
              </h3>
              
              <p className="text-base md:text-lg text-[#5A4A49] leading-relaxed max-w-md mb-12">
                A dedicated eye-beauty brand that treats makeup as a language of confidence. ME5 utilizes advanced textures, vibrant high-definition pigments, and ultra-long-lasting wear to elevate, define, and transform every gaze.
              </p>

              <h4 className="text-2xl font-black text-[#6B4F3A] opacity-90 drop-shadow-sm">
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
        <div className="px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          
          <div className="md:col-span-5 order-2 md:order-1 flex flex-col justify-center">
            <ScrollReveal>
              <div className="mb-6">
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333]">ANGELA GLAMOR</h2>
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl italic text-[#444444] mb-8 font-light leading-snug">
                Flawless Skin. Impeccable Gel Nails. Professional Glamor.
              </h3>
              
              <p className="text-base md:text-lg text-[#5A4A49] mb-10 leading-relaxed max-w-md">
                A high-performance, professional-grade beauty brand built for enthusiasts and salon experts alike. AG focuses on engineered, seamless base makeup formulas and premium, high-gloss, ultra-durable gel nail polishes that bring professional artistry into daily routines.
              </p>

              <div className="flex flex-col gap-4 pt-4">
                <span className="text-sm font-bold text-[#333333]">Engineered Base Makeup</span>
                <span className="text-sm font-bold text-[#333333]">High-Gloss Gel Nails</span>
                <span className="text-sm font-bold text-[#333333]">Professional Salon Grade</span>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="md:col-span-7 order-1 md:order-2 flex justify-center">
            <ScrollReveal delay={200}>
              <div className="w-full">
                <img alt="AG Beauty Banner" className="w-full max-w-2xl h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700" src="/images/ag-produk.webp" />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

    </main>
  );
}