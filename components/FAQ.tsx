
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(88,28,135,0.15),transparent)] border border-white/5 rounded-2xl mb-4 transition-all duration-200 hover:border-white/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.1)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex items-center justify-between text-left hover:text-white transition-colors"
      >
        <span className="text-lg font-medium text-white/90 pr-8">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-white/50 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="px-8 pb-6 text-white/50 leading-relaxed text-sm md:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const DEFAULT_FAQS = [
    {
      question: "How does Tech Mantrix differ from a standard development agency?",
      answer: "We are a strategic growth partner, not just a dev shop. We align every line of code and every automation with your business KPIs, ensuring tangible ROI from week one."
    },
    {
      question: "What is your typical engagement timeline?",
      answer: "We focus on long-term partnerships. Most engagements start with a 2-4 week discovery and strategy phase, followed by quarterly execution cycles to adapt to your market's speed."
    },
    {
      question: "Do you work with non-technical founders?",
      answer: "Exclusively. We handle the entire technical roadmap, translating your business vision into scalable infrastructure without burdening you with jargon."
    },
    {
      question: "How scalable are your automation solutions?",
      answer: "Our architectures are built for enterprise-grade scale. Whether you handle 100 or 100,000 requests per day, our systems grow effortlessly with your demand."
    },
    {
      question: "What happens after the product launch?",
      answer: "Launch is just day one. We provide ongoing optimization, feature expansion, and 24/7 monitoring to ensure your technology remains a competitive advantage."
    }
  ];


  const faqs = DEFAULT_FAQS;

  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">Common Questions.</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
