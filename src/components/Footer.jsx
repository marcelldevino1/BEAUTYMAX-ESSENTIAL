"use client";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <ScrollReveal>
      <footer className="bg-primary-container w-full py-16 md:py-24 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-16 max-w-7xl mx-auto text-white">
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <Link href="/" className="font-serif text-2xl md:text-3xl mb-4 block hover:text-muted-gold transition-colors">BEAUTYMAX ESSENTIAL</Link>
              <p className="text-sm text-on-surface-variant max-w-sm mt-4 leading-relaxed">Beauty for every expression. Empowering individuality through high-quality, meticulously crafted solutions.</p>
            </div>
            <p className="text-xs uppercase tracking-widest opacity-40 mt-12">© {new Date().getFullYear()} BEAUTYMAX ESSENTIAL.</p>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-gold mb-2">Explore</h4>
            <Link className="text-sm text-on-surface-variant hover:text-muted-gold transition-colors w-max" href="/">Home</Link>
            <Link className="text-sm text-on-surface-variant hover:text-muted-gold transition-colors w-max" href="/about">About Us</Link>
            <Link className="text-sm text-on-surface-variant hover:text-muted-gold transition-colors w-max" href="/brands">Our Brands</Link>
            <Link className="text-sm text-on-surface-variant hover:text-muted-gold transition-colors w-max" href="/contact">Contact</Link>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-gold mb-2">Connect</h4>
            <a className="text-sm text-on-surface-variant hover:text-muted-gold transition-colors w-max" href="https://instagram.com/bkcosmetics.idn" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a className="text-sm text-on-surface-variant hover:text-muted-gold transition-colors w-max" href="https://tiktok.com/@bkcosmetics.idn" target="_blank" rel="noopener noreferrer">TikTok</a>
            <a className="text-sm text-on-surface-variant hover:text-muted-gold transition-colors w-max" href="mailto:helpbeautymaxid@gmail.com">helpbeautymaxid@gmail.com</a>
          </div>
        </div>
      </footer>
    </ScrollReveal>
  );
}