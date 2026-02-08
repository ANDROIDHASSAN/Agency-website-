
import React, { useLayoutEffect, useRef } from 'react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { BarChart3, Globe, Bot, Rocket, Megaphone, Smartphone } from 'lucide-react';
import gsap from 'gsap';

const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLUListElement>(null);

  const DEFAULT_SERVICES = [
    {
      title: "Web Development",
      description: "We don't just build websites; we build digital empires. Blazing fast, visually stunning, and conversion-obsessed platforms that leave your competition in the dust.",
      icon: <Globe className="w-10 h-10 text-blue-500" />,
      badge: "Digital Advisors",
      highlights: ["Immersive 3D Experiences", "High-Performance Next.js", "SEO Domination"]
    },
    {
      title: "CRM Solutions",
      description: "Stop losing leads. We engineer custom CRM systems that track every liquid asset in your pipeline. Turn relationships into revenue with surgical precision.",
      icon: <BarChart3 className="w-10 h-10 text-blue-400" />,
      badge: "System Architects",
      highlights: ["Custom Pipeline Design", "Automated Follow-ups", "Revenue Intelligence"]
    },
    {
      title: "AI Automation",
      description: "The future is automated. We deploy intelligent agents to handle your grunt work. reduce overhead, eliminate error, and run your business on autopilot.",
      icon: <Bot className="w-10 h-10 text-cyan-400" />,
      badge: "Future Tech",
      highlights: ["Workflow Autopilot", "Intelligent Chatbots", "Data Extraction"]
    }
  ];



  const services = DEFAULT_SERVICES;

  useLayoutEffect(() => {
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
          duration: 1,
          ease: 'power3.out'
        }
      );

      // Cards stagger animation
      gsap.fromTo('.service-card',
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
    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <section ref={containerRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-blue-500/20 mb-6">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">We Don't Just Service.<br />We Transform.</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Three pillars of modern business dominance. Integrated seamlessly to create an unstoppable digital engine for your brand.
          </p>


        </div>

        <ul ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, i) => (
            <li key={i} className="service-card list-none relative h-full group">
              <div className="relative h-full rounded-[2rem] border-[0.75px] border-white/10 p-2 md:p-3 transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div
                  className="glass-card relative flex h-full flex-col justify-between overflow-hidden p-6 md:p-8 hover:border-blue-500/30"
                  onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.02, duration: 0.3, ease: 'power2.out' })}
                  onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: 'power2.out' })}
                >



                  <div className={`mb-8 ${service.title === "AI Automation" ? "w-full" : "p-4 bg-white/5 rounded-2xl inline-block w-fit group-hover:bg-blue-600/20 transition-colors duration-300"}`}>
                    {service.icon}
                  </div>

                  <div className="mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 px-2 py-1 bg-blue-400/10 rounded-md">
                      {service.badge}
                    </span>
                  </div>


                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>

                  <div className="space-y-3 mt-auto">
                    {service.highlights.map((h, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs font-medium text-white/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {h}
                      </div>

                    ))}
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

export default Services;
