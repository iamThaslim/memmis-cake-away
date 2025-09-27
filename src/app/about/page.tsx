import Image from "next/image";

interface TimelineItem {
  name: string;
  description: string;
  date: string;
  dateTime: string;
}

const timeline: TimelineItem[] = [
  {
    name: "First custom cake order",
    description:
      "A simple chocolate celebration cake for a neighbour—word of mouth started here.",
    date: "Jan 2022",
    dateTime: "2022-01",
  },
  {
    name: "Joined Instagram",
    description:
      "Started sharing behind‑the‑scenes baking reels and design sketches; enquiries began to grow steadily.",
    date: "Jun 2022",
    dateTime: "2022-06",
  },
  {
    name: "100th customer milestone",
    description:
      "Crossed 100+ unique customers—return orders for birthdays, engagements and anniversaries became regular.",
    date: "Mar 2024",
    dateTime: "2024-03",
  },
  {
    name: "Refining signature styles",
    description:
      "Focused on flavour layering, premium fillings and sculpted character cakes while keeping a home‑made warmth.",
    date: "Present",
    dateTime: "2025-01",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <main className="isolate">
        {/* Hero / Story */}
        <section className="relative isolate overflow-hidden pt-20">
          <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-10 xl:grid-cols-3 xl:gap-x-12">
              <h1
                className="text-balance text-4xl font-apfel hero-heading tracking-tight sm:text-6xl lg:col-span-2 xl:col-span-3"
              >
                A one‑woman home bakery crafting edible memories
              </h1>
              <div className="mt-8 max-w-xl lg:mt-10 xl:col-span-2">
                <p className="text-lg font-medium text-zinc-600 sm:text-xl/8">
                  Memmis Cake is run solely by <strong className="font-semibold text-teal-700">Sharmeena Ranees</strong>—baker, decorator, flavour tinkerer, photographer, packer and delivery coordinator when needed. Every cake is personal; it passes through one pair of hands from batter to final flourish.
                </p>
                <p className="mt-6 text-base leading-7 text-zinc-600">
                  What began as a therapeutic creative outlet quickly turned into a calling. With a focus on small‑batch freshness and premium ingredients, Sharmeena builds each design around the story you share—whether it’s a first birthday smash cake, a milestone anniversary or a themed novelty build for a favourite character.
                </p>
                <p className="mt-4 text-base leading-7 text-zinc-600">
                  There is no factory line, no bulk freezing. Just careful timing, flavour layering, hand piping, and packed orders heading out to brighten real celebrations across the community.
                </p>
              </div>
              <div className="mt-10 lg:mt-0 xl:col-span-1 xl:row-start-2 xl:row-span-2">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-zinc-100">
                  <Image
                    alt="Sharmeena finishing a custom cake with piping details"
                    src="https://res.cloudinary.com/dzw01vn1c/image/upload/f_auto,q_auto,c_fill,w_1000,h_1250/belle_disney_hbzpor.jpg"
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-zinc-900/10" />
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white" />
        </section>

        {/* Timeline */}
        <section className="mx-auto -mt-10 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-10 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {timeline.map((item) => (
              <div key={item.name} className="relative">
                <time
                  dateTime={item.dateTime}
                  className="flex items-center text-sm font-semibold text-teal-600"
                >
                  <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-3 h-1 w-1 flex-none">
                    <circle r={2} cx={2} cy={2} fill="currentColor" />
                  </svg>
                  {item.date}
                  <div
                    aria-hidden="true"
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-zinc-200 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  />
                </time>
                <p className="mt-6 text-lg font-semibold tracking-tight text-zinc-900">{item.name}</p>
                <p className="mt-2 text-base leading-7 text-zinc-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Credibility / micro stats */}
        <section className="mx-auto mt-28 max-w-7xl px-6 sm:mt-36 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
              Built on trust, flavour & consistency
            </h2>
            <p className="mt-6 text-base leading-7 text-zinc-600">
              A growing circle of families returns each time they celebrate. The focus stays on reliability: clear communication, punctual pickup or delivery windows, stable structures in transit and flavour profiles that people request again.
            </p>
          </div>
          <div className="mx-auto mt-14 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-end">
            <div className="flex flex-col-reverse justify-between gap-x-12 gap-y-6 rounded-2xl bg-zinc-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
              <p className="flex-none text-3xl font-semibold tracking-tight text-zinc-900">100+</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-zinc-900">Customers served</p>
                <p className="mt-2 text-base leading-7 text-zinc-600">Across birthdays, engagements & family events.</p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-12 gap-y-6 rounded-2xl bg-teal-600 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-36">
              <p className="flex-none text-3xl font-semibold tracking-tight text-white">5★</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">Consistent feedback</p>
                <p className="mt-2 text-base leading-7 text-teal-50">Positive repeat messages after each celebration.</p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-12 gap-y-6 rounded-2xl bg-pink-500 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-24">
              <p className="flex-none text-3xl font-semibold tracking-tight text-white">0</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">Missed delivery days</p>
                <p className="mt-2 text-base leading-7 text-white/90">Reliability & planning matter as much as taste.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

