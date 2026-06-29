"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ loading: false, success: false, error: "Please fill out all fields." });
      return;
    }

    setStatus({ loading: true, success: false, error: null });

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send your inquiry. Please try again later.");
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  // Glassmorphism styling disesuaikan warnanya menggunakan #766350
  const glassInfoStyle = "bg-[#766350]/60 backdrop-blur-md border-[2px] border-white/70 text-white shadow-[0_8px_16px_rgba(0,0,0,0.15)]";

  return (
    <main className="flex-grow pt-32 md:pt-40 pb-16 md:pb-24 bg-[linear-gradient(to_bottom,#EBD9DF_0%,#F2DECD_40%,#EBA8B2_100%)] min-h-screen relative overflow-hidden">
      
      {/* Background Floral Blurs */}
      <img src="/images/blur-floral-left.webp" alt="bg" className="absolute top-[20%] left-[-10%] w-64 md:w-[500px] opacity-40 pointer-events-none mix-blend-multiply" />
      <img src="/images/floral-right.webp" alt="bg" className="absolute bottom-[-5%] right-[-5%] w-64 md:w-[600px] opacity-50 pointer-events-none mix-blend-multiply" />

      <section className="px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center relative z-10">
        
        {/* ========================================== */}
        {/* SISI KIRI: TEKS & KONTAK INFO */}
        {/* ========================================== */}
        <div className="md:col-span-5 flex flex-col gap-10 md:gap-12 pb-12 md:pb-0">
          
          <ScrollReveal>
            <div className="flex flex-col items-start gap-4 max-w-lg">
              <h1 className="font-serif text-5xl md:text-6xl font-bold leading-[1.1] text-[#766350] drop-shadow-sm">
                Reach Out to<br/>Excellence.
              </h1>
              <p className="text-base md:text-lg text-[#766350] mt-2 leading-relaxed opacity-90">
                Whether you wish to discuss global OEM/ODM manufacturing partnerships, have questions about our proprietary brands, or require personalized assistance, our dedicated team is at your service.
              </p>
            </div>
          </ScrollReveal>

          {/* REVISI 1: Email diubah ke center@jk.beautymaxid.com */}
          <ScrollReveal delay={100}>
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-serif font-bold text-[#766350]">Direct Correspondence</h3>
              <a href="mailto:center@jk.beautymaxid.com" className={`inline-block w-max rounded-full px-6 py-2.5 text-lg md:text-xl font-bold hover:scale-105 transition-all duration-300 ${glassInfoStyle}`}>
                center@jk.beautymaxid.com
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-serif font-bold text-[#766350]">Digital Presence</h3>
              <div className="flex flex-col gap-4">
                
                {/* Instagram */}
                <a className="flex items-center gap-4 group w-max" href="https://www.instagram.com/bkcosmetics.idn/" target="_blank" rel="noopener noreferrer">
                  <span className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300 ${glassInfoStyle}`}>
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </span>
                  <span className="text-lg text-[#766350] font-medium opacity-90 group-hover:opacity-100 transition-opacity">@bkcosmetics.idn</span>
                </a>

                {/* TikTok */}
                <a className="flex items-center gap-4 group w-max" href="https://www.tiktok.com/@bkcosmetics.idn" target="_blank" rel="noopener noreferrer">
                  <span className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300 ${glassInfoStyle}`}>
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </span>
                  <span className="text-lg text-[#766350] font-medium opacity-90 group-hover:opacity-100 transition-opacity">@bkcosmetics.idn</span>
                </a>

                {/* REVISI 2: LinkedIn ditambahkan (@bkcosmetics.idn) */}
                <a className="flex items-center gap-4 group w-max" href="https://www.linkedin.com/company/pt-beautymax-essential-indonesia/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                  <span className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300 ${glassInfoStyle}`}>
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </span>
                  <span className="text-lg text-[#766350] font-medium opacity-90 group-hover:opacity-100 transition-opacity">LinkedIn (@bkcosmetics.idn)</span>
                </a>

              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* ========================================== */}
        {/* SISI KANAN: FORMULIR DENGAN BACKGROUND TEXTURE */}
        {/* ========================================== */}
        <div className="md:col-span-7">
          <ScrollReveal delay={300}>
            <div className="relative rounded-[3rem] shadow-2xl overflow-hidden bg-white/50 border-[6px] border-white/60">
              
              <img 
                src="/images/form-texture.webp" 
                alt="Canvas Texture" 
                className="absolute inset-0 w-full h-full object-cover object-center scale-110 opacity-90 mix-blend-multiply z-0 pointer-events-none"
              />

              <div className="relative z-10 p-10 md:p-14">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#766350] mb-12 text-center drop-shadow-sm">Send an Inquiry</h2>
                
                {status.success && (
                  <div className="mb-8 p-4 bg-green-50/90 rounded-xl border-l-4 border-green-500 text-green-800 text-sm font-medium backdrop-blur-sm">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                {status.error && (
                  <div className="mb-8 p-4 bg-red-50/90 rounded-xl border-l-4 border-red-500 text-red-800 text-sm font-medium backdrop-blur-sm">
                    {status.error}
                  </div>
                )}

                {/* REVISI 3: Warna input dan garis diseragamkan ke #766350 */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative group">
                      <label className="text-[13px] md:text-sm font-bold text-[#766350] block mb-2" htmlFor="name">Full Name</label>
                      <input 
                        className="w-full bg-transparent border-0 border-b-[1.5px] border-[#766350]/40 focus:border-[#766350] focus:ring-0 px-0 py-2 text-[#766350] font-medium transition-colors placeholder:text-transparent outline-none" 
                        id="name" name="name" type="text"
                        value={formData.name} onChange={handleChange} disabled={status.loading}
                      />
                    </div>
                    <div className="relative group">
                      <label className="text-[13px] md:text-sm font-bold text-[#766350] block mb-2" htmlFor="email">Email Address</label>
                      <input 
                        className="w-full bg-transparent border-0 border-b-[1.5px] border-[#766350]/40 focus:border-[#766350] focus:ring-0 px-0 py-2 text-[#766350] font-medium transition-colors placeholder:text-transparent outline-none" 
                        id="email" name="email" type="email"
                        value={formData.email} onChange={handleChange} disabled={status.loading}
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="text-[13px] md:text-sm font-bold text-[#766350] block mb-2" htmlFor="subject">Inquiry Subject</label>
                    <input 
                      className="w-full bg-transparent border-0 border-b-[1.5px] border-[#766350]/40 focus:border-[#766350] focus:ring-0 px-0 py-2 text-[#766350] font-medium transition-colors outline-none" 
                      id="subject" name="subject" type="text" 
                      value={formData.subject} onChange={handleChange} disabled={status.loading}
                    />
                  </div>

                  <div className="relative group mb-4">
                    <label className="text-[13px] md:text-sm font-bold text-[#766350] block mb-2" htmlFor="message">Your Message</label>
                    <textarea 
                      className="w-full bg-transparent border-0 border-b-[1.5px] border-[#766350]/40 focus:border-[#766350] focus:ring-0 px-0 py-2 text-[#766350] font-medium transition-colors resize-none outline-none" 
                      id="message" name="message" rows="2"
                      value={formData.message} onChange={handleChange} disabled={status.loading}
                    ></textarea>
                  </div>

                  <div className="flex justify-center pt-2">
                    <button 
                      className={`text-base font-bold px-12 py-4 transition-all duration-300 rounded-[1rem] shadow-xl hover:scale-105 ${status.loading ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-[#766350] border border-[#766350] text-white hover:bg-[#766350]/80'}`}
                      type="submit"
                      disabled={status.loading}
                    >
                      {status.loading ? "Sending..." : "Send an Inquiry"}
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </ScrollReveal>
        </div>

      </section>
    </main>
  );
}