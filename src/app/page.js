"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const heroSlides = [
    { 
      label: "Introduction", 
      title: "Beauty for Every Expression", 
      description: "Beautymax Essential is a dynamic beauty company built on one belief: beauty should be accessible, expressive, and empowering for everyone.", 
      buttonText: "Explore Collections", 
      image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=1000",
      link: "/brands" 
    },
    { 
      label: "New Generation", 
      title: "Be Kind. Be Kool. Be You.", 
      description: "BK brings together different beauty brands with one shared spirit. A space for every side of you to explore, play, and express.", 
      buttonText: "Discover BK", 
      image: "https://images.unsplash.com/photo-1512496015851-a1dc8a477d5d?auto=format&fit=crop&q=80&w=1000",
      link: "/brands#bk" 
    },
    { 
      label: "Eye Artistry", 
      title: "Your Eyes, Your Magic", 
      description: "High-performance products that enhance, define, and transform every gaze with precision-engineered eye artistry.", 
      buttonText: "Discover ME5", 
      image: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&q=80&w=1000",
      link: "/brands#me5"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => { setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1)); }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <main className="pt-24 pb-16 md:pb-24 flex-grow">
      {/* HERO SECTION */}
      <section className="w-full relative overflow-hidden pb-12 md:pb-24">
        <div className="absolute top-0 left-0 bottom-0 w-12 md:w-32 z-20 pointer-events-none bg-gradient-to-r from-surface to-transparent backdrop-blur-[3px]"></div>
        <div className="absolute top-0 right-0 bottom-0 w-12 md:w-32 z-20 pointer-events-none bg-gradient-to-l from-surface to-transparent backdrop-blur-[3px]"></div>

        <div className="flex transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {heroSlides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-12 items-center min-h-[80vh] md:min-h-[716px]">
              <div className="md:col-span-5 flex flex-col justify-center order-2 md:order-1 mt-8 md:mt-0 px-8 md:pl-16 lg:pl-24 xl:pl-32 md:pr-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-4 block">{slide.label}</span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-primary mb-6">{slide.title}</h1>
                <p className="text-lg leading-relaxed text-on-surface-variant mb-8 max-w-md">{slide.description}</p>
                <div>
                  <Link 
                    href={slide.link} 
                    className="inline-block border border-primary text-primary text-xs font-semibold uppercase tracking-widest px-8 py-4 hover:bg-muted-gold hover:border-muted-gold hover:text-white transition-colors duration-300 relative z-30"
                  >
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
              <div className="md:col-span-7 h-[400px] md:h-full w-full order-1 md:order-2 bg-surface-container-low relative overflow-hidden">
                <img alt={slide.title} className="absolute inset-0 w-full h-full object-cover object-center" src={slide.image} />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-6 md:bottom-24 left-1/2 transform -translate-x-1/2 flex gap-4 z-30">
          {heroSlides.map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)} className={`h-[2px] transition-all duration-500 ${currentSlide === index ? "w-12 bg-primary" : "w-6 bg-outline-variant"}`} aria-label={`Go to slide ${index + 1}`} />
          ))}
        </div>
      </section>

      {/* OUR MISSION */}
      <ScrollReveal>
        <section className="bg-surface-container-low py-16 md:py-24 px-6 md:px-16">
          <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
            <span className="inline-block px-4 py-1 rounded-full bg-soft-beige text-primary text-xs font-semibold uppercase tracking-widest mb-8">Our Purpose</span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium leading-tight text-primary max-w-3xl mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed text-on-surface-variant max-w-2xl">Empowering individuality through high-quality, meticulously crafted beauty solutions that celebrate the unique essence of every individual.</p>
          </div>
        </section>
      </ScrollReveal>

      {/* THE BRANDS */}
      <section className="py-16 md:py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex justify-between items-end mb-12 md:mb-16">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl font-medium leading-tight text-primary">The Brands</h2>
            </div>
            <div className="hidden md:block">
              <Link className="text-xs font-semibold uppercase tracking-widest text-primary hover:text-muted-gold transition-colors duration-300 flex items-center gap-2" href="/brands">
                View All Directory <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand 1: BK */}
            <div className="group cursor-pointer">
              <div className="w-full aspect-[3/4] bg-surface-container overflow-hidden mb-6">
                <img alt="BK Cosmetics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=1000" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-primary mb-2">BK Cosmetics</h3>
              <p className="text-base text-on-surface-variant mb-6">Precision engineered artistry.</p>
              <Link href="/brands#bk" className="inline-block border border-primary text-primary text-xs font-semibold uppercase tracking-widest px-6 py-2 hover:bg-muted-gold hover:border-muted-gold hover:text-white transition-all duration-300">Discover</Link>
            </div>
            
            {/* Brand 2: ME5 */}
            <div className="group cursor-pointer">
              <div className="w-full aspect-[3/4] bg-surface-container overflow-hidden mb-6">
                <img alt="ME5 Skincare" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=1000" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-primary mb-2">ME5</h3>
              <p className="text-base text-on-surface-variant mb-6">Advanced dermal vitality.</p>
              <Link href="/brands#me5" className="inline-block border border-primary text-primary text-xs font-semibold uppercase tracking-widest px-6 py-2 hover:bg-muted-gold hover:border-muted-gold hover:text-white transition-all duration-300">Discover</Link>
            </div>
            
            {/* Brand 3: AG */}
            <div className="group cursor-pointer">
              <div className="w-full aspect-[3/4] bg-surface-container overflow-hidden mb-6">
                <img alt="AG Fragrance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-primary mb-2">AG</h3>
              <p className="text-base text-on-surface-variant mb-6">Heritage botanical fragrances.</p>
              <Link href="/brands#ag" className="inline-block border border-primary text-primary text-xs font-semibold uppercase tracking-widest px-6 py-2 hover:bg-muted-gold hover:border-muted-gold hover:text-white transition-all duration-300">Discover</Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CORPORATE PHILOSOPHY */}
      <section className="py-16 md:py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* 👇 BAGIAN INI YANG DIPERBAIKI 👇 */}
          <div className="md:col-span-6 h-[400px] md:h-[819px]">
            <ScrollReveal className="w-full h-full">
              <img alt="Architecture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" />
            </ScrollReveal>
          </div>
          {/* 👆 ======================= 👆 */}

          <div className="md:col-span-5 md:col-start-8 flex flex-col justify-center">
            <ScrollReveal delay={150}>
              <h2 className="font-serif text-3xl md:text-5xl font-medium leading-tight text-primary mb-6">Corporate Philosophy</h2>
              <p className="text-lg leading-relaxed text-on-surface-variant mb-6">At the core of Beautymax Essential lies a relentless drive for innovation paired with an unwavering commitment to quality. We do not just follow trends; we engineer the future of beauty.</p>
              <p className="text-base leading-relaxed text-on-surface-variant mb-8">Our laboratories and creative studios work in strict unison to ensure that every product passing through our global supply chain meets a standard of quiet luxury—substantive, effective, and ethically sound.</p>
              <div className="border-t border-outline-variant pt-8">
                <Link className="text-xs font-semibold uppercase tracking-widest text-primary hover:text-muted-gold flex items-center gap-2" href="/about">
                  Read Our Full Philosophy <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}