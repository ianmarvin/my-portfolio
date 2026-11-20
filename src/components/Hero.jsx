import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { profile, skills } from "../data/portfolioData";

const btn = "inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition hover:-translate-y-0.5";
const plain = `${btn} border-slate-300 bg-white dark:border-slate-700 dark:bg-[#161e33]`;

export default function Hero() {
  const { name, role, pitch, availability, links } = profile;
  const stack = skills.flatMap((s) => s.items).slice(0, 3);

  return (
    <section id="home" className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-5 md:grid-cols-[1.1fr_.9fr]">
        <div>
          <p className="mb-3 font-medium text-accent dark:text-accent-dark">{role}</p>
          <h1 className="text-4xl font-bold sm:text-6xl">Hi, I'm {name}.</h1>
          <p className="mt-5 max-w-prose text-lg text-slate-600 dark:text-slate-400">{pitch}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className={`${btn} border-accent bg-accent text-white dark:border-accent-dark dark:bg-accent-dark dark:text-[#0e1424]`}>
              View my projects <ArrowRight size={16} />
            </a>
            <a href={links.github} target="_blank" rel="noopener noreferrer" className={plain}><Github size={16} /> GitHub</a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className={plain}><Linkedin size={16} /> LinkedIn</a>
            <a href={`mailto:${links.email}`} className={plain}><Mail size={16} /> Email</a>
          </div>
        </div>

        <pre className="overflow-x-auto rounded-2xl bg-[#14213d] p-6 font-mono text-sm leading-7 text-blue-100 shadow-xl dark:bg-[#0a0f1c]" aria-label="Quick profile">
{`const candidate = {
  role: "OJT / IT Intern",
  degree: "BSIT",
  stack: ${JSON.stringify(stack)},
  status: "${availability}",
};`}
        </pre>
      </div>
    </section>
  );
}
