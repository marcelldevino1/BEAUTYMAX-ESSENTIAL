"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Efek untuk mendeteksi scroll agar Navbar bisa menyesuaikan (opsional)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ==========================================
  // STYLE NAVBAR BUTTON: bg-black/45 sesuai request kamu
  // ==========================================
  const navButtonStyle = "bg-black/45 backdrop-blur-md border-[2px] border-white text-white text-xs lg:text-sm font-bold uppercase tracking-widest px-5 py-2 lg:px-6 lg:py-2.5 rounded-full shadow-lg hover:bg-black/60 hover:scale-105 transition-all duration-300";
  
  // Style khusus untuk menu yang sedang aktif
  const activeNavButtonStyle = "bg-white/90 backdrop-blur-md border-[2px] border-white text-[#766350] text-xs lg:text-sm font-bold uppercase tracking-widest px-5 py-2 lg:px-6 lg:py-2.5 rounded-full shadow-lg transition-all duration-300";

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? "pt-4 md:pt-6" : "pt-6 md:pt-10"}`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* KIRI: Logo Text */}
        <div className="flex-shrink-0 z-50">
          <Link href="/" className={navButtonStyle}>
            BEAUTYMAX ESSENTIAL
          </Link>
        </div>

        {/* TENGAH: Menu Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-5 absolute left-1/2 -translate-x-1/2">
          <Link href="/" className={pathname === "/" ? activeNavButtonStyle : navButtonStyle}>
            Home
          </Link>
          <Link href="/about" className={pathname === "/about" ? activeNavButtonStyle : navButtonStyle}>
            About Us
          </Link>
          <Link href="/brands" className={pathname === "/brands" ? activeNavButtonStyle : navButtonStyle}>
            Brand
          </Link>
          <Link href="/contact" className={pathname === "/contact" ? activeNavButtonStyle : navButtonStyle}>
            Contact
          </Link>
        </div>

        {/* KANAN: Shop Now (Desktop) */}
        <div className="hidden lg:flex flex-shrink-0">
          <Link href="#" className={`${navButtonStyle} flex items-center gap-2`}>
            Shop Now
            <span className="material-symbols-outlined text-[18px]">expand_more</span>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="lg:hidden z-50">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={navButtonStyle}
          >
            <span className="material-symbols-outlined text-[20px]">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
        
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div className={`lg:hidden fixed inset-0 bg-black/80 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-6 transition-all duration-500 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <Link onClick={() => setIsMobileMenuOpen(false)} href="/" className={pathname === "/" ? activeNavButtonStyle : navButtonStyle}>
          Home
        </Link>
        <Link onClick={() => setIsMobileMenuOpen(false)} href="/about" className={pathname === "/about" ? activeNavButtonStyle : navButtonStyle}>
          About Us
        </Link>
        <Link onClick={() => setIsMobileMenuOpen(false)} href="/brands" className={pathname === "/brands" ? activeNavButtonStyle : navButtonStyle}>
          Brand
        </Link>
        <Link onClick={() => setIsMobileMenuOpen(false)} href="/contact" className={pathname === "/contact" ? activeNavButtonStyle : navButtonStyle}>
          Contact
        </Link>
        <Link onClick={() => setIsMobileMenuOpen(false)} href="#" className={`${navButtonStyle} flex items-center gap-2 mt-4`}>
          Shop Now <span className="material-symbols-outlined text-[18px]">open_in_new</span>
        </Link>
      </div>
    </nav>
  );
}