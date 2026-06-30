"use client";
import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  // ==========================================
  // REVISI GLASSMORPHISM: Disamakan persis dengan Main Page (Hitam pekat, border putih tebal, teks putih)
  // ==========================================
  const [isMissionHovered, setIsMissionHovered] = useState(false);
  const glassHeaderStyle = "bg-black/35 backdrop-blur-md border-[3px] border-white text-white rounded-full shadow-lg";

  return (
    // REVISI BACKGROUND: Gradasi diterangkan menjadi soft peach/pink agar tidak terlalu gelap seperti di preview
    <main className="pt-24 flex-grow pb-20 bg-[linear-gradient(to_bottom,#EADCE0_0%,#F5E6DF_35%,#EBBEC0_70%,#DDA8AB_100%)] min-h-screen relative overflow-hidden">
      
      {/* ========================================== */}
      {/* GLOBAL FLOATING ORNAMENTS (Bunga & Hati) */}
      {/* ========================================== */}
      <img src="/images/love2.webp" alt="love" loading="lazy" className="absolute top-[15%] left-[5%] md:left-[10%] w-24 md:w-40 z-0 pointer-events-none opacity-90 drop-shadow-lg" />
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
              {/* REVISI POIN 3: Ditambahkan border-b-[1.5px] border-[#766350]/40 dan pb-2 biar ada garis pembatas */}
              <span className="inline-block text-xs md:text-sm font-bold text-[#766350] mb-6 uppercase tracking-widest border-b-[1.5px] border-[#766350]/40 pb-2">
                PT BEAUTYMAX Essential Indonesia
              </span>
              
              {/* Sedikit penyesuaian font agar seimbang */}
              <h1 className="font-serif text-[2.75rem] md:text-6xl lg:text-7xl font-bold leading-[1.1] text-[#766350] mb-8 drop-shadow-sm">
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
        
        <div className="w-full max-w-[1800px] bg-white/80 backdrop-blur-xl rounded-[2rem] lg:rounded-[2.5rem] px-10 py-16 md:px-16 md:py-24 lg:px-20 lg:py-32 shadow-2xl border border-white/60 flex flex-col md:flex-row gap-12 md:gap-20 lg:gap-24 items-center">
          
          {/* KOLOM VISION */}
          {/* Lebar kolom (w) juga dianimasikan supaya proporsional dengan teksnya */}
          <ScrollReveal className={`w-full transition-all duration-700 ease-in-out ${isMissionHovered ? 'md:w-[45%]' : 'md:w-[55%]'}`}>
            <div className="border-t-[1.5px] border-[#766350]/30 pt-10 md:pt-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#766350]/80 mb-6 md:mb-8 transition-all">Our Vision</span>
              
              {/* Ukuran & Font ditukar dinamis berdasarkan status isMissionHovered */}
              <h3 className={`text-[#766350] transition-all duration-700 ease-in-out ${isMissionHovered ? 'text-base md:text-lg lg:text-xl font-medium leading-relaxed font-sans' : 'font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight'}`}>
                "Shaping a world where diverse, trend-forward beauty experiences empower everyone to express their authentic selves."
              </h3>
            </div>
          </ScrollReveal>

          {/* KOLOM MISSION */}
          {/* Lebar kolom membesar saat di-hover */}
          <ScrollReveal delay={150} className={`w-full transition-all duration-700 ease-in-out ${isMissionHovered ? 'md:w-[55%]' : 'md:w-[45%]'}`}>
            <div 
              className="border-t-[1.5px] border-[#766350]/30 pt-10 md:pt-12 flex flex-col h-full cursor-pointer"
              onMouseEnter={() => setIsMissionHovered(true)}
              onMouseLeave={() => setIsMissionHovered(false)}
            >
              <span className={`inline-block text-xs font-bold uppercase tracking-widest mb-6 md:mb-8 transition-colors duration-700 ${isMissionHovered ? 'text-[#B45D6A]' : 'text-[#766350]/80'}`}>Our Mission</span>
              
              {/* Teks Mission membesar dan ganti gaya ke serif saat di-hover */}
              <p className={`text-[#766350] transition-all duration-700 ease-in-out ${isMissionHovered ? 'font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight' : 'text-base md:text-lg lg:text-xl font-medium leading-relaxed font-sans'}`}>
                To create accessible, insight-driven beauty products, foster purposeful partnerships, champion responsible brand development, and deliver sustainable value for our global communities.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ========================================== */}
      {/* CORE PILLARS & COMMITMENT (DARK THEME - REVISED) */}
      {/* ========================================== */}
      <section className="w-full py-16 md:py-24 relative z-10">
        <div className="px-6 md:px-12 max-w-[1600px] mx-auto">
          <ScrollReveal>
            <div className="bg-[#111111] rounded-[2rem] lg:rounded-[3rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center shadow-2xl">
              
              {/* KIRI: Gambar Model */}
              <div className="w-full lg:w-[45%] relative">
                <div className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl border-[4px] border-white/10">
                  <img 
                    src="/images/our-commitment.webp" 
                    alt="Our Commitment & Strength" 
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 ease-out" 
                    loading="lazy"
                  />
                </div>
              </div>

              {/* KANAN: Konten Core Pillars */}
              <div className="w-full lg:w-[55%] flex flex-col">
                
                {/* Judul Section (Hierarki Warna Baru) */}
                <div className="mb-10 lg:mb-14">
                  {/* Warna Bronze/Taupe agar tidak duplicate dengan gold di bawah */}
                  <span className="inline-block text-xs md:text-sm font-bold uppercase tracking-widest text-[#B5A493] mb-3">
                    Operational Strength
                  </span>
                  {/* Recolored: Gradasi Silver/Pearl yang mewah */}
                  <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-[#EAEAEA] to-[#999999] text-transparent bg-clip-text drop-shadow-sm w-max">
                    Core Pillars
                  </h2>
                </div>
                
                {/* Grid 4 Pilar (2x2) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8 w-full">
                  
                  {/* Pillar 1 */}
                  <div className="group">
                    {/* Slogan super mencolok: Ukuran diperbesar + Gradasi Bright Gold + Efek Hover Zoom ringan */}
                    <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 bg-gradient-to-r from-[#F5D061] to-[#C79135] text-transparent bg-clip-text drop-shadow-md group-hover:scale-[1.02] transition-transform origin-left w-max">
                      Premium OEM/ODM
                    </h3>
                    <p className="text-sm md:text-base text-white/70 leading-relaxed font-light group-hover:text-white/90 transition-colors">
                      Premium OEM/ODM services backed by world-class production infrastructure. Trusted manufacturing partner for prominent international beauty brands like L.A. Colors and S.he.
                    </p>
                  </div>

                  {/* Pillar 2 */}
                  <div className="group">
                    <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 bg-gradient-to-r from-[#F5D061] to-[#C79135] text-transparent bg-clip-text drop-shadow-md group-hover:scale-[1.02] transition-transform origin-left w-max">
                      Global Certifications
                    </h3>
                    <p className="text-sm md:text-base text-white/70 leading-relaxed font-light group-hover:text-white/90 transition-colors">
                      Facilities strictly certified by international and regional standards, including GMPC, ISO 22716, FDA, Indonesian BPOM, and HALAL, ensuring seamless global market entry.
                    </p>
                  </div>

                  {/* Pillar 3 */}
                  <div className="group">
                    <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 bg-gradient-to-r from-[#F5D061] to-[#C79135] text-transparent bg-clip-text drop-shadow-md group-hover:scale-[1.02] transition-transform origin-left w-max">
                      Retail Presence
                    </h3>
                    <p className="text-sm md:text-base text-white/70 leading-relaxed font-light group-hover:text-white/90 transition-colors">
                      Commanding a massive global retail presence with tier-1 partners including Watsons, Walmart, MINISO, KKV and SANFU, among many others.
                    </p>
                  </div>

                  {/* Pillar 4 */}
                  <div className="group">
                    <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 bg-gradient-to-r from-[#F5D061] to-[#C79135] text-transparent bg-clip-text drop-shadow-md group-hover:scale-[1.02] transition-transform origin-left w-max">
                      IP Partnerships
                    </h3>
                    <p className="text-sm md:text-base text-white/70 leading-relaxed font-light group-hover:text-white/90 transition-colors">
                      Amplifying market engagement through high-profile intellectual property partnerships, including exclusive collaborations with Disney and B.Duck, alongside a growing portfolio of global icons.
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}