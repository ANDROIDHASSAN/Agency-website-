
import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialsSection } from '@/components/ui/testimonials-with-marquee';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "James Carter",
      role: "CEO",
      company: "TechFlow Solutions",
      content: "AI automation transformed our operations by eliminating repetitive tasks and improving efficiency. Scaling our workflow has never been easier!",
      avatar: "https://picsum.photos/100/100?random=10"
    },
    {
      name: "Sophia Martinez",
      role: "Ops Manager",
      company: "NexaCorp",
      content: "With Xtract, we cut manual work and improved accuracy. Our team now focuses on high-impact tasks while automation handles the rest!",
      avatar: "https://picsum.photos/100/100?random=11"
    },
    {
      name: "David Reynolds",
      role: "Head of Sales",
      company: "GrowthPeak",
      content: "AI-driven insights doubled our sales efficiency. We now engage leads at the right time with smarter, data-backed decisions!",
      avatar: "https://picsum.photos/100/100?random=12"
    },
    {
      name: "Emily Chen",
      role: "Product Lead",
      company: "InnovateX",
      content: "The custom AI integrations were a game changer. We launched our product 3x faster than anticipated.",
      avatar: "https://picsum.photos/100/100?random=13"
    },
    {
      name: "Michael Ross",
      role: "Director",
      company: "FutureScale",
      content: "Incredible ROI. The automated customer support system reduced our ticket volume by 60% in the first month.",
      avatar: "https://picsum.photos/100/100?random=14"
    },
    {
      name: "Sarah Jenkins",
      role: "Founder",
      company: "StartUp Lab",
      content: "Xtract's team is simply world-class. They understood our unique needs and delivered a solution that fits perfectly.",
      avatar: "https://picsum.photos/100/100?random=15"
    }
  ];

  return (
    <section className="py-32 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Loved by visionaries.</h2>
          <div className="flex items-center justify-center gap-1">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
            ))}
          </div>
        </div>

        <TestimonialsSection
          title="Real Results, Real Growth"
          description="Join hundreds of forward-thinking companies that have revolutionized their workflows with Xtract."
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
