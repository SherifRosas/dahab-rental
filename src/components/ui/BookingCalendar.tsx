"use client";

import { Calendar, ArrowRight } from "lucide-react";
import { useState } from "react";

interface BookingCalendarProps {
    onSearch: (dates: { start: string; end: string }) => void;
}

export default function BookingCalendar({ onSearch }: BookingCalendarProps) {
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (start && end) {
            onSearch({ start, end });
        }
    };

    return (
        <div className="glass-panel p-6 max-w-4xl mx-auto -mt-10 relative z-20 bg-white/80">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-end">
                {/* Check In */}
                <div className="flex-1 w-full">
                    <label htmlFor="check-in-date" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Check In
                    </label>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-3 text-[var(--color-sea-blue)]" size={20} />
                        <input
                            id="check-in-date"
                            aria-label="Check In Date"
                            type="date"
                            value={start}
                            onChange={(e) => setStart(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--color-sand-gold)] focus:ring-2 focus:ring-[var(--color-sand-gold)]/20 outline-none transition-all"
                            required
                        />
                    </div>
                </div>

                {/* Check Out */}
                <div className="flex-1 w-full">
                    <label htmlFor="check-out-date" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Check Out
                    </label>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-3 text-[var(--color-sea-blue)]" size={20} />
                        <input
                            id="check-out-date"
                            aria-label="Check Out Date"
                            type="date"
                            value={end}
                            onChange={(e) => setEnd(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--color-sand-gold)] focus:ring-2 focus:ring-[var(--color-sand-gold)]/20 outline-none transition-all"
                            required
                        />
                    </div>
                </div>

                {/* Search Button */}
                <div className="w-full md:w-auto">
                    <button
                        type="submit"
                        className="w-full md:w-auto btn-primary py-3 px-8 text-lg shadow-lg flex items-center justify-center gap-2"
                    >
                        Check Availability
                        <ArrowRight size={20} />
                    </button>
                </div>
            </form>
        </div>
    );
}
