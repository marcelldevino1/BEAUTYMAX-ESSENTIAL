/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // ==========================================
        // 1. QUIET LUXURY CORE PALETTE (Art Gallery)
        // ==========================================
        "surface": "#FCFCFA",
        "primary": "#1A1A1A",
        "on-surface-variant": "#5C5C5C",
        "muted-gold": "#C5A880",
        "surface-container-lowest": "#FFFFFF", 
        "surface-container-low": "#F9F9F7",
        "surface-container": "#F5F5F2",
        "surface-container-high": "#EFEFEA",
        "outline-variant": "#E5E5E5",
        "primary-container": "#111111",
        "soft-beige": "#E8E2DA",
        "charcoal-text": "#333333",
        
        // ==========================================
        // 2. BRAND SPECIFIC BACKGROUNDS (Soft & Luxury)
        // ==========================================
        "brand-bk": "#FFF5F7",
        "brand-me5": "#FDFBF7",
        "brand-ag": "#F4F5F7",

        // ==========================================
        // 3. NEW DESIGN BACKGROUNDS (Gradient & Pills)
        // ==========================================
        "design-bg-1": "#C3AEC1",           // Lilac pucat (atas)
        "design-bg-2": "#EDD4CF",           // Peach/Pink (tengah)
        "design-bg-3": "#E2B5B6",           // Pink redup (bawah)
        "design-bg-4": "#796781",           // Pink redup (paling bawah)
        "design-pill": "#9A8194",           // Warna tombol

        // ==========================================
        // 4. LEGACY COLORS (Agar kode lamamu tidak error)
        // ==========================================
        "error-container": "#ffdad6",
        "on-tertiary": "#ffffff",
        "surface-tint": "#5f5e5e",
        "error": "#ba1a1a",
        "inverse-primary": "#c8c6c5",
        "on-primary": "#ffffff",
        "on-background": "#1a1c1c",
        "tertiary-container": "#2b160b",
        "on-error": "#ffffff",
        "tertiary-fixed": "#ffdbca",
        "on-primary-fixed-variant": "#474646",
        "surface-variant": "#e2e2e2",
        "secondary-fixed-dim": "#d3c4b8",
        "surface-dim": "#dadada",
        "background": "#f9f9f7",
        "surface-bright": "#f9f9f7",
        "primary-fixed": "#e5e2e1",
        "tertiary": "#000000",
        "on-secondary-fixed-variant": "#4f453c",
        "secondary-fixed": "#f0e0d3",
        "on-error-container": "#93000a",
        "on-surface": "#1A1A1A",
        "on-secondary-fixed": "#221a13",
        "tertiary-fixed-dim": "#e6beab",
        "inverse-on-surface": "#f0f1f1",
        "outline": "#747878",
        "on-secondary-container": "#6e6258",
        "on-secondary": "#ffffff",
        "secondary-container": "#f0e0d3",
        "on-primary-container": "#EFECE7", 
        "on-tertiary-container": "#9e7d6c",
        "surface-container-highest": "#e2e2e2",
        "inverse-surface": "#2f3131",
        "on-primary-fixed": "#1c1b1b",
        "primary-fixed-dim": "#c8c6c5",
        "on-tertiary-fixed-variant": "#5c4132",
        "secondary": "#685c53",
        "on-tertiary-fixed": "#2b160b"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "margin-desktop": "64px",
        "base": "8px",
        "gutter": "24px",
        "container-max": "1280px",
        "section-gap": "120px",
        "margin-mobile": "24px"
      },
        fontFamily: {
        "sans": ["var(--font-poppins)", "sans-serif"],
        "serif": ["var(--font-poppins)", "sans-serif"],
        "comic": ["var(--font-comic)", "cursive"], 
        "body-md": ["var(--font-poppins)", "sans-serif"],
        // ... sisa kode di bawahnya tetap sama
        "headline-md": ["var(--font-poppins)", "sans-serif"],
        "display-lg": ["var(--font-poppins)", "sans-serif"],
        "body-lg": ["var(--font-poppins)", "sans-serif"],
        "label-sm": ["var(--font-poppins)", "sans-serif"],
        "headline-lg": ["var(--font-poppins)", "sans-serif"],
        "headline-lg-mobile": ["var(--font-poppins)", "sans-serif"]
      },
      fontSize: {
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "headline-md": ["32px", { lineHeight: "40px", fontWeight: "500" }],
        "display-lg": ["64px", { lineHeight: "72px", letterSpacing: "-0.02em", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.08em", fontWeight: "600" }],
        "headline-lg": ["48px", { lineHeight: "56px", fontWeight: "500" }],
        "headline-lg-mobile": ["32px", { lineHeight: "40px", fontWeight: "500" }]
      },
      keyframes: {
        'loading-bar': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        'loading-bar': 'loading-bar 1.5s infinite ease-in-out',
      }
    }
  },
  plugins: [],
};