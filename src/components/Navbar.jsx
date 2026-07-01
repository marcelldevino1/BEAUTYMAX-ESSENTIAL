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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const isActive = (path) => pathname === path;
  
  // Style untuk 4 menu tengah Desktop
  const middleNavButtonStyle = "bg-black/45 backdrop-blur-md border-[2px] border-white text-white text-[10px] lg:text-[11px] font-bold uppercase tracking-widest px-4 py-2 lg:px-5 lg:py-2 rounded-full shadow-lg hover:bg-black/60 hover:scale-105 transition-all duration-300";
  const activeMiddleNavButtonStyle = "bg-white/90 backdrop-blur-md border-[2px] border-white text-[#766350] text-[10px] lg:text-[11px] font-bold uppercase tracking-widest px-4 py-2 lg:px-5 lg:py-2 rounded-full shadow-lg transition-all duration-300";

  // Style icon Desktop
  const iconButtonStyle = "hidden lg:inline-flex bg-black/45 backdrop-blur-md border-[2px] border-white text-white p-2 lg:px-4 lg:py-2 rounded-full shadow-lg hover:bg-black/60 hover:scale-105 transition-all duration-300 items-center justify-center";

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "pt-4 md:pt-6" : "pt-6 md:pt-10"}`}>
        <div className="flex justify-between items-center px-6 md:px-12 max-w-[1600px] mx-auto">
          
          {/* KIRI: Logo Text (REVISI: Font Serif tanpa bingkai Pill) */}
          <div className="flex-shrink-0 z-50">
            <Link className="font-serif text-lg md:text-xl lg:text-2xl font-bold tracking-wide text-[#111111] drop-shadow-sm" href="/">
              BEAUTYMAX ESSENTIAL
            </Link>
          </div>
          
          {/* TENGAH: Menu Links Desktop */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3 absolute left-1/2 -translate-x-1/2">
            <Link className={isActive('/') ? activeMiddleNavButtonStyle : middleNavButtonStyle} href="/">Home</Link>
            <Link className={isActive('/about') ? activeMiddleNavButtonStyle : middleNavButtonStyle} href="/about">About Us</Link>
            <Link className={isActive('/brands') ? activeMiddleNavButtonStyle : middleNavButtonStyle} href="/brands">Brand</Link>
            <Link className={isActive('/contact') ? activeMiddleNavButtonStyle : middleNavButtonStyle} href="/contact">Contact</Link>
          </nav>

          {/* KANAN: Shop Dropdown Desktop */}
          <div className="hidden lg:block relative z-50" ref={shopDropdownRef}>
            <button 
              onClick={() => setIsShopOpen(!isShopOpen)}
              className={iconButtonStyle}
            >
              <span className="material-symbols-outlined text-[18px] lg:text-[20px] transition-transform duration-300" style={{ transform: isShopOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>menu</span>
            </button>
            
            <div className={`absolute top-full right-0 mt-3 w-56 bg-black/60 backdrop-blur-xl border-[2px] border-white shadow-2xl rounded-[1.5rem] p-3 flex flex-col gap-2 transform transition-all duration-300 origin-top-right ${isShopOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
              <Link href="/coming-soon" onClick={() => setIsShopOpen(false)} className="px-4 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/20 rounded-xl transition-colors flex justify-between items-center group">
                BK Cosmetics <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
              </Link>
              <Link href="/coming-soon" onClick={() => setIsShopOpen(false)} className="px-4 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/20 rounded-xl transition-colors flex justify-between items-center group border-t border-white/10">
                ME5 Magic Eyes <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
              </Link>
              <Link href="/coming-soon" onClick={() => setIsShopOpen(false)} className="px-4 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/20 rounded-xl transition-colors flex justify-between items-center group border-t border-white/10">
                Angela Glamor (AG) <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="lg:hidden relative z-50 flex items-center justify-center text-[#111111] drop-shadow-md p-1" onClick={() => setIsMobileOpen(true)}>
            <span className="material-symbols-outlined text-[28px] font-medium">menu</span>
          </button>

        </div>
      </header>

      {/* MOBILE DROPDOWN FULLSCREEN MENU */}
      <div className={`fixed inset-0 bg-[#FDFDFD]/95 backdrop-blur-2xl z-[70] flex flex-col transition-transform duration-500 ease-in-out lg:hidden overflow-y-auto ${isMobileOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        <div className="w-full flex justify-between items-center px-8 h-[80px] shrink-0 pt-6">
          <span className="font-serif text-xl font-bold tracking-widest text-[#111111]">MENU</span>
          <button onClick={() => setIsMobileOpen(false)} className="flex items-center gap-1 text-[#111111]">
            <span className="text-xs font-bold uppercase tracking-widest">Back</span>
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        
        <div className="flex flex-col items-center justify-center flex-grow gap-6 py-10">
          <Link onClick={() => setIsMobileOpen(false)} className={`font-serif text-[2rem] md:text-5xl transition-colors ${isActive('/') ? 'text-[#C8A97E]' : 'text-[#111111]'}`} href="/">Home</Link>
          <Link onClick={() => setIsMobileOpen(false)} className={`font-serif text-[2rem] md:text-5xl transition-colors ${isActive('/about') ? 'text-[#C8A97E]' : 'text-[#111111]'}`} href="/about">About</Link>
          <Link onClick={() => setIsMobileOpen(false)} className={`font-serif text-[2rem] md:text-5xl transition-colors ${isActive('/brands') ? 'text-[#C8A97E]' : 'text-[#111111]'}`} href="/brands">Brands</Link>
          <Link onClick={() => setIsMobileOpen(false)} className={`font-serif text-[2rem] md:text-5xl transition-colors ${isActive('/contact') ? 'text-[#C8A97E]' : 'text-[#111111]'}`} href="/contact">Contact</Link>
        </div>
        
        <div className="w-full px-8 flex flex-col gap-3 items-center pb-12 shrink-0">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#C8A97E] mb-3 w-full text-center">Visit Our Stores</span>
          <Link href="/coming-soon" onClick={() => setIsMobileOpen(false)} className="w-full max-w-sm text-center flex justify-center bg-[#111111] text-white text-[11px] font-bold uppercase tracking-widest py-4 hover:bg-black/80 transition-colors">Shop BK Cosmetics</Link>
          <Link href="/coming-soon" onClick={() => setIsMobileOpen(false)} className="w-full max-w-sm text-center flex justify-center bg-[#111111] text-white text-[11px] font-bold uppercase tracking-widest py-4 hover:bg-black/80 transition-colors">Shop ME5 Magic Eyes</Link>
          <Link href="/coming-soon" onClick={() => setIsMobileOpen(false)} className="w-full max-w-sm text-center flex justify-center bg-[#111111] text-white text-[11px] font-bold uppercase tracking-widest py-4 hover:bg-black/80 transition-colors">Shop Angela Glamor (AG)</Link>
        </div>
      </div>
    </>
  );
}