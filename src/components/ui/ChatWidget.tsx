"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Mic } from "lucide-react";

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
    }, [messages]);

    // Voice Support
    const handleVoice = () => {
        if (!('webkitSpeechRecognition' in window)) {
            alert("Voice not supported in this browser. Try Chrome.");
            return;
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const recognition = new (window as any).webkitSpeechRecognition();
        recognition.lang = 'en-US'; // Default to English for MVP
        recognition.start();

        setIsTyping(true);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript;
            setInput(transcript);
            handleSend(transcript); // Auto-send
            setIsTyping(false);
        };

        recognition.onerror = () => {
            setIsTyping(false);
        };
    };

    // Update handleSend to accept optional text override
    const handleSend = async (overrideText?: string) => {
        const textToSend = overrideText || input;
        if (!textToSend.trim()) return;

        const userMsg: Message = { id: Date.now(), role: "user", text: textToSend };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: textToSend, language: "auto" }),
            });
            const data = await res.json();

            const botMsg: Message = { id: Date.now() + 1, role: "assistant", text: data.reply || "I'm having trouble connecting to the sea. Try again?" };
            setMessages(prev => [...prev, botMsg]);

            // Speak text
            if ('speechSynthesis' in window) {
                const ut = new SpeechSynthesisUtterance(botMsg.text);
                window.speechSynthesis.speak(ut);
            }

        } catch {
            setMessages(prev => [...prev, { id: Date.now() + 1, role: "assistant", text: "Connection error. Please check your internet." }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="bg-white w-80 sm:w-96 rounded-2xl shadow-2xl border border-gray-100 overflow-hidden mb-4 animate-in slide-in-from-bottom-5 fade-in duration-200">
                    {/* Header */}
                    <div className="bg-[var(--color-sea-blue)] p-4 text-white flex justify-between items-center">
                        <div>
                            <h3 className="font-bold">Dahab Assistant</h3>
                            <span className="text-xs text-blue-100 flex items-center gap-1">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                Online • Multilingual
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <a
                                href="https://wa.me/201000000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                                title="Chat on WhatsApp"
                            >
                                <MessageCircle size={20} className="fill-green-400 text-green-400" />
                            </a>
                            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white" aria-label="Close chat">
                                <X size={20} />
                            </button>
                        </div>
                    </div>
                    {/* Messages */}
                    <div className="h-80 overflow-y-auto p-4 bg-gray-50" ref={scrollRef}>
                        {messages.map(msg => (
                            <div key={msg.id} className={`flex mb-4 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${msg.role === "user"
                                    ? "bg-[var(--color-sea-blue)] text-white rounded-br-none"
                                    : "bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm"
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start mb-4">
                                <div className="bg-white border border-gray-200 rounded-2xl p-3 rounded-bl-none shadow-sm flex gap-1 items-center">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            placeholder="Ask about prices, diving..."
                            className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-sea-blue)]/20"
                        />
                        <button onClick={handleVoice} className="p-2 text-gray-400 hover:text-[var(--color-sand-gold)] transition-colors" aria-label="Voice input via Web Speech API">
                            <Mic size={20} />
                        </button>
                        <button onClick={() => handleSend()} className="p-2 bg-[var(--color-sand-gold)] text-white rounded-full hover:bg-yellow-600 transition-colors shadow-sm" aria-label="Send message">
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-[var(--color-sea-blue)] text-white rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group"
                aria-label="Toggle chat"
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />}
            </button>
        </div>
    );
}
