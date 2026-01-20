"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal, Send, Cpu, Activity, Info, X, Maximize2, ShieldCheck } from "lucide-react";

interface Message {
    id: number;
    role: "user" | "assistant";
    text: string;
}

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, role: "assistant", text: "DAHAB_SYS::LINK_ESTABLISHED. Ready for query reception. | أهلاً بك في نظام ذهاب الذكي. كيف يمكنني مساعدتك؟" }
    ]);
    const [input, setInput] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;
        const userMsg: Message = { id: Date.now(), role: "user", text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");

        setTimeout(() => {
            const aiMsg: Message = { id: Date.now() + 1, role: "assistant", text: "DATABASE_QUERY::SUCCESS. Units available starting at $40.00/day. Protocol: ALLOCATE_UNIT is recommended." };
            setMessages(prev => [...prev, aiMsg]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-16 h-16 bg-cyan-400 text-slate-950 flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:scale-105 transition-all"
                >
                    <Terminal size={28} />
                </button>
            )}

            {isOpen && (
                <div className="w-[380px] sm:w-[500px] card-tech bg-slate-900 shadow-2xl flex flex-col animate-in zoom-in-95 duration-200">

                    {/* Dashboard Hub Header */}
                    <div className="p-5 border-b border-white/5 bg-slate-950/50 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 border border-cyan-400/20 flex items-center justify-center bg-cyan-400/5">
                                <Cpu size={18} className="text-cyan-400" />
                            </div>
                            <div>
                                <h4 className="font-mono text-xs font-black text-white uppercase tracking-widest leading-none">CONCIERGE_SYS_DX</h4>
                                <div className="flex items-center gap-2 mt-1">
                                    <div className="status-pip animate-pulse"></div>
                                    <span className="text-[9px] font-mono text-cyan-400 opacity-50 uppercase">Sync_Active</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="text-slate-500 hover:text-white transition-colors"><Maximize2 size={16} /></button>
                            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors"><X size={20} /></button>
                        </div>
                    </div>

                    {/* Terminal Console Output */}
                    <div ref={scrollRef} className="h-[400px] overflow-y-auto p-6 space-y-6 bg-black/40">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                <div className={`max-w-[85%] p-5 border font-mono text-[11px] leading-relaxed relative ${msg.role === "user"
                                        ? "bg-cyan-400/5 border-cyan-400/20 text-cyan-400"
                                        : "bg-slate-800/50 border-white/5 text-slate-300"
                                    }`}>
                                    <div className={`absolute top-0 ${msg.role === "user" ? 'right-4' : 'left-4'} px-2 bg-slate-900 -translate-y-1/2 text-[8px] font-black text-slate-600`}>
                                        {msg.role === "user" ? 'GUEST_INPUT' : 'SYSLOG_READOUT'}
                                    </div>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Command Vector Input */}
                    <div className="p-6 bg-slate-950 border-t border-white/5">
                        <div className="relative flex items-center gap-4">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                placeholder="ENTER_CMD_STRING..."
                                className="flex-1 bg-slate-900 border border-white/10 p-5 font-mono text-xs text-white placeholder-slate-800 outline-none focus:border-cyan-400/30"
                            />
                            <button
                                onClick={handleSend}
                                className="w-14 h-14 bg-cyan-400 text-slate-950 flex items-center justify-center hover:bg-white transition-all shrink-0"
                            >
                                <Send size={20} />
                            </button>
                        </div>
                        <div className="flex justify-between mt-5 font-mono text-[8px] text-slate-600 uppercase tracking-[0.2em]">
                            <span className="flex items-center gap-2"><Activity size={10} /> Latency: 4ms</span>
                            <span className="flex items-center gap-2"><ShieldCheck size={10} /> 256_Bit_Active</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
