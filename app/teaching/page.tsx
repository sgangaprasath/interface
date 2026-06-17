import Link from "next/link";

const courses = [
  {
    code: "AM1100",
    title: "Engineering mechanics",
    years: "2024(E), 25(O)",
    description:
      "First year B.Tech course in basics of mechanics, covering statics and dynamics of rigid bodies.",
    coTaught: [] as { name: string; url: string }[],
    coTaughtExtra: "",
    links: [] as { label: string; url: string }[],
  },
  {
    code: "ID6023",
    title: "Geometry & mechanics of materials",
    years: "2023(O), 24(O), 26(E)",
    description:
      "A graduate level course in geometry, calculus of variation and elasticity. Read about the contents of the course and a brief review",
    coTaught: [{ name: "Raushan Singh", url: "https://s2-l.com" }],
    coTaughtExtra: "",
    links: [
      {
        label: "course blog post",
        url: "https://interface-eight-hazel.vercel.app/blog/4-AM6023",
      },
    ],
  },
  {
    code: "AM5009",
    title: "Life of ubiquitous materials",
    years: "2024(O), 25(O)",
    description:
      "A project based course on the science and behaviour of daily use materials.",
    coTaught: [
      { name: "Lakshminath Kundanati", url: "http://lakshminath82.wixsite.com/" },
    ],
    coTaughtExtra: "",
    links: [
      {
        label: "Showcase of 2024 projects",
        url: "/am5009",
      },
      {
        label: "Of Materials and Mindsets",
        url: "https://www.t5eiitm.org/of-materials-and-mindsets/",
      },
    ],
  },
  {
    code: "ID5060",
    title: "First principles tools in engineering",
    years: "2023(O), 25(E)",
    description:
      "A big picture course that introduces analytical tools for enhancing engineering skills.",
    coTaught: [] as { name: string; url: string }[],
    coTaughtExtra: "Sivakumar M S, Sathyanaryanan S and Srikanth Vedantam",
    links: [] as { label: string; url: string }[],
  },
  {
    code: "AM5117",
    title: "Analytical methods in engineering mechanics",
    years: "2025(E), 26(E)",
    description:
      "A graduate level course on complex analysis, ODEs and PDEs applied to mechanics.",
    coTaught: [] as { name: string; url: string }[],
    coTaughtExtra: "Kannabiran S",
    links: [] as { label: string; url: string }[],
  },
  {
    code: "ID5101",
    title: "Innovative entrepreneur",
    years: "2025(E)",
    description:
      "A basic entrepreneurial course aimed at attracting students towards climate-tech.",
    coTaught: [{ name: "SusMafia", url: "http://susmafia.org" }],
    coTaughtExtra: "",
    links: [] as { label: string; url: string }[],
    note: "Course coordinator",
  },
];

const workshops = [
  {
    title: "Ethology, from individual to collective",
    year: "2025",
    description:
      "An introductory winter workshop on the fascinating science of behaviour.",
    coTaught: [{ name: "Danny Raj M", url: "" }],
    coTaughtExtra: "",
    links: [
      {
        label: "workshop details",
        url: "https://sgangaprasath.github.io/ethology/index.html",
      },
      {
        label: "recorded lectures",
        url: "https://www.youtube.com/playlist?list=PLN89vh407F3weViUKdWb42jZRdrH6KwAk",
      },
    ],
  },
  {
    title: "Geometry, Mechanics and the Physics of growth",
    year: "2025",
    description:
      "A winter school on the geometry and mechanics of passive and living materials.",
    coTaught: [
      { name: "Suraj Shankar", url: "https://surajshankar.com" },
      { name: "Joel Marthelot", url: "https://biosoftact.wordpress.com" },
    ],
    coTaughtExtra: "",
    links: [
      { label: "school details", url: "https://www.icts.res.in/program/Geomech" },
      {
        label: "recorded lectures",
        url: "https://www.icts.res.in/program/geomech/talks",
      },
    ],
  },
];

