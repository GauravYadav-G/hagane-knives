import { steps } from "../data";
import { DrawRule, Label, Reveal } from "./Atoms";

export default function Process() {
  return (
    <section
      id="process"
      className="grain grain-light relative overflow-hidden bg-night text-paper"
    >
      {/* ember glow — the only light in this band */}
      <div
        className="pointer-events-none absolute -left-40 top-1/4 h-[540px] w-[540px] rounded-full opacity-60 blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(194,82,27,.55) 0%, rgba(194,82,27,.16) 45%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1560px] px-5 py-24 sm:px-8 lg:px-14 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-[34%_1fr] lg:gap-x-20">
          {/* left rail */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Label tone="text-ember">Nº III — Process</Label>
            <DrawRule className="mt-4" tone="rgba(243,238,230,.3)" delay={0.1} />
            <h2 className="mt-7 font-display text-[clamp(2rem,3.6vw,3.4rem)] font-medium leading-[1.02] tracking-[-0.015em]">
              Five stages,
              <br />
              <span className="italic text-ember">one pair of hands.</span>
            </h2>
            <p className="mt-6 max-w-[36ch] text-[14.5px] leading-[1.75] text-paper/65">
              Nothing here is passed down a line. The same maker carries the bar
              from the fire to the stone to the stamp — which is why the waiting
              list is the length that it is.
            </p>

            <div className="mt-9 border border-paper/20 p-5">
              <span className="label text-ember">Lead time</span>
              <p className="num mt-3 font-display text-[2.6rem] font-medium leading-none">
                6–8 <span className="text-[1.1rem] italic text-paper/70">weeks</span>
              </p>
              <p className="mt-3 text-[12.5px] leading-relaxed text-paper/55">
                Eleven blades leave the bench each month. Commission opens on the
                first of the month.
              </p>
            </div>
          </div>

          {/* the five stages */}
          <ol className="border-t border-paper/25">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 0.06}>
                <div className="group grid grid-cols-[3rem_1fr] gap-x-5 gap-y-3 border-b border-paper/20 py-8 transition-colors duration-500 hover:bg-paper/[0.04] sm:grid-cols-[4rem_1fr] sm:gap-x-8 lg:grid-cols-[4rem_9rem_1fr] lg:py-10">
                  <span className="num font-display text-[1.6rem] font-medium leading-none text-ember sm:text-[2rem]">
                    {s.n}
                  </span>

                  <span className="jp self-center text-[1.7rem] leading-none tracking-[0.14em] text-paper/90 sm:text-[2.1rem] lg:text-[2.4rem]">
                    {s.jp}
                  </span>

                  <div className="col-start-2 lg:col-start-3">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h3 className="font-display text-[1.4rem] font-medium leading-none tracking-tight sm:text-[1.7rem]">
                        {s.title}
                      </h3>
                      <Label tone="text-paper/45">{s.romaji}</Label>
                    </div>
                    <p className="mt-3.5 max-w-[56ch] text-[14.5px] leading-[1.75] text-paper/65">
                      {s.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
