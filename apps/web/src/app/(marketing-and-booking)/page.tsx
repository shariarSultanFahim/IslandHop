import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  Award,
  Calendar,
  Clock,
  Compass,
  MapPin,
  Search,
  ShieldCheck,
  Ship,
  Sparkles,
  Users
} from "lucide-react";

import { Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui";

export const metadata: Metadata = {
  title: "IslandHop | Book Ferry & Island Boat Rides",
  description: "Seamless island hopping and ferry booking across premier destinations."
};

const POPULAR_ROUTES = [
  {
    id: "route-1",
    from: "Male City Harbor",
    to: "Maafushi Island",
    duration: "30 mins",
    price: "$25",
    departures: "Every 45 mins",
    vessel: "Express Speedboat",
    status: "Available"
  },
  {
    id: "route-2",
    from: "Phuket Pier",
    to: "Phi Phi Islands",
    duration: "45 mins",
    price: "$35",
    departures: "Hourly",
    vessel: "Catamaran Jet",
    status: "Popular"
  },
  {
    id: "route-3",
    from: "Athens (Piraeus)",
    to: "Mykonos Port",
    duration: "2h 15m",
    price: "$65",
    departures: "4 daily",
    vessel: "Highspeed Ferry",
    status: "Fastest"
  },
  {
    id: "route-4",
    from: "Nassau Terminal",
    to: "Exuma Cays",
    duration: "1h 10m",
    price: "$85",
    departures: "3 daily",
    vessel: "Island Cruiser",
    status: "Scenic"
  }
];

const FEATURES = [
  {
    icon: Compass,
    title: "Instant Digital Boarding",
    description:
      "QR tickets sent directly to your phone and saved in your wallet. Skip long terminal queues."
  },
  {
    icon: ShieldCheck,
    title: "Verified Marine Operators",
    description: "Every boat and ferry is certified with safety inspections and live GPS tracking."
  },
  {
    icon: Clock,
    title: "Real-time Timetables",
    description: "Live sea condition updates, departure alerts, and guaranteed flexible re-booking."
  },
  {
    icon: Award,
    title: "Best Fare Guarantee",
    description: "Zero hidden counter fees with direct operator prices and flexible cancellation."
  }
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="from-primary/10 via-background to-background relative overflow-hidden border-b bg-radial-[at_top_center] py-20 md:py-32">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge
            variant="outline"
            className="border-primary/30 mb-6 gap-2 px-4 py-1.5 text-xs font-semibold backdrop-blur"
          >
            <Sparkles className="text-primary h-3.5 w-3.5" />
            <span>Next-Gen Island Transport & Ferry Booking</span>
          </Badge>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
            Hop Between Islands <br className="hidden sm:inline" />
            <span className="text-primary from-primary via-primary/80 to-primary/60 bg-gradient-to-r bg-clip-text">
              With Zero Friction
            </span>
          </h1>

          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg sm:text-xl">
            Book fast speedboats, scenic ferries, and private island charters worldwide. Live
            schedules, transparent pricing, and instant boarding.
          </p>

          {/* Quick Search Widget */}
          <div className="bg-card mx-auto mt-10 max-w-3xl rounded-2xl border p-4 shadow-xl backdrop-blur sm:p-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col text-left">
                <span className="text-muted-foreground mb-1.5 flex items-center gap-1 text-xs font-semibold">
                  <MapPin className="text-primary h-3.5 w-3.5" /> Departure
                </span>
                <div className="bg-muted/30 flex h-10 items-center rounded-lg border px-3 py-2 text-sm font-medium">
                  Male City Harbor
                </div>
              </div>

              <div className="flex flex-col text-left">
                <span className="text-muted-foreground mb-1.5 flex items-center gap-1 text-xs font-semibold">
                  <MapPin className="text-primary h-3.5 w-3.5" /> Destination
                </span>
                <div className="bg-muted/30 flex h-10 items-center rounded-lg border px-3 py-2 text-sm font-medium">
                  Maafushi Island
                </div>
              </div>

              <div className="flex flex-col text-left">
                <span className="text-muted-foreground mb-1.5 flex items-center gap-1 text-xs font-semibold">
                  <Calendar className="text-primary h-3.5 w-3.5" /> Travel Date
                </span>
                <div className="bg-muted/30 flex h-10 items-center rounded-lg border px-3 py-2 text-sm font-medium">
                  Today, Tomorrow
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-col items-center justify-between gap-3 border-t pt-4 sm:flex-row">
              <div className="text-muted-foreground flex items-center gap-2 text-xs">
                <Ship className="text-primary h-4 w-4" /> Over 140+ verified sea routes operational
                today
              </div>
              <Button size="lg" asChild className="w-full font-semibold sm:w-auto">
                <Link href="/routes">
                  <Search className="mr-2 h-4 w-4" />
                  Explore Available Routes
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Routes Section */}
      <section className="bg-muted/20 border-b py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
            <div>
              <Badge variant="secondary" className="mb-2">
                Popular Departures
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight">Trending Island Routes</h2>
              <p className="text-muted-foreground mt-1 text-sm">
                Most booked high-speed transfers this week
              </p>
            </div>
            <Button variant="outline" size="sm" asChild className="mt-4 md:mt-0">
              <Link href="/routes">
                View All Routes <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {POPULAR_ROUTES.map((route) => (
              <Card
                key={route.id}
                className="hover:border-primary/50 transition-all duration-200 hover:shadow-lg"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <Badge
                      variant={route.status === "Popular" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {route.status}
                    </Badge>
                    <span className="text-primary text-xl font-extrabold">{route.price}</span>
                  </div>
                  <CardTitle className="mt-2 flex items-center gap-1.5 text-base font-semibold">
                    <span>{route.from}</span>
                    <ArrowRight className="text-muted-foreground h-3.5 w-3.5 shrink-0" />
                    <span>{route.to}</span>
                  </CardTitle>
                  <CardDescription className="text-xs">{route.vessel}</CardDescription>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-3 pt-0 text-xs">
                  <div className="flex justify-between border-t pt-2">
                    <span>Duration:</span>
                    <span className="text-foreground font-medium">{route.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Frequency:</span>
                    <span className="text-foreground font-medium">{route.departures}</span>
                  </div>
                  <Button size="sm" variant="outline" className="mt-2 w-full" asChild>
                    <Link href={`/routes`}>Select Time</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Why Choose IslandHop</h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              Designed for travelers seeking effortless ocean travel and reliable connections
              between coastal spots.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div
                  key={i}
                  className="bg-card/50 flex flex-col items-center rounded-xl border p-6 text-center"
                >
                  <div className="bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold">{feat.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Operator Callout Banner */}
      <section className="bg-primary/5 border-t py-12">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-left">
          <div>
            <h3 className="text-xl font-bold">Are you a boat or ferry fleet operator?</h3>
            <p className="text-muted-foreground mt-1 text-sm">
              List your routes, manage ticket sales, and track manifests with our operator
              dashboard.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link href="/login">Operator Login</Link>
            </Button>
            <Button asChild>
              <Link href="/dashboard">Access Dashboard</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
