"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsShopOpen(false);
  }, [pathname]);

  const isActive = (path) => pathname === path;

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b ${isScrolled ? "bg-surface/90 border-outline-variant shadow-sm" : "bg-surface/80 border-transparent"}`}>
        <div className="flex justify-between items-center px-6 md:px-16 py-2 max-w-7xl mx-auto h-[72px]">
          <Link className="font-serif text-xl md:text-2xl font-medium tracking-tighter text-primary hover:opacity-70 transition-opacity relative z-[50]" href="/">BEAUTYMAX ESSENTIAL</Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link className={`text-xs font-semibold uppercase tracking-widest hover:text-primary transition-all ${isActive('/') ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant'}`} href="/">Home</Link>
            <Link className={`text-xs font-semibold uppercase tracking-widest hover:text-primary transition-all ${isActive('/about') ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant'}`} href="/about">About</Link>
            <Link className={`text-xs font-semibold uppercase tracking-widest hover:text-primary transition-all ${isActive('/brands') ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant'}`} href="/brands">Brands</Link>
            <Link className={`text-xs font-semibold uppercase tracking-widest hover:text-primary transition-all ${isActive('/contact') ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant'}`} href="/contact">Contact</Link>
          </nav>

          <div className="hidden md:block relative">
            <button 
              onClick={() => setIsShopOpen(!isShopOpen)}
              onBlur={() => setTimeout(() => setIsShopOpen(false), 200)}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary border border-primary px-6 py-2 hover:bg-muted-gold hover:border-muted-gold hover:text-white transition-all duration-300"
            >
              Shop Now
              <span className="material-symbols-outlined text-[16px] transition-transform duration-300" style={{ transform: isShopOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
            </button>
            <div className={`absolute top-full right-0 mt-3 w-56 bg-surface border border-outline-variant/30 shadow-lg transform transition-all duration-300 origin-top-right flex flex-col ${isShopOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
              <div className="p-4 border-b border-outline-variant/20 bg-surface-container-low">
                <span className="text-[10px] text-muted-gold font-semibold uppercase tracking-widest">Select Destination</span>
              </div>
              <a href="https://bkcosmetics.idn" target="_blank" rel="noopener noreferrer" className="px-5 py-4 text-xs font-semibold uppercase tracking-widest text-primary hover:bg-surface-container-high hover:text-muted-gold transition-colors flex justify-between items-center group">
                BK Cosmetics <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
              </a>
              <a href="https://me5.idn" target="_blank" rel="noopener noreferrer" className="px-5 py-4 text-xs font-semibold uppercase tracking-widest text-primary hover:bg-surface-container-high hover:text-muted-gold transition-colors flex justify-between items-center group border-t border-outline-variant/10">
                ME5 Skincare <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
              </a>
              <a href="https://ag.idn" target="_blank" rel="noopener noreferrer" className="px-5 py-4 text-xs font-semibold uppercase tracking-widest text-primary hover:bg-surface-container-high hover:text-muted-gold transition-colors flex justify-between items-center group border-t border-outline-variant/10">
                AG Fragrance <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
              </a>
            </div>
          </div>

          <button className="md:hidden text-primary p-2 relative z-50" onClick={() => setIsMobileOpen(true)}>
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 bg-surface z-[70] flex flex-col transition-transform duration-500 ease-in-out md:hidden overflow-y-auto ${isMobileOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="w-full flex justify-between items-center px-6 h-[72px] shrink-0 border-b border-outline-variant/20">
          <span className="font-serif text-xl font-medium tracking-tighter text-primary">MENU</span>
          <button onClick={() => setIsMobileOpen(false)} className="flex items-center gap-2 text-primary hover:text-muted-gold transition-colors p-2">
            <span className="text-xs font-semibold uppercase tracking-widest">Back</span>
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center flex-grow gap-8 py-8">
          <Link onClick={() => setIsMobileOpen(false)} className={`font-serif text-3xl ${isActive('/') ? 'text-muted-gold' : 'text-primary'}`} href="/">Home</Link>
          <Link onClick={() => setIsMobileOpen(false)} className={`font-serif text-3xl ${isActive('/about') ? 'text-muted-gold' : 'text-primary'}`} href="/about">About</Link>
          <Link onClick={() => setIsMobileOpen(false)} className={`font-serif text-3xl ${isActive('/brands') ? 'text-muted-gold' : 'text-primary'}`} href="/brands">Brands</Link>
          <Link onClick={() => setIsMobileOpen(false)} className={`font-serif text-3xl ${isActive('/contact') ? 'text-muted-gold' : 'text-primary'}`} href="/contact">Contact</Link>
        </div>
        <div className="w-full px-12 flex flex-col gap-4 items-center pb-12 shrink-0">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-gold mb-2 border-b border-muted-gold pb-1">Visit Our Stores</span>
          <a href="https://bkcosmetics.idn" target="_blank" rel="noopener noreferrer" className="w-full max-w-xs text-center text-xs font-semibold uppercase tracking-widest text-on-primary bg-primary px-8 py-4 hover:bg-muted-gold transition-colors">Shop BK Cosmetics</a>
          <a href="https://me5.idn" target="_blank" rel="noopener noreferrer" className="w-full max-w-xs text-center text-xs font-semibold uppercase tracking-widest text-on-primary bg-primary px-8 py-4 hover:bg-muted-gold transition-colors">Shop ME5 Skincare</a>
          <a href="https://ag.idn" target="_blank" rel="noopener noreferrer" className="w-full max-w-xs text-center text-xs font-semibold uppercase tracking-widest text-on-primary bg-primary px-8 py-4 hover:bg-muted-gold transition-colors">Shop AG Fragrance</a>
        </div>
      </div>
    </>
  );
}