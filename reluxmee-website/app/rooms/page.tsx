"use client";
import Image from 'next/image';
import { Wifi, Users, Bed, Square, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedHeader from '@/components/AnimatedHeader';
import ScrollReveal from '@/components/ScrollReveal';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

const RoomImageCarousel = ({ images, name }: { images: string[], name: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="w-full h-full relative overflow-hidden">
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
                        src={images[currentIndex]}
                        alt={`${name} - ${currentIndex + 1}`}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>

            {/* Indicators */}
            {images.length > 1 && (
                <div className="absolute bottom-4 left-6 flex gap-1.5 z-10">
                    {images.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-brand-gold w-6' : 'bg-white/50 w-2'
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const rooms = [
    {
        id: 1,
        name: 'Deluxe Family Room',
        price: 'From $45',
        size: '30 m²',
        description: 'Experience comfort in our newly renovated Deluxe Family Rooms. Featuring twin queen-sized beds, modern en-suite bathroom, and elegant decor. Perfect for families seeking a relaxing stay in the heart of Anuradhapura.',
        images: ['/room1-1.jpeg', '/room1-2.jpeg', '/room1-wr1.jpeg'],
        amenities: ['Twin Queen Beds', 'Free High-Speed WiFi', 'Air Conditioning', 'En-suite Bathroom', 'Hot Water', 'Work Desk', 'Tea/Coffee Maker', 'Flat-screen TV'],
        capacity: 4
    },
    {
        id: 2,
        name: 'Triple Family Room',
        price: 'From $60',
        size: '35 m²',
        description: 'Our spacious Triple Rooms are designed for small families or friends traveling together. With one queen bed and one single bed, there is plenty of room for everyone to relax comfortably with all modern amenities.',
        images: ['/room2-2.jpeg', '/room2-1.jpeg', '/room2-wr1.jpeg'],
        amenities: ['1 Queen + 1 Single Bed', 'Free High-Speed WiFi', 'Air Conditioning', 'Seating Area', 'Hot Water', 'Wardrobe', 'Toiletries', 'Daily Housekeeping'],
        capacity: 3
    },
    {
        id: 3,
        name: 'Standard Twin Room',
        price: 'From $40',
        size: '22 m²',
        description: 'Ideal for friends or solo travelers who prefer a comfortable stay. Our Standard Twin Rooms offer all essential modern amenities in a cozy and efficient layout, recently renovated for your comfort.',
        images: ['/room3-1.jpeg', '/room3-2.jpeg'],
        amenities: ['1 Queen Size Bed', 'Free High-Speed WiFi', 'Air Conditioning', 'En-suite Bathroom', 'Hot Water', 'Soundproofing', 'Linens Provided'],
        capacity: 2
    },
];

export default function RoomsPage() {
    return (
        <main className="min-h-screen bg-brand-beige pb-20 overflow-hidden">
            <AnimatedHeader
                title="Our Rooms"
                subtitle="Choose from our selection of newly renovated rooms, designed for your ultimate comfort and relaxation."
            />

            <div className="container mx-auto px-4 mt-12">
                <div className="flex flex-col gap-10">
                    {rooms.map((room, idx) => (
                        <ScrollReveal key={room.id} direction={idx % 2 === 0 ? "left" : "right"}>
                            <div className="bg-white rounded-sm shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-2xl transition-all duration-500 group max-w-5xl mx-auto">
                                <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[400px] overflow-hidden">
                                    <RoomImageCarousel images={room.images} name={room.name} />
                                </div>

                                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal">{room.name}</h2>
                                        </div>

                                        <div className="flex items-center gap-4 text-xs text-brand-gold font-bold uppercase tracking-widest mb-6">
                                            <div className="flex items-center gap-2"><Users className="w-4 h-4" /> {room.capacity} Guests</div>

                                            <div className="flex items-center gap-2"><Bed className="w-4 h-4" /> {room.amenities[0]}</div>
                                        </div>

                                        <p className="text-gray-600 mb-6 leading-relaxed font-light text-base">
                                            {room.description}
                                        </p>

                                        <h3 className="font-bold text-xs uppercase tracking-widest text-brand-charcoal mb-3 border-b border-brand-gold pb-1 inline-block">Room Amenities</h3>
                                        <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-8">
                                            {room.amenities.slice(0, 6).map((amenity, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    transition={{ delay: 0.3 + (i * 0.05) }}
                                                    className="flex items-center gap-2 text-xs text-gray-500"
                                                >
                                                    <Check className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
                                                    <span className="truncate">{amenity}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>

                                    <div className="mt-auto">
                                        <motion.a
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            href="https://www.booking.com/Share-DiVxJe"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block w-full text-center py-4 bg-brand-charcoal text-white font-bold uppercase tracking-widest hover:bg-brand-gold transition-all rounded-sm shadow-md text-sm"
                                        >
                                            Book This Room
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </main>
    );
}
