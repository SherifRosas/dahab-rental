export const PROPERTY_CONFIG = {
  name: "Dahab Rental",
  totalRooms: 4,
  bedsPerRoom: 4,
  maxCapacity: 16,
  currency: "USD",
  depositPercentage: 0.50, // 50% deposit
};

export const PRICING_RULES = {
  perDay: {
    sharedBed: 40,      // 1 bed in shared room
    doubleBed: 60,      // 2 beds in same room
    fullRoom: 110,      // 4 beds (Private Room)
    twoRooms: 200,      // 8 beds
    threeRooms: 290,    // 12 beds
  },
  // Dynamic rules or discounts can be added here
};

export const ROOMS = [
  { id: "room_1", name: "Room 1", capacity: 4 },
  { id: "room_2", name: "Room 2", capacity: 4 },
  { id: "room_3", name: "Room 3", capacity: 4 },
  { id: "room_4", name: "Room 4", capacity: 4 },
];

export const APP_ROUTES = {
  home: "/",
  admin: "/admin",
  api: {
    availability: "/api/availability",
    bookings: "/api/bookings",
    chat: "/api/chat",
  },
};
