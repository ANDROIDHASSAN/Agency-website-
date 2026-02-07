
import React, { useLayoutEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { Button } from '@/components/ui/button';
import { DotScreenShader } from '@/components/ui/dot-shader-background';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);




  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

      tl.from(badgeRef.current, { opacity: 0, scale: 0.9, y: 20, duration: 0.8 }, 0.2)
        .from(titleRef.current, { opacity: 0, y: 40, duration: 1 }, 0.3)
        .from(descriptionRef.current, { opacity: 0, y: 30, duration: 0.8 }, 0.5)
        .from(buttonsRef.current, { opacity: 0, y: 20, duration: 0.8 }, 0.7);


    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <section ref={containerRef} className="relative pt-40 pb-24 md:pt-64 md:pb-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 cursor-default"
        >
          <span className="bg-blue-600/80 text-[9px] uppercase font-bold px-2 py-0.5 rounded-full text-white">Nashik</span>
          <span className="text-xs font-medium text-blue-300">Creative Web & AI Agency</span>
        </div>


        <h1
          ref={titleRef}
          className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1] text-white"
        >
          Web. CRM. AI. <br />
          <span className="hero-text-gradient">The Trinity of Growth.</span>
        </h1>

        <p
          ref={descriptionRef}
          className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
        >
          A creative technology agency based in Nashik. We craft stunning websites, intelligent CRMs, and powerful AI automations that your customers can't ignore.
        </p>


        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <ShimmerButton className="shadow-2xl hover:scale-105 transition-all duration-300 bg-blue-600 h-12 px-8">
            <span className="flex items-center gap-2 text-white font-bold text-sm">
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </span>
          </ShimmerButton>



        </div>



      </div>

      {/* Central Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[160px] pointer-events-none z-0 animate-pulse" />


      {/* Dot Shader Background */}
      <DotScreenShader className="opacity-40 [mask-image:linear-gradient(to_bottom,black_60%,transparent_90%)]" />
    </section>
  );
};

export default Hero;
