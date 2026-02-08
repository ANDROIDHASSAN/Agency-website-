
import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialsSection } from '@/components/ui/testimonials-with-marquee';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const DEFAULT_REVIEWS = [
    {
      name: "James Carter",
      role: "Founder & CEO",
      company: "TechFlow Solutions",
      content: "Tech Mantrix didn't just build software; they engineered our entire growth infrastructure. A true strategic partner.",
      avatar: "/images/testimonials/man1.jpeg"
    },
    {
      name: "Sophia Martinez",
      role: "COO",
      company: "NexaCorp",
      content: "The level of technical maturity and business acumen they brought to the table was refreshing. They speak our language.",
      avatar: "https://picsum.photos/100/100?random=11"
    },
    {
      name: "David Reynolds",
      role: "VP of Engineering",
      company: "GrowthPeak",
      content: "We needed a team that could transparently integrate with our internal devs. Tech Mantrix delivered seamlessly.",
      avatar: "/images/testimonials/man2.jpeg"
    },
    {
      name: "Emily Chen",
      role: "Product Director",
      company: "InnovateX",
      content: "From MVP to Series A scaling, their architectural decisions have stood the test of time.",
      avatar: "https://picsum.photos/100/100?random=13"
    },
    {
      name: "Michael Ross",
      role: "Managing Director",
      company: "FutureScale",
      content: "Professional, punctual, and precise. They removed the complexity from our digital transformation.",
      avatar: "/images/testimonials/man3.jpeg"
    },
    {
      name: "Sarah Jenkins",
      role: "Founder",
      company: "StartUp Lab",
      content: "I've worked with many agencies. Tech Mantrix is the only one that felt like an extension of my own co-founding team.",
      avatar: "/images/testimonials/women1.jpeg"
    }
  ];


  const reviews = DEFAULT_REVIEWS;

  return (
    <section className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Trusted by Industry Leaders.</h2>
          <div className="flex items-center justify-center gap-1">

            {[1, 2, 3, 4, 5].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
            ))}
          </div>
        </div>

        <TestimonialsSection
          title="Real Results, Real Partners"
          description="Join forward-thinking companies that have scaled efficiently with Tech Mantrix."
          testimonials={reviews.map(r => ({
            author: {
              name: r.name,
              handle: `${r.role} @ ${r.company}`,
              avatar: r.avatar
            },
            text: r.content
          }))}
        />
      </div>
    </section>
  );
};

export default Testimonials;
