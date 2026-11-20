import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolioData";

const btn = "inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium transition hover:-translate-y-0.5 dark:border-slate-700 dark:bg-[#161e33]";

export default function Footer() {
  const { name, links, availability } = profile;
  return (
    <footer id="contact" className="border-t border-slate-200 py-16 text-center dark:border-slate-700/70">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="text-3xl font-bold sm:text-4xl">Let's work together</h2>
        <p className="mx-auto mt-3 mb-8 max-w-prose text-slate-600 dark:text-slate-400">
          {availability}. Send me a message and I'll reply quickly.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href={`mailto:${links.email}`} className={btn}><Mail size={16} /> {links.email}</a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className={btn}><Linkedin size={16} /> LinkedIn</a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className={btn}><Github size={16} /> GitHub</a>
        </div>
        <p className="mt-12 text-sm text-slate-500">© {new Date().getFullYear()} {name}. Built with React, Vite &amp; Tailwind CSS.</p>
      </div>
    </footer>
  );
}
