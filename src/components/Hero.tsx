import { motion, useReducedMotion } from "framer-motion";
import { Seal } from "./Atoms";
import { img } from "../lib/img";

const forgeHero = img("forge-hero.jpg");

const lines = ["Ten thousand", "blows to", "one edge."];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="grain grain-light relative min-h-[100svh] overflow-hidden bg-night text-paper"
    >
      <img
        src={forgeHero}
        alt="A bar of steel glowing orange on the anvil of a Sakai forge"
        className="absolute inset-0 h-full w-full object-cover object-[72%_center]"
        loading="eager"
      />
      {/* scrims: keep the left third readable, let the ember stay on the right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(20,26,36,.96) 0%, rgba(20,26,36,.9) 34%, rgba(20,26,36,.52) 62%, rgba(20,26,36,.44) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-1/3"
        style={{ background: "linear-gradient(to top, rgba(20,26,36,.92), transparent)" }}
      />

      {/* vertical Japanese slug, right edge */}
      <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 lg:block">
        <span
          className="jp text-[13px] tracking-[0.6em] text-paper/45"
          style={{ writingMode: "vertical-rl" }}
        >
          堺打刃物 ・ 明治九年創業
        </span>
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1560px] flex-col justify-end px-5 pb-14 pt-32 sm:px-8 lg:px-14 lg:pb-20">
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 0.78, 0.24, 1] }}
          className="flex items-center gap-4"
        >
          <Seal className="h-11 w-11 text-[100px]" />
          <span className="label text-paper/65">Sakai · Osaka — cutlers since 1596</span>
        </motion.div>

        <h1 className="mt-7 font-display text-[clamp(2.5rem,7.4vw,7.2rem)] font-medium leading-[0.98] tracking-[-0.02em]">
          {lines.map((l, i) => (
            <span
              key={l}
              className="block overflow-hidden pb-[0.06em] pt-[0.08em]"
            >
              <motion.span
                className="block"
                initial={reduce ? {} : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.05,
                  delay: 0.28 + i * 0.11,
                  ease: [0.16, 0.78, 0.24, 1],
                }}
              >
                {i === 2 ? <span className="italic text-ember">{l}</span> : l}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.72, ease: [0.16, 0.78, 0.24, 1] }}
          className="mt-9 flex flex-col gap-8 border-t border-paper/25 pt-7 lg:flex-row lg:items-end lg:justify-between"
        >
          <p className="max-w-[38ch] text-[15px] leading-[1.7] text-paper/75">
            Hand-forged kitchen knives, one maker from fire to finish. Six
            patterns, made to order in six to eight weeks — and never more than
            eleven in a month.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#ledger"
              className="label group flex items-center gap-5 bg-paper px-7 py-4 text-ink transition-colors duration-300 hover:bg-ember hover:text-paper"
            >
              The ledger
              <svg width="34" height="8" viewBox="0 0 34 8" fill="none" aria-hidden>
                <path
                  d="M0 4h31M27 1l4 3-4 3"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  className="transition-transform duration-500 group-hover:translate-x-1.5"
                />
              </svg>
            </a>
            <a
              href="#visit"
              className="label border border-paper/45 px-7 py-4 text-paper transition-colors duration-300 hover:border-paper hover:bg-paper/10"
            >
              Visit the atelier
            </a>
          </div>
        </motion.div>

        <div className="mt-10 flex items-center gap-4">
          <span className="label text-paper/40">Scroll</span>
          <motion.span
            className="h-px w-24 origin-left bg-paper/35"
            initial={reduce ? {} : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, delay: 1.1, ease: [0.16, 0.78, 0.24, 1] }}
          />
        </div>
      </div>
    </section>
  );
}
