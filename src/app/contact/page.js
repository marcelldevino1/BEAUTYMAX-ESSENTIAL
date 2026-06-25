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
                <a className="text-base md:text-lg text-primary hover:text-muted-gold transition-colors flex items-center gap-4 group" href="https://www.instagram.com/bkcosmetics.idn/" target="_blank" rel="noopener noreferrer">
                  <span className="w-10 h-10 rounded-sm bg-surface-container-low border border-outline-variant/40 flex items-center justify-center group-hover:border-muted-gold transition-colors">
                    <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                  </span>
                  Instagram (@bkcosmetics.idn)
                </a>
                <a className="text-base md:text-lg text-primary hover:text-muted-gold transition-colors flex items-center gap-4 group" href="https://www.tiktok.com/@bkcosmetics.idn" target="_blank" rel="noopener noreferrer">
                  <span className="w-10 h-10 rounded-sm bg-surface-container-low border border-outline-variant/40 flex items-center justify-center group-hover:border-muted-gold transition-colors">
                    <span className="material-symbols-outlined text-[18px]">play_circle</span>
                  </span>
                  TikTok (@bkcosmetics.idn)
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