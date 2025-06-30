// components/Hero.tsx
'use client';

import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Nature Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Serene nature background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Top-left corner element */}
      <div className="absolute top-6 left-6 z-20">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-white/80"></div>
          <span className="text-sm text-white/80 font-light tracking-wider">LOS ANGELES, CA</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        {/* Subheading */}
        <p className="text-sm sm:text-base text-white/80 font-light tracking-wider mb-2">
          Compassionate Therapy for Healing & Growth
        </p>
        
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-4 tracking-tight">
          Dr. Serena Blake
        </h1>
        
        <div className="w-20 h-px bg-white/50 my-4 sm:my-6"></div>
        
        {/* Specialties */}
        <h2 className="text-lg sm:text-xl text-white/90 font-normal mb-8 max-w-md">
          Clinical Psychologist | Trauma & Anxiety Specialist
        </h2>
        
        {/* CTA Button */}
        <button className="group px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
          Book a Free Consultation
          <FiArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-white/60"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}