import { DrawRule, Label, Reveal, Seal } from "./Atoms";
import { img } from "../lib/img";

const anvilHands = img("anvil-hands.jpg");
const whetstone = img("whetstone.jpg");

const makers = [
  {
    idx: "i",
    jp: "西村 和夫",
    name: "Kazuo Nishimura",
    role: "Master smith — third generation",
    img: anvilHands,
    alt: "A smith's hands holding tongs and hammer above glowing steel on the anvil",
    body: "Takes the bar out of the fire at 780 °C and does not set the hammer down until the profile is right. He learned at fourteen under his father, Nishimura Sōbei, and has worked this anvil — the same one — for forty-one years.",
    quote: "The steel tells you when. You don't get to argue with it.",
    meta: ["Est. 1984", "11 blades / month", "63 HRC"],
  },
  {
    idx: "ii",
    jp: "伊藤 遥",
    name: "Haruka Ito",
    role: "Sharpener — 研ぎ師",
    img: whetstone,
    alt: "A blade drawn across a soaking whetstone under a single warm lamp",
    body: "Sets every bevel by hand from #1200 to #6000, judging the convex by the sound the blade makes leaving the stone. She measures nothing, tapes nothing, and rejects a blade that runs a tenth of a millimetre out at the tip.",
    quote: "A flat stone and a lazy wrist. That is the whole trick.",
    meta: ["Joined 2016", "#6000 finishing", "0.1 mm tolerance"],
  },
];

export default function Makers() {
  return (
    <section id="makers" className="grain relative bg-paper">
      <div className="mx-auto max-w-[1560px] px-5 py-24 sm:px-8 lg:px-14 lg:py-36">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Label tone="text-seal">Nº IV — The makers</Label>
            <h2 className="mt-5 max-w-[15ch] font-display text-[clamp(2.1rem,5vw,4.6rem)] font-medium leading-[0.98] tracking-[-0.02em]">
              Two people, <span className="italic">one blade</span>.
            </h2>
          </div>
          <p className="max-w-[32ch] text-[13.5px] leading-relaxed text-ash lg:text-right">
            Your knife is stamped with the seal of the person who forged it. If
            either seal is missing, it did not leave this building.
          </p>
        </div>

        <DrawRule className="mt-9" tone="rgba(22,19,15,.35)" />

        <div className="mt-14 flex flex-col gap-20 lg:gap-28">
          {makers.map((m, i) => (
            <article
              key={m.name}
              className="grid items-center gap-8 lg:grid-cols-12 lg:gap-0"
            >
              {/* plate */}
              <Reveal
                className={`lg:col-span-7 ${i % 2 === 1 ? "lg:col-start-6" : "lg:col-start-1"}`}
              >
                <div className="relative overflow-hidden bg-night">
                  <img
                    src={m.img}
                    alt={m.alt}
                    loading="lazy"
                    className="h-[46vh] w-full object-cover lg:h-[64vh]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent" />
                  <span className="jp absolute bottom-5 left-5 text-[1.5rem] tracking-[0.2em] text-paper/85">
                    {m.jp}
                  </span>
                </div>
              </Reveal>

              {/* text plane, overlapping the plate */}
              <Reveal
                delay={0.12}
                className={`lg:relative lg:z-10 lg:-my-10 lg:col-span-6 lg:bg-paper lg:p-10 lg:shadow-[0_30px_60px_-50px_rgba(22,19,15,.9)] ${
                  i % 2 === 1 ? "lg:col-start-1" : "lg:col-start-7"
                }`}
              >
                <div>
                  <div className="flex items-center gap-4">
                    <span className="label text-seal">Maker {m.idx}</span>
                    <span className="h-px flex-1 bg-ink/20" />
                    <Seal className="h-8 w-8 text-[100px]" />
                  </div>

                  <h3 className="mt-6 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-medium leading-none tracking-[-0.02em]">
                    {m.name}
                  </h3>
                  <p className="mt-3 text-[13px] text-ash">{m.role}</p>

                  <p className="mt-6 max-w-[46ch] text-[15px] leading-[1.75] text-ink/80">
                    {m.body}
                  </p>

                  <blockquote className="mt-7 border-l-2 border-ember pl-5 font-display text-[1.35rem] italic leading-snug text-ink/90">
                    “{m.quote}”
                  </blockquote>

                  <ul className="label mt-7 flex flex-wrap gap-x-6 gap-y-2 border-t border-ink/20 pt-4 text-ash">
                    {m.meta.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
