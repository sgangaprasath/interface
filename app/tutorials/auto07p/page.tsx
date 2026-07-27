import Link from "next/link";
import Image from "next/image";
import { tutorialSections } from "./tutorialNav";

const entries = [
  {
    date: "18-Nov-21",
    href: "/tutorials/auto07p/elastica",
    title: "Bending of an elastica",
    focus: "bifurcation diagram, solution",
  },
  {
    date: "24-Nov-21",
    href: "/tutorials/auto07p/fvk",
    title: "Buckling of a sheet",
    focus: "two parameter continuation",
  },
  {
    date: "04-Apr-22",
    href: "/tutorials/auto07p/oscillating",
    title: "Oscillating beam",
    focus: "eigenvalue problem, homotopy continuation",
  },
  {
    date: "05-Apr-22",
    href: "/tutorials/auto07p/snake",
    title: "Undulatory propulsion on land",
    focus: "many-parameter system, periodic solution, homotopy continuation",
  },
];

export default function Auto07pPage() {
  return (
    <div className="flex flex-col md:flex-row gap-10 max-w-5xl w-full mt-10 mb-16 md:ml-20 px-4">
      {/* Sidebar */}
      <aside className="md:w-56 flex-shrink-0">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Sections</p>
        <nav className="flex flex-col gap-1">
          {tutorialSections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="text-xs px-3 py-2 rounded-lg font-semibold bg-slate-100 text-slate-700"
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
        {/* Title */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-white border border-gray-300 rounded-full opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
          <h1 className="font-bold text-lg">
            Elastic instabilities using <code className="font-mono text-base bg-gray-100 px-2 py-0.5 rounded">auto-07p</code>
          </h1>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-4 text-sm text-gray-700 leading-relaxed bg-slate-50 border border-slate-200 rounded-2xl px-6 py-6 shadow-sm mb-8">
          <p>
            Elastic materials can undergo instabilities — a smooth or dramatic change in morphology —
            when the applied load exceeds a critical value. These elastic instability problems are
            boundary value problems, notoriously hard to solve even numerically.
          </p>
          <p>
            In this 4-part tutorial series we use{" "}
            <Link href="https://github.com/auto-07p/auto-07p" target="_blank" rel="noopener noreferrer"
              className="text-sky-600 underline underline-offset-2 hover:text-sky-800">
              <code>auto-07p</code>
            </Link>
            , a numerical continuation package, to solve for deformation fields and capture
            instabilities. Read the{" "}
            <Link href="/tutorials/auto07p/framework"
              className="text-sky-600 underline underline-offset-2 hover:text-sky-800">
              framework overview
            </Link>{" "}
            first, then work through the four problems below. All codes are on{" "}
            <Link href="https://github.com/sgangaprasath/autoTutorial" target="_blank" rel="noopener noreferrer"
              className="text-sky-600 underline underline-offset-2 hover:text-sky-800">
              GitHub
            </Link>
            . A full PDF collection is available{" "}
            <Link href="/pdf/autoTutorial.pdf" target="_blank" rel="noopener noreferrer"
              className="text-sky-600 underline underline-offset-2 hover:text-sky-800">
              here
            </Link>.
          </p>
        </div>

        {/* Tutorial entries */}
        <div className="flex flex-col gap-3 mb-8">
          {entries.map((e, i) => (
            <Link
              key={e.href}
              href={e.href}
              className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:shadow-sm hover:border-gray-200 transition-all"
            >
              <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mt-0.5">
                {i + 1}
              </span>
              <div>
                <p className="text-sm font-semibold text-gray-900">{e.title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{e.focus}</p>
                <p className="text-xs text-gray-300 mt-0.5">{e.date}</p>
              </div>
              <span className="ml-auto text-gray-300 text-sm self-center">→</span>
            </Link>
          ))}
        </div>

        {/* Cover image */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
          <Image
            src="/images/auto.jpeg"
            alt="auto-07p tutorial cover"
            width={800}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </main>
    </div>
  );
}
