import { useEffect, useState } from "react";
import { Home, Code2, GraduationCap, Briefcase, FolderGit2, Award, Mail, Sun, Moon, Menu, X } from "lucide-react";
import { profile } from "../data/portfolioData";

const links = [
  { id: "skills", label: "Skills", Icon: Code2 },
  { id: "education", label: "Education", Icon: GraduationCap },
  { id: "experience", label: "Experience", Icon: Briefcase },
  { id: "projects", label: "Projects", Icon: FolderGit2 },
  { id: "leadership", label: "Activities", Icon: Award },
  { id: "contact", label: "Contact", Icon: Mail },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const isDark = theme === "dark";

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-slate-50/85 backdrop-blur transition-colors dark:bg-[#0e1424]/85 ${
        scrolled ? "border-slate-200 dark:border-slate-700/70" : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5" aria-label="Main">
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold">
          <Home size={18} aria-hidden /> {profile.name}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map(({ id, label, Icon }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-blue-50 dark:hover:bg-slate-700/50 ${
                  active === id ? "bg-blue-50 font-medium dark:bg-slate-700/50" : "text-slate-600 dark:text-slate-400"
                }`}
              >
                <Icon size={15} aria-hidden /> {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-2">
          <button
            onClick={onToggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 hover:bg-blue-50 dark:border-slate-700 dark:hover:bg-slate-700/50"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 md:hidden dark:border-slate-700"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-slate-200 bg-slate-50 px-5 py-3 md:hidden dark:border-slate-700 dark:bg-[#0e1424]">
          {links.map(({ id, label, Icon }) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-3 hover:bg-blue-50 dark:hover:bg-slate-700/50">
                <Icon size={16} aria-hidden /> {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
