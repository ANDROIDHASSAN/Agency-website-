
import React, { useLayoutEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { LogoMarquee } from '@/components/ui/logo-marquee';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { Button } from '@/components/ui/button';
import { DotScreenShader } from '@/components/ui/dot-shader-background';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

      tl.from(badgeRef.current, { opacity: 0, scale: 0.9, y: 20 }, 0.2)
        .from(titleRef.current, { opacity: 0, y: 40 }, 0.4)
        .from(descriptionRef.current, { opacity: 0, y: 30 }, 0.6)
        .from(marqueeRef.current, { opacity: 0, y: 20 }, 0.8)
        .from(buttonsRef.current, { opacity: 0, y: 20 }, 1)
        .from(gsap.utils.toArray('.pill'), {
          opacity: 0,
          y: 20,
          stagger: 0.1
        }, 1.2);



    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative pt-40 pb-24 md:pt-64 md:pb-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-10 cursor-default"
        >
          <span className="bg-primary text-[10px] uppercase font-bold px-2 py-0.5 rounded-full text-white">Agency</span>
          <span className="text-xs font-medium text-primary-light">Powering Next-Gen Growth</span>
        </div>

        <h1
          ref={titleRef}
          className="text-5xl md:text-8xl font-bold tracking-tight mb-10 leading-[1.1] text-white"
        >
          Scale Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-indigo-400 to-emerald-400">Intelligent Automation</span>
        </h1>

        <p
          ref={descriptionRef}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-16 font-medium"
        >
          Accelerate business growth using comprehensive digital strategies and cutting-edge technology.
        </p>

        <div
          ref={marqueeRef}
          className="mb-20"
        >
          <p className="text-center text-[10px] uppercase font-bold tracking-[0.2em] text-white/30 mb-4">
            Trusted by Industry Leaders
          </p>
          <LogoMarquee
            items={[
              { name: "VERTEX" },
              { name: "QUANTUM" },
              { name: "NEBULA" },
              { name: "SYNAPSE" },
              { name: "ORBITAL" },
              { name: "FLUX" }
            ]}
          />
        </div>
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <ShimmerButton className="shadow-2xl">
            <span className="flex items-center gap-2 text-white font-bold">
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </span>
          </ShimmerButton>

          <Button
            variant="default"
            size="auto"
            className="text-white/60 hover:text-white hover:bg-white/5 px-8 h-[52px] rounded-full font-bold transition-all border border-white/5"
          >
            Watch Demo
          </Button>
        </div>

        <div
          ref={pillsRef}
          className="mt-20 flex flex-wrap justify-center gap-4 md:gap-8"
        >
          <div className="pill flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/5">
            <Zap className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-semibold text-white/50">Lightning Fast</span>
          </div>
          <div className="pill flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/5">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-semibold text-white/50">AI Powered</span>
          </div>
          <div className="pill flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-semibold text-white/50">Enterprise Secure</span>
          </div>
        </div>
      </div>

      {/* Dot Shader Background */}
      <DotScreenShader className="[mask-image:linear-gradient(to_bottom,black_60%,transparent_90%)]" />
    </section>
  );
};

export default Hero;
