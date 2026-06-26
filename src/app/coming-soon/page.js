"use client";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function ComingSoonPage() {
  return (
    <main className="flex-grow pt-32 md:pt-40 pb-16 md:pb-24 bg-surface min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
      <ScrollReveal>
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-gold mb-6 block">Online Boutiques</span>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] text-primary mb-6">
          Coming Soon.
        </h1>
        <p className="text-base md:text-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed mb-10">
          We are meticulously crafting our exclusive online stores for BK Cosmetics, ME5 Magic Eyes, and Angela Glamor. Our digital boutiques will be opening their doors very soon.
        </p>
        <div className="flex justify-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest px-10 py-4 bg-primary text-white hover:bg-muted-gold transition-colors rounded-sm"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            Return to Home
          </Link>
        </div>
      </ScrollReveal>
    </main>
  );
}