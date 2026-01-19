import { DollarSign, Calendar } from "lucide-react";

export default function ReportsPage() {
    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Financial Reports</h2>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium hover:bg-gray-200">Daily</button>
                    <button className="px-4 py-2 bg-[var(--color-sea-blue)] text-white rounded-lg text-sm font-medium shadow-md">Monthly</button>
                    <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium hover:bg-gray-200">Annual</button>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center mb-8 shadow-sm">
                <h3 className="text-gray-500 mb-2">Total Revenue (January 2026)</h3>
                <div className="text-5xl font-bold text-[var(--color-sea-blue)] mb-4">$4,290.00</div>
                <div className="text-sm text-green-600 font-medium flex items-center justify-center gap-1">
                    <span>▲ 12%</span>
                    <span>vs last month</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="font-bold text-gray-700">Revenue per Bed Type</h4>
                        <DollarSign size={16} className="text-gray-400" />
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Full Private Rooms</span>
                            <span className="font-bold">$2,200</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                            <div className="bg-[var(--color-sea-blue)] h-2 rounded-full" style={{ width: "60%" }}></div>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Shared Beds</span>
                            <span className="font-bold">$1,450</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                            <div className="bg-[var(--color-sand-gold)] h-2 rounded-full" style={{ width: "35%" }}></div>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Add-ons</span>
                            <span className="font-bold">$640</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                            <div className="bg-gray-400 h-2 rounded-full" style={{ width: "15%" }}></div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="font-bold text-gray-700">Occupancy Metrics</h4>
                        <Calendar size={16} className="text-gray-400" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <p className="text-xs text-blue-600 uppercase mb-1">Avg Daily Rate</p>
                            <p className="text-xl font-bold text-blue-900">$65</p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                            <p className="text-xs text-green-600 uppercase mb-1">RevPAR</p>
                            <p className="text-xl font-bold text-green-900">$51</p>
                        </div>
                        <div className="p-4 bg-purple-50 rounded-lg col-span-2">
                            <p className="text-xs text-purple-600 uppercase mb-1">Booking Lead Time</p>
                            <p className="text-xl font-bold text-purple-900">14 Days</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
