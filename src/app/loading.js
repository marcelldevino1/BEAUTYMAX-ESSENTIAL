export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] bg-surface flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Logo atau Teks */}
        <h1 className="font-serif text-2xl md:text-3xl tracking-tighter text-primary animate-pulse">
          BEAUTYMAX ESSENTIAL
        </h1>
        {/* Garis Loading Kecil */}
        <div className="w-48 h-[1px] bg-outline-variant relative overflow-hidden">
          <div className="absolute inset-0 bg-muted-gold animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
}