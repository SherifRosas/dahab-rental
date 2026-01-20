"use client";

import { User, Activity, HardDrive, Target } from "lucide-react";

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
        <div className="group card-tech flex flex-col h-full bg-slate-900/40">

            {/* Scan Overlay Container */}
            <div className="relative h-64 overflow-hidden shrink-0">
                <img
                    src={image || "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                    alt={title}
                    className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute top-4 left-0 px-4 py-1 bg-cyan-400 text-slate-950 text-tech !text-[9px] !font-black">
                    UNIT_TYPE: {title.toUpperCase()}
                </div>

                {/* Scanning Line Animation */}
                <div className="absolute top-[-100%] left-0 w-full h-[2px] bg-cyan-400/50 blur-sm group-hover:animate-[scan_2s_linear_infinite]"></div>
            </div>

            <div className="p-8 flex-1 flex flex-col space-y-8">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-2xl font-black text-white tracking-tight">{title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                            <div className="status-pip"></div>
                            <span className="text-tech opacity-40">Ready_To_Deploy</span>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="text-3xl font-black text-white font-mono">${price}</span>
                        <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">PER_DAY</p>
                    </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                    {description}
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                    <div className="space-y-1">
                        <p className="text-tech opacity-30">Payload</p>
                        <div className="flex items-center gap-2 text-white font-mono text-xs font-bold">
                            <User size={14} className="text-cyan-400" /> {capacity}_HUMAN
                        </div>
                    </div>
                    <div className="space-y-1">
                        <p className="text-tech opacity-30">Protocol</p>
                        <div className="flex items-center gap-2 text-white font-mono text-xs font-bold">
                            <Target size={14} className="text-cyan-400" /> DIVE_HUB
                        </div>
                    </div>
                </div>

                <button
                    onClick={onSelect}
                    className="btn-pro w-full justify-center !py-5"
                >
                    ALLOCATE_RESOURCES <HardDrive size={16} />
                </button>
            </div>

            <style jsx>{`
        @keyframes scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }
      `}</style>
        </div>
    );
}
