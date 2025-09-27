import Image from "next/image";
import Link from "next/link";

interface Category {
  name: string;
  slug: string;
  image: string;
  alt: string;
}

// Cloudinary base (adjust if your cloud name changes)
const CLOUDINARY_BASE = "https://res.cloudinary.com/dzw01vn1c/image/upload";
// Common transformation: auto format, auto quality, crop to fill, center gravity, uniform size
const T = "f_auto,q_auto,c_fill,w_600,h_800";

const categories: Category[] = [
  { name: "Superheroes", slug: "superheroes", image: `${CLOUDINARY_BASE}/${T}/spiderman_superhero_yibd0n.jpg`, alt: "Superhero themed cake" },
  { name: "Anniversary", slug: "anniversary", image: `${CLOUDINARY_BASE}/${T}/wedding_anniversery_2_cpctwn.jpg`, alt: "Anniversary celebration cake" },
  { name: "Birthdays", slug: "birthdays", image: `${CLOUDINARY_BASE}/${T}/birthday_2_f69knu.jpg`, alt: "Birthday cake" },
  { name: "Characters", slug: "characters", image: `${CLOUDINARY_BASE}/${T}/mickey_mouse_k7pmfn.jpg`, alt: "Character themed cake" },
  { name: "Gift Hampers", slug: "hampers", image: `${CLOUDINARY_BASE}/${T}/hamper_01_di2dep.jpg`, alt: "Cake gift hamper" },
];

export default function Categories() {
  return (
    <section aria-labelledby="category-heading" className="pt-12 sm:pt-16 xl:mx-auto xl:max-w-7xl xl:px-8">
      <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
        <h2 id="category-heading" className="text-2xl font-semibold tracking-tight text-accent sm:text-3xl">Browse by Category</h2>
        <Link href="/gallery" className="hidden text-sm font-semibold text-accent-2 hover:underline sm:block">
          View full gallery <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="mt-4 flow-root">
        <div className="-my-2">
          <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
            <div className="absolute flex space-x-6 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
              {categories.map(cat => (
                <Link
                  key={cat.slug}
                  href={`/gallery?category=${cat.slug}`}
                  className="relative flex h-80 w-52 flex-col overflow-hidden rounded-xl p-4 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D2A13] transition xl:w-auto"
                >
                  <span aria-hidden="true" className="absolute inset-0">
                    <Image
                      src={cat.image}
                      alt={cat.alt}
                      fill
                      priority={false}
                      sizes="(max-width: 640px) 208px, (max-width: 1280px) 20vw, 240px"
                      className="object-cover"
                    />
                  </span>
                  <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className="relative mt-auto text-center text-lg font-semibold tracking-wide text-white drop-shadow">
                    {cat.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 px-4 sm:hidden">
        <Link href="/gallery" className="block text-sm font-semibold text-accent-2 hover:underline">
          View full gallery <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
