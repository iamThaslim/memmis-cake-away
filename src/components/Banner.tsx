import React from "react";
import Link from "next/link";

/**
 * Site-wide persistent banner (no dismiss) shown at the very top of every page.
 * Adjust the copy as needed for announcements, promos, or WIP notice.
 */
export default function Banner() {
  return (
    <div className="relative isolate flex items-center gap-x-4 overflow-hidden bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500 px-4 py-2.5 text-sm text-white shadow-sm sm:px-6 lg:px-8">
      <p className="flex-1 text-center font-medium tracking-wide">
        <span className="font-semibold">Preview Build:</span>{' '}
        We&apos;re still polishing content & adding more cakes. Custom orders are open now.
        <span className="hidden sm:inline"> — </span>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1 font-semibold underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-sm transition"
        >
          Request a design <span aria-hidden="true">→</span>
        </Link>
      </p>
    </div>
  );
}
