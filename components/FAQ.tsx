
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
  const faqs = [
    {
      question: "How can AI automation help my business?",
      answer: "AI automation streamlines repetitive tasks like data entry, scheduling, and lead generation, allowing your team to focus on high-value creative work. It typically saves businesses 15-25 hours per employee per week."
    },
    {
      question: "Is AI automation difficult to integrate?",
      answer: "Not with Xtract. We handle the heavy lifting. Our platform integrates seamlessly with your existing tools like Slack, Gmail, CRM, and Discord within days, not months."
    },
    {
      question: "What industries can benefit from AI automation?",
      answer: "Whether you're in e-commerce, healthcare, finance, or real estate, AI automation can optimize your operations. We tailor solutions to your specific industry needs."
    },
    {
      question: "Do I need technical knowledge to use AI automation?",
      answer: "No. While we provide advanced customization for developers, our main dashboard is built for business owners. If you can use an email client, you can use Xtract."
    },
    {
      question: "What kind of support do you offer?",
      answer: "Starter plans include standard email support. Professional and Enterprise clients receive dedicated account managers, priority 24/7 slack support, and monthly strategy calls."
    }
  ];

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
