import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { knives } from "../data";
import { DrawRule, Label, Seal } from "./Atoms";
import { img } from "../lib/img";

const atelier = img("atelier-exterior.jpg");

type Errors = { name?: string; email?: string };

export default function Visit() {
  const reduce = useReducedMotion();
  const [form, setForm] = useState({
    name: "",
    email: "",
    pattern: knives[0].name,
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const field =
    "w-full border-b border-ink/30 bg-transparent px-0 py-3 text-[15px] text-ink outline-none transition-colors duration-300 placeholder:text-ash/70 focus:border-seal";

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Tell us who to address the reply to.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email))
      next.email = "A working email address, please.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  return (
    <section id="visit" className="grain relative bg-leaf">
      <div className="grid lg:grid-cols-2">
        {/* ---- plate: the workshop at dusk ---- */}
        <div className="relative min-h-[52vh] overflow-hidden bg-night lg:min-h-full">
          <img
            src={atelier}
            alt="The wooden workshop lane in Sakai at dusk in the rain, one paper lantern lit"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(20,26,36,.78) 0%, rgba(20,26,36,.34) 42%, rgba(20,26,36,.88) 100%)",
            }}
          />

          <div className="relative flex h-full flex-col justify-between p-6 sm:p-10 lg:p-14">
            <Label tone="text-paper/70">Nº V — Visit the atelier</Label>

            <div className="mt-16 max-w-[34ch] lg:mt-0">
              <h2 className="font-display text-[clamp(2rem,3.6vw,3.6rem)] font-medium leading-[1.02] tracking-[-0.02em] text-paper">
                Come and hold
                <br />
                <span className="italic text-ember">the steel first.</span>
              </h2>

              <dl className="mt-8 space-y-4 border-t border-paper/30 pt-6 text-[14px] text-paper/80">
                <div>
                  <dt className="label text-paper/50">Workshop</dt>
                  <dd className="mt-1.5">
                    箸塚 2-chōme, Sakai-ku, Sakai,
                    <br />
                    Osaka 590-0941, Japan
                  </dd>
                </div>
                <div>
                  <dt className="label text-paper/50">Open</dt>
                  <dd className="num mt-1.5">
                    Thursday — Saturday, 10:00–17:00, by appointment
                  </dd>
                </div>
                <div>
                  <dt className="label text-paper/50">Correspondence</dt>
                  <dd className="mt-1.5">atelier@hagane-sakai.jp · +81 72 221 0159</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* ---- form ---- */}
        <div className="flex items-center px-5 py-20 sm:px-8 lg:px-14 lg:py-24">
          <div className="w-full max-w-[560px]">
            <AnimatePresence mode="wait" initial={false}>
              {sent ? (
                <motion.div
                  key="sent"
                  initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 0.78, 0.24, 1] }}
                >
                  <Label tone="text-seal">Enquiry received</Label>
                  <p className="mt-6 font-display text-[clamp(1.8rem,3vw,2.7rem)] font-medium leading-[1.1] tracking-[-0.02em]">
                    Thank you, {form.name.split(" ")[0]}.
                  </p>
                  <p className="mt-5 max-w-[42ch] text-[15px] leading-[1.75] text-ink/75">
                    Your commission for a <em>{form.pattern}</em> is on the bench
                    list. We reply within two working days — in Japanese or English
                    — with a forging date and a deposit schedule.
                  </p>
                  <div className="mt-8 flex items-center gap-5">
                    <Seal className="h-14 w-14 text-[100px]" />
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="label border-b border-ink/40 pb-1.5 text-ink transition-colors duration-300 hover:border-seal hover:text-seal"
                    >
                      Send another
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={submit}
                  noValidate
                  initial={reduce ? { opacity: 1 } : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Label tone="text-seal">Commission enquiry</Label>
                  <p className="mt-5 max-w-[44ch] text-[15px] leading-[1.75] text-ink/75">
                    Tell us what you cut. We will answer with a forging date, not a
                    catalogue.
                  </p>

                  <div className="mt-9 space-y-7">
                    <div>
                      <label className="label block text-ash" htmlFor="name">
                        Name
                      </label>
                      <input
                        id="name"
                        className={field}
                        placeholder="Nishimura Kazuo"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p className="mt-2 text-[12.5px] text-seal">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="label block text-ash" htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={field}
                        placeholder="you@kitchen.jp"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p className="mt-2 text-[12.5px] text-seal">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="label block text-ash" htmlFor="pattern">
                        Pattern of interest
                      </label>
                      <select
                        id="pattern"
                        className={`${field} appearance-none rounded-none`}
                        value={form.pattern}
                        onChange={(e) => setForm({ ...form, pattern: e.target.value })}
                      >
                        {knives.map((k) => (
                          <option key={k.no} value={k.name}>
                            Nº {k.no} — {k.name} {k.jp} · {k.length} · ¥{k.price}
                          </option>
                        ))}
                        <option value="commission">Commission — not listed</option>
                      </select>
                    </div>

                    <div>
                      <label className="label block text-ash" htmlFor="message">
                        What do you cut?
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        className={`${field} resize-none`}
                        placeholder="Daily board work, mostly fish and vegetables…"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="label group mt-10 flex w-full items-center justify-between bg-ink px-7 py-5 text-paper transition-colors duration-300 hover:bg-ember sm:w-auto sm:gap-14"
                  >
                    Send enquiry
                    <svg width="34" height="8" viewBox="0 0 34 8" fill="none" aria-hidden>
                      <path
                        d="M0 4h31M27 1l4 3-4 3"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        className="transition-transform duration-500 group-hover:translate-x-1.5"
                      />
                    </svg>
                  </button>

                  <p className="label mt-6 text-ash">
                    No deposit until a forging date is agreed
                  </p>
                </motion.form>
              )}
            </AnimatePresence>

            <DrawRule className="mt-12" tone="rgba(22,19,15,.25)" />
          </div>
        </div>
      </div>
    </section>
  );
}
