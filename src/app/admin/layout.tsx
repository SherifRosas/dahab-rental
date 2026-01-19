import Link from "next/link";
import { LayoutDashboard, CalendarDays, BarChart, Settings, LogOut, Rocket } from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
                <div className="p-6 border-b border-gray-100">
                    <h1 className="text-xl font-bold text-[var(--color-sea-blue)]">Dahab Admin</h1>
                    <p className="text-xs text-gray-400">Owner Dashboard</p>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <Link href="/admin" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors hover:text-[var(--color-sea-blue)]">
                        <LayoutDashboard size={20} />
                        <span className="font-medium">Overview</span>
                    </Link>
                    <Link href="/admin/bookings" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors hover:text-[var(--color-sea-blue)]">
                        <CalendarDays size={20} />
                        <span className="font-medium">Bookings</span>
                    </Link>
                    <Link href="/admin/reports" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors hover:text-[var(--color-sea-blue)]">
                        <BarChart size={20} />
                        <span className="font-medium">Reports</span>
                    </Link>
                    <Link href="/admin/marketing" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors hover:text-[var(--color-sea-blue)]">
                        <Rocket size={20} />
                        <span className="font-medium">Growth & AI</span>
                    </Link>
                    <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors hover:text-[var(--color-sea-blue)]">
                        <Settings size={20} />
                        <span className="font-medium">Settings</span>
                    </Link>
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <button className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-lg w-full transition-colors">
                        <LogOut size={20} />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto h-screen">
                <header className="bg-white border-b border-gray-200 p-4 md:hidden flex justify-between items-center">
                    <span className="font-bold text-[var(--color-sea-blue)]">Dahab Admin</span>
                    {/* Mobile Menu Toggle Mock */}
                    <button className="text-gray-500">Menu</button>
                </header>
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
