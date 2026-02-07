
import React from 'react';
import { Bot, Instagram, Twitter, Linkedin, Facebook, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { ShimmerButton } from '@/components/ui/shimmer-button';

const Footer: React.FC = () => {
  return (
    <footer className="pt-32 pb-12 px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-indigo-950/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">TECH MANTRIX</span>
            </div>
            <p className="text-white/40 text-sm mb-8 leading-relaxed">
              Scale Your Business with Intelligent Automation and comprehensive digital strategies.
            </p>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 text-white/40 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-white/40 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-white/40 hover:text-blue-400 cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-white/40 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Capabilities</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li className="hover:text-blue-400 cursor-pointer transition-colors">Digital Marketing</li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">Web Development</li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">AI Automation</li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">Product Development</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Success Stories</li>
              <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Stay Updated</h4>
            <p className="text-sm text-white/40 mb-6 leading-relaxed">Join 5,000+ business owners receiving weekly AI optimization tips.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full glass border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <ShimmerButton className="absolute right-2 top-1.5 bottom-1.5 px-6 py-0 text-xs z-10 h-auto shadow-lg hover:shadow-indigo-500/25">
                Join
              </ShimmerButton>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-[10px] font-bold uppercase tracking-widest text-white/30">
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookie Settings</span>
          </div>
          <span>© 2026 Tech Mantrix. Built with ⚡ in React.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
