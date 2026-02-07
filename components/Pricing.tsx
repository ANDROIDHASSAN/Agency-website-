
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { Check, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const DEFAULT_PLANS = [
    {
      name: "Starter",
      price: isAnnual ? "37" : "49",
      description: "Perfect for small teams starting with AI.",
      features: ["Basic workflow automation", "AI Personal Assistant", "Email & Chat support", "Up to 3 integrations"]
    },
    {
      name: "Professional",
      price: isAnnual ? "75" : "99",
      description: "Best for growing startups and scaling teams.",
      features: ["Advanced workflow logic", "AI Lead Scoring", "Priority 24/7 support", "Up to 10 integrations", "Custom reporting"],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For agencies needing total control.",
      features: ["Full custom AI models", "Dedicated Consultant", "Unlimited integrations", "SLA & On-prem options", "Custom Training"]
    }
  ];

  const plans = DEFAULT_PLANS;

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Pricing for growth.</h2>
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-white/40'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-7 bg-white/5 border border-white/10 rounded-full relative p-1 transition-colors"
            >
              <motion.div
                animate={{ x: isAnnual ? 28 : 0 }}
                className="w-5 h-5 bg-blue-600 rounded-full shadow-lg"
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-white/40'}`}>Annually <span className="text-emerald-400 text-[10px] ml-1">SAVE 25%</span></span>
          </div>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <li
              key={i}
              className="list-none relative h-full"
            >
              <div className={`relative h-full rounded-[2.1rem] md:rounded-[2.1rem] border-[0.75px] ${plan.isPopular ? 'border-blue-500/50' : 'border-white/10'} p-2 transition-transform duration-300 hover:scale-[1.02] cursor-pointer group`}>
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                  variant={plan.isPopular ? "default" : "default"}
                />
                <div className={`relative flex flex-col h-full overflow-hidden rounded-[1.5rem] border-[0.75px] ${plan.isPopular ? 'border-blue-500/20 bg-blue-500/10' : 'border-white/10 bg-black/50 group-hover:border-white/20'} p-8 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] backdrop-blur-md pt-12 transition-colors duration-300`}>
                  {plan.isPopular && (
                    <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-[10px] font-bold py-1.5 text-center uppercase tracking-widest z-10 tier-popular">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-8 text-left mt-2">
                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-4xl font-bold">{plan.price === 'Custom' ? '' : '$'}{plan.price}</span>
                      <span className="text-white/40 text-sm">{plan.price === 'Custom' ? '' : '/month'}</span>
                    </div>
                    <p className="text-white/50 text-sm">{plan.description}</p>
                  </div>

                  <div className="space-y-4 mb-10 text-left grow">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-3 text-sm text-white/70">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {plan.isPopular ? (
                    <ShimmerButton className="w-full shadow-2xl">
                      <span className="text-sm font-bold flex items-center justify-center gap-2 w-full">
                        Choose {plan.name}
                        <Zap className="w-4 h-4 z-20 relative" />
                      </span>
                    </ShimmerButton>
                  ) : (
                    <ShimmerButton className="w-full bg-white/5 hover:bg-white/10" background="rgba(255, 255, 255, 0.05)">
                      <span className="text-sm font-bold flex items-center justify-center gap-2 w-full">
                        Choose {plan.name}
                        <Zap className="w-4 h-4" />
                      </span>
                    </ShimmerButton>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Pricing;
