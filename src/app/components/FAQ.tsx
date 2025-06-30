// components/FAQ.tsx
'use client';

import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "I don't work directly with insurance companies, but I can provide you with a monthly superbill (detailed receipt) that you can submit to your insurance for possible out-of-network reimbursement. Many clients receive 50-80% reimbursement depending on their plan."
  },
  {
    question: "What are your session fees?",
    answer: "Individual therapy sessions are $200 for 50 minutes. Couples sessions are $240 for 50 minutes. I offer a limited number of reduced-fee spots based on financial need - please inquire about availability."
  },
  {
    question: "How often will we meet?",
    answer: "Most clients begin with weekly sessions to establish momentum. As you progress, we may transition to bi-weekly sessions. The frequency is always tailored to your specific needs and goals."
  },
  {
    question: "Are online sessions available?",
    answer: "Yes! I offer secure telehealth sessions via Zoom for clients anywhere in California. Many clients find online therapy just as effective as in-person, with the added convenience of attending from home."
  },
  {
    question: "What is your cancellation policy?",
    answer: "I require 24 hours notice for cancellations to avoid being charged the full session fee. This allows me to offer the time to another client. I do make exceptions for emergencies and illnesses."
  },
  {
    question: "How long does therapy typically last?",
    answer: "Therapy duration varies based on your goals. Some clients see progress in 8-12 sessions for specific issues, while others benefit from longer-term support. We'll regularly check in on your progress and adjust as needed."
  },
  {
    question: "What therapy approaches do you use?",
    answer: "I primarily use evidence-based approaches including Cognitive Behavioral Therapy (CBT), mindfulness techniques, and trauma-informed care. However, I tailor my approach to each client's unique needs and preferences."
  },
  {
    question: "How do I know if therapy is working?",
    answer: "We'll establish clear goals at the beginning and regularly assess your progress. Many clients notice improved coping skills, better relationships, reduced symptoms, and increased self-awareness as signs therapy is working."
  },
  {
    question: "What if I need medication?",
    answer: "While I don't prescribe medication, I can provide referrals to trusted psychiatrists if we determine that medication might be helpful alongside your therapy. I frequently collaborate with prescribers for clients who benefit from both approaches."
  },
  {
    question: "Is everything I say confidential?",
    answer: "Yes, with a few legal exceptions (like risk of harm to yourself or others). Your privacy is protected by law (HIPAA) and I use secure, encrypted systems for all communications and records."
  },
  {
    question: "How do I get started?",
    answer: "Simply book a free 15-minute consultation call using the button above. We'll discuss your needs, answer any questions, and determine if we're a good fit. From there, we'll schedule your first session."
  }
];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              className="flex justify-between items-center w-full text-left font-medium text-gray-800 hover:text-blue-600 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="text-blue-600">
                {activeIndex === index ? '−' : '+'}
              </span>
            </button>
            {activeIndex === index && (
              <div className="mt-2 text-gray-600">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}