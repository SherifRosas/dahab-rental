"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Waves, Globe } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [lang, setLang] = useState<"EN" | "AR">("EN");

    const toggleLang = () => {
        const newLang = lang === "EN" ? "AR" : "EN";
        setLang(newLang);
        // Client-side DOM manipulation for RTL support
        if (typeof document !== "undefined") {
            document.documentElement.dir = newLang === "AR" ? "rtl" : "ltr";
            document.body.classList.toggle("rtl", newLang === "AR");
        }
    };

    return (
        <nav className="fixed w-full z-[100] px-4 md:px-0 top-6">
            <div className="container p-0">
                <div className="glass-v2 rounded-full px-6 py-4 flex items-center justify-between border-white/30">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="bg-[var(--color-sea-blue)] p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg">
                            <Waves className="text-white" size={24} />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-lg font-black tracking-tighter text-[var(--color-sea-deep)]">
                                DAHAB<span className="text-[var(--color-sand-gold)]">RENTAL</span>
                            </span>
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">Red Sea Base</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <nav className="flex items-center gap-6 mr-6 border-r border-gray-200 pr-8">
                            <Link href="#rooms" className="text-sm font-bold text-gray-600 hover:text-[var(--color-sea-blue)] transition-colors tracking-tight">
                                {lang === "EN" ? "Rooms" : "الغرف"}
                            </Link>
                            <Link href="#book" className="text-sm font-bold text-gray-600 hover:text-[var(--color-sea-blue)] transition-colors tracking-tight">
                                {lang === "EN" ? "Book Now" : "احجز الآن"}
                            </Link>
                        </nav>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={toggleLang}
                                className="flex items-center gap-2 p-1.5 pr-3 bg-gray-50 border border-gray-100 rounded-full text-[10px] font-black hover:bg-white transition-colors text-gray-500"
                            >
                                <div className="bg-[var(--color-sea-blue)] text-white p-1 rounded-full"><Globe size={12} /></div>
                                {lang}
                            </button>

                            <Link href="/admin" className="px-6 py-2.5 bg-[var(--color-sea-deep)] text-white rounded-full text-xs font-bold hover:bg-[var(--color-sea-blue)] transition-colors shadow-md">
                                {lang === "EN" ? "Owner Access" : "دخول الملوك"}
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-[var(--color-sea-deep)]"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="container p-0 mt-4">
                    <div className="glass-v2 rounded-[var(--radius-premium)] p-8 space-y-6 animate-in slide-in-from-top-4 duration-300">
                        <Link href="#rooms" onClick={() => setIsOpen(false)} className="block text-2xl font-black text-[var(--color-sea-deep)]">
                            {lang === "EN" ? "The Rooms" : "الغرف"}
                        </Link>
                        <Link href="#book" onClick={() => setIsOpen(false)} className="block text-2xl font-black text-[var(--color-sea-deep)]">
                            {lang === "EN" ? "Start Booking" : "احجز الآن"}
                        </Link>
                        <button
                            onClick={() => { toggleLang(); setIsOpen(false); }}
                            className="flex items-center gap-3 w-full text-left text-xl font-bold text-[var(--color-sea-blue)]"
                        >
                            <Globe size={24} />
                            Translate to {lang === "EN" ? "Arabic" : "English"}
                        </button>
                        <hr className="border-gray-100" />
                        <Link href="/admin" className="btn-premium w-full justify-center py-4">
                            {lang === "EN" ? "Owner Dashboard" : "دخول الملاك"}
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
