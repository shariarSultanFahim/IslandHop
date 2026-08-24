import Image from "next/image";
import Link from "next/link";

import { ArrowRight, ChevronRight } from "lucide-react";

import maldivesImg from "@/assets/landing-page/maldives.png";
import seaplaneImg from "@/assets/landing-page/seaplane.png";
import tropicalImg from "@/assets/landing-page/tropical.png";
import whiteSandImg from "@/assets/landing-page/whiteSand.png";

import { Button, Card, CardContent } from "@/ui";

export const POPULAR_JOURNEYS = [
  {
    id: "journey-1",
    from: "Malé",
    to: "Maafushi",
    duration: "Approx. 35 min",
    price: 30,
    image: maldivesImg,
    imageAlt: "Aerial view of Malé to Maafushi turquoise atoll"
  },
  {
    id: "journey-2",
    from: "Malé",
    to: "Thulusdhoo",
    duration: "Approx. 45 min",
    price: 30,
    image: tropicalImg,
    imageAlt: "Tropical island palm trees and white sand beach"
  },
  {
    id: "journey-3",
    from: "Malé",
    to: "Dhiffushi",
    duration: "Approx. 40 min",
    price: 30,
    image: seaplaneImg,
    imageAlt: "Seaplane over azure ocean water in the Maldives"
  },
  {
    id: "journey-4",
    from: "Malé",
    to: "Gulhi",
    duration: "Approx. 30 min",
    price: 30,
    image: whiteSandImg,
    imageAlt: "Speedboat anchored near tropical island limestone cliffs"
  }
];

export function PopularJourneysSection() {
  return (
    <section id="schedules" className="py-16 md:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-primary text-xs font-bold tracking-wider uppercase">
              Popular Journeys
            </span>
            <h2 className="text-foreground mt-1 text-2xl font-black tracking-tight sm:text-3xl">
              Where are you heading?
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Discover frequently travelled routes and check upcoming departures.
            </p>
          </div>

          <Button variant="link" asChild className="text-primary p-0 text-xs font-bold">
            <Link href="/routes" className="group flex items-center">
              View all routes
              <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {POPULAR_JOURNEYS.map((journey) => (
            <Card
              key={journey.id}
              className="group border-border/80 bg-card overflow-hidden rounded-2xl border p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image Container with Aspect Ratio */}
              <div className="bg-muted relative aspect-4/3 w-full overflow-hidden">
                <Image
                  src={journey.image}
                  alt={journey.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-30 group-hover:opacity-20" />
              </div>

              <CardContent className="p-4">
                {/* Route Title */}
                <div className="text-foreground flex items-center gap-1.5 text-base font-bold">
                  <span>{journey.from}</span>
                  <ArrowRight className="text-muted-foreground h-3.5 w-3.5" />
                  <span>{journey.to}</span>
                </div>

                <div className="text-muted-foreground mt-1 text-xs">{journey.duration}</div>

                {/* Price & Action */}
                <div className="border-border/60 mt-4 flex items-center justify-between border-t pt-3">
                  <div>
                    <span className="text-muted-foreground text-[10px] font-bold uppercase">
                      From
                    </span>
                    <div className="text-foreground text-xl font-black">${journey.price}</div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:border-primary hover:text-primary h-8 gap-1 rounded-lg text-xs font-semibold"
                    asChild
                  >
                    <Link
                      href={`/routes?from=${encodeURIComponent(journey.from)}&to=${encodeURIComponent(journey.to)}`}
                    >
                      View trips <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
