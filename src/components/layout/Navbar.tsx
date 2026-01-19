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
        <nav className="fixed w-full z-50 backdrop-blur-md bg-white/70 border-b border-white/20 shadow-sm">
            <div className="container flex items-center justify-between h-20">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-[var(--color-sea-blue)] p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
                        <Waves className="text-white" size={24} />
                    </div>
                    <span className="text-xl font-black tracking-tighter text-[var(--color-sea-blue)]">
                        DAHAB<span className="text-[var(--color-sand-gold)]">RENTAL</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="#rooms" className="text-sm font-bold text-gray-700 hover:text-[var(--color-sea-blue)] transition-colors uppercase tracking-widest">
                        {lang === "EN" ? "Rooms" : "الغرف"}
                    </Link>
                    <Link href="#book" className="text-sm font-bold text-gray-700 hover:text-[var(--color-sea-blue)] transition-colors uppercase tracking-widest">
                        {lang === "EN" ? "Book Now" : "احجز الآن"}
                    </Link>

                    <button
                        onClick={toggleLang}
                        className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-full text-xs font-bold hover:bg-gray-50 transition-colors"
                    >
                        <Globe size={14} />
                        {lang}
                    </button>

                    <Link href="/admin" className="btn-primary text-xs py-2 px-6 shadow-md">
                        {lang === "EN" ? "Owner Login" : "دخول الملاك"}
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 p-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
                    <Link href="#rooms" onClick={() => setIsOpen(false)} className="block text-lg font-bold text-gray-800">
                        {lang === "EN" ? "Rooms" : "الغرف"}
                    </Link>
                    <Link href="#book" onClick={() => setIsOpen(false)} className="block text-lg font-bold text-gray-800">
                        {lang === "EN" ? "Book Now" : "احجز الآن"}
                    </Link>
                    <button
                        onClick={() => { toggleLang(); setIsOpen(false); }}
                        className="flex items-center gap-2 w-full text-left text-lg font-bold text-gray-800"
                    >
                        <Globe size={20} />
                        Switch to {lang === "EN" ? "Arabic" : "English"}
                    </button>
                    <Link href="/admin" className="btn-primary inline-block w-full text-center py-3">
                        {lang === "EN" ? "Owner Login" : "دخول الملاك"}
                    </Link>
                </div>
            )}
        </nav>
    );
}
