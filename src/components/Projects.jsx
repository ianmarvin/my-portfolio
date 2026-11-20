import { useMemo, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import Section, { cardClass, chipClass } from "./Section";
import { projects } from "../data/portfolioData";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = useMemo(() => ["All", ...new Set(projects.map((p) => p.category))], []);
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="projects" title="Projects" intro="Selected work that shows how I solve problems. Filter by type.">
      <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              filter === c
                ? "border-accent bg-accent text-white dark:border-accent-dark dark:bg-accent-dark dark:text-[#0e1424]"
                : "border-slate-300 bg-white hover:bg-blue-50 dark:border-slate-700 dark:bg-[#161e33] dark:hover:bg-slate-700/50"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <article key={p.name} className={`${cardClass} flex flex-col gap-3 transition hover:-translate-y-1 hover:border-accent dark:hover:border-accent-dark`}>
            <h3 className="text-lg font-bold">{p.name}</h3>
            <p className="flex-1 text-slate-600 dark:text-slate-400">{p.description}</p>
            <ul className="flex flex-wrap gap-2">
              {p.stack.map((s) => <li key={s} className={chipClass}>{s}</li>)}
            </ul>
            <div className="flex gap-4 text-sm font-medium text-accent dark:text-accent-dark">
              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:underline">
                  <Github size={15} /> Code
                </a>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:underline">
                  <ExternalLink size={15} /> Live demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
