export default function Promotions() {
    return (
        <section className="bg-[var(--color-sea-blue)] py-8 text-white">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
                <div>
                    <h3 className="text-2xl font-bold mb-1">Stay Longer, Dive Deeper 🤿</h3>
                    <p className="text-blue-100">Get <span className="font-bold text-[var(--color-sand-gold)]">10% OFF</span> when you book 3 nights or more.</p>
                </div>
                <button className="bg-[var(--color-sand-gold)] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-600 transition-transform hover:scale-105">
                    Claim Offer
                </button>
            </div>
        </section>
    );
}
