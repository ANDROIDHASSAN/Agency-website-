import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(contentRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                x: -50,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
            });

            gsap.from(formRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                x: 50,
                opacity: 0,
                duration: 0.8,
                delay: 0.2,
                ease: 'power3.out',
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const benefits = [
        "Free comprehensive audit",
        "Custom automation roadmap",
        "ROI projection",
    ];

    return (
        <section id="contact" ref={sectionRef} className="relative py-24 px-6 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[120px] -z-10" />

            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-600/5 blur-[120px] -z-10" />

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Content Side */}
                <div ref={contentRef}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                        <span className="bg-blue-600 text-[9px] uppercase font-bold px-2 py-0.5 rounded-full text-white">Contact</span>
                        <span className="text-xs font-medium text-blue-300">Let's Build the Future</span>
                    </div>


                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Ready to Automate <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            Your Success?
                        </span>

                    </h2>

                    <p className="text-lg text-white/60 mb-8 leading-relaxed">
                        Stop wasting time on manual tasks. Book a free consultation to discover how our AI solutions can scale your business efficiently.
                    </p>

                    <div className="space-y-6 mb-10">
                        {benefits.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="bg-green-500/20 p-1 rounded-full">
                                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                                </div>
                                <span className="text-white/80 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4 text-white/60 hover:text-white transition-colors">
                            <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                                <Mail className="w-5 h-5" />
                            </div>
                            <span>techmantrix@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-4 text-white/60 hover:text-white transition-colors">
                            <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                                <Phone className="w-5 h-5" />
                            </div>
                            <span>+91 9716978692</span>
                        </div>
                        <div className="flex items-center gap-4 text-white/60 hover:text-white transition-colors">
                            <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <span>Nashik,Mh,India</span>
                        </div>
                    </div>
                </div>

                {/* Form Side */}
                <form
                    ref={formRef}
                    className="relative glass-panel p-8 md:p-10"

                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="grid gap-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="firstName" className="text-sm font-medium text-white/80">First Name</label>
                                <input
                                    id="firstName"
                                    type="text"
                                    className="glass-input w-full px-4 py-3 placeholder:text-white/20"


                                    placeholder="John"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="lastName" className="text-sm font-medium text-white/80">Last Name</label>
                                <input
                                    id="lastName"
                                    type="text"
                                    className="glass-input w-full px-4 py-3 placeholder:text-white/20"


                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
                            <input
                                id="email"
                                type="email"
                                className="glass-input w-full px-4 py-3 placeholder:text-white/20"

                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="topic" className="text-sm font-medium text-white/80">Topic</label>
                            <select
                                id="topic"
                                className="glass-input w-full px-4 py-3 appearance-none"

                            >
                                <option>General Inquiry</option>
                                <option>Project Proposal</option>
                                <option>Partnership</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="glass-input w-full px-4 py-3 placeholder:text-white/20 resize-none"

                                placeholder="Tell us about your project..."
                            />
                        </div>

                        <ShimmerButton className="w-full mt-4 justify-center bg-blue-600 font-bold">
                            Send Message
                        </ShimmerButton>


                        <p className="text-xs text-white/40 text-center mt-4">
                            By sending this message, you agree to our <a href="#" className="underline hover:text-white">Terms</a> and <a href="#" className="underline hover:text-white">Privacy Policy</a>.
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
