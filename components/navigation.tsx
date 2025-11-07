"use client";

import { cn } from "@/lib/utils";
import { Coffee, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#brew2", label: "Menu" },
  { href: "#collection", label: "Products" },
  { href: "#customers", label: "Customers" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Only handle hash links (scroll behavior)
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setOpen(false); // Close mobile menu after clicking
      }
    }
  };
  return (
    <header className="border-b bg-white/70 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-mono font-semibold text-amber-700"
        >
          ☕ Lorem Ipsum
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden p-2 text-zinc-800 hover:text-amber-700 transition"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop nav */}
        <nav className="hidden sm:flex flex-1 justify-center">
          <ul className="flex items-center justify-center text-lg font-mono font-medium text-zinc-800">
            {links.map((link, index) => (
              <li key={link.href} className="flex items-center">
                <Link
                  href={link.href}
                  className="transition hover:text-amber-700"
                  onClick={(e) => handleScroll(e, link.href)}
                >
                  {link.label}
                </Link>
                {index < links.length - 1 && (
                  <span className="mx-4 text-zinc-400">/</span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex">
          <Button
            variant="outline"
            size="icon-lg"
            className="text-lg font-mono font-medium hover:bg-background/70 p-2"
          >
            <span className="p-1 bg-white rounded-full text-center">
              <Coffee className="w-6 h-6" />
            </span>
          </Button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={cn(
          "sm:hidden flex flex-col px-4 pb-4 bg-white/70 border-t transition-all duration-300",
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="py-2 text-zinc-800 font-mono font-medium hover:text-amber-700 border-b last:border-none"
          >
            {link.label}
          </Link>
        ))}

        <Button
          variant="outline"
          className="w-full border-black border-t mt-3 text-sm font-mono font-medium"
        >
          <span className="p-1 bg-white rounded-full text-center">
            <Coffee className="w-5 h-5" />
          </span>
        </Button>
      </div>
    </header>
  );
}
