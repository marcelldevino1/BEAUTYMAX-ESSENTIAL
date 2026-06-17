export default function Footer() {
  return (
    <footer className="bg-beautymax-light border-t border-beautymax-dark/10 pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10 text-center md:text-left">
        
        {/* Left Side: Brand & Copyright */}
        <div>
          <h2 className="font-serif text-2xl text-beautymax-dark mb-4">Beautymax Essential</h2>
          <p className="text-xs text-beautymax-muted uppercase tracking-widest">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        {/* Right Side: Contact & Socials */}
        <div className="flex flex-col sm:flex-row gap-10 md:gap-20">
          
          {/* Contact */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-beautymax-muted font-bold mb-4">
              Contact Us
            </h3>
            <a 
              href="mailto:help@jk.beautymaxid.com" 
              className="text-sm text-beautymax-dark hover:text-beautymax-accent transition-colors block"
            >
              help@jk.beautymaxid.com
            </a>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-beautymax-muted font-bold mb-4">
              Follow Us
            </h3>
            <div className="flex flex-col gap-2">
              <a 
                href="https://www.instagram.com/bkcosmetics.idn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-beautymax-dark hover:text-beautymax-accent transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://www.tiktok.com/@bkcosmetics.idn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-beautymax-dark hover:text-beautymax-accent transition-colors"
              >
                TikTok
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}