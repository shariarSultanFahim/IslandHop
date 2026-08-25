import type { Metadata } from "next";

import { Ticket } from "lucide-react";

import { ManageBookingsTable } from "@/widgets";

export const metadata: Metadata = {
  title: "Manage Bookings | IslandHop",
  description: "View and manage your ferry tickets, download QR passes, or cancel bookings."
};

export default function ManageBookingsPage() {
  return (
    <div className="dark:bg-background min-h-screen bg-[#F8FAFC] pb-20">
      <main className="container mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="mb-8 space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#003B95] uppercase dark:text-blue-400">
            <Ticket className="h-4 w-4" />
            <span>Passenger Portal</span>
          </div>
          <h1 className="text-foreground text-3xl font-black tracking-tight sm:text-4xl">
            My Bookings
          </h1>
          <p className="text-muted-foreground text-xs sm:text-sm">
            Manage your booked ferry transfers, download e-tickets, or view journey updates.
          </p>
        </div>

        {/* Data Table */}
        <ManageBookingsTable />
      </main>
    </div>
  );
}
