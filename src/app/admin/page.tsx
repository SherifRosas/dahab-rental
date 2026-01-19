import { TrendingUp, Users, DollarSign, AlertTriangle, Lightbulb } from "lucide-react";

export default function AdminDashboard() {
    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
                <div className="flex gap-4">
                    {/* Date Filter Mock */}
                    <span className="text-sm text-gray-500 self-center">Last 7 Days</span>
                    <button className="btn-secondary text-sm py-2 px-4 bg-white">Export Report</button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                    { label: "Total Revenue", value: "$4,290", icon: DollarSign, color: "text-green-600", bg: "bg-green-100" },
                    { label: "Occupancy Rate", value: "78%", icon: Users, color: "text-blue-600", bg: "bg-blue-100" },
                    { label: "New Bookings", value: "12", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-100" },
                    { label: "Pending Deposits", value: "3", icon: AlertTriangle, color: "text-orange-600", bg: "bg-orange-100" },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                        <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
                            <stat.icon size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">{stat.label}</p>
                            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Chart Area Placeholder */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-gray-700 mb-6">Revenue & Occupancy Trend</h3>
                    <div className="h-64 flex items-end justify-between gap-2 px-4">
                        {/* Mock Bars */}
                        {[40, 60, 45, 80, 70, 85, 90].map((h, i) => (
                            <div key={i} className="w-full bg-[var(--color-sea-blue)]/20 rounded-t-sm relative group overflow-hidden" style={{ height: `${h}%` }}>
                                <div className="absolute bottom-0 w-full bg-[var(--color-sea-blue)] hover:bg-[var(--color-sand-gold)] transition-colors h-full opacity-80"></div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-xs text-gray-400 uppercase tracking-wide">
                        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                    </div>
                </div>

                {/* Smart Suggestions Feed */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-6">
                        <Lightbulb className="text-[var(--color-sand-gold)]" size={24} />
                        <h3 className="font-bold text-gray-700">Smart Suggestions</h3>
                    </div>

                    <div className="space-y-4">
                        <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-lg">
                            <p className="text-sm font-semibold text-yellow-800 mb-1">Low Demand Alert</p>
                            <p className="text-xs text-yellow-700 mb-3">Occupancy next week is only 25%. Consider running a flash sale.</p>
                            <button className="text-xs bg-yellow-200 text-yellow-800 px-3 py-1.5 rounded-md font-bold hover:bg-yellow-300 transition-colors">Apply 10% Discount</button>
                        </div>

                        <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
                            <p className="text-sm font-semibold text-blue-800 mb-1">Language Insight</p>
                            <p className="text-xs text-blue-700">You had 5 German guests this month. Enhance your German guide?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
