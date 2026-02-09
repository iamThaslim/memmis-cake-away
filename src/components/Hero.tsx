"use client";

import Image from "next/image";

import Link from "next/link";


// Cloudinary images (optimize later with transformations if needed)
const images = [
  { alt: "Hamper style gift cake", src: "https://res.cloudinary.com/dzw01vn1c/image/upload/f_auto,q_auto/v1758514518/hamper_01_di2dep.jpg" },
  { alt: "Wedding anniversary cake", src: "https://res.cloudinary.com/dzw01vn1c/image/upload/f_auto,q_auto/v1758514518/wedding_anniversery_2_cpctwn.jpg" },
  { alt: "Spiderman themed cake", src: "https://res.cloudinary.com/dzw01vn1c/image/upload/f_auto,q_auto/v1758514517/spiderman_superhero_yibd0n.jpg" },
  { alt: "Disney Belle princess cake", src: "https://res.cloudinary.com/dzw01vn1c/image/upload/f_auto,q_auto/v1758514513/belle_disney_hbzpor.jpg" },
  { alt: "Birthday sprinkle cake", src: "https://res.cloudinary.com/dzw01vn1c/image/upload/f_auto,q_auto/v1758514513/birthday_1_p67ard.jpg" },
  { alt: "Birthday chocolate drip cake", src: "https://res.cloudinary.com/dzw01vn1c/image/upload/f_auto,q_auto/v1758514515/birthday_2_f69knu.jpg" },
  { alt: "Mickey Mouse themed cake", src: "https://res.cloudinary.com/dzw01vn1c/image/upload/f_auto,q_auto/v1758514514/mickey_mouse_k7pmfn.jpg" },
];

export default function Hero() {
  // Distribute images into three columns (roughly even visually pleasing)
  const col1 = [images[0], images[4]]; // 2
  const col2 = [images[1], images[5], images[6]]; // 3
  const col3 = [images[2], images[3]]; // 2

  return (
    <section className="relative isolate">
      {/* Grid pattern background */}
      {/* <svg 
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[46rem] w-full stroke-zinc-200/70 [mask:radial-gradient(32rem_32rem_at_center,white,transparent)]"
      >
        <defs>
          <pattern id="hero-grid" width="200" height="200" patternUnits="userSpaceOnUse" x="50%" y={-1}>
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" strokeWidth={0} />
      </svg> */}

      {/* Gradient shape */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
      >
        <div
          className="aspect-[801/1036] w-[50rem] bg-gradient-to-tr from-pink-300 via-fuchsia-300 to-violet-300 opacity-40"
          style={{
            clipPath:
              "polygon(63.1% 29.5%, 100% 17.2%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
          }}
        />
      </div>

      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-24 sm:pt-40 lg:pl-8 lg:pb-0 lg:pt-24">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex lg:max-w-none lg:items-center lg:gap-x-14">
            {/* Text column */}
            <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1
                className="text-balance text-4xl tracking-wide sm:text-6xl font-apfel hero-heading"
              >
                Custom Cakes Crafted to Celebrate Your Sweetest Moments
              </h1>
              <p className="mt-7 text-pretty text-lg font-medium text-zinc-600 sm:text-xl/8">
                From elegant wedding tiers to playful character themes, every Memmis Cake is baked fresh and
                designed with care. Browse our gallery for inspiration or tell us your dream design.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                >
                  Order a Cake
                </Link>
                <Link
                  href="/gallery"
                  className="text-sm font-semibold text-zinc-900 transition hover:text-teal-600"
                >
                  View Gallery <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Image mosaic */}
            <div className="mt-16 flex w-full justify-end gap-6 sm:mt-0 sm:justify-start sm:pl-10 lg:pl-0">
              {/* Column 1 */}
              <div className="ml-auto flex w-40 flex-none flex-col space-y-6 pt-20 sm:ml-0 sm:pt-56 lg:order-last lg:pt-28 xl:order-0 xl:pt-56">
                {col1.map((img, idx) => (
                  <div key={idx} className="relative">
                    <Image
                      alt={img.alt}
                      src={img.src}
                      width={264}
                      height={396}
                      sizes="(max-width: 640px) 40vw, 160px"
                      className="aspect-[2/3] w-full rounded-xl object-cover shadow-lg ring-1 ring-zinc-900/10"
                    />
                  </div>
                ))}
              </div>
              {/* Column 2 */}
              <div className="mr-auto flex w-40 flex-none flex-col space-y-6 sm:mr-0 sm:pt-40 lg:pt-28">
                {col2.map((img, idx) => (
                  <div key={idx} className="relative">
                    <Image
                      alt={img.alt}
                      src={img.src}
                      width={264}
                      height={396}
                      sizes="(max-width: 640px) 40vw, 160px"
                      className="aspect-[2/3] w-full rounded-xl object-cover shadow-lg ring-1 ring-zinc-900/10"
                    />
                  </div>
                ))}
              </div>
              {/* Column 3 */}
              <div className="flex w-40 flex-none flex-col space-y-6 pt-20 sm:pt-0">
                {col3.map((img, idx) => (
                  <div key={idx} className="relative">
                    <Image
                      alt={img.alt}
                      src={img.src}
                      width={264}
                      height={396}
                      sizes="(max-width: 640px) 40vw, 160px"
                      className="aspect-[2/3] w-full rounded-xl object-cover shadow-lg ring-1 ring-zinc-900/10"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
