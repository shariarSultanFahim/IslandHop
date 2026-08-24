"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Anchor,
  ArrowRight,
  ArrowUpDown,
  Calendar,
  ChevronRight,
  MapPin,
  QrCode,
  ShieldCheck,
  Ship,
  Users
} from "lucide-react";

import heroBg from "@/assets/landing-page/hero-bg.png";

import { Button, Card, CardContent, Input, Label } from "@/ui";

export function HeroSection() {
  const [tripType, setTripType] = useState<"one-way" | "round-trip">("one-way");
  const [departurePort, setDeparturePort] = useState("Malé (Villingili Terminal)");
  const [destinationPort, setDestinationPort] = useState("Maafushi Island Port");
  const [departureDate, setDepartureDate] = useState("2026-08-25");
  const [passengers, setPassengers] = useState("1 Passenger");

  const handleSwapPorts = () => {
    const temp = departurePort;
    setDeparturePort(destinationPort);
    setDestinationPort(temp);
  };

  return (
    <section>
      <div
        id="book"
        className="bg-background relative w-full pt-16 pb-20 md:pt-24 md:pb-24 lg:pt-28 lg:pb-32"
      >
        {/* Full Bleed Ferry Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg}
            alt="Ferry ship cruise on sunny ocean"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Background Overlay: 100% opacity on left to 0% opacity on right */}
          <div className="from-background via-background/60 absolute inset-0 bg-gradient-to-r to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero Typography */}
          <div className="max-w-xl space-y-4">
            <div className="text-primary text-xs font-semibold tracking-wider uppercase">
              FERRY TRAVEL, MADE SIMPLE
            </div>

            <h1 className="text-foreground text-4xl font-black tracking-tight sm:text-5xl lg:text-[54px] lg:leading-[1.12]">
              Across the water, <br />
              <span className="text-primary">without the hassle</span>.
            </h1>

            <p className="text-sm font-normal sm:text-base">
              Find your route, compare ferry schedules and reserve your seat in one simple booking
              experience.
            </p>

            {/* Feature Badges */}
            <div className="text-foreground flex flex-wrap items-center gap-6 pt-3 text-xs font-bold">
              <span className="flex items-center gap-2">
                <Ship className="text-primary h-4 w-4" /> Live seat availability
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="text-primary h-4 w-4" /> Secure payments
              </span>
              <span className="flex items-center gap-2">
                <QrCode className="text-primary h-4 w-4" /> Instant e-tickets
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Search Bar Card */}
      <div className="mx-auto -mt-24 max-w-7xl">
        <Card className="border-border bg-card/95 rounded-2xl p-6 shadow-2xl backdrop-blur-md sm:p-7">
          <CardContent className="p-0">
            {/* Trip Type Pills */}
            <div className="mb-5 flex items-center gap-2">
              <Button
                type="button"
                variant={tripType === "one-way" ? "default" : "secondary"}
                size="sm"
                onClick={() => setTripType("one-way")}
                className="h-8 rounded-full px-5 text-xs font-bold"
              >
                One way
              </Button>
              <Button
                type="button"
                variant={tripType === "round-trip" ? "default" : "secondary"}
                size="sm"
                onClick={() => setTripType("round-trip")}
                className="h-8 rounded-full px-5 text-xs font-bold"
              >
                Round trip
              </Button>
            </div>

            {/* Form Fields Row */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:items-end">
              {/* FROM */}
              <div className="space-y-1.5 lg:col-span-3">
                <Label className="text-muted-foreground text-[10px] font-extrabold tracking-wider uppercase">
                  FROM
                </Label>
                <div className="border-input bg-muted/40 focus-within:border-ring flex h-11 items-center gap-2 rounded-xl border px-3.5 transition-colors">
                  <MapPin className="text-muted-foreground h-4 w-4 shrink-0" />
                  <Input
                    type="text"
                    value={departurePort}
                    onChange={(e) => setDeparturePort(e.target.value)}
                    placeholder="Departure port"
                    className="text-foreground placeholder:text-muted-foreground h-auto border-0 bg-transparent p-0 text-xs font-bold focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <ChevronRight className="text-muted-foreground h-3.5 w-3.5 shrink-0 rotate-90 opacity-50" />
                </div>
              </div>

              {/* SWAP BUTTON */}
              <div className="hidden lg:col-span-1 lg:flex lg:items-center lg:justify-center lg:pb-1">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={handleSwapPorts}
                  title="Swap ports"
                  className="border-border bg-background text-muted-foreground hover:text-primary h-8 w-8 rounded-full shadow-xs transition-transform hover:scale-110"
                >
                  <ArrowUpDown className="h-3.5 w-3.5" />
                </Button>
              </div>

              {/* TO */}
              <div className="space-y-1.5 lg:col-span-3">
                <Label className="text-muted-foreground text-[10px] font-extrabold tracking-wider uppercase">
                  TO
                </Label>
                <div className="border-input bg-muted/40 focus-within:border-ring flex h-11 items-center gap-2 rounded-xl border px-3.5 transition-colors">
                  <Anchor className="text-muted-foreground h-4 w-4 shrink-0" />
                  <Input
                    type="text"
                    value={destinationPort}
                    onChange={(e) => setDestinationPort(e.target.value)}
                    placeholder="Destination"
                    className="text-foreground placeholder:text-muted-foreground h-auto border-0 bg-transparent p-0 text-xs font-bold focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <ChevronRight className="text-muted-foreground h-3.5 w-3.5 shrink-0 rotate-90 opacity-50" />
                </div>
              </div>

              {/* DEPARTURE */}
              <div className="space-y-1.5 lg:col-span-2">
                <Label className="text-muted-foreground text-[10px] font-extrabold tracking-wider uppercase">
                  DEPARTURE
                </Label>
                <div className="border-input bg-muted/40 focus-within:border-ring flex h-11 items-center gap-2 rounded-xl border px-3.5 transition-colors">
                  <Calendar className="text-muted-foreground h-4 w-4 shrink-0" />
                  <Input
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="text-foreground h-auto border-0 bg-transparent p-0 text-xs font-bold focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </div>

              {/* PASSENGERS */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3">
                  <div className="flex-1 space-y-1.5">
                    <Label className="text-muted-foreground text-[10px] font-extrabold tracking-wider uppercase">
                      PASSENGERS
                    </Label>
                    <div className="border-input bg-muted/40 focus-within:border-ring flex h-11 items-center gap-2 rounded-xl border px-3.5 transition-colors">
                      <Users className="text-muted-foreground h-4 w-4 shrink-0" />
                      <select
                        value={passengers}
                        onChange={(e) => setPassengers(e.target.value)}
                        className="text-foreground w-full bg-transparent text-xs font-bold focus:outline-none"
                      >
                        <option value="1 Passenger">1 Passenger</option>
                        <option value="2 Passengers">2 Passengers</option>
                        <option value="3 Passengers">3 Passengers</option>
                        <option value="4+ Group">4+ Group</option>
                      </select>
                    </div>
                  </div>

                  {/* Search Ferries Action Button */}
                  <div className="pt-4">
                    <Button
                      size="lg"
                      className="h-11 rounded-xl px-5 text-xs font-bold shadow-md transition-all hover:shadow-lg"
                      asChild
                    >
                      <Link href="/routes" className="flex items-center gap-2 whitespace-nowrap">
                        <span>Search Ferries</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
