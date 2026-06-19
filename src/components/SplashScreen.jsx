"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Memunculkan loading screen setiap kali pindah halaman
    setIsLoading(true);
    setIsFading(false);

    // Animasi fade out dimulai setelah 1 detik
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1000);

    // Menghilangkan komponen sepenuhnya setelah 1.5 detik
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[999] bg-surface flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Nama Brand yang berdenyut pelan */}
        <h1 className="font-serif text-2xl md:text-3xl tracking-widest text-primary uppercase animate-pulse">
          Beautymax Essential
        </h1>
        {/* Garis Emas yang bergerak */}
        <div className="w-48 h-[1px] bg-outline-variant relative overflow-hidden">
          <div className="absolute inset-0 bg-muted-gold animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
}