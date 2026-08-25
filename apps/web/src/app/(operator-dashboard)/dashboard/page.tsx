"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  AlertCircle,
  Calendar,
  CheckCircle2,
  Clock,
  DollarSign,
  LogOut,
  MapPin,
  Plus,
  Ship,
  Ticket,
  TrendingUp,
  Users
} from "lucide-react";

import { useAuth } from "@/hooks";

import { UnderConstruction } from "@/components/widgets";
import { Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui";

const MOCK_OPERATOR_STATS = [
  { label: "Today's Passengers", value: "348", change: "+14%", icon: Users },
  { label: "Active Fleet Boats", value: "8 / 10", change: "2 in port", icon: Ship },
  { label: "Tickets Sold", value: "412", change: "+22%", icon: Ticket },
  { label: "Revenue (Today)", value: "$10,480", change: "+18%", icon: DollarSign }
];

const MOCK_DEPARTURES = [
  {
    id: "DEP-901",
    vessel: "Ocean Arrow I",
    route: "Male Pier 4 → Maafushi Marina",
    time: "02:30 PM",
    status: "Boarding",
    capacity: "38 / 40 booked",
    captain: "Capt. Ibrahim"
  },
  {
    id: "DEP-902",
    vessel: "Wave Runner IV",
    route: "Male Pier 2 → Thulusdhoo Point",
    time: "03:15 PM",
    status: "On Schedule",
    capacity: "24 / 35 booked",
    captain: "Capt. Rashid"
  },
  {
    id: "DEP-903",
    vessel: "Island Clipper II",
    route: "Phuket Pier → Phi Phi Don",
    time: "04:00 PM",
    status: "Preparing",
    capacity: "45 / 50 booked",
    captain: "Capt. Somchai"
  },
  {
    id: "DEP-904",
    vessel: "Sunseeker Express",
    route: "Athens E7 → Mykonos Port",
    time: "05:30 PM",
    status: "On Schedule",
    capacity: "120 / 150 booked",
    captain: "Capt. Nikos"
  }
];

export default function OperatorDashboardPage() {
  const { user, isAuthenticated, logout } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <UnderConstruction />
    </>
    // <div className="container mx-auto space-y-8 px-4 py-8">
    //   {/* Header Bar */}
    //   <div className="flex flex-col justify-between gap-4 border-b pb-6 sm:flex-row sm:items-center">
    //     <div>
    //       <div className="flex items-center gap-2">
    //         <Badge variant="default" className="text-xs">
    //           Operator Portal
    //         </Badge>
    //         <span className="text-muted-foreground bg-muted rounded px-2 py-0.5 font-mono text-xs">
    //           Mock Environment
    //         </span>
    //       </div>
    //       <h1 className="mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl">
    //         Fleet Operations & Manifest
    //       </h1>
    //       <p className="text-muted-foreground text-xs sm:text-sm">
    //         Welcome, {mounted && user ? user.name : "Fleet Manager"} (
    //         {mounted && user ? user.email : "operator@islandhop.com"})
    //       </p>
    //     </div>

    //     <div className="flex items-center gap-3">
    //       <Button size="sm" variant="outline" asChild>
    //         <Link href="/routes">
    //           <Ship className="text-primary mr-1.5 h-4 w-4" /> View Live Routes
    //         </Link>
    //       </Button>
    //       <Button size="sm" onClick={logout} variant="destructive">
    //         <LogOut className="mr-1.5 h-4 w-4" /> Sign Out
    //       </Button>
    //     </div>
    //   </div>

    //   {/* Metrics Row */}
    //   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    //     {MOCK_OPERATOR_STATS.map((stat, i) => {
    //       const Icon = stat.icon;
    //       return (
    //         <Card key={i} className="shadow-xs">
    //           <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 pb-2">
    //             <CardTitle className="text-muted-foreground text-xs font-medium">
    //               {stat.label}
    //             </CardTitle>
    //             <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-lg">
    //               <Icon className="h-4 w-4" />
    //             </div>
    //           </CardHeader>
    //           <CardContent className="p-4 pt-0">
    //             <div className="text-2xl font-black">{stat.value}</div>
    //             <p className="text-muted-foreground mt-0.5 flex items-center gap-1 text-[11px]">
    //               <span className="text-primary font-semibold">{stat.change}</span> from yesterday
    //             </p>
    //           </CardContent>
    //         </Card>
    //       );
    //     })}
    //   </div>

    //   {/* Today's Departures Schedule */}
    //   <Card>
    //     <CardHeader className="flex flex-row items-center justify-between p-6 pb-4">
    //       <div>
    //         <CardTitle className="text-lg font-bold">Upcoming Boat Departures</CardTitle>
    //         <CardDescription className="text-xs">
    //           Real-time fleet tracking and boarding manifests for today
    //         </CardDescription>
    //       </div>
    //       <Button size="sm" className="text-xs font-semibold">
    //         <Plus className="mr-1 h-3.5 w-3.5" /> Add Departure
    //       </Button>
    //     </CardHeader>
    //     <CardContent className="p-6 pt-0">
    //       <div className="overflow-x-auto">
    //         <table className="w-full text-left text-xs">
    //           <thead className="text-muted-foreground bg-muted/40 border-b text-[11px] tracking-wider uppercase">
    //             <tr>
    //               <th className="px-4 py-3">Trip ID</th>
    //               <th className="px-4 py-3">Vessel</th>
    //               <th className="px-4 py-3">Route</th>
    //               <th className="px-4 py-3">Departure Time</th>
    //               <th className="px-4 py-3">Status</th>
    //               <th className="px-4 py-3">Manifest</th>
    //               <th className="px-4 py-3 text-right">Actions</th>
    //             </tr>
    //           </thead>
    //           <tbody className="divide-y">
    //             {MOCK_DEPARTURES.map((item) => (
    //               <tr key={item.id} className="hover:bg-muted/30 transition-colors">
    //                 <td className="px-4 py-3.5 font-mono font-medium">{item.id}</td>
    //                 <td className="px-4 py-3.5">
    //                   <div className="text-foreground font-semibold">{item.vessel}</div>
    //                   <div className="text-muted-foreground text-[10px]">{item.captain}</div>
    //                 </td>
    //                 <td className="px-4 py-3.5 font-medium">{item.route}</td>
    //                 <td className="px-4 py-3.5 font-mono">{item.time}</td>
    //                 <td className="px-4 py-3.5">
    //                   <Badge
    //                     variant={
    //                       item.status === "Boarding"
    //                         ? "default"
    //                         : item.status === "On Schedule"
    //                           ? "secondary"
    //                           : "outline"
    //                     }
    //                     className="text-[10px]"
    //                   >
    //                     {item.status}
    //                   </Badge>
    //                 </td>
    //                 <td className="text-muted-foreground px-4 py-3.5 font-medium">
    //                   {item.capacity}
    //                 </td>
    //                 <td className="px-4 py-3.5 text-right">
    //                   <Button variant="ghost" size="sm" className="h-7 px-2.5 text-xs">
    //                     Manage
    //                   </Button>
    //                 </td>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //       </div>
    //     </CardContent>
    //   </Card>
    // </div>
  );
}
