import Section from "./Section";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <Section id="experience" title="Experience" intro="Hands-on work through academic projects and practical roles.">
      <div>
        {experience.map(({ role, org, dates, points }) => (
          <article key={role} className="grid gap-2 border-t border-slate-200 py-6 last:border-b md:grid-cols-[200px_1fr] md:gap-6 dark:border-slate-700/70">
            <p className="text-sm text-slate-500 dark:text-slate-400">{dates}</p>
            <div>
              <h3 className="text-lg font-bold">{role}</h3>
              <p className="text-slate-600 dark:text-slate-400">{org}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-600 dark:text-slate-400">
                {points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
