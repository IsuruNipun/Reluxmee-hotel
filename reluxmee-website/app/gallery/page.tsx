"use client";
import Image from 'next/image';
import AnimatedHeader from '@/components/AnimatedHeader';
import ScrollReveal from '@/components/ScrollReveal';

const images = [
    { src: '/hotel_drone_view.png', alt: 'Rooftop View', span: 'col-span-1 md:col-span-2 row-span-2' },
    { src: '/room1-1.jpeg', alt: 'Deluxe Family Room', span: 'col-span-1' },
    { src: '/room2-2.jpeg', alt: 'Triple Family Room', span: 'col-span-1' },
    { src: '/room3-1.jpeg', alt: 'Standard Twin Room', span: 'col-span-1' },
    { src: '/hotel_outside.jpeg', alt: 'Hotel Exterior', span: 'col-span-1 md:col-span-2' },
    { src: '/tvroom1.jpeg', alt: 'Common Area', span: 'col-span-1' },
    { src: '/room1-wr1.jpeg', alt: 'Room Interior', span: 'col-span-1' },
    { src: '/room2-wr1.jpeg', alt: 'Bathroom', span: 'col-span-1' },
];

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-white pb-20 overflow-hidden">
            <AnimatedHeader
                title="Gallery"
                subtitle="A glimpse into the elegance and comfort of Reluxmee Hotel."
            />

            <div className="container mx-auto px-4 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[250px] gap-6">
                    {images.map((img, idx) => (
                        <ScrollReveal key={idx} delay={idx * 0.1}>
                            <div className={`relative overflow-hidden rounded-sm group ${img.span} h-full min-h-[300px] md:min-h-full cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500`}>
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 flex items-center justify-center">
                                    <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-widest text-sm bg-brand-gold/80 px-4 py-2">
                                        View Full
                                    </span>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </main>
    );
}
