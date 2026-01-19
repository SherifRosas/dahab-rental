"use client";

import { useState } from "react";
import { Calendar, Users, Briefcase, MapPin, Search, Waves } from "lucide-react";
import { PRICING_RULES } from "@/lib/constants";

export default function BookingForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        checkIn: "",
        checkOut: "",
        guests: 1,
        type: "shared"
    });

    return (
        <section id="book" className="py-32 relative">
            <div className="container">
                <div className="max-w-4xl mx-auto glass-v2 rounded-[var(--radius-premium)] p-1 md:p-2 border-white/20 shadow-2xl overflow-hidden">

                    {/* Header / Tabs */}
                    <div className="flex border-b border-white/10">
                        <button
                            className={`flex-1 py-6 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all ${step === 1 ? 'text-[var(--color-sea-blue)] bg-white/10' : 'text-gray-400 opacity-50'}`}
                            onClick={() => setStep(1)}
                        >
                            <Calendar size={16} /> 1. Dates
                        </button>
                        <button
                            className={`flex-1 py-6 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all ${step === 2 ? 'text-[var(--color-sea-blue)] bg-white/10' : 'text-gray-400 opacity-50'}`}
                        >
                            <Users size={16} /> 2. Space
                        </button>
                        <button
                            className={`flex-1 py-6 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all ${step === 3 ? 'text-[var(--color-sea-blue)] bg-white/10' : 'text-gray-400 opacity-50'}`}
                        >
                            <Waves size={16} /> 3. Confirm
                        </button>
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <h3 className="text-3xl font-black text-[var(--color-sea-deep)] tracking-tighter">Your Journey <br />Starts Here.</h3>

                                <div className="space-y-4">
                                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4">
                                        <div className="bg-[var(--color-sea-blue)] text-white p-3 rounded-xl shadow-lg">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Base Location</p>
                                            <p className="font-bold text-[var(--color-sea-deep)]">Lighthouse, Dahab, Egypt</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Check In</label>
                                        <input
                                            type="date"
                                            className="w-full p-4 bg-white border border-gray-100 rounded-2xl text-sm font-bold focus:ring-2 ring-[var(--color-sea-blue)] outline-none"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Check Out</label>
                                        <input
                                            type="date"
                                            className="w-full p-4 bg-white border border-gray-100 rounded-2xl text-sm font-bold focus:ring-2 ring-[var(--color-sea-blue)] outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="p-6 bg-[var(--color-sea-deep)] rounded-3xl text-white">
                                    <div className="flex justify-between items-center mb-6">
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-white/50">Total Estimate</p>
                                            <h4 className="text-4xl font-black">$40<span className="text-lg opacity-40">.00</span></h4>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-white/50">Shared Bed</p>
                                            <p className="text-sm font-bold text-[var(--color-sand-gold)]">All Essentials Included</p>
                                        </div>
                                    </div>

                                    <button className="w-full btn-premium py-5 justify-center shadow-none hover:shadow-orange-500/20 bg-gradient-to-r from-[var(--color-coral-pink)] to-orange-600">
                                        Reserve My Space <Search size={20} className="ml-2" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
