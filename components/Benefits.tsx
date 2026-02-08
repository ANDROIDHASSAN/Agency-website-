
import React from 'react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { TrendingUp, Clock, ShieldCheck, Database, Sliders, Users } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Benefits: React.FC = () => {
  const DEFAULT_BENEFITS = [
    { title: "Nashik HQ | Global Impact", desc: "Local roots, Silicon Valley standards. We bring world-class tech to the wine capital of India.", icon: <Users /> },
    { title: "Addiction by Design", desc: "We don't just design interfaces; we engineer dopamine loops. Products your users can't put down.", icon: <TrendingUp /> },
    { title: "Obsessive Efficiency", desc: "We hate waste. We use AI to automate the boring stuff so you can focus on plotting world domination.", icon: <Clock /> },
    { title: "Radical Transparency", desc: "No agency fluff. No jargon. Just clear code, honest timelines, and results you can bank on.", icon: <Database /> },
    { title: "Future-Proof Engineering", desc: "Built for 2030, available today. Scalable architectures that grow faster than your ambition.", icon: <Sliders /> },
    { title: "The 'X' Factor", desc: "That intangible magic that separates utility from art. We inject soul into your software.", icon: <ShieldCheck /> }
  ];



  const benefits = DEFAULT_BENEFITS;


  const headerRef = React.useRef<HTMLDivElement>(null);
  const cardsRef = React.useRef<HTMLUListElement>(null);

  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current,
        {
          opacity: 0,
          y: 40
        },
        {
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out'
        }
      );

      // Cards stagger animation
      gsap.fromTo('.benefit-card',
        {
          opacity: 0,
          y: 40
        },
        {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out'
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (

    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">The Mantrix Edge.</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Why visionary founders choose us to build their legacy.
          </p>
        </div>



        <ul ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <li key={i} className="benefit-card list-none relative h-full">

              <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-white/10 p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div
                  className="glass-card relative flex h-full flex-col justify-between gap-6 overflow-hidden p-6 md:p-6 hover:border-blue-500/30"
                  onMouseEnter={(e) => gsap.to(e.currentTarget, { y: -5, duration: 0.3, ease: 'power2.out' })}
                  onMouseLeave={(e) => gsap.to(e.currentTarget, { y: 0, duration: 0.3, ease: 'power2.out' })}
                >


                  <div className="relative flex flex-1 flex-col justify-between gap-3">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-4 text-blue-400">

                      {b.icon && React.isValidElement(b.icon) ? (
                        React.cloneElement(b.icon as React.ReactElement<any>, {
                          className: "w-6 h-6",
                        })
                      ) : (
                        <Database className="w-6 h-6" />
                      )}
                    </div>
                    <div className="space-y-3">
                      <h3 className="pt-0.5 text-xl leading-[1.375rem] font-bold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-white">
                        {b.title}
                      </h3>
                      <h2 className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-white/50">
                        {b.desc}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Benefits;
