import type { Metadata } from "next";

import { SignupForm } from "@/widgets";

export const metadata: Metadata = {
  title: "Sign Up | IslandHop",
  description: "Create an IslandHop account to manage bookings and sea charters."
};

export default function SignupPage() {
  return (
    <div className="container flex min-h-[calc(100vh-16rem)] items-center justify-center py-12">
      <SignupForm />
    </div>
  );
}
