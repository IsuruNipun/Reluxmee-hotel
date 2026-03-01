"use client";
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image Wrapper for Parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 z-10 bg-black/40" />
        <div className="w-full h-full bg-gray-800">
          <Image
            src="/hotel_drone_view.png"
            alt="Reluxmee Hotel Rooftop View"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="container mx-auto px-4 z-20 text-left relative"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="block text-brand-gold font-bold tracking-[0.2em] mb-4 uppercase text-sm md:text-base"
        >
          Welcome to Anuradhapura
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight"
        >
          RELUXMEE <br /> <span className="text-white/90 font-light">HOTEL</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed"
        >
          Modern Comfort in the Heart of the Sacred City
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
        >
          <a
            href="https://www.booking.com/Share-DiVxJe"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-brand-gold text-white font-bold rounded-sm hover:bg-yellow-600 transition-all uppercase tracking-widest flex items-center gap-2 group"
          >
            Book Your Stay <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#rooms"
            className="px-8 py-4 border border-white text-white font-bold rounded-sm hover:bg-white hover:text-brand-charcoal transition-all uppercase tracking-widest"
          >
            View Rooms
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent opacity-50 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 64] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-brand-gold"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
