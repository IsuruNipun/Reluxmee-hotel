"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedHeaderProps {
    title: string;
    subtitle?: string;
    bgClass?: string;
}

const AnimatedHeader = ({ title, subtitle, bgClass = "bg-brand-charcoal" }: AnimatedHeaderProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <header ref={ref} className={`relative h-[300px] md:h-[400px] flex items-center justify-center text-white overflow-hidden ${bgClass}`}>
            <motion.div
                style={{ y, opacity }}
                className="container mx-auto px-4 text-center z-10"
            >
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-gray-300 max-w-2xl mx-auto font-light text-lg"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </motion.div>

            {/* Mesh/Texture Overlay for 3D feel */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] pointer-events-none"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent z-0"></div>
        </header>
    );
};

export default AnimatedHeader;
