"use client";

import RoomCard from "./RoomCard";
import { PRICING_RULES } from "@/lib/constants";

const OFFERS = [
    {
        id: "single",
        title: "Backpacker Single",
        price: PRICING_RULES.perDay.sharedBed,
        capacity: 1,
        description: "One comfortable bed in a shared 4-bed room. Perfect for solo travelers and divers.",
        type: "shared" as const,
    },
    {
        id: "double",
        title: "Double Deal",
        price: PRICING_RULES.perDay.doubleBed,
        capacity: 2,
        description: "Two beds in the same room. Great for couples or friends traveling together.",
        type: "shared" as const,
    },
    {
        id: "private",
        title: "Private Room",
        price: PRICING_RULES.perDay.fullRoom,
        capacity: 4,
        description: "Entire 4-bed room for your privacy. Ideal for small groups or families.",
        type: "private" as const,
    },
    {
        id: "group-8",
        title: "2-Room Group",
        price: PRICING_RULES.perDay.twoRooms,
        capacity: 8,
        description: "Two full rooms (8 beds) for larger groups. ample space and privacy.",
        type: "multi" as const,
    },
];

export default function RoomsSection() {
    return (
        <section id="rooms" className="py-20 bg-white">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-[var(--color-sea-blue)] mb-4">Choose Your Stay</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        From a single bed in a shared room to private suites for your group. Flexible options for every traveler.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {OFFERS.map((offer) => (
                        <RoomCard
                            key={offer.id}
                            title={offer.title}
                            price={offer.price}
                            capacity={offer.capacity}
                            description={offer.description}
                            type={offer.type}
                            onSelect={() => window.location.href = "#book"} // Simple anchor link for MVP
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
