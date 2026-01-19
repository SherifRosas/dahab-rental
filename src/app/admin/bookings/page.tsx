"use client";

import { useState } from "react";
import { Plus, Search, Filter, MoreHorizontal, FileText } from "lucide-react";

// Mock Data
const MOCK_BOOKINGS = [
    { id: "BK-1001", guest: "Alice Walker", room: "Room 1 (Private)", dates: "Jan 12 - Jan 15", status: "confirmed", amount: 330, deposit: 165 },
    { id: "BK-1002", guest: "Bob Smith", room: "Bed 3 (Shared)", dates: "Jan 14 - Jan 20", status: "pending", amount: 240, deposit: 120 },
    { id: "BK-1003", guest: "Charlie Brown", room: "Room 2 (Double)", dates: "Jan 18 - Jan 22", status: "confirmed", amount: 240, deposit: 120 },
    { id: "BK-1004", guest: "David Lee", room: "Bed 1 (Shared)", dates: "Jan 20 - Jan 21", status: "checked-in", amount: 40, deposit: 20 },
];

export default function BookingsPage() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Bookings</h2>
                <button className="btn-primary flex items-center gap-2 text-sm shadow-md">
                    <Plus size={18} />
                    New Booking
                </button>
            </div>

            {/* Toolbar */}
            <div className="glass-panel p-4 mb-6 bg-white flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="relative w-full sm:max-w-md">
                    <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search guests, IDs..."
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-sea-blue)]/20"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                        <Filter size={16} />
                        Filter
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                        <FileText size={16} />
                        Export
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Booking ID</th>
                            <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Guest</th>
                            <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Room/Bed</th>
                            <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Dates</th>
                            <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Amout</th>
                            <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {MOCK_BOOKINGS.filter(b => b.guest.toLowerCase().includes(searchTerm.toLowerCase())).map((booking) => (
                            <tr key={booking.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="p-4 font-mono text-xs text-gray-500">{booking.id}</td>
                                <td className="p-4 font-medium text-gray-900">{booking.guest}</td>
                                <td className="p-4 text-sm text-gray-600">{booking.room}</td>
                                <td className="p-4 text-sm text-gray-600">{booking.dates}</td>
                                <td className="p-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                           ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800' : ''}
                           ${booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                           ${booking.status === 'checked-in' ? 'bg-blue-100 text-blue-800' : ''}
                        `}>
                                        {booking.status}
                                    </span>
                                </td>
                                <td className="p-4 text-sm font-bold text-gray-800 text-right">${booking.amount}</td>
                                <td className="p-4 text-center">
                                    <button className="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-600" aria-label="More options">
                                        <MoreHorizontal size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
