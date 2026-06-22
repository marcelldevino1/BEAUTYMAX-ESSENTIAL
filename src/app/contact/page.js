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
    <main className="flex-grow pt-[120px] md:pt-[160px] pb-16 md:pb-24">
      <ScrollReveal>
        <section className="px-6 md:px-16 max-w-7xl mx-auto mb-16 md:mb-24">
          <div className="flex flex-col items-start gap-4 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-gold">Inquiries & Support</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">Reach Out to Excellence.</h1>
            <p className="text-lg text-on-surface-variant mt-4 max-w-xl">Whether you have questions about our formulations, wish to discuss global partnerships, or require personalized assistance, our dedicated team is at your service.</p>
          </div>
        </section>
      </ScrollReveal>

      <section className="px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        {/* Sisi Kiri: Kontak Informasi (Hanya Email & Sosmed Sesuai Brief) */}
        <div className="md:col-span-5 flex flex-col gap-12 border-b border-outline-variant md:border-b-0 pb-12 md:pb-0">
          <ScrollReveal>
            <div className="flex flex-col gap-2 group cursor-pointer">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant">Direct Correspondence</h3>
              <a className="font-serif text-2xl md:text-3xl text-primary hover:text-muted-gold transition-colors break-all" href="mailto:help@jk.beautymaxid.com">help@jk.beautymaxid.com</a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant">Digital Presence</h3>
              <div className="flex flex-col gap-2">
                <a className="text-lg text-primary hover:text-muted-gold transition-colors flex items-center gap-3" href="https://www.instagram.com/bkcosmetics.idn/" target="_blank" rel="noopener noreferrer">
                  <span className="w-8 h-8 rounded-full bg-soft-beige/30 flex items-center justify-center"><span className="material-symbols-outlined text-[16px]">photo_camera</span></span>
                  Instagram (@bkcosmetics.idn)
                </a>
                <a className="text-lg text-primary hover:text-muted-gold transition-colors flex items-center gap-3" href="https://www.tiktok.com/@bkcosmetics.idn" target="_blank" rel="noopener noreferrer">
                  <span className="w-8 h-8 rounded-full bg-soft-beige/30 flex items-center justify-center"><span className="material-symbols-outlined text-[16px]">play_circle</span></span>
                  TikTok (@bkcosmetics.idn)
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Sisi Kanan: Formulir Fungsional */}
        <div className="md:col-span-7">
          <ScrollReveal delay={300}>
            <div className="bg-surface-container-lowest p-0 md:p-8 md:rounded-DEFAULT shadow-sm border border-outline-variant/20">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-8">Send an Inquiry</h2>
              
              {/* Notifikasi Sukses / Gagal */}
              {status.success && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 text-sm rounded">
                  Thank you! Your message has been sent successfully. We will get back to you shortly.
                </div>
              )}
              {status.error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 text-sm rounded">
                  {status.error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <label className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant block mb-2 group-focus-within:text-primary" htmlFor="name">Full Name</label>
                    <input 
                      className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 text-primary transition-colors placeholder:text-surface-tint outline-none" 
                      id="name" name="name" type="text" placeholder="Jane Doe" 
                      value={formData.name} onChange={handleChange} disabled={status.loading}
                    />
                  </div>
                  <div className="relative group">
                    <label className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant block mb-2 group-focus-within:text-primary" htmlFor="email">Email Address</label>
                    <input 
                      className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 text-primary transition-colors placeholder:text-surface-tint outline-none" 
                      id="email" name="email" type="email" placeholder="jane@example.com" 
                      value={formData.email} onChange={handleChange} disabled={status.loading}
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant block mb-2 group-focus-within:text-primary" htmlFor="subject">Inquiry Subject</label>
                  <select 
                    className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 text-primary transition-colors appearance-none cursor-pointer outline-none" 
                    id="subject" name="subject" value={formData.subject} onChange={handleChange} disabled={status.loading}
                  >
                    <option value="" disabled>Select a topic...</option>
                    <option value="Customer Support">Customer Support</option>
                    <option value="Global Partnerships">Global Partnerships</option>
                    <option value="Press & Media">Press & Media</option>
                    <option value="Other Inquiries">Other Inquiries</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-0 bottom-3 text-on-surface-variant pointer-events-none">expand_more</span>
                </div>

                <div className="relative group">
                  <label className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant block mb-2 group-focus-within:text-primary" htmlFor="message">Your Message</label>
                  <textarea 
                    className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 text-primary transition-colors placeholder:text-surface-tint resize-none outline-none" 
                    id="message" name="message" placeholder="How can we assist you today?" rows="4"
                    value={formData.message} onChange={handleChange} disabled={status.loading}
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    className={`text-xs font-semibold uppercase tracking-widest px-10 py-4 w-full md:w-auto transition-colors flex justify-center items-center gap-2 rounded-DEFAULT border ${status.loading ? 'bg-gray-200 border-gray-200 text-gray-500 cursor-not-allowed' : 'bg-primary border-primary text-white hover:bg-muted-gold hover:border-muted-gold'}`}
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