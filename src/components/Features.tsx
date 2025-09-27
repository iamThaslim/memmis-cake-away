import React from "react";
import Image from "next/image";


interface Feature {
  name: string;
  description: string;
  image: string;
  alt: string;
}

// Re-use existing Cloudinary assets with larger transformation for feature banners
const BASE = "https://res.cloudinary.com/dzw01vn1c/image/upload";
const T = "f_auto,q_auto,c_fill,w_1200,h_480"; // wide banner style crop

const features: Feature[] = [
  {
    name: "Fresh, Small‑Batch Baking",
    description:
      "Every cake is baked to order – never frozen – using farm fresh eggs, real butter and quality cocoa. You taste the difference in moisture, crumb and flavour.",
    image: `${BASE}/${T}/birthday_2_f69knu.jpg`,
    alt: "Close up of a freshly baked chocolate drip birthday cake.",
  },
  {
    name: "Custom Designs & Themes",
    description:
      "From superheroes to elegant florals, we sketch and sculpt bespoke designs that turn your idea or reference photo into an edible centerpiece for your celebration.",
    image: `${BASE}/${T}/spiderman_superhero_yibd0n.jpg`,
    alt: "Superhero themed custom cake design.",
  },
  {
    name: "Care, Hygiene & Quality",
    description:
      "Prepared in a dedicated, hygienic home kitchen with careful allergen separation and premium décor elements – ensuring both beauty and safety in every slice.",
    image: `${BASE}/${T}/hamper_01_di2dep.jpg`,
    alt: "Gift hamper style arrangement with cake elements.",
  },
];

export default function Features() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 className="font-medium tracking-wide text-teal-600">Why Memmis</h2>
            <p
              className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              The homemade difference
            </p>
            <p className="mt-4 text-zinc-600 text-base sm:text-lg leading-relaxed">
              Not all cakes are created equal. Our process blends craft, quality ingredients and safe handling to give
              you a centrepiece that tastes every bit as good as it looks.
            </p>
          </div>

          <div className="mt-10 space-y-16 border-t border-zinc-200 pt-10 sm:mt-16 sm:pt-16">
            {features.map((feature, idx) => {
              const reverse = idx % 2 === 1; // alternate layout on large screens
              return (
                <div
                  key={feature.name}
                  className={`flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-10 ${reverse ? 'lg:[&>div:first-child]order-none' : ''}`}
                >
                  <div className={`mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4 ${reverse ? 'lg:order-2' : ''}`}> 
                    <h3 className="text-lg font-semibold text-zinc-900">{feature.name}</h3>
                    <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{feature.description}</p>
                  </div>
                  <div className={`flex-auto lg:col-span-7 xl:col-span-8 ${reverse ? 'lg:order-1' : ''}`}> 
                    <div className="relative aspect-[5/2] w-full overflow-hidden rounded-lg bg-zinc-100">
                      <Image
                        alt={feature.alt}
                        src={feature.image}
                        fill
                        sizes="(max-width: 1024px) 100vw, 900px"
                        className="object-cover" />
                      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-zinc-900/10" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
