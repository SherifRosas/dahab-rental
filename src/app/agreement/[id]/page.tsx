import { PROPERTY_CONFIG } from "@/lib/constants";
import { Printer } from "lucide-react";

export default function AgreementPage({ params }: { params: { id: string } }) {
    // Mock Data Fetching based on params.id
    const booking = {
        id: params.id,
        guestName: "Guest", // In real app, fetch from DB
        checkIn: "2024-02-01",
        checkOut: "2024-02-05",
        room: "Room 1 (Private)",
        totalPrice: 440,
        deposit: 220,
        createdAt: new Date().toLocaleDateString(),
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 print:bg-white print:py-0">
            <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden print:shadow-none">

                {/* Header - No Print */}
                <div className="bg-[var(--color-sea-blue)] p-4 text-white flex justify-between items-center print:hidden">
                    <div>
                        <h1 className="font-bold">Rental Agreement</h1>
                        <p className="text-sm opacity-80">Reference: {booking.id}</p>
                    </div>
                    {/* Client Component Button Wrapper would be better, but standard onclick works for print */}
                    <button
                        className="flex items-center gap-2 bg-white text-[var(--color-sea-blue)] px-4 py-2 rounded-lg font-bold hover:bg-gray-100"
                    //  onClick={() => window.print()} // Requires 'use client', omitted for Server Component simplicity. User uses browser print.
                    >
                        <Printer size={18} />
                        Print / Save as PDF
                    </button>
                </div>

                {/* Contract Content */}
                <div className="p-10 md:p-16 text-gray-800 leading-relaxed">
                    <div className="text-center mb-10 border-b border-gray-200 pb-10">
                        <h2 className="text-3xl font-bold uppercase tracking-widest text-gray-900 mb-2">{PROPERTY_CONFIG.name}</h2>
                        <p className="text-gray-500">Short-Term Rental Agreement</p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mb-10">
                        <div>
                            <h3 className="font-bold text-gray-400 text-xs uppercase tracking-wide mb-1">Guest Details</h3>
                            <p className="font-bold text-lg">{booking.guestName}</p>
                        </div>
                        <div className="text-right">
                            <h3 className="font-bold text-gray-400 text-xs uppercase tracking-wide mb-1">Booking Reference</h3>
                            <p className="font-mono text-lg">{booking.id}</p>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-100">
                        <div className="flex justify-between mb-2">
                            <span>Check-In:</span>
                            <span className="font-bold">{booking.checkIn} (After 2:00 PM)</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Check-Out:</span>
                            <span className="font-bold">{booking.checkOut} (Before 11:00 AM)</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Accommodation:</span>
                            <span className="font-bold">{booking.room}</span>
                        </div>
                    </div>

                    <h3 className="font-bold text-lg mb-4">Terms & Conditions</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-8 text-sm text-gray-600">
                        <li><strong>Payment:</strong> A 50% deposit of ${booking.deposit} has been received. The remaining balance of ${booking.totalPrice - booking.deposit} is due upon arrival.</li>
                        <li><strong>Cancellation:</strong> Deposits are non-refundable if cancelled within 7 days of arrival.</li>
                        <li><strong>House Rules:</strong> No loud parties after 10 PM. Please respect the local community and environment.</li>
                        <li><strong>Liability:</strong> The host is not responsible for lost or stolen items.</li>
                    </ul>

                    <div className="mt-16 pt-8 border-t border-gray-200 flex justify-between items-end">
                        <div className="w-1/2">
                            <p className="mb-4 font-script text-2xl text-[var(--color-sea-blue)]">Dahab Rental Team</p>
                            <div className="text-xs text-gray-400 uppercase border-t border-gray-300 pt-2 w-32">Host Signature</div>
                        </div>
                        <div className="w-1/2 text-right">
                            <p className="mb-4 text-gray-400 italic">[Digitally Accepted]</p>
                            <div className="text-xs text-gray-400 uppercase border-t border-gray-300 pt-2 w-32 ml-auto">Guest Signature</div>
                        </div>
                    </div>

                    <div className="text-center mt-12 text-xs text-gray-400">
                        Generated on {booking.createdAt} • ID: {booking.id}
                    </div>
                </div>
            </div>
        </div>
    );
}
