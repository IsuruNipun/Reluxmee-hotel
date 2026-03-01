"use client";
import { Wifi, MapPin, Car, BedDouble, Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const QuickInfo = () => {
    const features = [
        { icon: <Camera className="w-6 h-6" />, text: "Rooftop City View" },
        { icon: <BedDouble className="w-6 h-6" />, text: "Newly Renovated Rooms" },
        { icon: <MapPin className="w-6 h-6" />, text: "Prime Location" },
        { icon: <Wifi className="w-6 h-6" />, text: "Free WiFi" },
        { icon: <Car className="w-6 h-6" />, text: "Secure Parking" },
    ];

    return (
        <section className="bg-brand-beige py-12 border-b border-gray-100 overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start justify-items-start">
                    {features.map((feature, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} direction="down" className="w-full">
                            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 group cursor-default">
                                <motion.span
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ repeat: Infinity, duration: 3, delay: index * 0.2, ease: "easeInOut" }}
                                    className="text-brand-gold flex-shrink-0"
                                >
                                    {feature.icon}
                                </motion.span>
                                <span className="font-bold text-brand-charcoal text-[10px] sm:text-xs xl:text-sm uppercase tracking-widest whitespace-nowrap text-center sm:text-left">
                                    {feature.text}
                                </span>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuickInfo;
