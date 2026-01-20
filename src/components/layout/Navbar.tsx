"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Cpu, Globe, Activity } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [lang, setLang] = useState<"EN" | "AR">("EN");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLang = () => {
        const newLang = lang === "EN" ? "AR" : "EN";
        setLang(newLang);
        if (typeof document !== "undefined") {
            document.documentElement.dir = newLang === "AR" ? "rtl" : "ltr";
            document.body.classList.toggle("rtl", newLang === "AR");
        }
    };

    return (
        <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-3 border-b border-cyan-500/20' : 'bg-transparent py-6'}`}>
            <div className="container flex items-center justify-between">

                {/* Tech Logo */}
                <Link href="/" className="flex items-center gap-4 group">
                    <div className="relative">
                        <div className="w-10 h-10 border-2 border-cyan-400 flex items-center justify-center rotate-45 group-hover:rotate-180 transition-all duration-700 bg-cyan-400/10">
                            <Cpu size={20} className="text-cyan-400 -rotate-45 group-hover:-rotate-180 transition-all duration-700" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-black tracking-tighter text-white font-mono flex items-center">
                            SYSTEM<span className="text-cyan-400">.DAHAB</span>
                        </span>
                        <div className="flex items-center gap-2">
                            <div className="status-glow"></div>
                            <span className="text-[9px] font-bold text-cyan-400/60 uppercase tracking-[0.2em] font-mono">Diver_Node_Active</span>
                        </div>
                    </div>
                </Link>

                {/* Desktop Interface */}
                <div className="hidden md:flex items-center gap-10">
                    <div className="flex items-center gap-8 font-mono text-[11px] font-bold uppercase tracking-widest text-slate-400">
                        <Link href="#rooms" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                            <span className="opacity-30">01_</span> {lang === "EN" ? "Units" : "الغرف"}
                        </Link>
                        <Link href="#book" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                            <span className="opacity-30">02_</span> {lang === "EN" ? "Reserve" : "حجز"}
                        </Link>
                    </div>

                    <div className="flex items-center gap-4 border-l border-white/10 pl-10">
                        <button
                            onClick={toggleLang}
                            className="px-4 py-1.5 border border-cyan-400/30 text-cyan-400 font-mono text-[10px] font-black uppercase hover:bg-cyan-400/10 transition-colors"
                        >
                            {lang}
                        </button>

                        <Link href="/admin" className="btn-tech px-6 py-2.5">
                            {lang === "EN" ? "ADMIN_SYS" : "دخول النظام"}
                        </Link>
                    </div>
                </div>

                {/* Mobile Trigger */}
                <button
                    className="md:hidden p-2 text-cyan-400 border border-cyan-400/20 bg-cyan-400/5"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Terminal Menu */}
            {isOpen && (
                <div className="fixed inset-0 top-[70px] bg-black/95 z-50 p-6 flex flex-col gap-8 animate-in fade-in duration-200">
                    <div className="space-y-4">
                        <p className="font-mono text-[10px] text-cyan-400/40 uppercase tracking-[0.5em] mb-8">Accessing_Directory...</p>
                        <Link href="#rooms" onClick={() => setIsOpen(false)} className="block text-4xl font-mono font-black text-white hover:text-cyan-400 tracking-tighter">
                            UNITS.EXE
                        </Link>
                        <Link href="#book" onClick={() => setIsOpen(false)} className="block text-4xl font-mono font-black text-white hover:text-cyan-400 tracking-tighter">
                            RESERVE.SYS
                        </Link>
                    </div>

                    <div className="mt-auto space-y-4">
                        <button
                            onClick={() => { toggleLang(); setIsOpen(false); }}
                            className="w-full py-4 border border-cyan-400/20 text-cyan-400 font-mono text-sm font-black"
                        >
                            SWITCH_LANG: {lang === "EN" ? "ARABIC" : "ENGLISH"}
                        </button>
                        <Link href="/admin" className="btn-tech w-full justify-center py-4">
                            AUTHENTICATE_OWNER
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
