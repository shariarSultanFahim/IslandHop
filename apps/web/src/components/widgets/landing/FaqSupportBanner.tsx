import Link from "next/link";

import { Headphones } from "lucide-react";

import { Button } from "@/ui";

export function FaqSupportBanner() {
  return (
    <section className="bg-background py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-primary/20 bg-primary/5 flex flex-col items-center justify-between gap-6 rounded-2xl border p-6 sm:flex-row sm:p-8">
          <div className="flex items-center gap-4">
            <div className="bg-card text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-sm">
              <Headphones className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-foreground text-base font-bold sm:text-lg">
                Questions before you travel?
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Find answers about booking, payments, cancellations, luggage and boarding.
              </p>
            </div>
          </div>

          <div className="flex w-full shrink-0 flex-col gap-2 sm:w-auto sm:flex-row">
            <Button variant="outline" size="sm" asChild className="rounded-xl">
              <Link href="/help">Visit Help Center</Link>
            </Button>
            <Button size="sm" className="rounded-xl shadow-xs" asChild>
              <Link href="/help">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
