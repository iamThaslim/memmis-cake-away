import Link from "next/link";

export default function WhoWeAre() {
  return (
    <section className="relative isolate">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block text-xs tracking-wider uppercase text-accent-2/80 font-semibold mb-3">Who we are</span>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-accent sm:text-4xl md:text-5xl">
            Crafting edible memories with artistry & heart
          </h2>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#3d3029] dark:text-gray-300 leading-relaxed">
            At Memmis, every cake begins with a story. We listen, sketch, and hand-finish bespoke designs that celebrate your moments—weddings, birthdays, milestones & everyday sweetness.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000] dark:bg-[#5D2A13] dark:hover:brightness-110"
            >
              About Us
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="M13 18l6-6-6-6" />
              </svg>
            </Link>
          </div>
        </div>
        {/* Decorative subtle divider */}
        <div className="pointer-events-none absolute inset-x-0 -bottom-6 flex justify-center" aria-hidden="true">
          <div className="h-px w-40 bg-gradient-to-r from-transparent via-[#5D2A13]/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
