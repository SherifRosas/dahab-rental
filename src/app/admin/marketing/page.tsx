"use client";

import { useState } from "react";
import { Share2, Globe, Hash, Users, Sparkles, Copy, ExternalLink, MessageSquare } from "lucide-react";

export default function MarketingPage() {
    const [isGenerating, setIsGenerating] = useState(false);
    const [postDraft, setPostDraft] = useState("");

    const generatePost = () => {
        setIsGenerating(true);
        // Mock AI delay
        setTimeout(() => {
            setPostDraft("🌊 Escape to Dahab! \n\nDiving into the week at the Lighthouse. Our shared beds start at just $40/day. Best vibes, high-speed WiFi, and the world's best diving at your doorstep. \n\nBook now via the link in bio! #DahabRental #DivingEgypt #BackpackerLife");
            setIsGenerating(false);
        }, 1500);
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Growth & Marketing</h2>
                <div className="flex gap-2">
                    <button className="btn-secondary text-sm">
                        <Globe size={16} className="mr-2" />
                        View Multilingual SEO
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* AI Social Media Assistant */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                    <div className="flex items-center gap-2 mb-6">
                        <Sparkles className="text-purple-600" size={24} />
                        <h3 className="font-bold text-gray-700">AI Social Post Generator</h3>
                    </div>

                    <div className="space-y-4">
                        <div className="p-4 bg-purple-50 rounded-lg text-sm text-purple-800">
                            <strong>Occupancy Insight:</strong> Your occupancy is 35% for next weekend. AI suggests a &quot;Weekend Special&quot; post.
                        </div>

                        <div className="flex gap-4">
                            <button onClick={generatePost} className="btn-primary bg-purple-600 flex-1 hover:bg-purple-700">
                                Generate Weekend Post
                            </button>
                            <button className="btn-secondary">Custom Topic</button>
                        </div>

                        {postDraft && (
                            <div className="mt-6 animate-in fade-in duration-500">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs font-bold text-gray-400 uppercase">AI Draft</span>
                                    <div className="flex gap-2">
                                        <button className="p-1.5 hover:bg-gray-100 rounded text-gray-500" title="Copy to clipboard">
                                            <Copy size={16} />
                                        </button>
                                    </div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg font-sans text-sm border border-gray-100 whitespace-pre-wrap">
                                    {postDraft}
                                </div>
                                <div className="flex gap-2 mt-4">
                                    <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 flex items-center justify-center gap-2">
                                        <Share2 size={16} /> Post to Facebook
                                    </button>
                                    <button className="flex-1 py-2 bg-pink-600 text-white rounded-lg text-sm font-bold hover:bg-pink-700 flex items-center justify-center gap-2">
                                        <Share2 size={16} /> Post to Instagram
                                    </button>
                                </div>
                            </div>
                        )}

                        {isGenerating && (
                            <div className="py-10 text-center">
                                <div className="w-8 h-8 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-2"></div>
                                <p className="text-xs text-gray-500">AI is analyzing Dahab trends and your availability...</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Lead Discovery / Scraping */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                    <div className="flex items-center gap-2 mb-6">
                        <Users className="text-blue-600" size={24} />
                        <h3 className="font-bold text-gray-700">Lead Discovery (Account Scraping)</h3>
                    </div>

                    <div className="space-y-4">
                        <div className="relative">
                            <Hash className="absolute left-3 top-3 text-gray-300" size={16} />
                            <input
                                type="text"
                                defaultValue="Dahab Travelers, Diving Dahab"
                                aria-label="Target keywords for lead discovery"
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50"
                            />
                        </div>
                        <button className="w-full py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-bold hover:bg-blue-200">
                            Run Lead Scan
                        </button>

                        <div className="pt-4">
                            <h4 className="text-xs font-bold text-gray-400 uppercase mb-3">Recent Identified Leads</h4>
                            <div className="space-y-3">
                                {[
                                    { handle: "diver_jonas", platform: "Instagram", trigger: "Asked about #BlueHole beds" },
                                    { handle: "travel_sarah", platform: "TripAdvisor", trigger: "Looking for Dahab monthly rental" },
                                    { handle: "nomad_alex", platform: "X", trigger: "Mentioned Dahab coworking vibes" },
                                ].map((lead, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                                        <div>
                                            <p className="text-sm font-bold text-gray-800">@{lead.handle}</p>
                                            <p className="text-[10px] text-gray-500 uppercase font-bold">{lead.platform} • {lead.trigger}</p>
                                        </div>
                                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full" title="Send AI Outreach">
                                            <MessageSquare size={18} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Global SEO Status */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <div className="flex items-center gap-2 mb-6">
                    <Globe className="text-green-600" size={24} />
                    <h3 className="font-bold text-gray-700">Global Search Presence (SEO)</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { lang: "English", rank: "#2 (Dahab Rooms)", drift: "up" },
                        { lang: "German", rank: "#4 (Dahab Unterkunft)", drift: "up" },
                        { lang: "Russian", rank: "#7 (Дахаб аренда)", drift: "down" },
                    ].map((seo, i) => (
                        <div key={i} className="p-4 border border-gray-100 rounded-lg">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-xs font-bold text-gray-500 uppercase">{seo.lang}</span>
                                <span className={`text-[10px] font-bold ${seo.drift === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                                    {seo.drift === 'up' ? '▲' : '▼'}
                                </span>
                            </div>
                            <p className="text-lg font-bold">{seo.rank}</p>
                            <button className="mt-2 text-[10px] text-blue-600 hover:underline flex items-center gap-1">
                                Boost with AI Article <ExternalLink size={10} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
