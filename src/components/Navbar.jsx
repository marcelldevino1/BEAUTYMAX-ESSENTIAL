"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const pathname = usePathname();
  
  // Ref untuk mendeteksi klik di luar kotak Shop Dropdown
  const shopDropdownRef = useRef(null);

  // Efek untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efek untuk menutup dropdown HANYA saat user klik di luar kotak menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shopDropdownRef.current && !shopDropdownRef.current.contains(event.target)) {
        setIsShopOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Menutup menu saat berpindah halaman
  useEffect(() => {
    setIsMobileOpen(false);
    setIsShopOpen(false);
  }, [pathname]);

  const isActive = (path) => pathname === path;

  // ==========================================
  // STYLE BUTTON KHUSUS (Hitam transparan & Putih untuk yang aktif)
  // ==========================================
  const navButtonStyle = "bg-black/45 backdrop-blur-md border-[2px] border-white text-white text-xs lg:text-sm font-bold uppercase tracking-widest px-5 py-2 lg:px-6 lg:py-2.5 rounded-full shadow-lg hover:bg-black/60 hover:scale-105 transition-all duration-300";
  
  const activeNavButtonStyle = "bg-white/90 backdrop-blur-md border-[2px] border-white text-[#766350] text-xs lg:text-sm font-bold uppercase tracking-widest px-5 py-2 lg:px-6 lg:py-2.5 rounded-full shadow-lg transition-all duration-300";

  const iconButtonStyle = "bg-black/45 backdrop-blur-md border-[2px] border-white text-white p-2 rounded-full shadow-lg hover:bg-black/60 hover:scale-105 transition-all duration-300";

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "pt-4 md:pt-6" : "pt-6 md:pt-10"}`}>
        <div className="flex justify-between items-center px-6 md:px-12 max-w-[1600px] mx-auto">
          
          {/* KIRI: Logo Text Button */}
          <div className="flex-shrink-0 z-50">
            <Link className={navButtonStyle} href="/">
              BEAUTYMAX ESSENTIAL
            </Link>
          </div>
          
          {/* TENGAH: Menu Links (Sekarang berbentuk tombol persis seperti gambar preview) */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3 absolute left-1/2 -translate-x-1/2">
            <Link className={isActive('/') ? activeNavButtonStyle : navButtonStyle} href="/">
              Home
            </Link>
            <Link className={isActive('/about') ? activeNavButtonStyle : navButtonStyle} href="/about">
              About Us
            </Link>
            <Link className={isActive('/brands') ? activeNavButtonStyle : navButtonStyle} href="/brands">
              Brand
            </Link>
            <Link className={isActive('/contact') ? activeNavButtonStyle : navButtonStyle} href="/contact">
              Contact
            </Link>
          </nav>

          {/* KANAN: Shop Now + Dropdown */}
          <div className="hidden lg:block relative z-50" ref={shopDropdownRef}>
            <button 
              onClick={() => setIsShopOpen(!isShopOpen)}
              className={`inline-flex items-center gap-2 ${navButtonStyle}`}
            >
              Shop Now
              <span className="material-symbols-outlined text-[16px] transition-transform duration-300" style={{ transform: isShopOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
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
          <button className={`lg:hidden relative z-50 flex items-center justify-center ${iconButtonStyle}`} onClick={() => setIsMobileOpen(true)}>
            <span className="material-symbols-outlined text-[20px]">menu</span>
          </button>

        </div>
      </header>

      {/* MOBILE DROPDOWN FULLSCREEN MENU */}
      <div className={`fixed inset-0 bg-black/80 backdrop-blur-xl z-[70] flex flex-col transition-transform duration-500 ease-in-out lg:hidden overflow-y-auto ${isMobileOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="w-full flex justify-between items-center px-6 h-[72px] shrink-0 border-b border-white/20 pt-6">
          <span className="font-serif text-xl font-medium tracking-tighter text-white">MENU</span>
          <button onClick={() => setIsMobileOpen(false)} className={`flex items-center gap-2 ${navButtonStyle}`}>
            <span className="text-xs font-semibold uppercase tracking-widest">Back</span>
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>
        
        <div className="flex flex-col items-center justify-center flex-grow gap-8 py-8">
          <Link onClick={() => setIsMobileOpen(false)} className={isActive('/') ? activeNavButtonStyle : navButtonStyle} href="/">Home</Link>
          <Link onClick={() => setIsMobileOpen(false)} className={isActive('/about') ? activeNavButtonStyle : navButtonStyle} href="/about">About Us</Link>
          <Link onClick={() => setIsMobileOpen(false)} className={isActive('/brands') ? activeNavButtonStyle : navButtonStyle} href="/brands">Brands</Link>
          <Link onClick={() => setIsMobileOpen(false)} className={isActive('/contact') ? activeNavButtonStyle : navButtonStyle} href="/contact">Contact</Link>
        </div>
        
        <div className="w-full px-12 flex flex-col gap-4 items-center pb-12 shrink-0">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-2 border-b border-white/20 pb-1 w-full text-center">Visit Our Stores</span>
          <Link href="/coming-soon" onClick={() => setIsMobileOpen(false)} className={`w-full max-w-xs text-center flex justify-center ${navButtonStyle}`}>Shop BK Cosmetics</Link>
          <Link href="/coming-soon" onClick={() => setIsMobileOpen(false)} className={`w-full max-w-xs text-center flex justify-center ${navButtonStyle}`}>Shop ME5 Magic Eyes</Link>
          <Link href="/coming-soon" onClick={() => setIsMobileOpen(false)} className={`w-full max-w-xs text-center flex justify-center ${navButtonStyle}`}>Shop Angela Glamor (AG)</Link>
        </div>
      </div>
    </>
  );
}