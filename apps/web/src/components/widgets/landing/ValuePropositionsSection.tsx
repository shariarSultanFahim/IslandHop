import { Bell, Compass, QrCode, ShieldCheck } from "lucide-react";

export function ValuePropositionsSection() {
  return (
    <section className="border-border/60 mt-20 border-b bg-[#EBF4FD] py-6">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-3.5">
            <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
              <Compass className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-foreground text-xs font-bold">Live Availability</h4>
              <p className="text-muted-foreground text-[11px]">
                See available trips and seats in real time.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-foreground text-xs font-bold">Secure Booking</h4>
              <p className="text-muted-foreground text-[11px]">
                Simple and protected payments you can trust.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
              <QrCode className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-foreground text-xs font-bold">Instant E-Tickets</h4>
              <p className="text-muted-foreground text-[11px]">
                Your QR ticket is ready right after booking.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
              <Bell className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-foreground text-xs font-bold">Trip Updates</h4>
              <p className="text-muted-foreground text-[11px]">
                Stay informed with important schedule updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
