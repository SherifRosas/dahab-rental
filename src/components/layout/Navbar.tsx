"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Terminal, Globe, LayoutGrid, X, Cpu, Activity } from "lucide-react";

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
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
            <div className="container flex items-center justify-between">

                {/* Brand Terminal */}
                <Link href="/" className="flex items-center gap-4 group shrink-0">
                    <div className="w-10 h-10 bg-cyan-400 text-slate-950 flex items-center justify-center">
                        <Cpu size={20} className="group-hover:rotate-90 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-black tracking-tight text-white leading-none">
                            DAHAB<span className="text-cyan-400">.SYS</span>
                        </span>
                        <div className="flex items-center gap-2 mt-1">
                            <div className="status-pip animate-pulse"></div>
                            <span className="text-tech opacity-50">NODE_01_ACTIVE</span>
                        </div>
                    </div>
                </Link>

                {/* Global Controls */}
                <div className="hidden md:flex items-center gap-10">
                    <nav className="flex items-center gap-8 text-tech !opacity-70">
                        <Link href="#rooms" className="hover:text-white transition-colors">DIRECTORY.DIR</Link>
                        <Link href="#book" className="hover:text-white transition-colors">ALLOCATE.SH</Link>
                    </nav>

                    <div className="flex items-center gap-6 border-l border-white/10 pl-10">
                        <button
                            onClick={toggleLang}
                            className="flex items-center gap-2 text-tech opacity-50 hover:opacity-100 transition-opacity"
                        >
                            <Globe size={14} /> [{lang}]
                        </button>
                        <Link href="/admin" className="btn-pro !px-6 !py-3">
                            ADMIN_AUTH <Activity size={14} />
                        </Link>
                    </div>
                </div>

                {/* Mobile Input Trigger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden w-10 h-10 border border-white/10 flex items-center justify-center text-cyan-400"
                >
                    {isOpen ? <X size={20} /> : <LayoutGrid size={20} />}
                </button>
            </div>

            {/* Terminal Overlay */}
            {isOpen && (
                <div className="mobile-overlay flex flex-col gap-12 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="space-y-2">
                        <span className="text-tech">Terminal_Session_Initialised</span>
                        <div className="h-px bg-white/5 w-full"></div>
                    </div>

                    <div className="space-y-8">
                        <Link href="#rooms" onClick={() => setIsOpen(false)} className="block text-5xl font-black text-white hover:text-cyan-400 tracking-tighter">UNITS.DIR</Link>
                        <Link href="#book" onClick={() => setIsOpen(false)} className="block text-5xl font-black text-white hover:text-cyan-400 tracking-tighter">RESERVE.BAT</Link>
                    </div>

                    <div className="mt-auto space-y-4">
                        <button
                            onClick={() => { toggleLang(); setIsOpen(false); }}
                            className="w-full py-5 border border-white/5 text-tech"
                        >
                            SWAP_LANG: {lang === "EN" ? "ARABIC" : "ENGLISH"}
                        </button>
                        <Link href="/admin" className="btn-pro w-full justify-center py-5">
                            ACCESS_ROOT_SYSTEM
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
