"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Stat = {
  id: number;
  name: string;
  value: number; // numeric value to animate to
  suffix?: string; // e.g. '+' or '%'
};

const stats: Stat[] = [
  { id: 1, name: "Cakes Crafted", value: 850, suffix: "+" },
  { id: 2, name: "Unique Flavours", value: 42, suffix: "+" },
  { id: 3, name: "5★ Reviews", value: 320, suffix: "+" },
  { id: 4, name: "Happy Celebrations", value: 780, suffix: "+" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix?: string }) {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(wrapperRef, { once: true, margin: "0px 0px -60px 0px" });
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView || done) {
      return;
    }
    let start: number | null = null;
    const duration = 1400; // ms
    const startVal = 0;
    const diff = value - startVal;

    function step(ts: number) {
      if (start === null) {
        start = ts;
      }
      const progress = Math.min(1, (ts - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = Math.round(startVal + diff * eased);
      if (spanRef.current) {
        spanRef.current.textContent = current.toString();
      }
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDone(true);
      }
    }
    requestAnimationFrame(step);
  }, [inView, done, value]);

  return (
    <div ref={wrapperRef} className="inline-flex items-baseline justify-center">
      <span ref={spanRef} aria-live="off">0</span>
      {suffix && <span className="ml-0.5" aria-hidden="true">{suffix}</span>}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-none">
          <h2
            className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Hand‑made sweetness, loved locally
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Small batch, made-to-order cakes baked with premium ingredients and a whole lot of heart.
          </p>
        </div>

        <dl className="mt-16 grid grid-cols-1 overflow-hidden rounded-2xl text-center shadow-sm ring-1 ring-zinc-200 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, _i) => (
            <div
              key={stat.id}
              className="flex flex-col gap-2 bg-gradient-to-b from-white to-zinc-50 p-8 even:bg-white/80 lg:gap-3"
            >
              <dt className="text-sm font-medium text-zinc-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
