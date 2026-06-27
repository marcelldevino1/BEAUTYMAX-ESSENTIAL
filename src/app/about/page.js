"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  // ==========================================
  // GLASSMORPHISM STYLES (Sama dengan Navbar)
  // ==========================================
  const glassHeaderStyle = "bg-design-pill/60 backdrop-blur-md border-[1.5px] border-white/60 text-white rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.15)]";

  return (
    <main className="pt-24 flex-grow pb-20 bg-[linear-gradient(to_bottom,#C1AEC1_0%,#EED5D0_30%,#E2B6B7_60%,#786680_100%)] min-h-screen relative overflow-hidden">
      
      {/* ========================================== */}
      {/* GLOBAL FLOATING ORNAMENTS (Floral & Love) */}
      {/* ========================================== */}
      <img src="/images/love2.webp" alt="love" className="absolute top-[15%] left-[5%] md:left-[10%] w-24 md:w-40 z-0 pointer-events-none opacity-90 drop-shadow-lg" />
      <img src="/images/blur-floral-left.webp" alt="petal" className="absolute top-[35%] right-[-5%] w-32 md:w-64 z-0 pointer-events-none opacity-80" />
      <img src="/images/floral-right.webp" alt="petal" className="absolute top-[60%] left-[-5%] w-32 md:w-64 z-0 pointer-events-none opacity-80" />
      <img src="/images/blur-floral-left.webp" alt="petal" className="absolute bottom-[10%] right-[5%] w-20 md:w-40 z-0 pointer-events-none opacity-80" />

      {/* ========================================== */}
      {/* HERO SECTION */}
      {/* ========================================== */}
      <ScrollReveal>
        <section className="px-6 md:px-16 max-w-7xl mx-auto py-12 md:py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            
            {/* Kiri: Judul */}
            <div className="md:col-span-6 lg:col-span-7">
              <span className="inline-block text-sm font-bold text-[#7A6A69] mb-4">PT BEAUTYMAX Essential Indonesia</span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-[#7A6A69] mb-8 drop-shadow-sm">
                Beauty for<br/>Every Expression.
              </h1>
            </div>
            
            {/* Kanan: Paragraf dengan SHAPE PUTIH */}
            <div className="md:col-span-6 lg:col-span-5 md:pt-4">
              {/* Ini adalah Shape Putihnya */}
              <div className="bg-white/70 backdrop-blur-md rounded-[2rem] p-8 md:p-10 shadow-xl border border-white/60 flex flex-col gap-6 text-base md:text-lg leading-relaxed text-[#5A4A49]">
                <p>
                  Pioneering the color cosmetics industry Since 2002, PT Beautymax Essential Indonesia is a dynamic beauty pioneer that seamlessly bridges high-caliber, global-standard manufacturing with strategic brand management.
                </p>
                <p>
                  Operating from state-of-the-art facilities, the company delivers premium OEM/ODM services to international leaders while nurturing a diverse portfolio of proprietary, trend-driven beauty brands. Driven by deep consumer insight and market agility, Beautymax empowers individuality across all generations and lifestyles.
                </p>
              </div>
            </div>

          </div>
          
          {/* Gambar Hero */}
          <div className="mt-16 w-full overflow-hidden relative rounded-[2rem] shadow-2xl border-[8px] border-white/60">
            <img 
              alt="Beautymax Essential Introduction" 
              className="w-full h-auto object-cover object-center" 
              src="/images/about-main-page.webp" 
            />
          </div>
        </section>
      </ScrollReveal>

      {/* ========================================== */}
      {/* VISION & MISSION (DIBUNGKUS SHAPE PUTIH) */}
      {/* ========================================== */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto py-16 md:py-24 relative z-10">
        {/* Ini adalah Shape Putihnya */}
        <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-10 md:p-16 shadow-2xl border border-white/60 flex flex-col md:flex-row gap-16 md:gap-24">
          
          <ScrollReveal className="md:w-1/2">
            <div className="border-t border-[#7A6A69]/30 pt-6">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#7A6A69] mb-6">Our Vision</span>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-[#2C2C2C] leading-tight">
                "Shaping a world where diverse, trend-forward beauty experiences empower everyone to express their authentic selves."
              </h3>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150} className="md:w-1/2">
            <div className="border-t border-[#7A6A69]/30 pt-6 flex flex-col h-full">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#7A6A69] mb-6">Our Mission</span>
              <p className="text-lg md:text-xl leading-relaxed text-[#5A4A49] max-w-lg">
                To create accessible, insight-driven beauty products, foster purposeful partnerships, champion responsible brand development, and deliver sustainable value for our global communities.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ========================================== */}
      {/* CORE PILLARS & COMMITMENT */}
      {/* ========================================== */}
      <section className="w-full py-10 md:py-20 relative z-10">
        <div className="px-6 md:px-16 max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Gambar Model (Centered) */}
          <ScrollReveal className="w-full max-w-4xl relative mb-16">
             <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white/60">
                <img 
                  src="/images/our-commitment.webp" 
                  alt="Our Commitment & Strength" 
                  className="w-full h-auto object-cover" 
                />
             </div>
          </ScrollReveal>

          {/* Judul Section */}
          <ScrollReveal className="text-center mb-20 flex flex-col items-center">
            <span className="inline-block text-sm md:text-base font-bold uppercase tracking-widest text-[#8B7365] mb-2">Operational Strength</span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#7A6A69]">Core Pillars</h2>
          </ScrollReveal>
          
          {/* Grid 4 Pilar (Menggunakan Glassmorphism & Kartu Putih) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-10 md:gap-x-16 w-full">
            
            {/* Pillar 1 */}
            <ScrollReveal delay={100} className="relative pt-6">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-max">
                <h3 className={`${glassHeaderStyle} px-8 py-2 md:py-3 text-lg md:text-xl font-bold`}>Premium OEM/ODM</h3>
              </div>
              <div className="bg-white/95 rounded-[2rem] p-8 md:p-10 pt-14 md:pt-16 shadow-xl text-center border-2 border-white relative z-10 h-full flex items-center justify-center">
                <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed font-medium">
                  Premium OEM/ODM services backed by world-class production infrastructure. Trusted manufacturing partner for prominent international beauty brands like L.A. Colors and S.he.
                </p>
              </div>
            </ScrollReveal>

            {/* Pillar 2 */}
            <ScrollReveal delay={200} className="relative pt-6">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-max">
                <h3 className={`${glassHeaderStyle} px-8 py-2 md:py-3 text-lg md:text-xl font-bold`}>Global Certifications</h3>
              </div>
              <div className="bg-white/95 rounded-[2rem] p-8 md:p-10 pt-14 md:pt-16 shadow-xl text-center border-2 border-white relative z-10 h-full flex items-center justify-center">
                <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed font-medium">
                  Facilities strictly certified by international and regional standards, including GMPC, ISO 22716, FDA, Indonesian BPOM, and HALAL, ensuring seamless global market entry.
                </p>
              </div>
            </ScrollReveal>

            {/* Pillar 3 */}
            <ScrollReveal delay={300} className="relative pt-6">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-max">
                <h3 className={`${glassHeaderStyle} px-8 py-2 md:py-3 text-lg md:text-xl font-bold`}>Retail Presence</h3>
              </div>
              <div className="bg-white/95 rounded-[2rem] p-8 md:p-10 pt-14 md:pt-16 shadow-xl text-center border-2 border-white relative z-10 h-full flex items-center justify-center">
                <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed font-medium">
                  Commanding a massive global retail presence with tier-1 partners including Walmart, MINISO, KKV and SANFU, among many others.
                </p>
              </div>
            </ScrollReveal>

            {/* Pillar 4 */}
            <ScrollReveal delay={400} className="relative pt-6">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-max">
                <h3 className={`${glassHeaderStyle} px-8 py-2 md:py-3 text-lg md:text-xl font-bold`}>IP Partnerships</h3>
              </div>
              <div className="bg-white/95 rounded-[2rem] p-8 md:p-10 pt-14 md:pt-16 shadow-xl text-center border-2 border-white relative z-10 h-full flex items-center justify-center">
                <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed font-medium">
                  Amplifying market engagement through high-profile intellectual property partnerships, including exclusive collaborations with Disney and B.Duck, alongside a growing portfolio of global icons.
                </p>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

    </main>
  );
}