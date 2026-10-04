import { Label, Seal, Wordmark } from "./Atoms";
import { knives } from "../data";

export default function Footer() {
  return (
    <footer className="grain grain-light relative overflow-hidden bg-night text-paper">
      <div className="mx-auto max-w-[1560px] px-5 pb-10 pt-20 sm:px-8 lg:px-14 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <Seal className="h-12 w-12 text-[100px]" />
              <Wordmark className="text-[22px]" tone="#f3eee6" />
            </div>
            <p className="mt-6 max-w-[34ch] text-[14px] leading-[1.7] text-paper/60">
              Hand-forged kitchen knives, made one at a time in Sakai, Osaka,
              since 1596.
            </p>
            <p className="jp mt-6 text-[15px] tracking-[0.3em] text-paper/45">
              鋼は手を裏切らない
            </p>
          </div>

          <nav>
            <Label tone="text-ember">Catalogue</Label>
            <ul className="mt-5 space-y-2.5 text-[14px] text-paper/70">
              {[
                ["#ledger", "The ledger"],
                ["#process", "Process"],
                ["#makers", "Makers"],
                ["#visit", "Visit"],
              ].map(([h, l]) => (
                <li key={h}>
                  <a href={h} className="transition-colors duration-300 hover:text-paper">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <Label tone="text-ember">Patterns</Label>
            <ul className="num mt-5 space-y-2.5 text-[14px] text-paper/70">
              {knives.map((k) => (
                <li key={k.no}>
                  <a
                    href="#ledger"
                    className="flex gap-3 transition-colors duration-300 hover:text-paper"
                  >
                    <span className="text-paper/35">{k.no}</span>
                    {k.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <Label tone="text-ember">Correspondence</Label>
            <ul className="mt-5 space-y-2.5 text-[14px] text-paper/70">
              <li>atelier@hagane-sakai.jp</li>
              <li className="num">+81 72 221 0159</li>
              <li className="pt-2 leading-relaxed text-paper/55">
                箸塚 2-chōme, Sakai-ku,
                <br />
                Sakai, Osaka 590-0941
              </li>
            </ul>
          </div>
        </div>

        {/* the wordmark, running the full measure */}
        <div className="mt-16 overflow-hidden border-t border-paper/20 pt-8">
          <p className="whitespace-nowrap font-display text-[clamp(3rem,13.5vw,12rem)] font-medium leading-[0.82] tracking-[0.02em] text-paper/10">
            HAGANE 鋼
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-[11.5px] text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <span className="num">
            © 2026 HAGANE 鋼 · Registered cutlery maker 大阪府 7-1432
          </span>
          <span className="label">Sakai · Osaka · Japan</span>
        </div>
      </div>

      {/* vertical slug along the right edge */}
      <span
        className="jp pointer-events-none absolute right-4 top-1/3 hidden text-[12px] tracking-[0.55em] text-paper/25 xl:block"
        style={{ writingMode: "vertical-rl" }}
      >
        堺打刃物 ・ 鍛冶の仕事
      </span>
    </footer>
  );
}
