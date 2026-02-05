
import React, { useLayoutEffect, useRef } from 'react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import ChatCard from '@/components/ui/chat-card';
import { BarChart3, Globe, Bot, Rocket, Megaphone, Smartphone } from 'lucide-react';
import gsap from 'gsap';

const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLUListElement>(null);

  const services = [
    {
      title: "Digital Marketing",
      description: "Data-driven Meta ads, Google Business Profile dominance, and automated WhatsApp messaging to skyrocket your reach.",
      icon: <Megaphone className="w-10 h-10 text-pink-500" />,
      badge: "Growth",
      highlights: ["Meta Ads", "Google SEO", "WhatsApp API"]
    },
    {
      title: "Web Development",
      description: "Custom, high-performance websites and web apps built with modern technologies to capture and convert your audience.",
      icon: <Globe className="w-10 h-10 text-blue-500" />,
      badge: "Tech",
      highlights: ["React/Next.js", "3D Visuals", "Responsive"]
    },
    {
      title: "AI Automation",
      description: "Intelligent workflows, conversational chatbots, and custom AI integrations that streamline operations and cut costs.",
      icon: <Bot className="w-10 h-10 text-emerald-500" />,
      badge: "Efficiency",
      highlights: ["Workflows", "Chatbots", "Integrations"]
    },
    {
      title: "Product Development",
      description: "End-to-end software solutions and SaaS product building aimed at solving complex problems from concept to launch.",
      icon: <Rocket className="w-10 h-10 text-amber-500" />,
      badge: "Innovation",
      highlights: ["SaaS Build", "MVP", "Scaling"]
    }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });

      // Cards stagger animation
      gsap.from('.service-card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 mb-6">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Comprehensive Digital Solutions</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            From marketing to development, we provide end-to-end services to help your business thrive in the digital age.
          </p>
        </div>

        <ul ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <li key={i} className="service-card list-none relative h-full">
              <div className="relative h-full rounded-[2rem] border-[0.75px] border-white/10 p-2 md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.5rem] border-[0.75px] border-white/10 bg-black/50 p-6 md:p-8 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] backdrop-blur-md">

                  <div className={`mb-8 ${service.title === "AI Automation" ? "w-full" : "p-4 bg-white/5 rounded-2xl inline-block w-fit"}`}>
                    {service.icon}
                  </div>

                  <div className="mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 px-2 py-1 bg-indigo-400/10 rounded-md">
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
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
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
