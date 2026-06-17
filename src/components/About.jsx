export default function About() {
  return (
    <section id="about" className="py-32 md:py-48 bg-beautymax-light px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-beautymax-muted font-bold border-b border-beautymax-dark/10 pb-2">
            Company Introduction
          </span>
        </div>

        {/* TYPOGRAPHY GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-beautymax-dark leading-[1.2]">
              Beauty should be <span className="italic text-beautymax-muted">accessible, expressive,</span> and <span className="italic text-beautymax-muted">empowering</span> for everyone.
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-8 text-base text-beautymax-dark/80 font-sans leading-relaxed">
            <p>
              Beautymax Essential is a dynamic beauty company. We create high-quality beauty solutions that celebrate individuality, creativity, and everyday confidence across diverse lifestyles and generations.
            </p>
            <p>
              We believe beauty is not limited to appearance, but is a form of self-expression and personal empowerment. Driven by consumer insight and market agility, we continuously innovate to deliver products that are relevant, reliable, and inspiring.
            </p>
            <p>
              Our teams are encouraged to think boldly, move fast, and stay close to the people we serve. We are more than a beauty company—a platform for brands to grow, ideas to flourish, and beauty to reach its fullest potential.
            </p>
          </div>
        </div>

        {/* IMAGE PLACEHOLDER */}
        {/* Ganti kotak ini dengan <img> jika klien sudah mengirimkan foto korporat/tim */}
        <div className="mt-32 w-full h-[50vh] md:h-[70vh] bg-[#e5e5e5] animate-pulse flex items-center justify-center">
          <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">
            [ Company / Lifestyle Image Placeholder ]
          </span>
        </div>

      </div>
    </section>
  );
}