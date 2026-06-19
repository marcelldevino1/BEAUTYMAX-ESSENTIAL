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
        "surface": "#F9F9F7",               // Alabaster: Background utama (putih elegan, bukan putih menyilaukan)
        "primary": "#1A1A1A",               // Onyx: Hitam tinta untuk judul, lebih mewah dari #000000
        "on-surface-variant": "#5C5C5C",    // Abu-abu elegan untuk teks paragraf agar mata tidak lelah
        "muted-gold": "#C5A880",            // Champagne Gold: Aksen mewah untuk tombol/hover
        "surface-container-low": "#EFECE7", // Cashmere Grey: Background sekunder yang super lembut
        "surface-container": "#EAE6E1",     // Sedikit lebih gelap dari Cashmere untuk pemisah
        "primary-container": "#111111",     // Deep Onyx: Sangat gelap untuk Footer
        "soft-beige": "#E8E2DA",            // Beige premium untuk aksen kotak
        "charcoal-text": "#333333",         // Variasi gelap untuk teks alternatif
        
        // ==========================================
        // 2. BRAND SPECIFIC ACCENTS (Sub-Identity)
        // ==========================================
        "brand-bk": "#E0B0B6",              // Dusty Rose: Untuk section BK (Playful Gen-Z)
        "brand-me5": "#7C8C99",             // Slate Blue: Untuk section ME5 (Tech & Precision)
        "brand-ag": "#6B705C",              // Olive Green: Untuk section AG (Heritage & Natural)

        // ==========================================
        // 3. LEGACY COLORS (Agar kode lamamu tidak error)
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
        "surface-container-lowest": "#ffffff",
        "secondary-fixed-dim": "#d3c4b8",
        "surface-dim": "#dadada",
        "outline-variant": "#c4c7c7",
        "background": "#f9f9f7",
        "surface-bright": "#f9f9f7",
        "primary-fixed": "#e5e2e1",
        "tertiary": "#000000",
        "on-secondary-fixed-variant": "#4f453c",
        "secondary-fixed": "#f0e0d3",
        "on-error-container": "#93000a",
        "on-surface": "#1A1A1A",
        "on-secondary-fixed": "#221a13",
        "surface-container-high": "#e8e8e8",
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
        "body-md": ["var(--font-inter)", "sans-serif"],
        "headline-md": ["var(--font-playfair)", "serif"],
        "display-lg": ["var(--font-playfair)", "serif"],
        "body-lg": ["var(--font-inter)", "sans-serif"],
        "label-sm": ["var(--font-inter)", "sans-serif"],
        "headline-lg": ["var(--font-playfair)", "serif"],
        "headline-lg-mobile": ["var(--font-playfair)", "serif"]
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
      // ==========================================
      // ANIMASI UNTUK CUSTOM LOADING SCREEN (SPLASH)
      // ==========================================
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