// components/About.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto bg-white">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }} // Added margin for mobile trigger
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-3">
          Hello, I'm <span className="font-medium text-gray-900">Dr. Serena</span>
        </h2>
        <div className="w-20 h-1.5 bg-blue-200 rounded-full mx-auto"></div>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        {/* Image with Mobile Optimizations */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="w-full lg:w-2/5 relative group"
        >
          <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-md border-4 border-white">
            <Image
              src="/images/therapist-portrait-smiling.jpg"
              alt="Dr. Serena Blake smiling"
              fill
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 40vw, 30vw"
              className="object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
              priority
            />
          </div>
          {/* Floating shape accents - hidden on mobile */}
          <div className="hidden sm:block absolute -top-4 -right-4 w-12 sm:w-16 h-12 sm:h-16 bg-yellow-100 rounded-full opacity-70 -z-10"></div>
          <div className="hidden sm:block absolute -bottom-4 -left-4 w-16 sm:w-20 h-16 sm:h-20 bg-blue-100 rounded-lg opacity-50 -z-10 rotate-12"></div>
        </motion.div>

        {/* Content */}
        <div className="w-full lg:w-3/5 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Bio */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              A <span className="font-medium text-blue-600">licensed clinical psychologist</span> with 8 years helping clients navigate anxiety, trauma, and relationships through evidence-based therapy with a <span className="italic text-gray-600">human-centered approach</span>.
            </p>

            {/* Key Points */}
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="mt-0.5 md:mt-1 p-1.5 bg-blue-100 rounded-lg">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700 flex-1 text-sm md:text-base">
                  <span className="font-medium">500+ sessions</span> of hands-on experience across diverse cases
                </p>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="mt-0.5 md:mt-1 p-1.5 bg-green-100 rounded-lg">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700 flex-1 text-sm md:text-base">
                  <span className="font-medium">Blended methods</span> combining CBT, mindfulness, and positive psychology
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="mt-4 md:mt-6 px-5 py-2.5 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2 text-sm md:text-base">
              Book Your Free Intro Session
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}