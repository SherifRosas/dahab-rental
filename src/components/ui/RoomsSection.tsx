"use client";

import { PRICING_RULES } from "@/lib/constants";
import RoomCard from "./RoomCard";

export default function RoomsSection() {
    return (
        <section id="rooms" className="py-32 bg-[#F9FBFF] relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--color-sea-light)]/10 skew-x-12 translate-x-1/2"></div>

            <div className="container relative z-10">
                <div className="text-center mb-20 max-w-2xl mx-auto">
                    <span className="text-[var(--color-sea-blue)] font-black uppercase tracking-[0.4em] text-xs mb-4 block">Accommodations</span>
                    <h2 className="text-5xl font-black text-[var(--color-sea-deep)] mb-6 tracking-tighter">Choose Your <span className="text-[var(--color-sand-gold)]">Sanctuary.</span></h2>
                    <p className="text-gray-500 font-medium">From social dorms to private suites, find the perfect base for your Red Sea adventure.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <RoomCard
                        title="Backpacker Single"
                        price={PRICING_RULES.perDay.sharedBed}
                        capacity={1}
                        image="https://images.unsplash.com/photo-1555854817-5b2260d1bd63?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        description="Secure locker and personal light. Perfect for solo explorers on a budget."
                    />
                    <RoomCard
                        title="Double Deal"
                        price={PRICING_RULES.perDay.doubleBed}
                        capacity={2}
                        image="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        description="Two beds in one room. Great for dive buddies and friends traveling together."
                    />
                    <RoomCard
                        title="Private Room"
                        price={PRICING_RULES.perDay.fullRoom}
                        capacity={4}
                        image="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        description="The entire 4-bed room for your group. Maximum privacy and comfort."
                    />
                    <RoomCard
                        title="Premium Group"
                        price={PRICING_RULES.perDay.twoRooms}
                        capacity={8}
                        image="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        description="8 beds across two rooms. The ultimate group dive trip setup."
                    />
                </div>
            </div>
        </section>
    );
}
