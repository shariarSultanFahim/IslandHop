import { Suspense } from "react";
import type { Metadata } from "next";

import { LoginForm } from "@/widgets";

export const metadata: Metadata = {
  title: "Sign In | IslandHop",
  description: "Sign in to access your bookings and fleet operator dashboard."
};

export default function LoginPage() {
  return (
    <div className="container flex min-h-[calc(100vh-16rem)] items-center justify-center py-12">
      <Suspense fallback={<div className="text-muted-foreground text-sm">Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
