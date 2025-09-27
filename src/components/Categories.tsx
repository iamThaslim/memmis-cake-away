import React from "react";
import Image from "next/image";
import Link from "next/link";


interface Category {
  name: string;
  slug: string;
  image: string;
  alt: string;
}

// Cloudinary base (adjust if cloud name changes)
const CLOUDINARY_BASE = "https://res.cloudinary.com/dzw01vn1c/image/upload";
// Transformation: auto format + quality, crop fill, center gravity, size tuned for card
const T = "f_auto,q_auto,c_fill,w_600,h_800";

const categories: Category[] = [
  { name: "Superheroes", slug: "superheroes", image: `${CLOUDINARY_BASE}/${T}/spiderman_superhero_yibd0n.jpg`, alt: "Superhero themed cake" },
  { name: "Anniversary", slug: "anniversary", image: `${CLOUDINARY_BASE}/${T}/wedding_anniversery_2_cpctwn.jpg`, alt: "Anniversary celebration cake" },
  { name: "Birthdays", slug: "birthdays", image: `${CLOUDINARY_BASE}/${T}/birthday_2_f69knu.jpg`, alt: "Birthday celebration cake" },
  { name: "Characters", slug: "characters", image: `${CLOUDINARY_BASE}/${T}/mickey_mouse_k7pmfn.jpg`, alt: "Character themed cake" },
  { name: "Gift Hampers", slug: "hampers", image: `${CLOUDINARY_BASE}/${T}/hamper_01_di2dep.jpg`, alt: "Cake gift hamper" },
];

export default function Categories() {
  return (
    <section className="bg-white">
      <div className="py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8">
        <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
          <h2
            className="text-2xl font-semibold tracking-tight text-zinc-900"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Browse by Category
          </h2>
          <Link
            href="/gallery"
            className="hidden text-sm font-semibold text-teal-600 transition hover:text-teal-500 sm:block"
          >
            View full gallery <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="relative box-content h-80 overflow-x-auto py-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-teal-200 xl:overflow-visible">
              <div className="absolute flex space-x-6 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/gallery?category=${category.slug}`}
                    className="group relative flex h-80 w-56 flex-col overflow-hidden rounded-xl p-5 xl:w-auto"
                  >
                    <span aria-hidden="true" className="absolute inset-0">
                      <Image
                        alt={category.alt}
                        src={category.image}
                        fill
                        sizes="(max-width: 1280px) 224px, 240px"
                        className="object-cover transition duration-500 group-hover:scale-105"
                        priority={false}
                      />
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent"
                    />
                    <span className="relative mt-auto text-center text-lg font-semibold text-white drop-shadow-sm">
                      {category.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 px-4 sm:hidden">
          <Link
            href="/gallery"
            className="block text-sm font-semibold text-teal-600 transition hover:text-teal-500"
          >
            View full gallery <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
