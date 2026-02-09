import Image from "next/image";
import Reviews from "@/components/Reviews";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse a curated selection of custom cakes crafted by hand—character themes, celebrations and more.",
};

interface CakeItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
}

// Reuse the same Cloudinary assets for now; in future fetch from data source.
const BASE = "https://res.cloudinary.com/dzw01vn1c/image/upload";
const T = "f_auto,q_auto,c_fill,w_800,h_800"; // square crop for uniform grid

const cakes: CakeItem[] = [
  { id: "1", title: "Character – Spiderman", category: "Superheroes", image: `${BASE}/${T}/spiderman_superhero_yibd0n.jpg`, alt: "Spiderman themed cake" },
  { id: "2", title: "Princess – Belle", category: "Characters", image: `${BASE}/${T}/belle_disney_hbzpor.jpg`, alt: "Belle princess cake" },
  { id: "3", title: "Anniversary Floral", category: "Anniversary", image: `${BASE}/${T}/wedding_anniversery_2_cpctwn.jpg`, alt: "Anniversary floral cake" },
  { id: "4", title: "Gift Hamper Style", category: "Gift Hampers", image: `${BASE}/${T}/hamper_01_di2dep.jpg`, alt: "Hamper style cake" },
  { id: "5", title: "Birthday Sprinkle", category: "Birthdays", image: `${BASE}/${T}/birthday_1_p67ard.jpg`, alt: "Birthday sprinkle cake" },
  { id: "6", title: "Chocolate Drip", category: "Birthdays", image: `${BASE}/${T}/birthday_2_f69knu.jpg`, alt: "Chocolate drip birthday cake" },
  { id: "7", title: "Mickey Mouse Theme", category: "Characters", image: `${BASE}/${T}/mickey_mouse_k7pmfn.jpg`, alt: "Mickey Mouse themed cake" },
  { id: "8", title: "Wedding Classic", category: "Anniversary", image: `${BASE}/${T}/wedding_anniversery_cpctwn.jpg`, alt: "Wedding celebration cake" },
];

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-24 pb-24 lg:px-8">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-apfel hero-heading tracking-tight sm:text-5xl">Cake Gallery</h1>
        <p className="mt-5 text-lg text-zinc-600">
          A small snapshot of recent bakes. Each design is handcrafted and customised—flavours, colours and finishing
          details can be tailored for your celebration.
        </p>
      </header>

      {/* Future: add category filter bar */}
      <section className="mt-12">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
        >
          {cakes.map((cake) => (
            <li key={cake.id} className="group">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-zinc-100">
                <Image
                  src={cake.image}
                  alt={cake.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-zinc-900/10" />
              </div>
              <h3 className="mt-4 text-sm font-medium text-zinc-900">{cake.title}</h3>
              <p className="text-sm text-zinc-500">{cake.category}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-16 text-center">
        <p className="text-sm text-zinc-600">Want something not shown here?</p>
        <a
            href="/contact"
            className="mt-3 inline-flex items-center justify-center rounded-md bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
        >
          Request a custom design
        </a>
      </div>

      <Reviews />
    </div>
  );
}
