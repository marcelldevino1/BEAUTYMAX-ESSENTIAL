export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      
      {/* BACKGROUND PLACEHOLDER */}
      {/* Ganti div ini dengan <img> saat foto Hero beresolusi tinggi sudah dikirim klien */}
      <div className="absolute inset-0 z-0 bg-[#e5e5e5] animate-pulse flex items-center justify-center">
        <span className="text-sm text-gray-500 uppercase tracking-widest font-medium">
          [ Hero Image Placeholder ]
        </span>
        
        {/* Overlay gelap agar teks putih tetap terbaca walau fotonya terang */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto mt-20">
        <h2 className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/90 font-medium mb-6">
          Beautymax Essential
        </h2>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-10">
          Beauty for Every Expression.
        </h1>
        
        <a 
          href="#about" 
          className="inline-block border border-white text-white px-10 py-4 text-xs uppercase tracking-widest hover:bg-white hover:text-beautymax-dark transition-all duration-500"
        >
          Discover Our Story
        </a>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-3 opacity-80">
        <span className="text-[9px] uppercase tracking-[0.3em] text-white">Scroll</span>
        <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[bounce_2s_infinite]"></div>
        </div>
      </div>
      
    </section>
  );
}