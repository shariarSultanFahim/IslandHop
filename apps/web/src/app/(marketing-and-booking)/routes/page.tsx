import type { Metadata } from "next";
import Link from "next/link";

import { Anchor, ArrowRight, Calendar, Clock, Filter, Search, Shield, Ship } from "lucide-react";

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input
} from "@/ui";

export const metadata: Metadata = {
  title: "Island Routes & Schedules | IslandHop",
  description: "Browse verified speedboat and ferry routes across all destinations."
};

const SCHEDULED_ROUTES = [
  {
    id: "RT-101",
    operator: "Blue Lagoon Express",
    from: "Male City Harbor (Pier 4)",
    to: "Maafushi Island Marina",
    departure: "08:30 AM",
    arrival: "09:00 AM",
    duration: "30 mins",
    price: 25,
    seatsLeft: 12,
    vessel: "Twin-Engine Speedboat (40 pax)",
    amenities: ["Air Conditioned", "Lifejackets Included", "Luggage Tagging"]
  },
  {
    id: "RT-102",
    operator: "Coral Reef Fast Ferry",
    from: "Male City Harbor (Pier 2)",
    to: "Thulusdhoo Island Surf Point",
    departure: "09:15 AM",
    arrival: "09:55 AM",
    duration: "40 mins",
    price: 30,
    seatsLeft: 8,
    vessel: "Catamaran Jet Speedboat",
    amenities: ["Surfboard Storage", "USB Charging", "Restroom onboard"]
  },
  {
    id: "RT-103",
    operator: "Andaman Sea Lines",
    from: "Phuket Rassada Pier",
    to: "Phi Phi Don (Tonsai Pier)",
    departure: "10:00 AM",
    arrival: "10:50 AM",
    duration: "50 mins",
    price: 35,
    seatsLeft: 24,
    vessel: "Highspeed Quad Cruiser",
    amenities: ["Panoramic Sun Deck", "Snack Bar", "Safety Briefing"]
  },
  {
    id: "RT-104",
    operator: "Aegean Marine",
    from: "Athens (Piraeus Gate E7)",
    to: "Mykonos Old Port",
    departure: "11:30 AM",
    arrival: "01:45 PM",
    duration: "2h 15m",
    price: 65,
    seatsLeft: 45,
    vessel: "Ocean Champion Catamaran",
    amenities: ["VIP Lounge", "Cafeteria", "High-speed Wi-Fi"]
  }
];

export default function RoutesPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8 flex flex-col gap-2">
        <Badge variant="outline" className="text-primary border-primary/30 w-fit">
          <Anchor className="mr-1 h-3.5 w-3.5" /> Live Timetables & Fares
        </Badge>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Available Sea Routes</h1>
        <p className="text-muted-foreground max-w-xl text-sm">
          Browse and reserve one-way or return tickets with instant digital ticketing and live
          operator tracking.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="bg-card/60 mb-8 grid grid-cols-1 items-center gap-3 rounded-xl border p-4 backdrop-blur sm:grid-cols-4">
        <div className="relative sm:col-span-2">
          <Search className="text-muted-foreground absolute top-2.5 left-3 h-4 w-4" />
          <Input placeholder="Search by island, port, or operator..." className="pl-9 text-xs" />
        </div>
        <div>
          <Input type="date" defaultValue="2026-08-25" className="text-xs" />
        </div>
        <div>
          <Button className="w-full text-xs font-semibold">
            <Filter className="mr-1 h-3.5 w-3.5" /> Filter Schedule
          </Button>
        </div>
      </div>

      {/* Route Cards */}
      <div className="space-y-4">
        {SCHEDULED_ROUTES.map((route) => (
          <Card key={route.id} className="hover:border-primary/40 transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-muted rounded px-2 py-0.5 font-mono text-xs font-medium">
                      {route.id}
                    </span>
                    <span className="text-primary text-xs font-semibold">{route.operator}</span>
                    <Badge variant="outline" className="ml-auto text-[10px] sm:ml-0">
                      {route.seatsLeft} seats remaining
                    </Badge>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
                    <div>
                      <div className="text-lg font-bold">{route.departure}</div>
                      <div className="text-muted-foreground text-xs">{route.from}</div>
                    </div>

                    <div className="text-muted-foreground flex items-center gap-2">
                      <div className="bg-border hidden h-[1px] w-12 sm:block"></div>
                      <div className="flex flex-col items-center">
                        <span className="text-foreground flex items-center gap-1 text-[11px] font-medium">
                          <Clock className="text-primary h-3 w-3" /> {route.duration}
                        </span>
                        <Ship className="text-muted-foreground mt-0.5 h-3.5 w-3.5" />
                      </div>
                      <div className="bg-border hidden h-[1px] w-12 sm:block"></div>
                    </div>

                    <div>
                      <div className="text-lg font-bold">{route.arrival}</div>
                      <div className="text-muted-foreground text-xs">{route.to}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {route.amenities.map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-muted/60 text-muted-foreground rounded-full px-2 py-0.5 text-[11px]"
                      >
                        • {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-border flex items-center justify-between border-t pt-4 sm:flex-col sm:items-end sm:border-t-0 sm:border-l sm:pt-0 sm:pl-6">
                  <div className="text-left sm:text-right">
                    <div className="text-primary text-2xl font-black">${route.price}</div>
                    <div className="text-muted-foreground text-[10px]">per passenger / one-way</div>
                  </div>
                  <Button className="mt-3 text-xs font-semibold" size="sm" asChild>
                    <Link href={`/login?from=/dashboard`}>
                      Book Ticket <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