function CourseEntry({
  code,
  title,
  years,
  description,
  coTaught,
  coTaughtExtra,
  links,
  note,
}: (typeof courses)[number] & { note?: string }) {
  return (
    <div className="py-5 border-b border-gray-100 last:border-0">
      <div className="flex items-start gap-3">
        <div className="mt-2 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline gap-2 mb-1">
            <span className="font-mono text-xs text-green-400 bg-green-50 border border-green-200 px-1.5 py-0.5 rounded">
              {code}
            </span>
            <p className="font-semibold text-gray-900 leading-snug">{title}</p>
            <span className="text-xs text-gray-400 font-light">{years}</span>
            {note && (
              <span className="text-xs text-amber-600 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded font-mono">
                {note}
              </span>
            )}
          </div>
          {(coTaught.length > 0 || coTaughtExtra) && (
            <p className="text-gray-400 text-sm mb-1">
              Co-taught with{" "}
              {coTaught.length > 0
                ? coTaught.map((p, i) => (
                    <span key={i}>
                      {p.url ? (
                        <Link
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-gray-700 transition-colors"
                        >
                          {p.name}
                        </Link>
                      ) : (
                        p.name
                      )}
                      {i < coTaught.length - 1 ? ", " : ""}
                    </span>
                  ))
                : coTaughtExtra}
              {coTaught.length > 0 && coTaughtExtra ? `, ${coTaughtExtra}` : ""}
              .
            </p>
          )}
          <p className="text-gray-500 font-light text-sm">
            {description}
            {links.length === 1 && description.endsWith("review") && (
              <>
                {" "}
                <Link
                  href={links[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700 transition-colors"
                >
                  {links[0].label}
                </Link>
                .
              </>
            )}
          </p>
          {links.length > 0 &&
            !(links.length === 1 && description.endsWith("review")) && (
              <div className="flex flex-wrap gap-3 mt-2">
                {links.map((l, i) => (
                  <Link
                    key={i}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-sky-600 hover:text-sky-800 underline underline-offset-2 transition-colors"
                  >
                    {l.label} ↗
                  </Link>
                ))}
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

function WorkshopEntry({
  title,
  year,
  description,
  coTaught,
  links,
}: (typeof workshops)[number]) {
  return (
    <div className="py-5 border-b border-gray-100 last:border-0">
      <div className="flex items-start gap-3">
        <div className="mt-2 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline gap-2 mb-1">
            <p className="font-semibold text-gray-900 leading-snug">{title}</p>
            <span className="text-xs text-gray-400 font-light">{year}</span>
          </div>
          {coTaught.length > 0 && (
            <p className="text-gray-400 text-sm mb-1">
              Co-taught with{" "}
              {coTaught.map((p, i) => (
                <span key={i}>
                  {p.url ? (
                    <Link
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-gray-700 transition-colors"
                    >
                      {p.name}
                    </Link>
                  ) : (
                    p.name
                  )}
                  {i < coTaught.length - 1 ? ", " : ""}
                </span>
              ))}
              .
            </p>
          )}
          <p className="text-gray-500 font-light text-sm">{description}</p>
          {links.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-2">
              {links.map((l, i) => (
                <Link
                  key={i}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-sky-600 hover:text-sky-800 underline underline-offset-2 transition-colors"
                >
                  {l.label} ↗
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TeachingPage() {
  return (
    <div className="flex flex-col items-center md:items-start justify-center max-w-4xl w-full md:ml-20">
      {/* Header */}
      <div className="flex flex-col items-center md:items-start justify-center gap-4 w-full mt-10 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-start gap-2">
          <div className="p-3 bg-white border border-gray-300 rounded-full opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
          </div>
          <p className="font-bold text-lg px-4">Teaching</p>
        </div>
      </div>

      {/* Courses section */}
      <section className="w-full mb-10 px-10 lg:px-14 text-sm">
        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">
          Courses
        </p>
        <div className="divide-y divide-gray-100">
          {courses.map((c, i) => (
            <CourseEntry key={i} {...c} />
          ))}
        </div>
      </section>

      {/* Workshops section */}
      <section className="w-full mb-10 px-10 lg:px-14 text-sm">
        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">
          Workshops &amp; Schools
        </p>
        <div className="divide-y divide-gray-100">
          {workshops.map((w, i) => (
            <WorkshopEntry key={i} {...w} />
          ))}
        </div>
      </section>
    </div>
  );
}
