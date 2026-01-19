"use client";

import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Mic, Volume2, Waves, Globe, User } from "lucide-react";

interface Message {
    id: number;
    role: "user" | "assistant";
    text: string;
}

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, role: "assistant", text: "Welcome to Dahab Rental! How can I help you today? 🌊 | أهلاً بك في دهب رنتال! كيف يمكنني مساعدتك اليوم؟" }
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

        // Mock AI response
        setTimeout(() => {
            const aiMsg: Message = { id: Date.now() + 1, role: "assistant", text: "That sounds like a great plan! We have beds available for those dates starting at $40. Would you like me to book that for you?" };
            setMessages(prev => [...prev, aiMsg]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            {/* Chat Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-16 h-16 bg-[var(--color-sea-blue)] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-float border-4 border-white"
                >
                    <Waves size={32} />
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="glass-v2-dark w-96 rounded-[var(--radius-premium)] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-300 border-white/20">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[var(--color-sea-blue)] to-[var(--color-sea-deep)] p-6 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                                    <Waves size={20} className="text-white" />
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-[var(--color-sea-deep)] rounded-full"></div>
                            </div>
                            <div>
                                <h4 className="font-black text-white text-sm tracking-tight">Dahab AI Assistant</h4>
                                <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest">Always Online</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div ref={scrollRef} className="h-96 overflow-y-auto p-6 space-y-6 scroll-smooth bg-white/5">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium leading-relaxed shadow-lg ${msg.role === "user"
                                        ? "bg-[var(--color-sea-blue)] text-white rounded-tr-none"
                                        : "bg-white/10 text-white border border-white/10 backdrop-blur-md rounded-tl-none"
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none flex gap-1">
                                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce"></div>
                                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <div className="p-6 bg-white/5 border-t border-white/10">
                        <div className="relative flex items-center gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                placeholder="Ask about rooms, diving, or prices..."
                                className="flex-1 bg-white/10 border border-white/10 rounded-full py-4 px-6 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 ring-[var(--color-sea-blue)]"
                            />
                            <button
                                onClick={handleSend}
                                className="w-12 h-12 bg-[var(--color-sea-blue)] text-white rounded-full flex items-center justify-center hover:bg-[var(--color-sea-deep)] transition-colors shadow-lg"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                        <div className="flex justify-center gap-6 mt-4">
                            <button className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors flex items-center gap-2">
                                <Mic size={14} /> Voice Input
                            </button>
                            <button className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors flex items-center gap-2">
                                <MessageSquare size={14} /> WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
