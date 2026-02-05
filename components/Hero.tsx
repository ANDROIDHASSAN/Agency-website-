
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
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 mb-10 cursor-default"
        >
          <span className="bg-indigo-500 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full text-white">Agency</span>
          <span className="text-xs font-medium text-indigo-200">Powering Next-Gen Growth</span>
        </div>

        <h1
          ref={titleRef}
          className="text-5xl md:text-8xl font-bold tracking-tight mb-10 leading-[1.1]"
        >
          Scale Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">Intelligent Automation</span>
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





      </div>

      {/* Dot Shader Background */}
      <DotScreenShader className="[mask-image:linear-gradient(to_bottom,black_60%,transparent_90%)]" />
    </section>
  );
};

export default Hero;
