import Image from "next/image";
import React from "react";

// Placeholder images (Unsplash); replace with your Cloudinary cake images later.
// Provide exactly 7 images as requested.
const images = [
  {
    alt: "Hamper style gift cake",
    src: "https://res.cloudinary.com/dzw01vn1c/image/upload/v1758514518/hamper_01_di2dep.jpg"
  },
  {
    alt: "Wedding anniversary cake",
    src: "https://res.cloudinary.com/dzw01vn1c/image/upload/v1758514518/wedding_anniversery_2_cpctwn.jpg"
  },
  {
    alt: "Spiderman themed cake",
    src: "https://res.cloudinary.com/dzw01vn1c/image/upload/v1758514517/spiderman_superhero_yibd0n.jpg"
  },
  {
    alt: "Disney Belle princess cake",
    src: "https://res.cloudinary.com/dzw01vn1c/image/upload/v1758514513/belle_disney_hbzpor.jpg"
  },
  {
    alt: "Birthday sprinkle cake",
    src: "https://res.cloudinary.com/dzw01vn1c/image/upload/v1758514513/birthday_1_p67ard.jpg"
  },
  {
    alt: "Birthday chocolate drip cake",
    src: "https://res.cloudinary.com/dzw01vn1c/image/upload/v1758514515/birthday_2_f69knu.jpg"
  },
  {
    alt: "Mickey Mouse themed cake",
    src: "https://res.cloudinary.com/dzw01vn1c/image/upload/v1758514514/mickey_mouse_k7pmfn.jpg"
  }
];

export default function Hero() {
  return (
    <main>
      <div className="relative isolate">
        {/* Blurred color blob */}
        <div aria-hidden="true" className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48">
          <div
            style={{
              clipPath:
                'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)'
            }}
            className="aspect-[801/1036] w-[50rem] bg-[radial-gradient(circle_at_30%_30%,#EBC1AE_0%,#EBC1AE_35%,#5D2A13_120%)] opacity-30 dark:opacity-40" />
        </div>
        {/* Content */}
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 sm:pt-40 lg:px-8 lg:pt-28">
            <div className="mx-auto max-w-2xl gap-x-16 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="text-4xl font-semibold tracking-tight text-balance text-accent sm:text-6xl dark:text-white">
                  Handcrafted Cakes for Every Story
                </h1>
                <p className="mt-6 text-lg font-medium text-pretty text-[#3d3029] sm:max-w-md sm:text-xl/8 lg:max-w-none dark:text-gray-300">
                  From whimsical birthdays to timeless weddings, Memmis bakes emotion into every layer—custom flavours, artisan designs, unforgettable finishes.
                </p>
                <div className="mt-10 flex items-center gap-x-5">
                  <a
                    href="#contact"
                    className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000] dark:bg-[#5D2A13] dark:hover:brightness-110"
                  >
                    Get a Quote
                  </a>
                  <a href="#gallery" className="text-sm font-semibold text-accent-2 dark:text-[#EBC1AE] group inline-flex items-center">
                    View Gallery <span aria-hidden="true" className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
              {/* Image collage */}
              <div className="mt-14 flex justify-end gap-6 sm:-mt-48 sm:justify-start sm:pl-12 lg:mt-0 lg:pl-0">
                {/* Column 1 */}
                <div className="ml-auto w-40 flex-none space-y-6 pt-24 sm:ml-0 sm:pt-72 lg:order-last lg:pt-32 xl:order-0 xl:pt-64">
                  {images.slice(0,2).map((img) => (
                    <figure key={img.src} className="relative">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={400}
                        height={600}
                        className="aspect-[2/3] w-full rounded-xl object-cover shadow-lg ring-1 ring-gray-900/10 dark:ring-white/10 bg-gray-100 dark:bg-gray-800"
                      />
                    </figure>
                  ))}
                </div>
                {/* Column 2 */}
                <div className="mr-auto w-40 flex-none space-y-6 sm:mr-0 sm:pt-56 lg:pt-32">
                  {images.slice(2,4).map((img) => (
                    <figure key={img.src} className="relative">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={400}
                        height={600}
                        className="aspect-[2/3] w-full rounded-xl object-cover shadow-lg ring-1 ring-gray-900/10 dark:ring-white/10 bg-gray-100 dark:bg-gray-800"
                      />
                    </figure>
                  ))}
                  {images.slice(4,5).map((img) => (
                    <figure key={img.src} className="relative hidden sm:block">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={400}
                        height={600}
                        className="aspect-[2/3] w-full rounded-xl object-cover shadow-lg ring-1 ring-gray-900/10 dark:ring-white/10 bg-gray-100 dark:bg-gray-800"
                      />
                    </figure>
                  ))}
                </div>
                {/* Column 3 */}
                <div className="w-40 flex-none space-y-6 pt-24 sm:pt-0">
                  {images.slice(5,7).map((img) => (
                    <figure key={img.src} className="relative">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={400}
                        height={600}
                        className="aspect-[2/3] w-full rounded-xl object-cover shadow-lg ring-1 ring-gray-900/10 dark:ring-white/10 bg-gray-100 dark:bg-gray-800"
                      />
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
