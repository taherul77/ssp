"use client";
import React, { useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface LensProps {
    children: React.ReactNode;
    hovering: boolean;
    setHovering: (hovering: boolean) => void;
    zoom?: number;
    lensSize?: number;
    className?: string;
}

export const Lens = ({
    children,
    hovering,
    setHovering,
    zoom = 2,
    lensSize = 250,
    className,
}: LensProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
    }, []);

    return (
        <div
            ref={containerRef}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            onMouseMove={handleMouseMove}
            className={cn(
                "relative overflow-hidden cursor-none",
                className
            )}
        >
            {children}
            <AnimatePresence>
                {hovering && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                        className="absolute pointer-events-none z-50 overflow-hidden rounded-full border-4 border-white shadow-[0_0_50px_rgba(0,0,0,0.3)]"
                        style={{
                            width: lensSize,
                            height: lensSize,
                            left: mousePosition.x - lensSize / 2,
                            top: mousePosition.y - lensSize / 2,
                        }}
                    >
                        <div
                            className="absolute pointer-events-none"
                            style={{
                                width: "100%",
                                height: "100%",
                                left: -mousePosition.x * zoom + lensSize / 2,
                                top: -mousePosition.y * zoom + lensSize / 2,
                                transform: `scale(${zoom})`,
                                transformOrigin: "0 0",
                            }}
                        >
                            <div
                                className="w-full h-full"
                                style={{
                                    width: containerRef.current?.clientWidth,
                                    height: containerRef.current?.clientHeight,
                                }}
                            >
                                {children}
                            </div>
                        </div>

                        {/* Crosshair Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-full h-[1px] bg-white/20" />
                            <div className="w-[1px] h-full bg-white/20" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
