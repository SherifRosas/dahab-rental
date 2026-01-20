"use client";

import { Activity, ShieldCheck, Zap, ArrowRight, CornerDownRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-black pt-20">
            {/* Background with Overlays */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1629236261599-52e850f00f13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    alt="Technical Diving Red Sea"
                    className="w-full h-full object-cover opacity-40 animate-in fade-in duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
                {/* Digital Grid Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(var(--cyber-cyan)_1px,transparent_1px)] [background-size:40px_40px]"></div>
            </div>

            <div className="container relative z-10">
                <div className="max-w-4xl">
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-3 px-4 py-2 border border-cyan-400/30 bg-cyan-400/5 mb-8 animate-in fade-in slide-in-from-left-4 duration-500">
                        <div className="status-glow"></div>
                        <span className="font-mono text-[10px] font-black tracking-[0.3em] text-cyan-400">PROTOCOL_V3.9_ACTIVE</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        DIVE<br />
                        <span className="text-transparent border-t-2 border-b-2 border-cyan-400 pb-2" style={{ WebkitTextStroke: '1px var(--cyber-cyan)' }}>DEEPER.</span>
                    </h1>

                    <div className="flex gap-4 items-start mb-12 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                        <CornerDownRight className="text-cyan-400 mt-1 shrink-0" size={32} />
                        <p className="text-lg md:text-xl text-slate-400 font-mono leading-relaxed max-w-xl">
                            High-performance base for technical divers and digital nomads.
                            <span className="text-white block mt-2 font-black uppercase tracking-tight">Location: Lighthouse_Node // Dahab</span>
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom-12 duration-1200">
                        <button className="btn-tech px-10 py-5 text-lg">
                            INITIALIZE_BOOKING <ArrowRight size={20} />
                        </button>
                        <div className="flex items-center gap-6 px-4 bg-white/5 border border-white/5">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-slate-800 flex items-center justify-center">
                                        <Activity size={12} className="text-cyan-400" />
                                    </div>
                                ))}
                            </div>
                            <div className="font-mono text-[10px] font-bold">
                                <p className="text-white">16_BEDS_ONLINE</p>
                                <p className="text-cyan-400">READY_FOR_GUESTS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Side Decorative Elements */}
            <div className="absolute right-0 bottom-20 hidden lg:block rotate-90 origin-right">
                <p className="font-mono text-[10px] text-cyan-400/20 tracking-[1em] uppercase">SYSTEM_STABILITY_CONNECTED_100%</p>
            </div>
        </section>
    );
}
