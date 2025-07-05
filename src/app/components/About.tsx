'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function About() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <section id="about" className="min-h-screen w-full bg-[#ffffff] text-gray-800">
      <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto px-6 py-24">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-3/5 space-y-7"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-600">
            About Dr.Serena Blake
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base font-light leading-loose">
            Finding time and opportunities to care for ourselves can be incredibly challenging in today’s busy and demanding world. I believe therapy offers a dedicated space for self-care, providing the support and tools needed to improve this essential practice.
          </p>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base font-light leading-loose">
            I am dedicated to supporting this journey by offering active listening, psychological knowledge, empathy, compassion, and insights into behavioral patterns and tendencies. I hold a master’s degree in Clinical Psychology and a Ph.D. in Counseling Psychology. My experience spans therapy and psychological assessment in psychiatric inpatient units, academic medical centers, universities, and outpatient practice settings.
          </p>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base font-light leading-loose">
            My therapeutic approach is primarily psychodynamic and humanistic, enriched by influences from positive psychology, existentialism, family systems theory, acceptance and commitment concepts, and mindfulness practices.
          </p>
        </motion.div>

        {/* Clickable Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-2/5 cursor-pointer"
          onClick={() => setIsFullscreen(true)}
        >
          <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-md border border-gray-300 hover:shadow-lg transition-shadow duration-300">
            <Image
              src="/images/therapist-portrait-smiling.jpg"
              alt="Dr. Serena smiling"
              fill
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 40vw, 30vw"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Overlay */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-6 z-50 text-white text-4xl font-light bg-transparent border-none cursor-pointer"
            style={{ pointerEvents: 'auto' }}
          >
            &times;
          </button>

          <div className="relative w-full h-full z-40 pointer-events-none">
            <Image
              src="/images/therapist-portrait-smiling.jpg"
              alt="Dr. Serena Fullscreen"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
