import Image from "next/image";
import Link from "next/link";

// Footer background uses an existing Cloudinary image already confirmed working elsewhere.
// Replace later with a curated footer image if desired.
const FOOTER_BG = "https://res.cloudinary.com/dzw01vn1c/image/upload/f_auto,q_auto,c_fill,w_2000,h_1200/hamper_01_di2dep.jpg";

export default function Footer() {
  return (
    <footer className="mt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <figure
          className="relative overflow-hidden rounded-t-[30px] aspect-[7/3] flex items-stretch"
          aria-labelledby="footer-brand-heading"
        >
          {/* Background image */}
          <Image
            src={FOOTER_BG}
            alt="Showcase cake background"
            fill
            priority={false}
            sizes="100vw"
            className="object-cover"
          />
          {/* Gradient overlay (top subtle, bottom stronger for legibility) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/70" />
          {/* Content */}
          <figcaption className="relative flex flex-1 flex-col justify-between p-6 sm:p-8 lg:p-10">
            <div />
            <div className="text-center">
              <h2
                id="footer-brand-heading"
                className="type-display text-white text-[54px] sm:text-[64px] md:text-[72px] leading-none select-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
              >
                M&amp;C.
              </h2>
            </div>
            <div className="flex items-center justify-between text-white text-xs sm:text-sm font-medium tracking-tight">
              <span className="opacity-95">Kannur, KL</span>
              <Link
                href="/contact"
                className="underline underline-offset-2 decoration-white/70 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-5 rounded-sm"
              >
                Contact
              </Link>
            </div>
          </figcaption>
        </figure>
      </div>
    </footer>
  );
}

