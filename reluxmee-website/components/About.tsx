"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Leaf, Sunrise } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-8">
                <div className="flex flex-col md:flex-row items-center gap-16 mb-20">
                    <div className="w-full md:w-1/2 order-2 md:order-1">
                        <ScrollReveal direction="left">
                            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2 block">Our Story</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-8 leading-tight">
                                Reimagined <br /> <span className="text-brand-gold">Modern Comfort</span>
                            </h2>
                            <div className="space-y-6 text-gray-600 leading-relaxed font-light text-lg">
                                <p>
                                    Welcome to the newly renovated Reluxmee Hotel, your sanctuary in the bustling heart of Anuradhapura.
                                    We have transformed our spaces to offer a perfect blend of modern elegance and homely comfort.
                                </p>
                                <p>
                                    Just minutes away from the Sacred City, our hotel provides a peaceful retreat for both local adventurers
                                    and international travelers. Experience our warm hospitality, relax in our spacious rooms, and
                                    enjoy breathtaking sunsets from our signature rooftop.
                                </p>
                            </div>
                            <div className="mt-12">
                                <Link
                                    href="/about"
                                    className="inline-block px-10 py-4 bg-brand-charcoal text-white hover:bg-brand-gold transition-all uppercase tracking-widest text-sm font-bold shadow-lg"
                                >
                                    Experience More
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="w-full md:w-1/2 order-1 md:order-2">
                        <ScrollReveal direction="right">
                            <div className="relative h-[400px] md:h-[550px] group">
                                <div className="absolute inset-4 border-2 border-brand-gold z-0 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                                <motion.div
                                    whileHover={{ scale: 0.98, rotateY: 5 }}
                                    className="relative h-full w-full z-10 bg-gray-200 overflow-hidden shadow-2xl"
                                >
                                    <Image
                                        src="/front_door.jpeg"
                                        alt="Reluxmee Hotel Entrance"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </motion.div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Mission & Vision Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <ScrollReveal direction="left">
                        <div className="h-full p-8 border border-brand-gold/10 rounded-sm hover:border-brand-gold transition-all duration-500 bg-brand-beige/20 group">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-brand-gold/10 rounded-full group-hover:bg-brand-gold group-hover:text-white transition-colors duration-500">
                                    <Leaf className="w-6 h-6 text-brand-gold group-hover:text-white" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-brand-charcoal">Our Mission</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed font-light">
                                To provide exceptional hospitality by offering comfortable, clean, and relaxing accommodations combined with warm Sri Lankan hospitality. We are committed to creating memorable experiences for every guest through excellent service, peaceful surroundings, and attention to every detail.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="right">
                        <div className="h-full p-8 border border-brand-gold/10 rounded-sm hover:border-brand-gold transition-all duration-500 bg-brand-beige/20 group">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-brand-gold/10 rounded-full group-hover:bg-brand-gold group-hover:text-white transition-colors duration-500">
                                    <Sunrise className="w-6 h-6 text-brand-gold group-hover:text-white" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-brand-charcoal">Our Vision</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed font-light">
                                To become a trusted and preferred hotel in Anuradhapura, recognized for outstanding service, comfort, and authentic hospitality. We aim to be the first choice for travelers seeking relaxation, cultural exploration, and a welcoming home away from home.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default About;
