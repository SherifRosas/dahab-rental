"use client";

import { ArrowRight, CornerDownRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 pt-20">

            {/* Precision Background Layer */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-slate-950"></div> {/* Core Solid Backup */}
                <img
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1920"
                    alt="Technical Diving Depth"
                    className="w-full h-full object-cover opacity-30 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
                <div className="absolute inset-0 hud-grid opacity-30"></div>
            </div>

            <div className="container relative z-10">
                <div className="max-w-4xl space-y-12">

                    {/* Module Indicator */}
                    <div className="inline-flex items-center gap-4 px-5 py-2 bg-slate-900 border border-white/5 animate-in fade-in slide-in-from-left-8 duration-500">
                        <div className="status-pip animate-pulse"></div>
                        <span className="text-tech">System_Protocol_V4.1 // LIVE_FEED</span>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-7xl md:text-[10rem] font-black text-white leading-[0.85] tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-700">
                            THE DIGITAL<br />
                            <span className="text-transparent" style={{ WebkitTextStroke: '2px var(--cyan-400)' }}>DIVER.</span>
                        </h1>
                    </div>

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                        <div className="flex gap-4 items-start max-w-lg">
                            <CornerDownRight className="text-cyan-400 shrink-0 mt-1" size={24} />
                            <p className="text-lg text-slate-300 font-medium leading-relaxed">
                                Strategic base for tech explorers and nomadic divers. Located in the heart of Dahab&apos;s Lighthouse Node.
                            </p>
                        </div>

                        <div className="flex items-center gap-6 px-10 py-6 bg-white/2 border-l border-cyan-400/30">
                            <div className="space-y-1">
                                <p className="text-tech opacity-40">Load_Cap</p>
                                <p className="text-3xl font-black text-white font-mono">16</p>
                            </div>
                            <div className="w-px h-8 bg-white/5"></div>
                            <div className="space-y-1">
                                <p className="text-tech opacity-40">Stability</p>
                                <p className="text-lg font-black text-cyan-400 font-mono">100%</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 pt-4 animate-in fade-in slide-in-from-bottom-16 duration-1200">
                        <button className="btn-pro text-lg px-12 py-6">
                            INITIALIZE_RESERVATION <ArrowRight size={20} />
                        </button>
                        <button className="btn-outline">
                            EXPLORE_UNITS.SH
                        </button>
                    </div>
                </div>
            </div>

            {/* Vertical Status Line */}
            <div className="absolute right-12 bottom-12 hidden lg:flex flex-col items-end gap-4 opacity-20">
                <span className="text-tech rotate-90 origin-right transition-all">SYSTEM_CONNECTED_TRUE</span>
                <div className="w-px h-24 bg-white/20"></div>
            </div>
        </section>
    );
}
