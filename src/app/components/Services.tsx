'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export default function Services() {
  const services = [
    {
      title: 'Therapy for Anxiety & Stress Management',
      description:
        'Learn practical tools to manage anxiety and stress in your daily life. We will work together to identify triggers and develop coping strategies tailored to your needs.',
      image: '/images/meditate.jpg', // Replace with your actual image
    },
    {
      title: 'Counseling for Relationship recovery',
      description:
        'Improve communication, resolve conflicts, and strengthen your relationships. Whether you are working through partnership issues or family dynamics, we will create a safe space for growth.',
      image: '/images/relation.jpg', // Replace with your actual image
    },
    {
      title: 'Therapy for Trauma recovery and Grief',
      description:
        'Heal from past traumatic experiences with evidence-based approaches. Our work will focus on processing trauma in a way that feels safe and manageable for you.',
      image: '/images/relationship.jpg', // Replace with your actual image
    },
  ];

  return (
    <section className="py-20 bg-[#f9f6ef]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light text-gray-900 mb-3 font-serif">
            Services & Specialties
          </h2>
          <div className="w-20 h-1 bg-gray-300 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base font-light">
            Support tailored for unique identities and lived experiences
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-12"
        >
          {services.map((service, index) => (
            <motion.div key={index} className="flex flex-col items-center text-center space-y-6">
              {/* Circular Image */}
              <div className="w-60 h-60 relative rounded-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <h3 className="text-xl font-serif text-gray-800">{service.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed max-w-md">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
