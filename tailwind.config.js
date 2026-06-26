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
        "surface": "#FCFCFA",               // Pearl White: Background utama yang lebih bersih dan mahal
        "primary": "#1A1A1A",               // Deep Charcoal: Hitam tinta untuk judul, lebih mewah dari #000000
        "on-surface-variant": "#5C5C5C",    // Abu-abu elegan untuk teks paragraf agar mata tidak lelah
        "muted-gold": "#C5A880",            // Champagne Gold: Aksen mewah untuk tombol/hover
        "surface-container-lowest": "#FFFFFF", 
        "surface-container-low": "#F9F9F7", // Cashmere Grey: Background sekunder tipis
        "surface-container": "#F5F5F2",     // Sedikit lebih gelap dari Cashmere untuk pemisah
        "surface-container-high": "#EFEFEA",
        "outline-variant": "#E5E5E5",       // Garis border tipis
        "primary-container": "#111111",     // Deep Onyx: Sangat gelap untuk Footer
        "soft-beige": "#E8E2DA",            // Beige premium untuk aksen kotak
        "charcoal-text": "#333333",         // Variasi gelap untuk teks alternatif
        
        // ==========================================
        // 2. BRAND SPECIFIC BACKGROUNDS (Soft & Luxury)
        // ==========================================
        "brand-bk": "#FFF5F7",              // Soft Blush: Pink super tipis untuk background section BK
        "brand-me5": "#FDFBF7",             // Champagne Sand: Krem super tipis untuk background section ME5
        "brand-ag": "#F4F5F7",              // Cool Slate: Abu-abu kebiruan terang untuk background section AG

        // ==========================================
        // 3. NEW DESIGN BACKGROUNDS (Gradient & Pills)
        // ==========================================
        "design-bg-top": "#EAD5E6",         // Warna lilac pastel atas
        "design-bg-mid": "#F3E3ED",         // Warna pink pastel tengah
        "design-bg-bottom": "#D2B8C9",      // Warna mauve bawah
        "design-pill": "#A58C99",           // Warna abu kecoklatan untuk tombol

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
        "body-md": ["var(--font-poppins)", "sans-serif"],
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