"use client";

import { User, Bed, Zap, ShieldCheck } from "lucide-react";

interface RoomCardProps {
    title: string;
    price: number;
    capacity: number;
    description: string;
    image?: string;
    onSelect?: () => void;
}

export default function RoomCard({ title, price, capacity, description, image, onSelect }: RoomCardProps) {
    return (
        <div className="group bg-slate-900 border border-slate-800 hover:border-cyan-400 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
            {/* Visual Input */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image || "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                    alt={title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                <div className="absolute top-4 left-4">
                    <div className="bg-cyan-400 text-black px-2 py-0.5 font-mono text-[9px] font-black uppercase tracking-widest">
                        Unit://{title.replace(" ", "_").toUpperCase()}
                    </div>
                </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-mono font-black text-white leading-none">{title}</h3>
                    <div className="text-right">
                        <span className="text-2xl font-mono font-black text-cyan-400">${price}</span>
                        <p className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">PER_CYCLE</p>
                    </div>
                </div>

                <p className="text-slate-400 text-xs mb-6 font-mono leading-relaxed line-clamp-2">
                    {description}
                </p>

                <div className="grid grid-cols-2 gap-2 mb-8 font-mono text-[9px]">
                    <div className="flex items-center gap-2 text-slate-300 bg-white/5 p-2 border border-white/5">
                        <User size={12} className="text-cyan-400" />
                        <span>CAPACITY_{capacity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 bg-white/5 p-2 border border-white/5">
                        <Zap size={12} className="text-cyan-400" />
                        <span>DIVE_DEPOT</span>
                    </div>
                </div>

                <button
                    onClick={onSelect}
                    className="w-full btn-tech justify-center"
                >
                    ALLOCATE_UNIT
                </button>
            </div>

            {/* Decorative Tech Detail */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
    );
}
