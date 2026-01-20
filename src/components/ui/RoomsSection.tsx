"use client";

import { PRICING_RULES } from "@/lib/constants";
import RoomCard from "./RoomCard";
import { Terminal, Layers } from "lucide-react";

export default function RoomsSection() {
    return (
        <section id="rooms" className="py-32 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-10"></div>

            <div className="container relative z-10">
                <div className="mb-24 space-y-6">
                    <div className="flex items-center gap-4">
                        <Layers className="text-cyan-400" size={24} />
                        <span className="text-tech">UNIT_CLUSTER_DIRECTORY_V3.9</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter shadow-cyan-400/10">SELECT_UNIT.</h2>
                    <p className="text-slate-400 font-medium text-lg max-w-2xl leading-relaxed">
                        Access high-performance deployment nodes in the Dahab Lighthouse sector. Each unit is calibrated for deep recovery and professional productivity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-px md:bg-white/5 border border-white/5">
                    <RoomCard
                        title="Shared Pod"
                        price={PRICING_RULES.perDay.sharedBed}
                        capacity={1}
                        image="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=800"
                        description="Optimal social node with secure locker and personal terminal light. Solo diver priority."
                    />
                    <RoomCard
                        title="Double Vector"
                        price={PRICING_RULES.perDay.doubleBed}
                        capacity={2}
                        image="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        description="Parallel deployment for two agents. Enhanced space for dive equipment and data gear."
                    />
                    <RoomCard
                        title="Private Core"
                        price={PRICING_RULES.perDay.fullRoom}
                        capacity={4}
                        image="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        description="Full-room isolation for priority teams. Maximum privacy and local bandwidth allocation."
                    />
                    <RoomCard
                        title="Nexus Cluster"
                        price={PRICING_RULES.perDay.twoRooms}
                        capacity={8}
                        image="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        description="Multi-node cluster for large expedition groups. Interconnected team base with dedicated hub."
                    />
                </div>
            </div>

            {/* Side HUD Detail */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 hidden xl:block">
                <span className="text-tech opacity-10">SYS_QUERY_ACTIVE // 16_NODES_DETECTION_POSITIVE</span>
            </div>
        </section>
    );
}
