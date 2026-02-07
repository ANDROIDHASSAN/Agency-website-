
import React, { useLayoutEffect, useRef } from 'react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { Search, Code2, Layers, Rocket } from 'lucide-react';
import gsap from 'gsap';

import { ShimmerButton } from '@/components/ui/shimmer-button';

const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  const DEFAULT_STEPS = [
    {
      id: "01",
      title: "Discovery & Analysis",
      desc: "We dive deep into your workflows to identify the biggest bottlenecks.",
      icon: <Search className="w-6 h-6" />
    },
    {
      id: "02",
      title: "Strategy Design",
      desc: "Our architects map out a custom AI integration path tailored to your goals.",
      icon: <Code2 className="w-6 h-6" />
    },
    {
      id: "03",
      title: "Implementation",
      desc: "We build and deploy the custom automation tools into your tech stack.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      id: "04",
      title: "Optimization",
      desc: "Continuous monitoring and updates to ensure peak performance.",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  const steps = DEFAULT_STEPS;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Left side content animation
      gsap.from(leftContentRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        scrollTrigger: {
          trigger: leftContentRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      // Steps stagger animation
      // Steps stagger animation
      gsap.fromTo('.process-step',
        {
          opacity: 0,
          x: 50
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: stepsContainerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 bg-gradient-to-b from-transparent to-blue-950/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div ref={leftContentRef}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-blue-500/20 mb-6">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Our Method</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Simple, Smart, and Highly Scalable.</h2>
            <p className="text-white/60 text-lg mb-12">
              Transforming your business shouldn't be complicated. We follow a proven four-step framework to ensure maximum ROI and minimum friction.
            </p>
            <ShimmerButton className="shadow-2xl">
              <span className="flex items-center gap-2 text-white">
                Learn about our stack
                <Rocket className="w-5 h-5" />
              </span>
            </ShimmerButton>
          </div>

          <div ref={stepsContainerRef} className="space-y-8">
            <ul className="grid grid-cols-1 gap-4">
              {steps.map((step, i) => (
                <li key={i} className="process-step list-none relative h-full">
                  <div className="relative h-full rounded-[1.5rem] border-[0.75px] border-white/10 p-2 md:p-2.5">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={3}
                    />
                    <div className="relative flex items-start gap-6 overflow-hidden rounded-xl border-[0.75px] border-white/10 bg-black/50 p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/30 cursor-pointer group">
                      <div className="bg-white/5 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 text-blue-400 font-bold transition-colors duration-300 group-hover:bg-blue-600/20 group-hover:text-blue-300">
                        {step.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-bold text-white/30">{step.id}</span>
                          <h3 className="text-xl font-bold text-white">{step.title}</h3>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
