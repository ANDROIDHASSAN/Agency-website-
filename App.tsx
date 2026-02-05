
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import CaseStudies from './components/CaseStudies';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';


const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-black overflow-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
        {/* Immersive Background Effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] opacity-20 mesh-bg" />
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/10 blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-600/10 blur-[120px] animate-pulse" />
        </div>

        <AnimatePresence>
          {isLoaded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <Navbar />
              <main>
                <Hero />
                <div id="services">
                  <Services />
                </div>
                <div id="process">
                  <Process />
                </div>
                <div id="cases">
                  <CaseStudies />
                </div>
                <div id="benefits">
                  <Benefits />
                </div>
                <div id="pricing">
                  <Pricing />
                </div>
                <Testimonials />
                <FAQ />
              </main>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SmoothScroll>
  );
};

export default App;
