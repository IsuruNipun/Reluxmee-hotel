"use client";
import Image from 'next/image';
import { CheckCircle2, Leaf, Sunrise } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedHeader from '@/components/AnimatedHeader';
import ScrollReveal from '@/components/ScrollReveal';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white pb-20 overflow-hidden">
            <AnimatedHeader
                title="About Us"
                subtitle="Your home away from home in the Sacred City of Anuradhapura."
            />

            <div className="container mx-auto px-4 mt-16">
                {/* Story Section */}
                <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
                    <ScrollReveal direction="left" className="w-full md:w-1/2">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2 block">Our Story</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-charcoal mb-8">A New Chapter of Hospitality</h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light">
                            <p>
                                Reluxmee Hotel is a newly renovated gem located in the heart of Anuradhapura New Town.
                                Born from a desire to provide modern, comfortable, and affordable accommodation for travelers,
                                we have meticulously redesigned our spaces to meet the needs of today's guests.
                            </p>
                            <p>
                                Whether you are a pilgrim visiting the Sri Maha Bodhi, a tourist exploring the ancient ruins,
                                or a business traveler looking for a restful stopover, Reluxmee offers a sanctuary of peace
                                amidst the city's energy.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="right" className="w-full md:w-1/2">
                        <motion.div
                            whileHover={{ scale: 1.02, rotateY: 5 }}
                            style={{ perspective: "1000px" }}
                            className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl group"
                        >
                            <Image
                                src="/front_door.jpeg"
                                alt="Reluxmee Hotel Entrance"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-gold/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </motion.div>
                    </ScrollReveal>
                </div>

                {/* Mission & Vision Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <ScrollReveal direction="left">
                        <div className="h-full p-8 md:p-12 border border-brand-gold/20 rounded-sm hover:border-brand-gold transition-colors duration-500 bg-brand-beige/20">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-brand-gold/10 rounded-full">
                                    <Leaf className="w-8 h-8 text-brand-gold" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal">Our Mission</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg font-light">
                                To provide exceptional hospitality by offering comfortable, clean, and relaxing accommodations combined with warm Sri Lankan hospitality. We are committed to creating memorable experiences for every guest through excellent service, peaceful surroundings, and attention to every detail, ensuring each stay is enjoyable, safe, and truly refreshing.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="right">
                        <div className="h-full p-8 md:p-12 border border-brand-gold/20 rounded-sm hover:border-brand-gold transition-colors duration-500 bg-brand-beige/20">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-brand-gold/10 rounded-full">
                                    <Sunrise className="w-8 h-8 text-brand-gold" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal">Our Vision</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg font-light">
                                To become a trusted and preferred hotel in Anuradhapura, recognized for outstanding service, comfort, and authentic hospitality. We aim to be the first choice for travelers seeking relaxation, cultural exploration, and a welcoming home away from home, while continuously improving our services and standards.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Mission/Values */}
                <ScrollReveal direction="up">
                    <div className="bg-brand-beige p-16 rounded-sm mb-24 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -mr-32 -mt-32"></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-charcoal mb-16 relative z-10">Why Choose Reluxmee?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                            {[
                                { title: "Modern Comfort", desc: "Recently upgraded facilities ensuring a hassle-free and comfortable stay." },
                                { title: "Prime Location", desc: "Minutes away from major transport hubs and the sacred sites." },
                                { title: "Warm Hospitality", desc: "Dedicated staff committed to making your stay memorable." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -10 }}
                                    className="text-center group"
                                >
                                    <div className="bg-white p-6 rounded-full inline-block mb-6 shadow-md group-hover:shadow-xl transition-all group-hover:bg-brand-gold group-hover:text-white">
                                        <CheckCircle2 className="w-10 h-10 text-brand-gold group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-3 text-brand-charcoal">{item.title}</h3>
                                    <p className="text-gray-600 font-light leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </main>
    );
}
