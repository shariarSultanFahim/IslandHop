"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { LayoutDashboard, LogOut, Menu, Ship, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { useAuth } from "@/hooks";

import { Button } from "@/ui";

const NAV_LINKS = [
  { name: "Book", href: "/" },
  { name: "Routes", href: "/routes" },
  { name: "Manage Booking", href: "/manage-booking" },
  { name: "Help", href: "/help" }
];

export function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
    <header className="sticky top-0 z-50 block w-full md:hidden">
      {/* Top Bar */}
      <div
        className={`relative z-50 transition-all duration-300 ${
          isScrolled || isOpen
            ? "bg-background/40 border-none backdrop-blur-lg"
            : "bg-transparent shadow-none"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm transition-transform group-hover:scale-105">
              <Ship className="h-5 w-5" />
            </div>
            <span className="text-foreground text-xl font-bold tracking-tight">
              Island<span className="text-blue-600">Hop</span>
            </span>
          </Link>

          {/* Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground hover:text-blue-600"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Slide down panel with Motion animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="border-border/60 bg-background/95 fixed inset-x-0 top-16 z-40 overflow-hidden border-b shadow-xl backdrop-blur-xl"
          >
            <div className="flex max-h-[calc(100vh-4rem)] flex-col justify-between overflow-y-auto p-4">
              {/* Navigation Links */}
              <nav className="divide-border/60 flex flex-col divide-y pt-2">
                {visibleNavLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`py-4 text-sm font-medium transition-colors hover:text-blue-600 ${
                        isActive ? "font-semibold text-blue-600" : "text-muted-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Auth Action Buttons */}
              <div className="border-border/60 mt-2 flex flex-col gap-3 border-t pt-6 pb-8">
                {isAuthenticated ? (
                  <>
                    <Button
                      variant="outline"
                      className="w-full justify-center gap-2 font-semibold"
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/dashboard">
                        <LayoutDashboard className="h-4 w-4" />
                        <span>{user?.name || "Dashboard"}</span>
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 w-full justify-center gap-2"
                      onClick={() => {
                        setIsOpen(false);
                        logout();
                      }}
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Log Out</span>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      className="w-full justify-center font-medium"
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/login">Log in</Link>
                    </Button>
                    <Button
                      className="w-full justify-center rounded-lg bg-blue-600 font-semibold text-white shadow-sm hover:bg-blue-700"
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/signup">Create Account</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
