import Link from "next/link";
import { tutorialSections } from "./tutorialNav";

interface TutorialShellProps {
  currentIndex: number;           // 0 = overview, 1 = framework, …
  children: React.ReactNode;
}

export default function TutorialShell({ currentIndex, children }: TutorialShellProps) {
  const prev = currentIndex > 0 ? tutorialSections[currentIndex - 1] : null;
  const next = currentIndex < tutorialSections.length - 1 ? tutorialSections[currentIndex + 1] : null;

  return (
    <div className="flex flex-col md:flex-row gap-10 max-w-5xl w-full mt-10 mb-16 md:ml-20 px-4">
      {/* Sidebar */}
      <aside className="md:w-56 flex-shrink-0">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Sections</p>
        <nav className="flex flex-col gap-1">
          {tutorialSections.map((s, i) => (
            <Link
              key={s.href}
              href={s.href}
              className={`text-xs px-3 py-2 rounded-lg transition-colors ${
                i === currentIndex
                  ? "bg-slate-800 text-white font-semibold"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {s.label}
            </Link>
          ))}
        </nav>
        <div className="mt-6 pt-4 border-t border-gray-100">
          <Link
            href="/members/sgp"
            className="text-xs text-sky-600 hover:text-sky-800 underline underline-offset-2"
          >
            ← Personal page
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0">
        {children}

        {/* Prev / Next nav */}
        <div className="flex items-center justify-between mt-12 pt-6 border-t border-gray-100">
          {prev ? (
            <Link href={prev.href} className="text-xs text-sky-600 hover:text-sky-800 underline underline-offset-2">
              ← {prev.label}
            </Link>
          ) : <span />}
          {next ? (
            <Link href={next.href} className="text-xs text-sky-600 hover:text-sky-800 underline underline-offset-2">
              {next.label} →
            </Link>
          ) : <span />}
        </div>
      </main>
    </div>
  );
}
