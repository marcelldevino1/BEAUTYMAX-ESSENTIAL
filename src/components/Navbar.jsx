"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link'; // 👈 Import komponen Link dari Next.js

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Efek untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      // Jika scroll lebih dari 50px, ubah state
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-beautymax-light/95 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        {/* Logo -> Mengarah ke beranda (/) */}
        <Link 
          href="/" 
          className={`font-serif text-xl tracking-widest transition-colors duration-300 ${
            isScrolled ? 'text-beautymax-dark' : 'text-white'
          }`}
        >
          Beautymax Essential
        </Link>

        {/* Desktop Menu */}
        <div 
          className={`hidden md:flex gap-8 text-[10px] uppercase tracking-widest font-bold transition-colors duration-300 ${
            isScrolled ? 'text-beautymax-dark/70' : 'text-white/80'
          }`}
        >
          {/* Menu Home ditambahkan */}
          <Link href="/" className={`hover:text-beautymax-accent transition-colors ${isScrolled ? 'hover:text-beautymax-dark' : 'hover:text-white'}`}>
            Home
          </Link>
          
          {/* Mengubah #about menjadi /about */}
          <Link href="/about" className={`hover:text-beautymax-accent transition-colors ${isScrolled ? 'hover:text-beautymax-dark' : 'hover:text-white'}`}>
            About
          </Link>
          
          {/* Menggunakan /#brands agar bisa diakses dari halaman About dan langsung scroll saat di Home */}
          <Link href="/#brands" className={`hover:text-beautymax-accent transition-colors ${isScrolled ? 'hover:text-beautymax-dark' : 'hover:text-white'}`}>
            Brands
          </Link>
          
          {/* Sama seperti Brands, menggunakan /#footer */}
          <Link href="/#footer" className={`hover:text-beautymax-accent transition-colors ${isScrolled ? 'hover:text-beautymax-dark' : 'hover:text-white'}`}>
            Contact
          </Link>
        </div>

        {/* Mobile Menu Icon (Burger) */}
        <button 
          className={`md:hidden transition-colors duration-300 ${
            isScrolled ? 'text-beautymax-dark' : 'text-white'
          }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

      </div>
    </nav>
  );
}