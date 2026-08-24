import type { Metadata } from "next";
import Link from "next/link";

import { AlertTriangle, HelpCircle, Mail, MessageSquare, Phone, Shield } from "lucide-react";

import { Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui";

export const metadata: Metadata = {
  title: "Help & Support | IslandHop",
  description: "Frequently asked questions and passenger support for island transfers."
};

const FAQS = [
  {
    question: "How do I receive and present my ticket?",
    answer:
      "Upon booking, your digital QR pass is immediately generated in your dashboard and sent via email. You can present it directly on your mobile device at the pier terminal."
  },
  {
    question: "What happens in case of rough weather or sea warnings?",
    answer:
      "Passenger safety is our highest priority. If the Coast Guard or maritime authorities issue a sea warning, trips are automatically rescheduled or 100% refunded."
  },
  {
    question: "How much luggage can I bring on speedboats?",
    answer:
      "Standard tickets allow 1 suitcase (up to 25kg) and 1 carry-on backpack. Special gear like surfboards or diving equipment can be declared during booking."
  },
  {
    question: "Can I cancel or modify my booking time?",
    answer:
      "Bookings can be modified or canceled up to 2 hours before departure directly from your dashboard."
  }
];

export default function HelpPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-12 space-y-3 text-center">
        <Badge variant="outline" className="text-primary border-primary/30">
          <HelpCircle className="mr-1 h-3.5 w-3.5" /> Passenger Support & FAQ
        </Badge>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">How can we help you?</h1>
        <p className="text-muted-foreground mx-auto max-w-lg text-sm">
          Find answers to common questions about boat bookings, baggage limits, weather policies,
          and boarding.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="p-4 text-center">
          <CardContent className="space-y-2 pt-4">
            <div className="bg-primary/10 text-primary mx-auto flex h-10 w-10 items-center justify-center rounded-full">
              <MessageSquare className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-semibold">24/7 Live Chat</h3>
            <p className="text-muted-foreground text-xs">Chat with marine dispatchers</p>
            <Button variant="outline" size="sm" className="w-full text-xs">
              Start Chat
            </Button>
          </CardContent>
        </Card>

        <Card className="p-4 text-center">
          <CardContent className="space-y-2 pt-4">
            <div className="bg-primary/10 text-primary mx-auto flex h-10 w-10 items-center justify-center rounded-full">
              <Phone className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-semibold">Emergency Marine Line</h3>
            <p className="text-muted-foreground text-xs">+1 (800) 555-BOAT</p>
            <Button variant="outline" size="sm" className="w-full text-xs">
              Call Support
            </Button>
          </CardContent>
        </Card>

        <Card className="p-4 text-center">
          <CardContent className="space-y-2 pt-4">
            <div className="bg-primary/10 text-primary mx-auto flex h-10 w-10 items-center justify-center rounded-full">
              <Mail className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-semibold">Email Support</h3>
            <p className="text-muted-foreground text-xs">support@islandhop.com</p>
            <Button variant="outline" size="sm" className="w-full text-xs">
              Send Email
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        <h2 className="mb-4 text-xl font-bold tracking-tight">Frequently Asked Questions</h2>
        {FAQS.map((faq, idx) => (
          <Card key={idx}>
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-sm font-semibold">{faq.question}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground p-4 pt-1 text-xs leading-relaxed">
              {faq.answer}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
