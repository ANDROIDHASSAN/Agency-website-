
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Clock, Target } from 'lucide-react';

const CaseStudies: React.FC = () => {
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
    }
  ];

  const studies = DEFAULT_STUDIES;

  return (
    <section className="py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Built for results.</h2>
        <p className="text-white/60 text-lg max-w-xl">
          See how smart AI automation transforms complex challenges into competitive advantages.
        </p>
      </div>

      <div className="flex gap-8 overflow-x-auto px-6 md:px-[calc(50vw-580px)] pb-12 no-scrollbar scroll-smooth">
        {studies.map((study, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="min-w-[280px] md:min-w-[400px] glass rounded-[30px] overflow-hidden border border-white/5 group"
          >
            <div className="h-[200px] md:h-[250px] relative overflow-hidden">
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
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2 block">{study.company}</span>
                <h3 className="text-xl md:text-3xl font-bold text-white leading-tight">{study.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-white/50 text-sm mb-8 leading-relaxed">
                {study.desc}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {study.stats.map((stat, j) => (
                  <span key={j} className="text-[10px] font-bold px-3 py-1.5 bg-white/5 rounded-full border border-white/10 text-white/80">
                    {stat}
                  </span>
                ))}
              </div>
              <button className="text-sm font-bold text-primary flex items-center gap-2 group-hover:text-primary-light transition-colors">
                View Case Study
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
