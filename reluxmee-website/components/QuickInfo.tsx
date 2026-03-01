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
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-y-6 md:divide-x divide-gray-200">
                    {features.map((feature, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} direction="down">
                            <div className="flex items-center gap-3 px-4 xl:px-8 group cursor-default">
                                <motion.span
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ repeat: Infinity, duration: 3, delay: index * 0.2, ease: "easeInOut" }}
                                    className="text-brand-gold flex-shrink-0"
                                >
                                    {feature.icon}
                                </motion.span>
                                <span className="font-bold text-brand-charcoal text-[11px] sm:text-xs md:text-sm lg:text-[13px] xl:text-base uppercase tracking-widest whitespace-nowrap">
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
