"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal"; // 👈 Import komponen animasi

export default function ContactPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Efek untuk mendeteksi scroll pada Navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-surface text-primary antialiased min-h-screen flex flex-col">
      {/* TopNavBar */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b ${
          isScrolled
            ? "bg-surface/90 border-outline-variant dark:border-on-surface-variant/10 shadow-sm"
            : "bg-surface/80 border-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-base max-w-container-max mx-auto h-[72px]">
          {/* Brand Logo */}
          <Link
            className="font-headline-md text-headline-md tracking-tighter text-primary hover:opacity-70 transition-opacity duration-300"
            href="/"
          >
            BEAUTYMAX ESSENTIAL
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors hover:opacity-70 duration-300 cursor-pointer"
              href="/"
            >
              Home
            </Link>
            <Link
              className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors hover:opacity-70 duration-300 cursor-pointer"
              href="/about"
            >
              About
            </Link>
            <Link
              className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors hover:opacity-70 duration-300 cursor-pointer"
              href="/brands"
            >
              Brands
            </Link>
            {/* Active State for Contact */}
            <Link
              className="font-label-sm text-label-sm uppercase tracking-widest text-primary border-b-2 border-primary pb-1 cursor-pointer transition-all duration-300"
              href="/contact"
            >
              Contact
            </Link>
          </nav>

          {/* Trailing Action */}
          <Link
            className="hidden md:inline-block font-label-sm text-label-sm uppercase tracking-widest text-primary border border-primary px-6 py-2 hover:bg-muted-gold hover:border-muted-gold hover:text-white transition-colors duration-300"
            href="#"
          >
            Shop Now
          </Link>

          {/* Mobile Menu Toggle (Minimalist) */}
          <button className="md:hidden text-primary">
            <span className="material-symbols-outlined" data-icon="menu">
              menu
            </span>
          </button>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-grow pt-[140px] pb-section-gap">
        {/* Hero Section */}
        <ScrollReveal>
          <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-20 md:mb-section-gap">
            <div className="flex flex-col items-start gap-4 max-w-3xl">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-muted-gold">
                Inquiries & Support
              </span>
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-display-lg md:text-display-lg text-primary">
                Reach Out to Excellence.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 max-w-xl">
                Whether you have questions about our formulations, wish to discuss global partnerships, or require personalized assistance, our dedicated team is at your service.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* Split Layout Grid */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter md:gap-16 lg:gap-24">
          
          {/* Left Column: Contact Details (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-12 border-b border-outline-variant md:border-b-0 pb-12 md:pb-0">
            {/* Direct Email */}
            <ScrollReveal>
              <div className="flex flex-col gap-2 group cursor-pointer">
                <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                  Direct Correspondence
                </h3>
                <a
                  className="font-headline-md text-headline-md text-primary hover:text-muted-gold transition-colors duration-300 break-all"
                  href="mailto:help@jk.beautymaxid.com"
                >
                  help@jk.beautymaxid.com
                </a>
              </div>
            </ScrollReveal>

            {/* Social Media */}
            <ScrollReveal delay={100}>
              <div className="flex flex-col gap-4">
                <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                  Digital Presence
                </h3>
                <div className="flex flex-col gap-2">
                  <a
                    className="font-body-lg text-body-lg text-primary hover:text-muted-gold transition-colors duration-300 flex items-center gap-3"
                    href="https://www.instagram.com/bkcosmetics.idn/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="w-8 h-8 rounded-full bg-soft-beige/30 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[16px]">photo_camera</span>
                    </span>
                    Instagram (@bkcosmetics.idn)
                  </a>
                  <a
                    className="font-body-lg text-body-lg text-primary hover:text-muted-gold transition-colors duration-300 flex items-center gap-3"
                    href="https://www.tiktok.com/@bkcosmetics.idn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="w-8 h-8 rounded-full bg-soft-beige/30 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[16px]">play_circle</span>
                    </span>
                    TikTok (@bkcosmetics.idn)
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Global Presence */}
            <ScrollReveal delay={200}>
              <div className="flex flex-col gap-4">
                <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                  Global Presence
                </h3>
                <div className="bg-surface-container-low p-8 relative overflow-hidden group rounded-DEFAULT">
                  {/* Abstract map texture / imagery */}
                  <div
                    className="absolute inset-0 opacity-20 transition-opacity duration-700 group-hover:opacity-40"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="relative z-10">
                    <p className="font-body-md text-body-md text-primary mb-4">
                      Our offices are strategically positioned in key beauty capitals worldwide, ensuring unparalleled service and market insight.
                    </p>
                    <Link
                      className="font-label-sm text-label-sm uppercase tracking-widest text-muted-gold border-b border-muted-gold pb-1 hover:text-primary hover:border-primary transition-colors duration-300 inline-flex items-center gap-2"
                      href="#"
                    >
                      View Office Locations
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="md:col-span-7">
            <ScrollReveal delay={300}>
              <div className="bg-surface-container-lowest p-0 md:p-8 md:rounded-DEFAULT shadow-sm border border-outline-variant/20">
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-8">
                  Send an Inquiry
                </h2>
                <form className="flex flex-col gap-10">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative group">
                      <label
                        className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant block mb-2 transition-colors group-focus-within:text-primary"
                        htmlFor="name"
                      >
                        Full Name
                      </label>
                      <input
                        className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-primary transition-colors placeholder:text-surface-tint outline-none"
                        id="name"
                        name="name"
                        placeholder="Jane Doe"
                        type="text"
                      />
                    </div>
                    <div className="relative group">
                      <label
                        className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant block mb-2 transition-colors group-focus-within:text-primary"
                        htmlFor="email"
                      >
                        Email Address
                      </label>
                      <input
                        className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-primary transition-colors placeholder:text-surface-tint outline-none"
                        id="email"
                        name="email"
                        placeholder="jane@example.com"
                        type="email"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="relative group">
                    <label
                      className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant block mb-2 transition-colors group-focus-within:text-primary"
                      htmlFor="subject"
                    >
                      Inquiry Subject
                    </label>
                    <select
                      className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-primary transition-colors appearance-none cursor-pointer outline-none"
                      id="subject"
                      name="subject"
                      defaultValue=""
                    >
                      <option className="text-surface-tint" disabled value="">
                        Select a topic...
                      </option>
                      <option value="support">Customer Support</option>
                      <option value="partnership">Global Partnerships</option>
                      <option value="press">Press & Media</option>
                      <option value="other">Other Inquiries</option>
                    </select>
                    <span
                      className="material-symbols-outlined absolute right-0 bottom-3 text-on-surface-variant pointer-events-none"
                    >
                      expand_more
                    </span>
                  </div>

                  {/* Message */}
                  <div className="relative group">
                    <label
                      className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant block mb-2 transition-colors group-focus-within:text-primary"
                      htmlFor="message"
                    >
                      Your Message
                    </label>
                    <textarea
                      className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-primary transition-colors placeholder:text-surface-tint resize-none outline-none"
                      id="message"
                      name="message"
                      placeholder="How can we assist you today?"
                      rows="4"
                    ></textarea>
                  </div>

                  {/* Action */}
                  <div className="pt-4">
                    <button
                      className="bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest px-10 py-4 w-full md:w-auto hover:bg-muted-gold hover:text-white transition-colors duration-300 flex justify-center items-center gap-2 rounded-DEFAULT"
                      type="button"
                    >
                      Submit Inquiry
                      <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
                    </button>
                  </div>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary-container w-full py-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          {/* Brand Column */}
          <div className="flex flex-col gap-6 md:col-span-1">
            <span className="font-headline-md text-headline-md text-white">
              BEAUTYMAX ESSENTIAL
            </span>
            <p className="font-body-md text-body-md text-on-primary-container/80">
              EMPOWERING BEAUTY GLOBALLY.
            </p>
          </div>
          {/* Links Column 1 */}
          <div className="flex flex-col gap-4 md:col-start-3">
            <Link
              className="font-body-md text-body-md text-on-primary-container/60 hover:text-muted-gold transition-colors duration-300"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="font-body-md text-body-md text-on-primary-container/60 hover:text-muted-gold transition-colors duration-300"
              href="#"
            >
              Terms of Service
            </Link>
          </div>
          {/* Links Column 2 */}
          <div className="flex flex-col gap-4">
            <Link
              className="font-body-md text-body-md text-on-primary-container/60 hover:text-muted-gold transition-colors duration-300"
              href="#"
            >
              Sustainability
            </Link>
            <Link
              className="font-body-md text-body-md text-on-primary-container/60 hover:text-muted-gold transition-colors duration-300"
              href="#"
            >
              Global Offices
            </Link>
          </div>
          {/* Copyright */}
          <div className="col-span-1 md:col-span-4 mt-12 pt-8 border-t border-on-primary-container/20 text-center md:text-left">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container/60">
              © {new Date().getFullYear()} BEAUTYMAX ESSENTIAL.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}