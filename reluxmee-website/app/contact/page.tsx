"use client";
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedHeader from '@/components/AnimatedHeader';
import ScrollReveal from '@/components/ScrollReveal';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white pb-20 overflow-hidden">
            <AnimatedHeader
                title="Contact Us"
                subtitle="We are here to assist you. Reach out to us for bookings and inquiries."
            />

            <div className="container mx-auto px-4 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">

                    {/* Contact Details */}
                    <div className="space-y-8">
                        <ScrollReveal direction="left">
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-8">Get in Touch</h2>
                        </ScrollReveal>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: <MapPin className="w-6 h-6" />,
                                    title: "Address",
                                    content: <>Reluxmee Hotel pvt ltd,<br />523/27B, Dahayyagama Junction,<br />Stage 2, Anuradhapura</>,
                                    link: "https://maps.app.goo.gl/XkLqgqMaAk9aANbSA",
                                    linkText: "View on Google Maps"
                                },
                                {
                                    icon: <Phone className="w-6 h-6" />,
                                    title: "Phone & WhatsApp",
                                    content: "For reservations and urgent inquiries:",
                                    extra: <a href="tel:+94712025025" className="block text-brand-charcoal font-bold text-2xl hover:text-brand-gold transition-colors mt-2 underline">+94 71 202 5025</a>,
                                    link: "https://wa.me/94712025025",
                                    linkText: "Chat on WhatsApp",
                                    isWhatsApp: true
                                },
                                {
                                    icon: <Mail className="w-6 h-6" />,
                                    title: "Email",
                                    content: "Send us a message anytime:",
                                    extra: <a href="mailto:reluxmeehotel@gmail.com" className="text-brand-charcoal font-bold text-xl hover:text-brand-gold transition-colors mt-2">reluxmeehotel@gmail.com</a>
                                }
                            ].map((item, i) => (
                                <ScrollReveal key={i} direction="left" delay={i * 0.1}>
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="flex items-start gap-6 p-8 bg-brand-beige rounded-sm hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-brand-gold"
                                    >
                                        <div className="text-brand-gold bg-white p-3 rounded-sm shadow-sm">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl mb-2 text-brand-charcoal">{item.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{item.content}</p>
                                            {item.extra}
                                            {item.linkText && (
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`inline-flex items-center gap-2 font-bold text-sm mt-4 uppercase tracking-widest transition-all ${item.isWhatsApp ? 'bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600' : 'text-brand-gold hover:text-brand-charcoal'}`}
                                                >
                                                    {item.isWhatsApp && <Navigation className="w-4 h-4" />}
                                                    {item.linkText}
                                                </a>
                                            )}
                                        </div>
                                    </motion.div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>

                    {/* Map */}
                    <ScrollReveal direction="right" delay={0.2} className="h-full">
                        <div className="h-[500px] md:h-full min-h-[400px] bg-gray-200 rounded-sm overflow-hidden shadow-2xl border-4 border-white group">
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
                        </div>
                    </ScrollReveal>

                </div>

                {/* Final CTA */}
                <ScrollReveal direction="up" delay={0.4}>
                    <div className="mt-24 text-center bg-brand-charcoal text-white p-16 rounded-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-brand-gold/5 pointer-events-none"></div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">Ready to Book Your Stay?</h2>
                        <p className="text-gray-400 mb-10 max-w-2xl mx-auto font-light text-lg relative z-10">
                            Experience the best of Anuradhapura hospitality with us.
                        </p>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://www.booking.com/Share-DiVxJe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-14 py-5 bg-brand-gold text-white font-bold text-xl rounded-sm hover:bg-yellow-600 transition-all shadow-2xl uppercase tracking-widest relative z-10"
                        >
                            Book Now on Booking.com
                        </motion.a>
                    </div>
                </ScrollReveal>
            </div>
        </main>
    );
}
