import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background with overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat hero-bg"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-[var(--color-sand-light)]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container text-center pt-20">
                <div className="glass-panel inline-block px-8 py-3 mb-6 rounded-full border border-white/30 backdrop-blur-md">
                    <span className="text-[var(--color-sand-gold)] font-bold tracking-wide uppercase text-sm">
                        Welcome to Sinai
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg max-w-4xl mx-auto leading-tight">
                    Your Home in <span className="text-[var(--color-sand-gold)]">Dahab</span>
                </h1>

                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
                    Relax, dive, and explore. 4 rooms, 16 beds, perfectly located for backpackers and groups. Start your adventure here.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="#book" className="btn-primary text-lg px-8 py-4 shadow-xl hover:scale-105 transition-transform">
                        Check Availability
                    </Link>
                    <Link href="#rooms" className="glass-panel px-8 py-4 text-white font-semibold hover:bg-white/20 transition-colors">
                        View Rooms
                    </Link>
                </div>
            </div>
        </section>
    );
}
