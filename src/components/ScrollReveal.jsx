"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({ children, className = "", delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Jika elemen masuk ke dalam layar
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Berhenti mengobservasi setelah animasi jalan 1x (menghemat memori)
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1, // Animasi mulai saat 10% elemen terlihat di layar
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      {children}
    </div>
  );
}