
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, ChevronRight } from 'lucide-react';
import { ShimmerButton } from '@/components/ui/shimmer-button';

const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6"
    >
      <div className="w-full max-w-6xl glass-dark rounded-full px-6 py-3 flex items-center justify-between border border-white/10 shadow-2xl">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="bg-indigo-600 p-2 rounded-lg group-hover:scale-110 transition-transform duration-200">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">TECH MANTRIX</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          {['Services', 'Solutions', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="hover:text-white transition-colors duration-200 cursor-pointer focus-visible:text-white focus-visible:outline-none"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 cursor-pointer">
            Login
          </button>
          <ShimmerButton className="text-sm font-bold shadow-lg hover:shadow-indigo-500/25">
            Get Started
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200 ml-1" />
          </ShimmerButton>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
