"use client";

import { PRICING_RULES } from "@/lib/constants";
import RoomCard from "./RoomCard";
import { Cpu } from "lucide-react";

export default function RoomsSection() {
    return (
        <section id="rooms" className="py-24 bg-black relative">
            {/* Decorative Grid Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-cyan-400/20 via-transparent to-transparent"></div>

            <div className="container relative z-10">
                <div className="mb-20 space-y-4">
                    <div className="flex items-center gap-4">
                        <Cpu className="text-cyan-400" size={24} />
                        <span className="font-mono text-[11px] font-black text-cyan-400 uppercase tracking-[0.5em]">AV_UNIT_DIRECTORY</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">SELECT_<span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>MODULE.</span></h2>
                    <p className="text-slate-500 font-mono text-sm max-w-xl">
                        Explore our high-performance accommodation units. Each node is optimized for rest, recovery, and high-speed data connectivity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <RoomCard
                        title="Shared Node"
                        price={PRICING_RULES.perDay.sharedBed}
                        capacity={1}
                        image="https://images.unsplash.com/photo-1555854817-5b2260d1bd63?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        description="Optimal social node with secure locker and personal terminal light. Solo diver priority."
                    />
                    <RoomCard
                        title="Double Vector"
                        price={PRICING_RULES.perDay.doubleBed}
                        capacity={2}
                        image="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        description="Parallel deployment for two agents. Enhanced space for dive equipment."
                    />
                    <RoomCard
                        title="Private Core"
                        price={PRICING_RULES.perDay.fullRoom}
                        capacity={4}
                        image="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        description="Full-room isolation for priority teams. Maximum privacy and local bandwidth."
                    />
                    <RoomCard
                        title="Nexus Group"
                        price={PRICING_RULES.perDay.twoRooms}
                        capacity={8}
                        image="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        description="Multi-node cluster for large expedition groups. Interconnected team base."
                    />
                </div>
            </div>
        </section>
    );
}
