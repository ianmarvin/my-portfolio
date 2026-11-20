import Section, { cardClass } from "./Section";
import { iconMap } from "./icons";
import { leadership } from "../data/portfolioData";

export default function Leadership() {
  return (
    <Section id="leadership" title="Leadership & activities" intro="Beyond the classroom, I take part in the IT community and work well in teams.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {leadership.map(({ title, detail, icon }) => {
          const Icon = iconMap[icon] || iconMap.Users;
          return (
            <div key={title} className={cardClass}>
              <Icon size={22} className="mb-3 text-accent dark:text-accent-dark" aria-hidden />
              <h3 className="mb-1 text-lg font-bold">{title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{detail}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
