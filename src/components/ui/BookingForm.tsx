"use client";

import { useState } from "react";
import { Terminal, ShieldCheck, Activity, Search, AlertCircle, Cpu } from "lucide-react";

export default function BookingForm() {
    return (
        <section id="book" className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 hud-grid opacity-10"></div>

            <div className="container relative z-10">
                <div className="max-w-6xl mx-auto card-tech bg-slate-900/40">

                    {/* Section Header */}
                    <div className="flex items-center justify-between p-6 border-b border-white/5 bg-slate-950/50">
                        <div className="flex items-center gap-4">
                            <Terminal size={18} className="text-cyan-400" />
                            <div>
                                <h3 className="text-white font-mono font-black text-sm tracking-tight leading-none">ALLOCATION_MODULE_V4</h3>
                                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1">Status: Authorised // Encrypted_Link: Active</p>
                            </div>
                        </div>
                        <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-cyan-400/10 border border-cyan-400/20">
                            <Activity size={12} className="text-cyan-400" />
                            <span className="text-tech !text-[8px]">PROT_STABLE</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/5">

                        {/* Parameter Input Area */}
                        <div className="lg:col-span-8 p-8 md:p-12 space-y-10 bg-slate-900/20">
                            <div className="space-y-4">
                                <span className="text-tech opacity-40">Require_Module_Input</span>
                                <h2 className="text-4xl font-black text-white tracking-tighter">INITIALIZE_PARAM.</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-tech opacity-60 flex items-center gap-2">
                                        <Activity size={10} /> Sequence_Start
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full bg-slate-950 border border-white/10 p-5 font-mono text-sm text-cyan-400 outline-none focus:border-cyan-400/50 transition-colors"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-tech opacity-60 flex items-center gap-2">
                                        <Activity size={10} /> Sequence_End
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full bg-slate-950 border border-white/10 p-5 font-mono text-sm text-cyan-400 outline-none focus:border-cyan-400/50 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="p-6 bg-red-500/5 border border-red-500/10 flex items-start gap-4">
                                <AlertCircle className="text-red-500 shrink-0 mt-1" size={18} />
                                <div className="font-mono text-[10px] leading-relaxed">
                                    <p className="text-red-500 font-black mb-1">SYSTEM_POLICY_EXCEPTION:</p>
                                    <p className="text-slate-400">50%_DEPOSIT_IS_REQUIRED_TO_COMMIT_THIS_SEQUENCE. FAILURE_TO_PAY_WILL_RESULT_IN_ALLOCATION_TERMINATION.</p>
                                </div>
                            </div>
                        </div>

                        {/* Data Output Matrix */}
                        <div className="lg:col-span-4 p-8 md:p-12 bg-slate-950 space-y-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                                <Cpu size={120} className="text-cyan-400" />
                            </div>

                            <div className="space-y-2">
                                <p className="text-tech opacity-40">Projected_Budget_Out</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-6xl font-black text-white font-mono">$00</span>
                                    <span className="text-xl font-black text-cyan-400 font-mono">.00</span>
                                </div>
                            </div>

                            <div className="space-y-4 font-mono text-[10px] text-slate-500">
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span>RESERVE_BASE</span>
                                    <span className="text-white">$0.00</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span>NODE_FEE_V4</span>
                                    <span className="text-white">$0.00</span>
                                </div>
                                <div className="flex justify-between items-center text-cyan-400 pt-2 font-black">
                                    <span>COMMITMENT_DEP(50%)</span>
                                    <span className="text-lg">$0.00</span>
                                </div>
                            </div>

                            <button className="btn-pro w-full justify-center !py-6 !text-base">
                                EXECUTE_ALLOCATION <Search size={22} />
                            </button>

                            <div className="flex items-center justify-center gap-3">
                                <ShieldCheck size={16} className="text-slate-800" />
                                <span className="text-tech !opacity-20">Secure_Node_Connection_Established</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
