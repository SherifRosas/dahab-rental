"use client";

import { Zap, ArrowRight, CornerDownRight } from "lucide-react";

export default function Promotions() {
    return (
        <section className="py-24 bg-slate-950 border-y border-white/5 relative">
            <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>

            <div className="container relative z-10">
                <div className="card-tech bg-slate-900/60 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">

                    <div className="max-w-xl space-y-6 text-center md:text-left">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-orange-500/10 border border-orange-500/20">
                            <Zap className="text-orange-500" size={14} />
                            <span className="text-tech !text-orange-500">Special_Protocol_Active</span>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                                STAY_LONGER.<br />
                                <span className="text-cyan-400">DIVE_DEEPER.</span>
                            </h2>
                            <p className="text-slate-400 font-medium leading-relaxed">
                                Deploy for 7+ days and unlock the <span className="text-white">EXTENDED_STAY_DISCOUNT</span>.
                                Optimised for long-term technical expeditions.
                            </p>
                        </div>
                    </div>

                    <div className="flex-shrink-0 flex flex-col items-center md:items-end gap-6">
                        <div className="flex items-center gap-4">
                            <span className="text-tech opacity-40">Benefit_Ratio</span>
                            <span className="text-5xl font-black text-white font-mono">-10%</span>
                        </div>
                        <button className="btn-pro px-10 py-5">
                            APPLY_ALGO <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
