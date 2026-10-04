import { useEffect, useState } from "react";
import { Seal, Wordmark } from "./Atoms";

const links = [
  { href: "#ledger", label: "Ledger" },
  { href: "#process", label: "Process" },
  { href: "#makers", label: "Makers" },
  { href: "#visit", label: "Visit" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        solid
          ? "border-b border-ink/15 bg-paper/92 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1560px] items-center gap-6 px-5 sm:px-8 lg:px-14">
        <a href="#top" className="group flex items-center gap-3">
          <Seal className="h-7 w-7 text-[100px]" />
          <Wordmark
            className="text-[13px] sm:text-[15px]"
            tone={solid ? "#16130f" : "#f3eee6"}
          />
        </a>

        <nav className="ml-auto hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`label group relative py-2 transition-colors ${
                solid ? "text-ink/70 hover:text-ink" : "text-paper/70 hover:text-paper"
              }`}
            >
              {l.label}
              <span
                className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-seal transition-transform duration-500 group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        <a
          href="#visit"
          className={`label ml-auto shrink-0 border px-4 py-2.5 transition-colors duration-300 md:ml-0 ${
            solid
              ? "border-ink/30 text-ink hover:border-seal hover:bg-seal hover:text-paper"
              : "border-paper/40 text-paper hover:border-paper hover:bg-paper hover:text-ink"
          }`}
        >
          Enquire
        </a>
      </div>
    </header>
  );
}
