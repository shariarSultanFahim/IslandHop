"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { LayoutDashboard, LogOut, Ship } from "lucide-react";

import { useAuth } from "@/hooks";

import { Button } from "@/ui";

const NAV_LINKS = [
  { name: "Book", href: "/" },
  { name: "Routes", href: "/routes" },
  { name: "Manage Booking", href: "/manage-booking" },
  { name: "Help", href: "/help" }
];

export function DesktopNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isPassenger =
    isAuthenticated &&
    (user?.role?.toUpperCase() === "PASSENGER" || user?.role?.toUpperCase() === "USER");

  const visibleNavLinks = NAV_LINKS.filter((link) => {
    if (link.href === "/manage-booking") {
      return isPassenger;
    }
    return true;
  });

  return (
    <header
      className={`sticky top-0 z-50 hidden w-full transition-all duration-300 md:block ${
        isScrolled
          ? "bg-background/40 border-none shadow-xs backdrop-blur-lg"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div className="flex items-center gap-8">
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm transition-transform group-hover:scale-105">
              <Ship className="h-5 w-5" />
            </div>
            <span className="text-foreground text-xl font-bold tracking-tight">
              Island<span className="text-blue-600">Hop</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="text-muted-foreground flex items-center gap-6 text-sm font-bold lg:gap-8">
            {visibleNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors hover:text-blue-600 ${
                    isActive ? "font-semibold text-blue-600" : ""
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-9 gap-1.5 text-xs font-semibold"
                asChild
              >
                <Link href="/dashboard">
                  <LayoutDashboard className="h-3.5 w-3.5" />
                  <span>{user?.name || "Dashboard"}</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-destructive h-9 w-9"
                onClick={logout}
                title="Log Out"
              >
                <LogOut className="h-4 w-4" />
                <span className="sr-only">Log Out</span>
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2 sm:gap-3">
              <Button variant="outline" size="sm" asChild>
                <Link href="/login">Log in</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/signup">Create Account</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
