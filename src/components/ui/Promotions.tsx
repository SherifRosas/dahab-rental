export default function Promotions() {
    return (
        <section className="relative bg-[var(--color-sea-deep)] py-20 overflow-hidden">
            {/* Decorative Wave Design */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <svg viewBox="0 0 1440 320" className="absolute bottom-0"><path fill="#ffffff" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>

            <div className="container relative z-10">
                <div className="glass-v2 p-8 md:p-16 rounded-[var(--radius-premium)] flex flex-col md:flex-row items-center justify-between gap-12 border-coral-pink/20">
                    <div className="max-w-xl text-center md:text-left">
                        <span className="text-[var(--color-coral-pink)] font-black uppercase tracking-[0.3em] text-xs mb-4 block">Limited Time Offer</span>
                        <h3 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">Stay Longer, <br /><span className="text-[var(--color-sand-gold)]">Dive Deeper.</span></h3>
                        <p className="text-white/70 text-lg font-medium">Get an exclusive <span className="text-white font-bold">10% OFF</span> when you book 3 nights or more. Perfect for advanced courses or long-haul chill.</p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <button className="btn-premium bg-gradient-to-r from-[var(--color-sand-gold)] to-yellow-600 border-none px-12 py-5 text-lg">
                            Claim Your Discount
                        </button>
                        <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Code: DAHAB_DIVE_24</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
