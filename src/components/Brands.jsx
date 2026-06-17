export default function Brands() {
  return (
    <section id="brands" className="py-32 md:py-48 bg-[#f9f9f9] px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-32">
          <span className="text-[10px] uppercase tracking-[0.3em] text-beautymax-muted font-bold border-b border-beautymax-dark/10 pb-2 mb-6 inline-block">
            Brand Universe
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-beautymax-dark mt-6">
            Our Portfolio
          </h2>
        </div>

        <div className="space-y-40">
          
          {/* BRAND 1: BK Cosmetics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="w-full h-[60vh] bg-gray-200 animate-pulse flex items-center justify-center order-2 lg:order-1">
              <span className="text-xs text-gray-400 uppercase tracking-widest font-medium text-center px-4">
                Placeholder: BK Cosmetics<br/>(Bold, colorful, fun)
              </span>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="font-serif text-3xl md:text-5xl text-beautymax-dark mb-6">BK Cosmetics</h3>
              <p className="text-lg md:text-xl font-serif italic text-beautymax-muted mb-8">
                &quot;Be Kind. Be Kool. Be You.&quot;
              </p>
              <div className="space-y-6 text-base text-beautymax-dark/80 font-sans leading-relaxed">
                <p>
                  BK is a beauty universe made for the new generation. We believe beauty is not just about one look, one product, or one rule. Beauty is a way to explore, to play, and to express who you are in every moment.
                </p>
                <p>
                  From lips to skin, nails to everyday self-care, BK brings together different beauty brands with one shared spirit. Whether you feel bold, soft, playful, clean, edgy, or effortless, BK has a space for every side of you.
                </p>
              </div>
            </div>
          </div>

          {/* BRAND 2: ME5 (Layout di-reverse agar elegan) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-2 w-full h-[60vh] bg-gray-200 animate-pulse flex items-center justify-center">
              <span className="text-xs text-gray-400 uppercase tracking-widest font-medium text-center px-4">
                Placeholder: ME5<br/>(Precision-engineered eye artistry)
              </span>
            </div>
            <div className="order-1 lg:order-1 lg:text-right">
              <h3 className="font-serif text-3xl md:text-5xl text-beautymax-dark mb-6">ME5</h3>
              <p className="text-lg md:text-xl font-serif italic text-beautymax-muted mb-8">
                &quot;Your Eyes, Your Magic, Your ME5.&quot;
              </p>
              <div className="space-y-6 text-base text-beautymax-dark/80 font-sans leading-relaxed">
                <p>
                  ME5 is a beauty brand dedicated to the art of eye makeup. Inspired by the power and mystery of the eyes, we create high-performance products that enhance, define, and transform every gaze.
                </p>
                <p>
                  With Magic Eye Makeup at the heart of our brand, ME5 combines cutting-edge technology with richly pigmented formulas to deliver long-lasting, expressive, and effortless eye artistry.
                </p>
              </div>
            </div>
          </div>

          {/* BRAND 3: AG (Angela Glamor) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="w-full h-[60vh] bg-gray-200 animate-pulse flex items-center justify-center order-2 lg:order-1">
              <span className="text-xs text-gray-400 uppercase tracking-widest font-medium text-center px-4">
                Placeholder: AG<br/>(Professional base makeup & nail artistry)
              </span>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="font-serif text-3xl md:text-5xl text-beautymax-dark mb-6">
                AG <span className="text-2xl text-beautymax-muted font-sans font-light block mt-2">(Angela Glamor)</span>
              </h3>
              <p className="text-lg md:text-xl font-serif italic text-beautymax-muted mb-8">
                &quot;Flawless Skin. Polished Nails. Professional Glamor.&quot;
              </p>
              <div className="space-y-6 text-base text-beautymax-dark/80 font-sans leading-relaxed">
                <p>
                  AG is a professional beauty brand dedicated to flawless base makeup and salon-grade nail artistry. Created for modern beauty lovers and professionals, AG believes glamour starts with a perfected complexion and ends with polished details.
                </p>
                <p>
                  With a focus on performance, elegance, and confidence, AG brings professional beauty into everyday routines.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}