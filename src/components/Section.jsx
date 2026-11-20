export default function Section({ id, title, intro, children, className = "" }) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-5xl px-5">
        <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
        {intro && <p className="mt-2 mb-8 max-w-prose text-slate-600 dark:text-slate-400">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

export const cardClass =
  "rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700/70 dark:bg-[#161e33]";
export const chipClass =
  "inline-flex items-center rounded-full bg-blue-50 px-3 py-1 font-mono text-xs text-slate-700 dark:bg-slate-700/50 dark:text-slate-200";
