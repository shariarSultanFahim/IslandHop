import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <div className="bg-muted/20 min-h-[calc(100vh-8rem)] flex-1">{children}</div>;
}
