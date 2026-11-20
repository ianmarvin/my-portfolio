import { GraduationCap } from "lucide-react";
import Section, { cardClass, chipClass } from "./Section";
import { education } from "../data/portfolioData";

export default function Education() {
  const { degree, school, graduation, coursework } = education;
  return (
    <Section id="education" title="Education" intro="A strong academic base in software development, databases, and systems.">
      <div className={`${cardClass} flex gap-4`}>
        <GraduationCap size={28} className="mt-1 shrink-0 text-accent dark:text-accent-dark" aria-hidden />
        <div>
          <h3 className="text-xl font-bold">{degree}</h3>
          <p className="text-slate-600 dark:text-slate-400">{school} · {graduation}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {coursework.map((c) => <li key={c} className={chipClass}>{c}</li>)}
          </ul>
        </div>
      </div>
    </Section>
  );
}
