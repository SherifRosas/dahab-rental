import { NextResponse } from "next/server";
import { PRICING_RULES, PROPERTY_CONFIG } from "@/lib/constants";

// System Prompt Logic (Mock for MVP without Key)
const SYSTEM_PROMPT = `
You are the AI Assistant for Dahab Rental.
Context:
- Location: Dahab, Sinai, Egypt. Best for divers and backpackers.
- Rooms: ${PROPERTY_CONFIG.totalRooms} rooms, ${PROPERTY_CONFIG.maxCapacity} beds total.
- Prices: Shared bed $${PRICING_RULES.perDay.sharedBed}, Double $${PRICING_RULES.perDay.doubleBed}, Full Room $${PRICING_RULES.perDay.fullRoom}.
- Policy: 50% deposit required.
- Languages: You speak English, French, German, Russian, Chinese.

Detected User Language: [Auto-detect]
Action: Answer briefly and helpful. Suggest booking if they ask for price.
`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // In a real app, this would call OpenAI API
    // const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', ...)

    // Mock Logic for Demo
    let reply = "I can help with that! We are located in beautiful Dahab.";
    const lowerMsg = message.toLowerCase();

    if (lowerMsg.includes("price") || lowerMsg.includes("cost")) {
      reply = `Our rates start at $${PRICING_RULES.perDay.sharedBed} for a single bed. A full private room is $${PRICING_RULES.perDay.fullRoom}. Would you like to book?`;
    } else if (lowerMsg.includes("location") || lowerMsg.includes("where")) {
      reply = "We are in the heart of Dahab, close to the best dive sites and the lighthouse area.";
    } else if (lowerMsg.includes("book")) {
      reply = "Great! You can use the form on the page to check availability and secure your spot with a 50% deposit.";
    } else if (lowerMsg.includes("discount")) {
      reply = "We offer a 10% discount for stays longer than 3 nights. Just ask!";
    }

    // Simulate Network Delay
    await new Promise(r => setTimeout(r, 500));

    return NextResponse.json({ reply });

  } catch (error) {
    console.error("AI Error:", error);
    return NextResponse.json({ reply: "Sorry, I am having trouble thinking right now. Please try again." }, { status: 500 });
  }
}
