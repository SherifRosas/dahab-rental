"use client";

import { User, Bed } from "lucide-react";

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
        <div className="group glass-v2 rounded-[var(--radius-premium)] overflow-hidden hover-lift flex flex-col h-full border-white/20">
            {/* Background Image with Overlay */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={image || "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-sea-deep)]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                    <span className="bg-[var(--color-sand-gold)] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                        Dahab Selection
                    </span>
                </div>
            </div>

            <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-black text-[var(--color-sea-deep)] leading-tight">{title}</h3>
                    <div className="text-right">
                        <span className="text-3xl font-black text-[var(--color-sea-blue)]">${price}</span>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Per Night</p>
                    </div>
                </div>

                <p className="text-gray-500 text-sm mb-8 line-clamp-2 font-medium leading-relaxed">
                    {description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-2 text-gray-600 bg-gray-50 p-2 rounded-xl border border-gray-100">
                        <User size={16} className="text-[var(--color-sea-blue)]" />
                        <span className="text-xs font-bold">{capacity} People</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 bg-gray-50 p-2 rounded-xl border border-gray-100">
                        <Bed size={16} className="text-[var(--color-sea-blue)]" />
                        <span className="text-xs font-bold">Premium Bed</span>
                    </div>
                </div>

                <button
                    onClick={onSelect}
                    className="w-full btn-premium py-4 justify-center group-hover:shadow-2xl transition-all"
                >
                    Check Availability
                </button>
            </div>
        </div>
    );
}
