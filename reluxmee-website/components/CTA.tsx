"use client";
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const CTA = () => {
    return (
        <section className="py-24 bg-brand-gold text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="max-w-[1280px] mx-auto px-8 relative z-10">
                <ScrollReveal direction="up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready for Your Stay?</h2>
                    <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90 font-light">
                        Experience the best of Anuradhapura with our modern comfort and unmatched hospitality.
                    </p>
                    <motion.a
                        whileHover={{ scale: 1.05, boxShadow: "0px 20px 40px rgba(0,0,0,0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        href="https://www.booking.com/Share-DiVxJe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-12 py-5 bg-white text-brand-gold font-bold text-lg rounded-sm hover:bg-brand-charcoal hover:text-white transition-all shadow-xl uppercase tracking-widest"
                    >
                        Book Now on Booking.com
                    </motion.a>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default CTA;
