import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import laptopMockup from "@/assets/landing-page/laptopMockup.png";

import { Button } from "@/ui";

export function OperatorPlatformSection() {
  return (
    <section className="border-border bg-foreground border-t py-16 text-slate-100 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Content */}
          <div className="space-y-6 lg:col-span-5">
            <span className="text-primary text-xs font-bold tracking-wider uppercase">
              For Ferry Operators
            </span>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Built for passengers. <br />
              <span className="">Powerful for ferry operators.</span>
            </h2>
            <p className="text-sm text-slate-300 sm:text-base">
              Manage schedules, bookings, passenger capacity, seat availability, manifests and
              boarding operations from one connected platform.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button variant="secondary" className="rounded-xl font-bold" asChild>
                <Link href="/login">Ferry Operator Login</Link>
              </Button>
              <Button
                variant="link"
                asChild
                className="text-primary hover:text-primary/90 p-0 text-xs font-semibold"
              >
                <Link href="/dashboard" className="group flex items-center">
                  Learn about the operator platform
                  <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Laptop Dashboard Graphic Mockup */}
          <div className="relative flex justify-center lg:col-span-7">
            <div className="relative w-full max-w-xl">
              <Image
                src={laptopMockup}
                alt="IslandHop Ferry Operator Dashboard mockup"
                className="h-auto w-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
