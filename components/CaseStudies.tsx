
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Clock, Target } from 'lucide-react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const CaseStudies: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const DEFAULT_STUDIES = [
    {
      title: "40% Less Inventory Waste",
      company: "TrailForge",
      desc: "AI-driven forecasting optimized supply chains for this suitcase powerhouse.",
      image: "/images/case-study-logistics.png",
      stats: ["40% Cost Savings", "35% Faster Logistics"]
    },
    {
      title: "3x More Sales Appointments",
      company: "ScaleByte",
      desc: "Automated LinkedIn outreach and email follow-ups transformed their pipeline.",
      image: "/images/case-study-sales.png",
      stats: ["300% Growth", "80% Lead Accuracy"]
    },
    {
      title: "80% Reduction in Admin Errors",
      company: "MedixChain",
      desc: "Implementation of AI internal task bots for healthcare document processing.",
      image: "/images/case-study-healthcare.png",
      stats: ["200h Saved/Mo", "Zero Data Leaks"]
    },
    {
      title: "50% Higher Customer Retention",
      company: "EcoSphere",
      desc: "Personalized AI recommendation engine increased lifetime value significantly.",
      image: "/images/case-study-retail.png",
      stats: ["50% Retention", "25% AOV Boost"]
    }
  ];

  const studies = DEFAULT_STUDIES;

  return (
    <section className="py-32 overflow-hidden bg-black/20">
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Built for results.</h2>
        <p className="text-white/60 text-lg max-w-xl">
          See how smart AI automation transforms complex challenges into competitive advantages.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {studies.map((study, i) => (
              <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="h-full glass rounded-[30px] overflow-hidden border border-white/5 group bg-white/[0.02]"
                >
                  <div className="h-[200px] relative overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://placehold.co/600x400/000000/FFFFFF?text=${encodeURIComponent(study.company)}`;
                      }}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary-light mb-2 block">{study.company}</span>
                      <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">{study.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-white/50 text-sm mb-6 leading-relaxed line-clamp-2">
                      {study.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {study.stats.map((stat, j) => (
                        <span key={j} className="text-[10px] font-bold px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white/70">
                          {stat}
                        </span>
                      ))}
                    </div>
                    <button className="text-sm font-bold text-primary flex items-center gap-2 group-hover:text-primary-light transition-colors mt-auto">
                      View Case Study
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-12 bg-white/5 border-white/10 text-white hover:bg-white/10" />
            <CarouselNext className="-right-12 bg-white/5 border-white/10 text-white hover:bg-white/10" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default CaseStudies;
