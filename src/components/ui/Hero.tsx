"use client";

import { MoveRight, Star } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background with Deep Sea Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    alt="Dahab Red Sea"
                    className="w-full h-full object-cover scale-110 animate-[pulse_10s_ease-in-out_infinite]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-sea-deep)]/40 via-transparent to-[var(--color-sea-deep)]/60"></div>
            </div>

            {/* Floating Particles/Bubbles (Simulated) */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-300 rounded-full blur-[100px] animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-200 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container relative z-10">
                <div className="max-w-3xl glass-v2 rounded-[var(--radius-premium)] p-8 md:p-12 animate-in fade-in slide-in-from-bottom-10 duration-1000">

                    <div className="flex items-center gap-2 mb-6 text-[var(--color-sand-gold)]">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <span className="text-xs font-bold uppercase tracking-widest ml-2 text-white/80">Premium Bed & Breakfast in Dahab</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.9] mb-6 tracking-tighter">
                        SLEEP WITH <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-sand-gold)] to-yellow-200">THE FISHES.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light">
                        Discover the Red Sea’s best-kept secret. Luxury rooms and shared beds designed for divers, digital nomads, and sunset seekers.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="#rooms" className="btn-premium">
                            Explore Rooms <MoveRight size={20} />
                        </Link>
                        <Link href="#book" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold backdrop-blur-md transition-all border border-white/20 text-center">
                            Book Bed - $40/day
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce cursor-pointer">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white/50 rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
