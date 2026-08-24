"use client";

import { useState } from "react";
import Link from "next/link";

import { CheckCircle2 } from "lucide-react";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label
} from "@/ui";

export function ManageBookingSection() {
  const [bookingRef, setBookingRef] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  return (
    <section id="manage-booking" className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Content */}
          <div className="space-y-6 lg:col-span-6">
            <span className="text-primary text-xs font-bold tracking-wider uppercase">
              Everything in One Place
            </span>
            <h2 className="text-foreground text-3xl font-black tracking-tight sm:text-4xl">
              Your whole journey, <br />
              right in your pocket.
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              From finding your ferry to showing your ticket at boarding, everything you need
              travels with you.
            </p>

            <div className="text-foreground grid grid-cols-1 gap-3 pt-2 text-xs font-semibold sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary h-4 w-4" />
                <span>Search routes and schedules</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary h-4 w-4" />
                <span>Select available seats</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary h-4 w-4" />
                <span>Keep tickets in one place</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary h-4 w-4" />
                <span>Receive important trip updates</span>
              </div>
            </div>
          </div>

          {/* Right Card: Manage Your Booking */}
          <div className="lg:col-span-6">
            <Card className="border-border/80 bg-card rounded-2xl border p-6 shadow-xl sm:p-8">
              <CardHeader className="p-0 pb-6">
                <CardTitle className="text-xl font-bold">Manage your booking</CardTitle>
                <CardDescription className="text-xs">
                  Retrieve your e-ticket or change passenger seats
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 p-0">
                <div className="space-y-1.5">
                  <Label className="text-muted-foreground text-[11px] font-bold tracking-wider uppercase">
                    Booking Reference
                  </Label>
                  <Input
                    placeholder="e.g. FRY24821"
                    value={bookingRef}
                    onChange={(e) => setBookingRef(e.target.value)}
                    className="h-11 rounded-xl text-xs font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label className="text-muted-foreground text-[11px] font-bold tracking-wider uppercase">
                    Email / Phone
                  </Label>
                  <Input
                    placeholder="Enter booking contact"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    className="h-11 rounded-xl text-xs font-medium"
                  />
                </div>

                <Button
                  className="h-11 w-full rounded-xl font-bold shadow-md transition-all hover:shadow-lg"
                  asChild
                >
                  <Link href="/routes">Find Booking</Link>
                </Button>

                <div className="text-muted-foreground pt-2 text-center text-xs">
                  Have an account?{" "}
                  <Link href="/login" className="text-primary font-semibold hover:underline">
                    Log in to see all trips →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
