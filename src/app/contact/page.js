"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  // State untuk penampung data formulir
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  // State untuk status pengiriman data backend
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validasi dasar
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
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      } else {
        throw new Error("Failed to send your inquiry. Please try again later.");
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  return (
    <main className="flex-grow pt-32 md:pt-40 pb-16 md:pb-24 bg-surface">
      <ScrollReveal>
        <section className="px-6 md:px-16 max-w-7xl mx-auto mb-16 md:mb-24">
          <div className="flex flex-col items-start gap-4 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-gold">Inquiries & Support</span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] text-primary">
              Reach Out to<br/>Excellence.
            </h1>
            <p className="text-base md:text-lg text-on-surface-variant mt-4 max-w-xl leading-relaxed">
              Whether you wish to discuss global OEM/ODM manufacturing partnerships, have questions about our proprietary brands, or require personalized assistance, our dedicated team is at your service.
            </p>
          </div>
        </section>
      </ScrollReveal>

      <section className="px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
        
        {/* Sisi Kiri: Kontak Informasi */}
        <div className="md:col-span-5 flex flex-col gap-12 border-b border-outline-variant/50 md:border-b-0 pb-12 md:pb-0">
          <ScrollReveal>
            <div className="flex flex-col gap-4 group cursor-pointer">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant">Direct Correspondence</h3>
              <a className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary hover:text-muted-gold transition-colors break-all" href="mailto:help@jk.beautymaxid.com">
                help@jk.beautymaxid.com
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex flex-col gap-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant">Digital Presence</h3>
              <div className="flex flex-col gap-4">
                
                {/* Instagram */}
                <a className="text-base md:text-lg text-primary hover:text-muted-gold transition-colors flex items-center gap-4 group" href="https://www.instagram.com/bkcosmetics.idn/" target="_blank" rel="noopener noreferrer">
                  <span className="w-10 h-10 rounded-sm bg-surface-container-low border border-outline-variant/40 flex items-center justify-center group-hover:border-muted-gold transition-colors">
                    <svg className="w-5 h-5 text-primary group-hover:text-muted-gold transition-colors fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </span>
                  Instagram (@bkcosmetics.idn)
                </a>
                
                {/* TikTok */}
                <a className="text-base md:text-lg text-primary hover:text-muted-gold transition-colors flex items-center gap-4 group" href="https://www.tiktok.com/@bkcosmetics.idn" target="_blank" rel="noopener noreferrer">
                  <span className="w-10 h-10 rounded-sm bg-surface-container-low border border-outline-variant/40 flex items-center justify-center group-hover:border-muted-gold transition-colors">
                    <svg className="w-5 h-5 text-primary group-hover:text-muted-gold transition-colors fill-current" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </span>
                  TikTok (@bkcosmetics.idn)
                </a>

                {/* LinkedIn */}
                <a className="text-base md:text-lg text-primary hover:text-muted-gold transition-colors flex items-center gap-4 group" href="https://www.linkedin.com/company/pt-beautymax-essential-indonesia/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                  <span className="w-10 h-10 rounded-sm bg-surface-container-low border border-outline-variant/40 flex items-center justify-center group-hover:border-muted-gold transition-colors">
                    <svg className="w-5 h-5 text-primary group-hover:text-muted-gold transition-colors fill-current" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </span>
                  LinkedIn
                </a>

              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Sisi Kanan: Formulir Fungsional (Flat Editorial Design) */}
        <div className="md:col-span-7">
          <ScrollReveal delay={300}>
            <div className="bg-surface-container-lowest p-0 md:p-12 md:rounded-sm md:border border-outline-variant/40">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-10">Send an Inquiry</h2>
              
              {/* Notifikasi Sukses / Gagal */}
              {status.success && (
                <div className="mb-8 p-4 bg-green-50 border-l-2 border-green-500 text-green-800 text-sm">
                  Thank you! Your message has been sent successfully. We will get back to you shortly.
                </div>
              )}
              {status.error && (
                <div className="mb-8 p-4 bg-red-50 border-l-2 border-red-500 text-red-800 text-sm">
                  {status.error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10">
                  <div className="relative group">
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-on-surface-variant block mb-2 group-focus-within:text-muted-gold transition-colors" htmlFor="name">Full Name</label>
                    <input 
                      className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-muted-gold focus:ring-0 px-0 py-2 text-primary transition-colors placeholder:text-outline-variant outline-none" 
                      id="name" name="name" type="text" placeholder="e.g. Jane Doe" 
                      value={formData.name} onChange={handleChange} disabled={status.loading}
                    />
                  </div>
                  <div className="relative group">
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-on-surface-variant block mb-2 group-focus-within:text-muted-gold transition-colors" htmlFor="email">Email Address</label>
                    <input 
                      className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-muted-gold focus:ring-0 px-0 py-2 text-primary transition-colors placeholder:text-outline-variant outline-none" 
                      id="email" name="email" type="email" placeholder="e.g. jane@company.com" 
                      value={formData.email} onChange={handleChange} disabled={status.loading}
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="text-[10px] font-semibold uppercase tracking-widest text-on-surface-variant block mb-2 group-focus-within:text-muted-gold transition-colors" htmlFor="subject">Inquiry Subject</label>
                  <select 
                    className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-muted-gold focus:ring-0 px-0 py-2 text-primary transition-colors appearance-none cursor-pointer outline-none" 
                    id="subject" name="subject" value={formData.subject} onChange={handleChange} disabled={status.loading}
                  >
                    <option value="" disabled>Select a topic...</option>
                    <option value="OEM/ODM Manufacturing">OEM/ODM Manufacturing</option>
                    <option value="Global Retail Partnerships">Global Retail Partnerships</option>
                    <option value="Product Distribution">Product Distribution</option>
                    <option value="General Support">General Support</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-0 bottom-3 text-on-surface-variant pointer-events-none">expand_more</span>
                </div>

                <div className="relative group">
                  <label className="text-[10px] font-semibold uppercase tracking-widest text-on-surface-variant block mb-2 group-focus-within:text-muted-gold transition-colors" htmlFor="message">Your Message</label>
                  <textarea 
                    className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-muted-gold focus:ring-0 px-0 py-2 text-primary transition-colors placeholder:text-outline-variant resize-none outline-none" 
                    id="message" name="message" placeholder="Please provide details about your inquiry..." rows="4"
                    value={formData.message} onChange={handleChange} disabled={status.loading}
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    className={`text-xs font-semibold uppercase tracking-widest px-10 py-4 w-full md:w-auto transition-all duration-300 flex justify-center items-center gap-3 rounded-sm border ${status.loading ? 'bg-surface-container-high border-outline-variant text-on-surface-variant cursor-not-allowed' : 'bg-primary border-primary text-white hover:bg-muted-gold hover:border-muted-gold'}`}
                    type="submit"
                    disabled={status.loading}
                  >
                    {status.loading ? "Sending..." : "Submit Inquiry"}
                    {!status.loading && <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>}
                  </button>
                </div>
              </form>
            </div>
          </ScrollReveal>
        </div>

      </section>
    </main>
  );
}