"use client";

import { useState } from "react";
import { Terminal, Shield, Cpu, Activity, Search, AlertCircle } from "lucide-react";

export default function BookingForm() {
    const [activeTab, setActiveTab] = useState('DATES');

    return (
        <section id="book" className="py-24 bg-black border-t border-white/5">
            <div className="container">
                <div className="max-w-5xl mx-auto bg-slate-950 border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,1)]">

                    {/* Module Header */}
                    <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900/50">
                        <div className="flex items-center gap-3">
                            <Terminal size={18} className="text-cyan-400" />
                            <span className="font-mono text-[11px] font-black text-white tracking-[0.2em]">BOOKING_MOD_V.2.0</span>
                        </div>
                        <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex border-b border-slate-800">
                        {['DATES', 'ALLOCATION', 'SECURITY'].map(tab => (
                            <button
                                key={tab}
                                className={`flex-1 py-4 font-mono text-[10px] font-black tracking-widest transition-all ${activeTab === tab ? 'text-cyan-400 bg-cyan-400/5 border-b-2 border-cyan-400' : 'text-slate-600'}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                [{tab}]
                            </button>
                        ))}
                    </div>

                    <div className="p-8 md:p-16">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                            {/* Input Vector */}
                            <div className="lg:col-span-7 space-y-10">
                                <div className="space-y-2">
                                    <p className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest">User_Input_Required:</p>
                                    <h3 className="text-4xl font-mono font-black text-white">INITIALIZE_RESERVATION</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <label className="font-mono text-[9px] text-slate-500 uppercase flex items-center gap-2">
                                            <Activity size={10} /> Check_In_Sequence
                                        </label>
                                        <input
                                            type="date"
                                            className="w-full bg-black border border-slate-800 p-4 font-mono text-sm text-cyan-400 outline-none focus:border-cyan-400 transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="font-mono text-[9px] text-slate-500 uppercase flex items-center gap-2">
                                            <Activity size={10} /> Check_Out_Sequence
                                        </label>
                                        <input
                                            type="date"
                                            className="w-full bg-black border border-slate-800 p-4 font-mono text-sm text-cyan-400 outline-none focus:border-cyan-400 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="bg-red-500/5 border border-red-500/20 p-4 flex items-start gap-4">
                                    <AlertCircle className="text-red-500 shrink-0" size={20} />
                                    <div className="font-mono text-[10px] leading-relaxed">
                                        <p className="text-red-500 font-bold mb-1">SYSTEM_POLICY:</p>
                                        <p className="text-slate-500">50%_DEPOSIT_REQUIRED_TO_AUTHENTICATE_BOOKING. FINAL_SETTLEMENT_REQUIRED_UPON_ARRIVAL.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Price Output */}
                            <div className="lg:col-span-5">
                                <div className="bg-slate-900 border border-slate-800 p-8 space-y-8 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-2 opacity-5">
                                        <Cpu size={120} className="text-cyan-400" />
                                    </div>

                                    <div className="space-y-1">
                                        <p className="font-mono text-[10px] text-cyan-400/50 uppercase">Calculation_Output:</p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-5xl font-mono font-black text-white">$00</span>
                                            <span className="text-xl font-mono text-cyan-400">.00</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4 font-mono text-[10px] text-slate-400">
                                        <div className="flex justify-between border-b border-white/5 pb-2">
                                            <span>SYS_FEE_B1</span>
                                            <span className="text-white">$0.00</span>
                                        </div>
                                        <div className="flex justify-between border-b border-white/5 pb-2">
                                            <span>TAX_NODE</span>
                                            <span className="text-white">0%_PREVIEW</span>
                                        </div>
                                    </div>

                                    <button className="btn-tech w-full py-5 text-lg justify-center mt-6">
                                        EXECUTE_ORDER <Search size={20} className="ml-2" />
                                    </button>

                                    <div className="mt-6 flex items-center justify-center gap-2">
                                        <Shield size={12} className="text-green-500" />
                                        <span className="font-mono text-[8px] text-slate-500 uppercase">SECURE_SSL_PROTOCOL_ACTIVE</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Module Footer */}
                    <div className="p-3 bg-cyan-400/5 flex justify-between items-center border-t border-slate-800">
                        <span className="font-mono text-[8px] text-cyan-400/30 uppercase tracking-[0.4em]">Node: Dahab_Lighthouse // Status: Ready</span>
                        <span className="font-mono text-[8px] text-slate-700">01001001 01001111 01010011</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
