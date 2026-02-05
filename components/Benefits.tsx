
import React from 'react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { TrendingUp, Clock, ShieldCheck, Database, Sliders, Users } from 'lucide-react';

const Benefits: React.FC = () => {
  const DEFAULT_BENEFITS = [
    { title: "Productivity", desc: "Gain 20h+ back per week for high-impact strategy.", icon: <Clock /> },
    { title: "Customer Success", desc: "24/7 instant AI support for your entire client base.", icon: <Users /> },
    { title: "Cost Savings", desc: "Reduce operational overhead by up to 40% annually.", icon: <TrendingUp /> },
    { title: "Data Insights", desc: "Automated analysis of every customer interaction.", icon: <Database /> },
    { title: "Scalability", desc: "Scale your revenue without scaling your headcount.", icon: <Sliders /> },
    { title: "Security", desc: "Enterprise-grade encryption for all automation data.", icon: <ShieldCheck /> }
  ];

  const benefits = DEFAULT_BENEFITS;

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">The Xtract Edge.</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Why settling for manual work when you can outperform your competition with automated intelligence?
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <li key={i} className="list-none relative h-full">
              <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-white/10 p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-white/10 bg-black/50 p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6 backdrop-blur-md">
                  <div className="relative flex flex-1 flex-col justify-between gap-3">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-4 text-indigo-400">
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
