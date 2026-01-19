"use client";

import { useState } from "react";
import BookingCalendar from "./BookingCalendar";
import { PRICING_RULES, PROPERTY_CONFIG } from "@/lib/constants";
import { CheckCircle, AlertCircle, CreditCard } from "lucide-react";

// Mock Offers for selection (Duplicate of RoomsSection for MVP logic self-containment)
// In a real app, fetch from API
const OFFERS = [
    { id: "single", title: "Backpacker Single", price: PRICING_RULES.perDay.sharedBed, capacity: 1, type: "shared" as const, desc: "One bed in shared room" },
    { id: "double", title: "Double Deal", price: PRICING_RULES.perDay.doubleBed, capacity: 2, type: "shared" as const, desc: "Two beds in shared room" },
    { id: "private", title: "Private Room", price: PRICING_RULES.perDay.fullRoom, capacity: 4, type: "private" as const, desc: "Full 4-bed private room" },
    { id: "group-8", title: "2-Room Group", price: PRICING_RULES.perDay.twoRooms, capacity: 8, type: "multi" as const, desc: "Two private rooms" },
];

export default function BookingForm() {
    const [step, setStep] = useState<"search" | "select" | "review" | "payment" | "confirmed">("search");
    const [dates, setDates] = useState<{ start: string; end: string } | null>(null);
    const [selectedOffer, setSelectedOffer] = useState<typeof OFFERS[0] | null>(null);

    const handleSearch = (d: { start: string; end: string }) => {
        setDates(d);
        setStep("select");
    };

    const handleSelect = (offer: typeof OFFERS[0]) => {
        setSelectedOffer(offer);
        setStep("review");
    };

    const handlePay = () => {
        setStep("payment");
        // Mock payment delay
        setTimeout(() => {
            setStep("confirmed");
        }, 2000);
    };

    const totalDays = dates ? Math.max(1, Math.floor((new Date(dates.end).getTime() - new Date(dates.start).getTime()) / (1000 * 3600 * 24))) : 1;
    const totalPrice = selectedOffer ? selectedOffer.price * totalDays : 0;
    const deposit = totalPrice * PROPERTY_CONFIG.depositPercentage;

    return (
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-8 max-w-5xl mx-auto">

            {/* Step Indicator */}
            <div className="flex items-center justify-between mb-8 text-sm font-bold text-gray-400 border-b border-gray-100 pb-4">
                <span className={step === "search" || step === "select" ? "text-[var(--color-sea-blue)]" : ""}>1. Dates & Room</span>
                <span className={step === "review" ? "text-[var(--color-sea-blue)]" : ""}>2. Review</span>
                <span className={step === "payment" ? "text-[var(--color-sea-blue)]" : ""}>3. Payment</span>
                <span className={step === "confirmed" ? "text-[var(--color-sea-blue)]" : ""}>4. Done</span>
            </div>

            {/* STEP 1: Search & Select */}
            {step === "search" && (
                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-6">Select Your Dates</h3>
                    <BookingCalendar onSearch={handleSearch} />
                </div>
            )}

            {step === "select" && (
                <div>
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold">Select Accommodation</h3>
                        <button onClick={() => setStep("search")} className="text-sm underline text-gray-500">Change Dates</button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {OFFERS.map(offer => (
                            <div key={offer.id} onClick={() => handleSelect(offer)} className="cursor-pointer border hover:border-[var(--color-sea-blue)] rounded-xl p-4 transition-all">
                                <div className="flex justify-between font-bold text-lg mb-1">
                                    <span>{offer.title}</span>
                                    <span className="text-[var(--color-sea-blue)]">${offer.price}</span>
                                </div>
                                <p className="text-sm text-gray-500">{offer.desc}</p>
                                <div className="text-xs text-[var(--color-sand-gold)] font-bold mt-2 uppercase">Max {offer.capacity} Guests</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* STEP 2: Review */}
            {step === "review" && selectedOffer && dates && (
                <div className="max-w-md mx-auto">
                    <h3 className="text-2xl font-bold mb-6 text-center">Booking Summary</h3>
                    <div className="bg-[var(--color-sand-light)] p-6 rounded-xl mb-6">
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600">Dates</span>
                            <span className="font-bold">{dates.start} to {dates.end}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600">Nights</span>
                            <span className="font-bold">{totalDays}</span>
                        </div>
                        <div className="flex justify-between mb-4 pb-4 border-b border-gray-300">
                            <span className="text-gray-600">Room</span>
                            <span className="font-bold">{selectedOffer.title}</span>
                        </div>

                        <div className="flex justify-between mb-2 text-lg">
                            <span>Total Price</span>
                            <span className="font-bold">${totalPrice}</span>
                        </div>
                        <div className="flex justify-between text-[var(--color-sea-blue)] font-bold text-xl mt-4 pt-4 border-t border-white">
                            <span>Deposit (50%)</span>
                            <span>${deposit}</span>
                        </div>
                    </div>

                    <button onClick={handlePay} className="btn-primary w-full py-4 text-lg shadow-lg">
                        Proceed to Payment
                    </button>
                    <button onClick={() => setStep("select")} className="w-full text-center py-4 text-gray-500 text-sm mt-2">
                        Back
                    </button>
                </div>
            )}

            {/* STEP 3: Mock Payment (Stripe Placeholder) */}
            {step === "payment" && (
                <div className="max-w-md mx-auto text-center py-10">
                    <CreditCard size={48} className="mx-auto text-[var(--color-sea-blue)] mb-4 animate-pulse" />
                    <h3 className="text-2xl font-bold mb-4">Processing Secure Payment...</h3>
                    <p className="text-gray-500 mb-8">This is a mock Stripe integration for the MVP.</p>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[var(--color-sea-blue)] animate-[width_2s_ease-in-out_forwards] w-full"></div>
                    </div>
                </div>
            )}

            {/* STEP 4: Confirmed */}
            {step === "confirmed" && (
                <div className="text-center py-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-6">
                        <CheckCircle size={40} />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-[var(--color-sea-blue)]">Booking Confirmed!</h3>
                    <p className="text-gray-600 max-w-md mx-auto mb-8">
                        We have sent a confirmation email to you. Your 50% deposit has been received.
                        <br />
                        <strong>See you in Dahab!</strong>
                    </p>
                    <AlertCircle size={20} className="inline mr-2 text-[var(--color-sand-gold)]" />
                    <span className="text-sm text-gray-500">Wait for your digital agreement shortly.</span>
                </div>
            )}

        </div>
    );
}
