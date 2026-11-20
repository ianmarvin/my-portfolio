import Section, { cardClass, chipClass } from "./Section";
import { iconMap } from "./icons";
import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <Section id="skills" title="Tech skills" intro="The languages, frameworks, and tools I use in my coursework and personal projects.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ title, icon, items }) => {
          const Icon = iconMap[icon] || iconMap.Wrench;
          return (
            <div key={title} className={cardClass}>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
                <Icon size={20} className="text-accent dark:text-accent-dark" aria-hidden /> {title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((s) => <li key={s} className={chipClass}>{s}</li>)}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
