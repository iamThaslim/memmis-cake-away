import Image from "next/image";

// Three core offerings (now text only – single shared image cluster for the section)
const features = [
  {
    name: "Custom Celebration Cakes",
    description:
      "From minimalist elegance to fully sculpted themes—each build is planned for flavour, structure & storytelling.",
  },
  {
    name: "Desserts & Cups",
    description:
      "Layered trifles, mousse jars & petite indulgences that complete grazing tables & dessert spreads.",
  },
  {
    name: "Gifts, Hampers & Favors",
    description:
      "Curated treat selections, seasonal hampers & personalised minis perfect for heartfelt gifting.",
  },
];

// Shared image cluster (1 main + 2 small) - switched to Cloudinary (you can swap to your final curated images later)
// Using transformations: f_auto,q_auto for optimization, c_fill with explicit dimensions for consistent cropping.
const mainImage = "https://res.cloudinary.com/dzw01vn1c/image/upload/f_auto,q_auto,c_fill,w_1200,h_1200/hamper_01_di2dep.jpg";
const thumbA = "https://res.cloudinary.com/dzw01vn1c/image/upload/f_auto,q_auto,c_fill,w_600,h_600/mickey_mouse_k7pmfn.jpg";
const thumbB = "https://res.cloudinary.com/dzw01vn1c/image/upload/f_auto,q_auto,c_fill,w_600,h_600/wedding_anniversery_2_cpctwn.jpg";

export default function WhatWeDoSection() {
  return (
    <section aria-labelledby="what-we-do-heading" className="relative mt-24">
      <div className="mx-auto max-w-2xl lg:max-w-7xl lg:px-8 px-4 py-24 sm:px-6 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2 lg:gap-x-16">
          {/* Left: Heading + Features (full-height flex) */}
          <div className="flex flex-col">
            <div className="max-w-2xl border-b border-[#5D2A13]/20 pb-8">
              <h2 id="what-we-do-heading" className="text-xs font-semibold tracking-[0.15em] text-accent-2 uppercase">What We Do</h2>
              <p className="mt-3 text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
                We bring a touch of that simple magic into your world.
              </p>
            </div>
            <ul className="mt-12 space-y-10" aria-label="Our core offerings">
              {features.map((f) => (
                <li key={f.name} className="relative">
                  <h3 className="text-lg font-semibold text-accent-2">{f.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#3d3029] dark:text-gray-300 max-w-prose">{f.description}</p>
                </li>
              ))}
            </ul>
          </div>
          {/* Right: Image column equal height */}
          <div className="flex flex-col">
            <div className="relative flex-1 overflow-hidden rounded-xl shadow ring-1 ring-black/10 min-h-[320px] lg:min-h-[520px]">
              <Image
                src={mainImage}
                alt="Custom celebration cake showcase"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-5 sm:mt-7 sm:gap-7 lg:mt-8 lg:gap-8">
              <div className="relative overflow-hidden rounded-lg shadow ring-1 ring-black/10 aspect-square">
                <Image
                  src={thumbA}
                  alt="Dessert cup detail"
                  fill
                  sizes="(max-width: 1024px) 50vw, 18vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow ring-1 ring-black/10 aspect-square">
                <Image
                  src={thumbB}
                  alt="Gifting selection detail"
                  fill
                  sizes="(max-width: 1024px) 50vw, 18vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
