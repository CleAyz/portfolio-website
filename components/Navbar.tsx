"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:border-neutral-800 dark:bg-neutral-900/95">
      <nav
        className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-lg font-semibold text-neutral-900 transition-colors hover:text-accent dark:text-white dark:hover:text-accent"
        >
          Portfolio
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div
          id="mobile-menu"
          className={`absolute left-0 right-0 top-full border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900 md:static md:flex md:border-0 md:bg-transparent ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-1 px-4 py-4 md:flex-row md:items-center md:gap-6 md:px-0 md:py-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors md:px-0 md:py-0 ${
                    pathname === link.href
                      ? "text-accent"
                      : "text-neutral-600 hover:text-accent dark:text-neutral-300 dark:hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
