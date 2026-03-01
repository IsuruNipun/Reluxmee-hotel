"use client";
import Image from 'next/image';
import { Sunset, GlassWater } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

const Rooftop = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        { src: '/hotel_drone_view.png', alt: 'Reluxmee Hotel Rooftop Experience' },
        { src: '/sunset1.jpeg', alt: 'Breathtaking Sunset View' },
        { src: '/night view 1.jpeg', alt: 'Hotel Night View' },
        { src: '/moon view 1.jpeg', alt: 'Lunar View from Rooftop' },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <section className="py-24 bg-brand-charcoal text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

            <div className="max-w-[1280px] mx-auto px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <ScrollReveal direction="right">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="relative h-[500px] w-full border-4 border-white/10 shadow-3xl bg-brand-charcoal overflow-hidden rounded-sm group"
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 1 }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={images[currentIndex].src}
                                            alt={images[currentIndex].alt}
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                {/* Slide Indicators */}
                                <div className="absolute bottom-6 left-6 flex gap-2 z-20">
                                    {images.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'bg-brand-gold w-8' : 'bg-white/30 w-2'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    </div>

                    <div className="w-full md:w-1/2">
                        <ScrollReveal direction="left">
                            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2 block animate-pulse-slow">The Experience</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                                Evenings Under the <br /> <span className="text-brand-gold">Anuradhapura Sky</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-10 font-light">
                                Unwind after a day of exploration on our signature rooftop. Enjoy panoramic views of the sacred city,
                                watch the mesmerizing sunset, and feel the cool evening breeze in a tranquil atmosphere.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-sm border border-white/10 hover:border-brand-gold/50 transition-colors">
                                    <motion.div
                                        animate={{ rotate: [0, 10, 0] }}
                                        transition={{ repeat: Infinity, duration: 4 }}
                                        className="bg-brand-gold/20 p-3 rounded-full text-brand-gold"
                                    >
                                        <Sunset className="w-6 h-6" />
                                    </motion.div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Sunset Views</h4>
                                        <p className="text-sm text-gray-400">Breathtaking 360-degree views of the city skyline.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-sm border border-white/10 hover:border-brand-gold/50 transition-colors">
                                    <motion.div
                                        animate={{ y: [0, -4, 0] }}
                                        transition={{ repeat: Infinity, duration: 3 }}
                                        className="bg-brand-gold/20 p-3 rounded-full text-brand-gold"
                                    >
                                        <GlassWater className="w-6 h-6" />
                                    </motion.div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Relaxed Vibe</h4>
                                        <p className="text-sm text-gray-400">Perfect setting for quiet conversations and relaxation.</p>
                                    </div>
                                </div>
                            </div>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://www.booking.com/Share-DiVxJe"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-12 py-5 bg-brand-gold text-white font-bold uppercase tracking-widest hover:bg-white hover:text-brand-charcoal transition-all shadow-xl"
                            >
                                Book Your Evening Stay
                            </motion.a>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rooftop;
