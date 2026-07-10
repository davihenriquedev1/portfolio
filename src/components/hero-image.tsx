import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroImage() {
    const ref = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, {
        stiffness: 120,
        damping: 20,
    });

    const smoothY = useSpring(mouseY, {
        stiffness: 120,
        damping: 20,
    });

    const rotateY = useTransform(smoothX, [-150, 150], [-8, 8]);
    const rotateX = useTransform(smoothY, [-150, 150], [8, -8]);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        mouseX.set(x);
        mouseY.set(y);
    }

    function handleLeave() {
        mouseX.set(0);
        mouseY.set(0);
    }

    return (
        <div
            className="relative flex items-center justify-center"
            style={{ perspective: 1200 }}
        >
            {/* Glow girando */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{repeat: Infinity,duration: 45,ease: "linear",}}
                className="absolute h-28 w-28 rounded-full bg-conic from-accent via-blue to-accent opacity-20 blur-3xl"
            />

            {/* Glow acompanha mouse */}
            <motion.div
                style={{x: smoothX, y: smoothY,}}
                className="absolute h-32 w-32 rounded-full bg-blue opacity-30 blur-[50px]"
            />

            {/* FOTO */}
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d",}}
                animate={{backgroundPosition: ["50% 50%", "48% 52%", "52% 48%", "50% 50%"] }}
                transition={{ backgroundPosition: {duration: 12,repeat: Infinity,ease: "easeInOut" },
                }}
                whileHover={{scale: 1.03,}}
                className="relative size-38 sm:size-48 md:size-54 lg:size-62 rounded-full border border-white/1 bg-cover bg-center shadow-[0_0_70px_rgba(56,189,248,.18)] will-change-transform overflow-hidden bg-[url(/images/me.jpeg)]"

            >
                {/* brilho superior */}
                <div
                    className="absolute inset-0 rounded-full bg-linear-to-b from-white/15 via-transparent to-transparent pointer-events-none"
                />

                {/* borda neon */}
                <div
                    className="absolute inset-0 rounded-full border border-accent/30 "
                />
            </motion.div>
        </div>
    );
}