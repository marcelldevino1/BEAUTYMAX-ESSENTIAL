"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  // ==========================================
  // REVISI GLASSMORPHISM: Disamakan persis dengan Main Page (Hitam pekat, border putih tebal, teks putih)
  // ==========================================
  const glassHeaderStyle = "bg-black/35 backdrop-blur-md border-[3px] border-white text-white rounded-full shadow-lg";

  return (
    // REVISI BACKGROUND: Gradasi diterangkan menjadi soft peach/pink agar tidak terlalu gelap seperti di preview
    <main className="pt-24 flex-grow pb-20 bg-[linear-gradient(to_bottom,#EADCE0_0%,#F5E6DF_35%,#EBBEC0_70%,#DDA8AB_100%)] min-h-screen relative overflow-hidden">
      
      {/* ========================================== */}
      {/* GLOBAL FLOATING ORNAMENTS (Bunga & Hati) */}
      {/* ========================================== */}
      <img src="/images/love-ornament.webp" alt="love" loading="lazy" className="absolute top-[15%] left-[5%] md:left-[10%] w-24 md:w-40 z-0 pointer-events-none opacity-90 drop-shadow-lg" />
      <img src="/images/blur-floral-left.webp" alt="petal" loading="lazy" className="absolute top-[35%] right-[-5%] w-32 md:w-64 z-0 pointer-events-none opacity-80" />
      <img src="/images/floral-right.webp" alt="petal" loading="lazy" className="absolute top-[60%] left-[-5%] w-32 md:w-64 z-0 pointer-events-none opacity-80" />
      <img src="/images/blur-floral-left.webp" alt="petal" loading="lazy" className="absolute bottom-[10%] right-[5%] w-20 md:w-40 z-0 pointer-events-none opacity-80" />

      {/* ========================================== */}
      {/* HERO SECTION */}
      {/* ========================================== */}
      <ScrollReveal>
        <section className="px-6 md:px-16 max-w-7xl mx-auto py-12 md:py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            
            <div className="md:col-span-6 lg:col-span-7">
              <span className="inline-block text-sm font-bold text-[#766350] mb-4 uppercase tracking-widest">PT BEAUTYMAX Essential Indonesia</span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-[#766350] mb-8 drop-shadow-sm">
                Beauty for<br/>Every Expression.
              </h1>
            </div>
            
            <div className="md:col-span-6 lg:col-span-5 md:pt-4">
              <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 shadow-xl border border-white/60 flex flex-col gap-6 text-base md:text-lg leading-relaxed text-[#766350] font-medium">
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
          <div className="mt-16 w-full overflow-hidden relative rounded-[2.5rem] shadow-2xl border-[8px] border-white/50">
            <img 
              alt="Beautymax Essential Introduction" 
              className="w-full h-auto object-cover object-center" 
              src="/images/about-main-page.webp" 
              fetchPriority="high"
            />
          </div>
        </section>
      </ScrollReveal>

      {/* ========================================== */}
      {/* VISION & MISSION */}
      {/* ========================================== */}
      <section className="w-full px-3 md:px-6 lg:px-8 py-16 md:py-24 relative z-10 flex justify-center">
        {/* REVISI: Mengubah p-20 menjadi px-20 lg:py-32 agar atas-bawahnya jauh lebih lega. 
            Ditambah items-center agar teks berada persis di tengah-tengah kotak. */}
        <div className="w-full max-w-[1800px] bg-white/80 backdrop-blur-xl rounded-[2rem] lg:rounded-[2.5rem] px-10 py-16 md:px-16 md:py-24 lg:px-20 lg:py-32 shadow-2xl border border-white/60 flex flex-col md:flex-row gap-12 md:gap-20 lg:gap-24 items-center">
          
          <ScrollReveal className="md:w-[55%] w-full">
            {/* Jarak dari garis ke tulisan 'Our Vision' diperlebar sedikit (pt-12) */}
            <div className="border-t-[1.5px] border-[#766350]/30 pt-10 md:pt-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#766350]/80 mb-6 md:mb-8">Our Vision</span>
              
              <h3 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#766350] leading-tight">
                "Shaping a world where diverse, trend-forward beauty experiences empower everyone to express their authentic selves."
              </h3>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150} className="md:w-[45%] w-full">
            <div className="border-t-[1.5px] border-[#766350]/30 pt-10 md:pt-12 flex flex-col h-full">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#766350]/80 mb-6 md:mb-8">Our Mission</span>
              
              <p className="text-base md:text-lg lg:text-xl leading-relaxed text-[#766350] font-medium">
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
          
          {/* Gambar Model */}
          <ScrollReveal className="w-full max-w-4xl relative mb-16">
             <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white/60">
                <img 
                  src="/images/our-commitment.webp" 
                  alt="Our Commitment & Strength" 
                  className="w-full h-auto object-cover" 
                  loading="lazy"
                />
             </div>
          </ScrollReveal>

          {/* Judul Section (Warna #766350) */}
          <ScrollReveal className="text-center mb-20 flex flex-col items-center">
            <span className="inline-block text-sm md:text-base font-bold uppercase tracking-widest text-[#766350]/80 mb-2">Operational Strength</span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#766350]">Core Pillars</h2>
          </ScrollReveal>
          
          {/* Grid 4 Pilar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-10 md:gap-x-16 w-full">
            
            {/* Pillar 1 */}
            <ScrollReveal delay={100} className="relative pt-6">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-max">
                <h3 className={`${glassHeaderStyle} px-6 py-2 md:py-2.5 text-sm md:text-base font-bold uppercase tracking-wider`}>Premium OEM/ODM</h3>
              </div>
              <div className="bg-white/90 backdrop-blur-md rounded-[2rem] p-8 md:p-10 pt-14 md:pt-16 shadow-xl text-center border border-white/60 relative z-10 h-full flex items-center justify-center">
                <p className="text-sm md:text-base text-[#766350] leading-relaxed font-medium">
                  Premium OEM/ODM services backed by world-class production infrastructure. Trusted manufacturing partner for prominent international beauty brands like L.A. Colors and S.he.
                </p>
              </div>
            </ScrollReveal>

            {/* Pillar 2 */}
            <ScrollReveal delay={200} className="relative pt-6">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-max">
                <h3 className={`${glassHeaderStyle} px-6 py-2 md:py-2.5 text-sm md:text-base font-bold uppercase tracking-wider`}>Global Certifications</h3>
              </div>
              <div className="bg-white/90 backdrop-blur-md rounded-[2rem] p-8 md:p-10 pt-14 md:pt-16 shadow-xl text-center border border-white/60 relative z-10 h-full flex items-center justify-center">
                <p className="text-sm md:text-base text-[#766350] leading-relaxed font-medium">
                  Facilities strictly certified by international and regional standards, including GMPC, ISO 22716, FDA, Indonesian BPOM, and HALAL, ensuring seamless global market entry.
                </p>
              </div>
            </ScrollReveal>

            {/* Pillar 3 */}
            <ScrollReveal delay={300} className="relative pt-6">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-max">
                <h3 className={`${glassHeaderStyle} px-6 py-2 md:py-2.5 text-sm md:text-base font-bold uppercase tracking-wider`}>Retail Presence</h3>
              </div>
              <div className="bg-white/90 backdrop-blur-md rounded-[2rem] p-8 md:p-10 pt-14 md:pt-16 shadow-xl text-center border border-white/60 relative z-10 h-full flex items-center justify-center">
                <p className="text-sm md:text-base text-[#766350] leading-relaxed font-medium">
                  Commanding a massive global retail presence with tier-1 partners including Walmart, MINISO, KKV and SANFU, among many others.
                </p>
              </div>
            </ScrollReveal>

            {/* Pillar 4 */}
            <ScrollReveal delay={400} className="relative pt-6">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-max">
                <h3 className={`${glassHeaderStyle} px-6 py-2 md:py-2.5 text-sm md:text-base font-bold uppercase tracking-wider`}>IP Partnerships</h3>
              </div>
              <div className="bg-white/90 backdrop-blur-md rounded-[2rem] p-8 md:p-10 pt-14 md:pt-16 shadow-xl text-center border border-white/60 relative z-10 h-full flex items-center justify-center">
                <p className="text-sm md:text-base text-[#766350] leading-relaxed font-medium">
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