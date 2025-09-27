import React from "react";

interface ReviewItem {
  id: number;
  name: string;
  location?: string;
  title: string;
  body: string;
  rating: number; // 1-5
  cakeType?: string;
}

const reviews: ReviewItem[] = [
  {
    id: 1,
    name: "Aisha K.",
    location: "Kannur",
    title: "Exactly like the reference – but tastier",
    body: "I sent an inspiration picture for a Spiderman cake and what arrived was even cleaner. Moist chocolate layers, not too sweet frosting. Kids loved it.",
    rating: 5,
    cakeType: "Superhero Birthday",
  },
  {
    id: 2,
    name: "Divya & Rafi",
    title: "Anniversary perfection",
    body: "Subtle floral work and the vanilla pistachio filling was outstanding. Stayed fresh the next day too.",
    rating: 5,
    cakeType: "Anniversary",
  },
  {
    id: 3,
    name: "Neha P.",
    title: "Zero hassle, on time",
    body: "Clear communication, delivered exactly at the agreed slot. The hamper style presentation was a surprise hit at the office.",
    rating: 5,
    cakeType: "Gift Hamper",
  },
  {
    id: 4,
    name: "Salman R.",
    title: "Flavour layers stand out",
    body: "The raspberry + white chocolate combo actually tasted distinct. You can tell it’s small batch and fresh, no freezer taste.",
    rating: 5,
    cakeType: "Custom Layer Cake",
  },
  {
    id: 5,
    name: "Hiba N.",
    title: "Kid’s favourite now",
    body: "Mickey cake looked adorable and cut so cleanly. Ordering again for the next cousin’s birthday.",
    rating: 5,
    cakeType: "Character Cake",
  },
  {
    id: 6,
    name: "Farhana A.",
    title: "Balanced sweetness",
    body: "Finally a cake that isn’t overly sugary. Texture was soft even after refrigeration. Highly recommend the chocolate drip.",
    rating: 5,
    cakeType: "Chocolate Drip",
  },
];

function Stars({ value }: { value: number }) {
  return (
    <div className="flex" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
            className={`h-4 w-4 ${i < value ? 'text-teal-500' : 'text-zinc-300'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.95-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Kind words from real celebrations
          </h2>
          <p className="mt-4 text-base text-zinc-600">
            A few recent messages from families and friends who chose a Memmis Cake for their milestone moments.
          </p>
        </div>

        <dl className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <Stars value={r.rating} />
              <dt className="mt-4 text-base font-semibold text-zinc-900">{r.title}</dt>
              <dd className="mt-2 flex-1 text-sm leading-6 text-zinc-600">{r.body}</dd>
              <div className="mt-4 flex items-center justify-between text-xs font-medium text-zinc-500">
                <span>{r.name}{r.location && ` • ${r.location}`}</span>
                {r.cakeType && <span className="rounded bg-teal-50 px-2 py-0.5 text-[10px] font-semibold text-teal-700">{r.cakeType}</span>}
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
