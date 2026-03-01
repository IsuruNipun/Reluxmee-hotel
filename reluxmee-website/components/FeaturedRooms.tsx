"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Wifi, Maximize, User, Coffee } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

import { AnimatePresence } from 'framer-motion';

const RoomCard = ({ room }: { room: any }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    useEffect(() => {
        if (room.images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [room.images.length]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="bg-white group hover:shadow-2xl transition-shadow duration-300 rounded-sm overflow-hidden"
        >
            <div className="relative h-64 w-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={room.images[currentImageIndex]}
                            alt={`${room.name} - ${currentImageIndex + 1}`}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-black/5"></div>

                {/* Image indicators */}
                {room.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {room.images.map((_: any, i: number) => (
                            <div
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
                                    }`}
                            />
                        ))}
                    </div>
                )}

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-charcoal z-10">
                    Brand New
                </div>
            </div>

            <div className="p-8" style={{ transform: "translateZ(30px)" }}>
                <h3 className="text-2xl font-bold text-brand-charcoal mb-3">{room.name}</h3>
                <p className="text-gray-600 mb-6 font-light text-sm leading-relaxed min-h-[60px]">
                    {room.description}
                </p>

                <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-8" style={{ transform: "translateZ(20px)" }}>
                    {room.amenities.map((amenity: string, i: number) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-brand-gray uppercase tracking-wide font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                            {amenity}
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-3">
                    <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href="https://www.booking.com/Share-DiVxJe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 bg-brand-charcoal text-white text-center text-sm font-bold uppercase tracking-widest hover:bg-brand-gold transition-colors shadow-lg"
                    >
                        Book Now
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

const FeaturedRooms = () => {
    const rooms = [
        {
            id: 1,
            name: 'Deluxe Family Room',
            description: 'Spacious renovated room with modern amenities and city views, ideal for families.',
            images: ['/room1-1.jpeg', '/room1-2.jpeg', '/room1-wr1.jpeg'],
            amenities: ['4 Guests', 'Twin Queen Beds', 'Free WiFi', 'AC'],
            link: '/rooms',
        },
        {
            id: 2,
            name: 'Triple Family Room',
            description: 'Perfect for small families or groups, offering maximum comfort and space.',
            images: ['/room2-2.jpeg', '/room2-1.jpeg', '/room2-wr1.jpeg'],
            amenities: ['3 Guests', '1 Queen + 1 Single', 'City View', 'Work Desk'],
            link: '/rooms',
        },
        {
            id: 3,
            name: 'Standard Twin Room',
            description: 'Cozy and functional, ideal for friends or solo travelers.',
            images: ['/room3-1.jpeg', '/room3-2.jpeg'],
            amenities: ['2 Guests', '1 Queen Size Bed', 'En-suite Bath', 'TV'],
            link: '/rooms',
        },
    ];

    return (
        <section id="rooms" className="py-24 bg-brand-beige overflow-hidden">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2 block">Accommodation</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-charcoal mb-4">Newly Renovated Rooms</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto font-light">
                            Each room is designed with your comfort in mind, featuring modern decor and essential amenities.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rooms.map((room, idx) => (
                        <ScrollReveal key={room.id} delay={idx * 0.1}>
                            <RoomCard room={room} />
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal delay={0.4}>
                    <div className="text-center mt-12">
                        <Link
                            href="/rooms"
                            className="inline-block text-brand-charcoal font-bold border-b-2 border-brand-charcoal pb-1 hover:text-brand-gold hover:border-brand-gold transition-all uppercase tracking-widest text-sm"
                        >
                            View All Room Types
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default FeaturedRooms;
