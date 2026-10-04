import { DrawRule, Reveal, Seal, Label } from "./Atoms";

const stats = [
  { k: "1596", v: "Tobacco knives first cut in Sakai" },
  { k: "06", v: "Patterns held in the catalogue" },
  { k: "63", v: "HRC, white paper steel at the core" },
  { k: "11", v: "Blades leaving the bench each month" },
];

export default function Manifesto() {
  return (
    <section id="philosophy" className="grain relative bg-paper">
      <div className="mx-auto max-w-[1560px] px-5 py-24 sm:px-8 lg:px-14 lg:py-36">
        <div className="grid gap-10 lg:grid-cols-[200px_1fr] lg:gap-x-20">
          {/* left rail */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Label tone="text-seal">Nº I — Philosophy</Label>
            <DrawRule className="mt-4" tone="rgba(22,19,15,.25)" delay={0.1} />
            <p className="jp mt-6 text-[26px] leading-tight tracking-[0.18em] text-ink/85">
              哲学
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-ash">
              A knife should be able to name the person who made it.
            </p>
            <Seal className="mt-8 h-12 w-12 text-[100px]" />
          </div>

          {/* body */}
          <div>
            <Reveal>
              <h2 className="max-w-[16ch] font-display text-[clamp(2rem,4.4vw,4.1rem)] font-medium leading-[1.02] tracking-[-0.015em]">
                The city that <span className="italic">learned</span> to make an edge.
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-10 gap-x-12 text-[15.5px] leading-[1.75] text-ink/80 lg:columns-2">
                <p className="mb-6">
                  <span className="float-left mr-3 mt-1.5 font-display text-[4.2rem] font-medium leading-[0.72] text-seal">
                    S
                  </span>
                  akai has cut since 1596, when the tobacco leaf came through the
                  port and the city needed a blade to shred it. At its height more
                  than a thousand people had a hand in a single knife — the smelter,
                  the forger, the sharpener, the handle-fitter — each doing one
                  operation, passing the steel hand to hand down the Teshio-gawa.
                </p>
                <p className="mb-6">
                  That line is gone, and with it the reason most blades have no
                  author. In this workshop one person takes a bar of steel and does
                  not let go until the knife is finished: the fire, the stone, the
                  handle, the stamp. It is slower than it has any right to be.
                </p>
                <p className="mb-6">
                  White paper steel is unforgiving — it takes an edge nothing else
                  will hold and it punishes anyone impatient with it. Three bars in
                  ten survive the quench. We keep the failures on a shelf so the
                  makers can see what the water did.
                </p>
                <p>
                  Everything here is made to order. You will wait six to eight
                  weeks. The blade will outlast the wait by a few decades.
                </p>
              </div>
            </Reveal>

            {/* stat strip */}
            <div className="mt-14">
              <DrawRule tone="rgba(22,19,15,.3)" />
              <dl className="grid grid-cols-2 gap-y-8 pt-7 lg:grid-cols-4">
                {stats.map((s, i) => (
                  <Reveal key={s.k} delay={i * 0.07}>
                    <div className="border-l border-ink/15 pl-4 lg:pl-5">
                      <dt className="num font-display text-[clamp(2.1rem,3.2vw,3rem)] font-medium leading-none tracking-tight">
                        {s.k}
                      </dt>
                      <dd className="mt-3 max-w-[19ch] text-[12.5px] leading-relaxed text-ash">
                        {s.v}
                      </dd>
                    </div>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
