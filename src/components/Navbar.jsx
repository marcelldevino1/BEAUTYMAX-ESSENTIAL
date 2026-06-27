"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const pathname = usePathname();
  const shopDropdownRef = useRef(null);

  // Deteksi scroll untuk sedikit menggelapkan Navbar jika di-scroll jauh
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menutup dropdown jika klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shopDropdownRef.current && !shopDropdownRef.current.contains(event.target)) {
        setIsShopOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsShopOpen(false);
  }, [pathname]);

  // CSS Khusus untuk Efek Glassmorphism (DIPERBAIKI: Lebih Gelap & Jelas)
  // Menggunakan bg-design-pill/60 (warna kapsul transparan) agar kontras dengan teks putih
  const glassStyle = "bg-design-pill/60 backdrop-blur-lg border border-white/60 text-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:bg-design-pill/80 transition-all duration-300 rounded-full";

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 pt-4 md:pt-6 ${isScrolled ? "pb-4 bg-design-bg-top/30 backdrop-blur-sm" : ""}`}>
        <div className="flex justify-between items-center px-4 md:px-8 max-w-[1600px] mx-auto gap-2 md:gap-4">
          
          {/* LOGO - Glassmorphism Pill */}
          <Link className={`${glassStyle} px-4 md:px-6 py-2 md:py-2.5 font-sans font-bold text-sm md:text-base tracking-wide flex-shrink-0 z-[50]`} href="/">
            BEAUTYMAX ESSENTIAL
          </Link>
          
          {/* DESKTOP MENU - Glassmorphism Pills */}
          <nav className="hidden lg:flex items-center gap-3">
            <Link className={`${glassStyle} px-5 py-2 text-xs font-semibold uppercase tracking-widest`} href="/">Home</Link>
            <Link className={`${glassStyle} px-5 py-2 text-xs font-semibold uppercase tracking-widest`} href="/about">About Us</Link>
            <Link className={`${glassStyle} px-5 py-2 text-xs font-semibold uppercase tracking-widest`} href="/brands">Brand</Link>
            <Link className={`${glassStyle} px-5 py-2 text-xs font-semibold uppercase tracking-widest`} href="/contact">Contact</Link>
          </nav>

          {/* SHOP NOW - Glassmorphism Pill & Dropdown */}
          <div className="hidden lg:block relative" ref={shopDropdownRef}>
            <button 
              onClick={() => setIsShopOpen(!isShopOpen)}
              className={`${glassStyle} px-6 py-2.5 text-xs font-semibold uppercase tracking-widest inline-flex items-center gap-2`}
            >
              Shop Now
              <span className="material-symbols-outlined text-[16px] transition-transform duration-300" style={{ transform: isShopOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
            </button>
            
            <div className={`absolute top-full right-0 mt-3 w-56 bg-white/80 backdrop-blur-xl border border-white/60 shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-300 origin-top-right flex flex-col ${isShopOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
              <div className="p-4 bg-black/5 border-b border-white/40">
                <span className="text-[10px] text-design-pill font-bold uppercase tracking-widest">Select Destination</span>
              </div>
              <Link href="/coming-soon" onClick={() => setIsShopOpen(false)} className="px-5 py-4 text-xs font-bold uppercase tracking-widest text-charcoal-text hover:bg-white/80 transition-colors flex justify-between items-center group">
                BK Cosmetics <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
              </Link>
              <Link href="/coming-soon" onClick={() => setIsShopOpen(false)} className="px-5 py-4 text-xs font-bold uppercase tracking-widest text-charcoal-text hover:bg-white/80 transition-colors flex justify-between items-center group border-t border-white/40">
                ME5 Magic Eyes <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
              </Link>
              <Link href="/coming-soon" onClick={() => setIsShopOpen(false)} className="px-5 py-4 text-xs font-bold uppercase tracking-widest text-charcoal-text hover:bg-white/80 transition-colors flex justify-between items-center group border-t border-white/40">
                Angela Glamor (AG) <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* MOBILE MENU BUTTON - Glassmorphism */}
          <button className={`lg:hidden ${glassStyle} p-2 relative z-50`} onClick={() => setIsMobileOpen(true)}>
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
        </div>
      </header>

      {/* MOBILE MENU DRAWER */}
      <div className={`fixed inset-0 z-[70] flex flex-col transition-transform duration-500 ease-in-out lg:hidden overflow-y-auto bg-design-bg-mid/95 backdrop-blur-xl ${isMobileOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="w-full flex justify-between items-center px-6 h-[80px] shrink-0 border-b border-white/20">
          <span className="font-sans font-bold text-xl tracking-tighter text-white">MENU</span>
          <button onClick={() => setIsMobileOpen(false)} className="flex items-center gap-2 text-white hover:opacity-70 transition-opacity p-2">
            <span className="text-xs font-semibold uppercase tracking-widest">Back</span>
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center flex-grow gap-8 py-8 text-white">
          <Link onClick={() => setIsMobileOpen(false)} className="font-sans font-bold text-2xl uppercase tracking-wider hover:opacity-70" href="/">Home</Link>
          <Link onClick={() => setIsMobileOpen(false)} className="font-sans font-bold text-2xl uppercase tracking-wider hover:opacity-70" href="/about">About Us</Link>
          <Link onClick={() => setIsMobileOpen(false)} className="font-sans font-bold text-2xl uppercase tracking-wider hover:opacity-70" href="/brands">Brand</Link>
          <Link onClick={() => setIsMobileOpen(false)} className="font-sans font-bold text-2xl uppercase tracking-wider hover:opacity-70" href="/contact">Contact</Link>
        </div>
        <div className="w-full px-8 flex flex-col gap-4 items-center pb-12 shrink-0">
          <span className="text-xs font-semibold uppercase tracking-widest text-white mb-2 border-b border-white pb-1">Select Destination</span>
          <Link href="/coming-soon" onClick={() => setIsMobileOpen(false)} className="w-full max-w-xs text-center text-xs font-semibold uppercase tracking-widest text-design-pill bg-white px-8 py-4 rounded-full shadow-lg hover:opacity-90">Shop BK Cosmetics</Link>
          <Link href="/coming-soon" onClick={() => setIsMobileOpen(false)} className="w-full max-w-xs text-center text-xs font-semibold uppercase tracking-widest text-design-pill bg-white px-8 py-4 rounded-full shadow-lg hover:opacity-90">Shop ME5 Magic Eyes</Link>
          <Link href="/coming-soon" onClick={() => setIsMobileOpen(false)} className="w-full max-w-xs text-center text-xs font-semibold uppercase tracking-widest text-design-pill bg-white px-8 py-4 rounded-full shadow-lg hover:opacity-90">Shop Angela Glamor (AG)</Link>
        </div>
      </div>
    </>
  );
}