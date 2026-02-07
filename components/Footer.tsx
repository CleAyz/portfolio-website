import Link from "next/link";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              © {currentYear} Portfolio. Built with Next.js and Tailwind CSS.
            </p>
          </div>
          <SocialLinks />
        </div>
        <div className="mt-8 flex justify-center gap-6 text-sm">
          <Link
            href="/"
            className="text-neutral-500 transition-colors hover:text-accent dark:text-neutral-400"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="text-neutral-500 transition-colors hover:text-accent dark:text-neutral-400"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
