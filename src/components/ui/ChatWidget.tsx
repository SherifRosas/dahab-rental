"use client";

import { useState, useEffect, useRef } from "react";
import { Terminal, X, Send, Cpu, Activity, Info, Eye, Zap } from "lucide-react";

interface Message {
    id: number;
    role: "user" | "assistant";
    text: string;
}

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, role: "assistant", text: "DAHAB_SYS::INITIALIZED. How can I assist with your deployment today, human? | أهلاً بك! كيف يمكنني مساعدتك في رحلتك اليوم؟" }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg: Message = { id: Date.now(), role: "user", text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        setTimeout(() => {
            const aiMsg: Message = { id: Date.now() + 1, role: "assistant", text: "DATA_FETCHED: Units available from $40.00. Reservation sequence ready for initialization. Proceed?" };
            setMessages(prev => [...prev, aiMsg]);
            setIsTyping(false);
        }, 1200);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100]">
            {/* Launch Trigger */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-16 h-16 bg-black border-2 border-cyan-400 text-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:scale-105 transition-all"
                >
                    <Cpu size={28} />
                </button>
            )}

            {/* Terminal Window */}
            {isOpen && (
                <div className="w-[380px] sm:w-[420px] bg-slate-950 border border-slate-800 shadow-2xl flex flex-col animate-in zoom-in-95 duration-200">

                    {/* Header */}
                    <div className="bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 border border-cyan-400/30 flex items-center justify-center bg-cyan-400/5">
                                <Terminal size={14} className="text-cyan-400" />
                            </div>
                            <div>
                                <h4 className="font-mono text-[11px] font-black text-white uppercase tracking-widest">CONCIERGE_BOT_V.1</h4>
                                <div className="flex items-center gap-2">
                                    <div className="status-glow"></div>
                                    <span className="text-[8px] font-mono text-cyan-400/60 uppercase">System_Linked</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors">
                            <X size={18} />
                        </button>
                    </div>

                    {/* Terminal Screen */}
                    <div ref={scrollRef} className="h-[400px] overflow-y-auto p-6 space-y-6 bg-black/40">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                <div className={`max-w-[90%] p-4 border font-mono text-[12px] leading-relaxed relative ${msg.role === "user"
                                    ? "bg-cyan-400/5 border-cyan-400/30 text-cyan-400"
                                    : "bg-slate-900 border-slate-700 text-slate-300"
                                    }`}>
                                    <div className={`absolute top-0 ${msg.role === "user" ? 'right-0' : 'left-0'} p-1 opacity-20`}>
                                        {msg.role === "user" ? <Info size={10} /> : <Eye size={10} />}
                                    </div>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="font-mono text-[10px] text-cyan-400 animate-pulse">
                                    RUNNING_QUERIES...
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input Vector */}
                    <div className="p-6 bg-slate-950 border-t border-slate-800">
                        <div className="relative flex items-center gap-3">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                placeholder="ENTER_CMD_OR_QUERY..."
                                className="flex-1 bg-black border border-slate-800 py-4 px-4 font-mono text-xs text-white placeholder-slate-700 focus:outline-none focus:border-cyan-400"
                            />
                            <button
                                onClick={handleSend}
                                className="w-12 h-12 bg-cyan-400 text-black flex items-center justify-center hover:bg-white transition-colors"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                        <div className="flex justify-between mt-4 font-mono text-[9px] text-slate-600 uppercase">
                            <span className="flex items-center gap-1"><Zap size={10} /> Fast_Response</span>
                            <span className="flex items-center gap-1"><ShieldCheck size={10} /> Encrypted_Channel</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function ShieldCheck({ size, className = "" }: { size: number, className?: string }) {
    return <Cpu size={size} className={className} />;
}
