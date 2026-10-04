import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { knives } from "../data";
import { DrawRule, Label, Seal } from "./Atoms";

const cols = "grid-cols-[2.4rem_minmax(0,1fr)_7.5rem_5.4rem_7.4rem_6.4rem]";

export default function Ledger() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  const active = knives[i];

  return (
    <section id="ledger" className="grain relative bg-leaf">
      <div className="mx-auto max-w-[1560px] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
        {/* ---- section head ---- */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Label tone="text-seal">Nº II — The ledger</Label>
            <h2 className="mt-5 max-w-[14ch] font-display text-[clamp(2.1rem,5vw,4.6rem)] font-medium leading-[0.98] tracking-[-0.02em]">
              Six patterns, <span className="italic">specified</span>.
            </h2>
          </div>
          <p className="max-w-[34ch] text-[13.5px] leading-relaxed text-ash lg:text-right">
            Prices in Japanese yen, tax and domestic carriage included. Every
            blade is ground to order — six to eight weeks from enquiry to dispatch.
          </p>
        </div>

        <DrawRule className="mt-9" tone="rgba(22,19,15,.35)" />

        {/* ---- 62 / 38 split: ledger left, plate rail right ---- */}
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_36%] lg:gap-x-14">
          {/* ---------------- the ledger ---------------- */}
          <div>
            <div
              className={`label hidden gap-4 border-b border-ink/30 pb-3 text-ash md:grid ${cols}`}
            >
              <span>Nº</span>
              <span>Pattern</span>
              <span>Steel</span>
              <span>Length</span>
              <span>Finish</span>
              <span className="text-right">Price</span>
            </div>

            <ul>
              {knives.map((k, idx) => {
                const on = idx === i;
                return (
                  <li key={k.no}>
                    <button
                      type="button"
                      aria-pressed={on}
                      onMouseEnter={() => setI(idx)}
                      onFocus={() => setI(idx)}
                      onClick={() => setI(idx)}
                      className={`group relative block w-full cursor-pointer border-b border-ink/20 px-0 py-5 text-left outline-none transition-colors duration-300 focus-visible:bg-paper ${
                        on ? "bg-paper" : "hover:bg-paper/60"
                      }`}
                    >
                      {/* ember marker */}
                      <span
                        className={`absolute left-0 top-0 h-full w-[3px] origin-top bg-seal transition-transform duration-500 ${
                          on ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
                        }`}
                      />

                      {/* desktop row */}
                      <div
                        className={`hidden gap-4 pl-4 pr-3 md:grid md:items-baseline ${cols}`}
                      >
                        <span
                          className={`num label transition-colors ${
                            on ? "text-seal" : "text-ash"
                          }`}
                        >
                          {k.no}
                        </span>
                        <span className="flex min-w-0 items-baseline gap-2.5 transition-transform duration-500 group-hover:translate-x-1">
                          <span className="font-display text-[1.65rem] font-medium leading-none tracking-tight">
                            {k.name}
                          </span>
                          <span className="jp text-[13px] text-ash">{k.jp}</span>
                        </span>
                        <span className="text-[13px] text-ink/75">{k.steel}</span>
                        <span className="num text-[13px] text-ink/75">{k.length}</span>
                        <span className="text-[13px] text-ink/75">{k.finish}</span>
                        <span
                          className={`num text-right font-display text-[1.15rem] font-medium transition-colors duration-300 ${
                            on ? "text-seal" : ""
                          }`}
                        >
                          ¥{k.price}
                        </span>
                      </div>

                      {/* mobile row */}
                      <div className="pl-4 pr-1 md:hidden">
                        <div className="flex items-baseline gap-3">
                          <span
                            className={`num label ${on ? "text-seal" : "text-ash"}`}
                          >
                            {k.no}
                          </span>
                          <span className="font-display text-[1.5rem] font-medium leading-none">
                            {k.name}
                          </span>
                          <span className="jp text-[12px] text-ash">{k.jp}</span>
                          <span
                            className={`num ml-auto font-display text-[1.05rem] font-medium ${
                              on ? "text-seal" : ""
                            }`}
                          >
                            ¥{k.price}
                          </span>
                        </div>
                        <div className="label mt-2.5 flex flex-wrap gap-x-3 gap-y-1 text-ash">
                          <span>{k.steel}</span>
                          <span className="text-ink/25">·</span>
                          <span>{k.length}</span>
                          <span className="text-ink/25">·</span>
                          <span>{k.finish}</span>
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[46ch] text-[13px] leading-relaxed text-ash">
                Left-handed grind, custom length and monogram stamp available on
                commission at no additional cost.
              </p>
              <a
                href="#visit"
                className="label group flex shrink-0 items-center gap-4 border-b border-ink/40 pb-2 text-ink transition-colors duration-300 hover:border-seal hover:text-seal"
              >
                Request a commission
                <span className="transition-transform duration-500 group-hover:translate-x-1.5">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* ---------------- sticky plate rail ---------------- */}
          <div className="order-first lg:order-none">
            <div className="lg:sticky lg:top-24">
              <div className="relative rotate-[-1.1deg]">
                <div className="relative aspect-[4/5] overflow-hidden border border-ink/15 bg-paper shadow-[0_36px_70px_-46px_rgba(22,19,15,.85)]">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.img
                      key={active.no}
                      src={active.img}
                      alt={`${active.name} ${active.jp}, ${active.steel}, ${active.length}`}
                      className="absolute inset-0 h-full w-full object-cover"
                      initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={reduce ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 0.78, 0.24, 1] }}
                    />
                  </AnimatePresence>

                  {/* registration ticks */}
                  <span className="absolute left-3 top-3 h-4 w-4 border-l border-t border-seal/70" />
                  <span className="absolute right-3 top-3 h-4 w-4 border-r border-t border-seal/70" />
                  <span className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-seal/70" />

                  {/* the stamp lands with the plate */}
                  <motion.span
                    key={`seal-${active.no}`}
                    className="absolute bottom-4 right-4 block"
                    initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 1.4, rotate: -14 }}
                    animate={{ opacity: 1, scale: 1, rotate: -7 }}
                    transition={{ duration: 0.34, ease: [0.2, 0.9, 0.25, 1] }}
                  >
                    <Seal className="h-14 w-14 text-[100px]" />
                  </motion.span>
                </div>

                {/* caption */}
                <div className="mt-5 pl-0.5">
                  <div className="flex items-baseline justify-between gap-4 border-b border-ink/25 pb-2.5">
                    <span className="label text-seal">
                      Nº {active.no} — {active.reading}
                    </span>
                    <span className="num label text-ash">{active.hardness}</span>
                  </div>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-ink/75">
                    {active.note}
                  </p>
                  <p className="jp mt-3 text-[15px] tracking-[0.2em] text-ink/70">
                    {active.jp} ・ {active.finish}
                  </p>
                </div>
              </div>

              <p className="label mt-6 hidden text-ash lg:block">
                Hover a line to change the plate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


