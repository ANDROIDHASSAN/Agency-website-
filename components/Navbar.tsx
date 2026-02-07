
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, ChevronRight } from 'lucide-react';
import { ShimmerButton } from '@/components/ui/shimmer-button';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 transition-all duration-500 ${scrolled ? 'py-2 md:py-3' : ''}`}
    >
      <div className={`w-full max-w-6xl rounded-full px-6 py-3 flex items-center justify-between border shadow-2xl backdrop-blur-xl transition-all duration-500 ${scrolled ? 'glass-panel bg-black/60 border-white/5' : 'glass-panel border-white/10'}`}>


        <div className="flex items-center gap-2 group cursor-pointer shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="bg-blue-600 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">

            <Bot className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tighter text-white">TECH MANTRIX</span>
        </div>

        <div className="hidden md:flex items-center bg-white/5 rounded-full px-6 py-2 gap-8 text-xs font-bold uppercase tracking-widest text-white/50">
          {[
            { name: 'Home', href: '#' },
            { name: 'About', href: '#process' },
            { name: 'Blog', href: '#' },
            { name: 'Contact', href: '#contact' },

          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-white transition-colors duration-200 cursor-pointer focus-visible:text-white focus-visible:outline-none"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <ShimmerButton className="text-xs font-bold shadow-lg hover:shadow-blue-500/25 px-6 h-10 bg-blue-600">
            Book a call
          </ShimmerButton>

        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
