"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
}

const ScrollReveal = ({ children, delay = 0, direction = "up", className = "" }: ScrollRevealProps) => {
    const directions = {
        up: { y: 50 },
        down: { y: -50 },
        left: { x: 50 },
        right: { x: -50 },
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...directions[direction],
                rotateX: direction === "up" ? 20 : 0,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
                rotateX: 0
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98]
            }}
            style={{ perspective: "1000px" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
