// components/Services.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

//const item = {
  //hidden: { y: 20, opacity: 0 },
  //visible: {
    //y: 0,
    //opacity: 1,
    //transition: {
      //duration: 0.5,
      //ease: "easeOut"
    //}
  //}
//};

export default function Services() {
  const services = [
    {
      title: "Anxiety & Stress Management",
      description: "Learn practical tools to manage anxiety and stress in your daily life. We'll work together to identify triggers and develop coping strategies tailored to your needs.",
      image: "/images/meditate.jpg",
      price: "$200 / session"
    },
    {
      title: "Relationship Counseling",
      description: "Improve communication, resolve conflicts, and strengthen your relationships. Whether you're working through partnership issues or family dynamics, we'll create a safe space for growth.",
      image: "/images/relation.jpg",
      price: "$240 / session"
    },
    {
      title: "Trauma Recovery",
      description: "Heal from past traumatic experiences with evidence-based approaches. Our work will focus on processing trauma in a way that feels safe and manageable for you.",
      image: "/images/relationship.jpg",
      price: "$200 / session"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light text-gray-900 mb-3">Services & Specialties</h2>
          <div className="w-20 h-1 bg-gray-300 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Evidence-based therapeutic approaches tailored to your unique needs
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              
              className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-900 font-medium">{service.price}</p>
                    <button className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors">
                      Learn more
                      <FiArrowRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}