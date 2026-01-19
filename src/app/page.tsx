import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/ui/Hero";
import RoomsSection from "@/components/ui/RoomsSection";
import BookingForm from "@/components/ui/BookingForm";
import ChatWidget from "@/components/ui/ChatWidget";
import Promotions from "@/components/ui/Promotions";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Promotions />

      <RoomsSection />

      {/* Booking App Section */}
      <section id="book" className="py-20 bg-[var(--color-sand-light)]">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Ready to Book?</h2>
            <p className="mb-6 text-gray-600">Check availability instantly. 50% deposit required.</p>
          </div>
          <BookingForm />
        </div>
      </section>

      {/* AI Assistant */}
      <ChatWidget />
    </main>
  );
}
