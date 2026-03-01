"use client";
import { MapPin, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const Location = () => {
    return (
        <section id="location" className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2 block">Find Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">Prime Location in New Town</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto font-light">
                            Conveniently located for easy access to the Sacred City and modern amenities of Anuradhapura.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.2}>
                    <div className="bg-white p-4 shadow-2xl rounded-sm">
                        {/* Map Area */}
                        <div className="relative w-full h-[450px] bg-gray-200 overflow-hidden group rounded-sm">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15805.58614486638!2d80.4036!3d8.3375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcf5a069542617%3A0xa6460980590a3692!2sReluxmee%20Hotel!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale group-hover:grayscale-0 transition-all duration-700"
                            ></iframe>

                            {/* Overlay Card */}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                whileHover={{ y: -5 }}
                                className="absolute top-6 left-6 bg-white p-8 shadow-2xl max-w-sm hidden md:block border-l-4 border-brand-gold z-10"
                            >
                                <h3 className="font-bold text-brand-charcoal text-xl mb-3">Reluxmee Hotel</h3>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                    Reluxmee Hotel pvt ltd,<br />
                                    523/27B, Dahayyagama Junction,<br />
                                    Stage 2, Anuradhapura
                                </p>
                                <a
                                    href="https://maps.app.goo.gl/XkLqgqMaAk9aANbSA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-brand-gold font-bold text-sm uppercase tracking-widest hover:text-brand-charcoal transition-colors group/link"
                                >
                                    <Navigation className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                    Get Directions
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    <ScrollReveal delay={0.3} direction="up">
                        <div className="p-8 bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all h-full text-center group">
                            <MapPin className="w-10 h-10 text-brand-gold mx-auto mb-6 group-hover:scale-110 transition-transform" />
                            <h4 className="font-bold text-brand-charcoal text-lg mb-3">Sacred City</h4>
                            <p className="text-sm text-gray-500 font-light">Short drive to Ruwanwelisaya and Sri Maha Bodhi</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.4} direction="up">
                        <div className="p-8 bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all h-full text-center group">
                            <Navigation className="w-10 h-10 text-brand-gold mx-auto mb-6 group-hover:scale-110 transition-transform" />
                            <h4 className="font-bold text-brand-charcoal text-lg mb-3">Main Town Access</h4>
                            <p className="text-sm text-gray-500 font-light">Walking distance to shops and restaurants</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.5} direction="up">
                        <div className="p-8 bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all h-full text-center group">
                            <div className="w-10 h-10 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold font-bold text-xl">P</div>
                            <h4 className="font-bold text-brand-charcoal text-lg mb-3">Secure Parking</h4>
                            <p className="text-sm text-gray-500 font-light">Free private parking available on site</p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Location;
