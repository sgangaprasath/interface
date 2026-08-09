import Link from "next/link";

const projects = [
  {
    image: "/images/am5009/Group1-2025.jpg",
    title: "AI-driven digital twin for carbon footprint estimation",
    description:
      "Build a machine-learning backed digital twin of the campus that estimates carbon footprint from acquired activity data, served through a web platform.",
    links: [
      {
        label: "Report",
        url: "https://drive.google.com/file/d/19CMl9k_4G9ykE8AYBSV1Whggp2q9N10f/view?usp=sharing",
      },
      {
        label: "Presentation",
        url: "https://docs.google.com/presentation/d/1rGfnCWo3amm457cbQXvd4wE9KhkGcFza/edit?usp=sharing&ouid=112650098909343809509&rtpof=true&sd=true",
      },
    ],
  },
  {
    image: "/images/am5009/Group2-2025.jpg",
    title: "Public engagement through gamification",
    description:
      "Nudge campus waste behaviour through a campus ambassador programme and gameplay, coupled with policy recommendations drawn from behavioural studies.",
    links: [
      {
        label: "Report",
        url: "https://drive.google.com/file/d/1WATAiFRVZvr3FNNBfctBCSFAO26CJSmb/view?usp=sharing",
      },
    ],
  },
  {
    image: "/images/am5009/Group3-2025.jpg",
    title: "Flood adaptation and resilience strategy",
    description:
      "Assess flood vulnerability across the campus using hydrological data and past events, and design zone-specific adaptation measures with a monitoring dashboard.",
    links: [
      {
        label: "Report",
        url: "https://drive.google.com/file/d/1o1dAwDyHp_gSr4rrfugNCox7HXv1ZpcC/view?usp=sharing",
      },
    ],
  },
  {
    image: "/images/am5009/Group4A-2025.jpg",
    title: "REbin — an online platform to view waste differently",
    description:
      "Develop an online platform that changes how waste is perceived on campus, letting users exchange materials and see the impact of what they discard.",
    links: [
      {
        label: "Report",
        url: "https://drive.google.com/file/d/1Y4Zb6A8gT1gzxYjAPIAntDCZVAug2Rck/view?usp=sharing",
      },
      {
        label: "Presentation",
        url: "https://drive.google.com/file/d/1KaO0gY4AOCKu9jx95Iy42qryB89pkmHA/view?usp=sharing",
      },
    ],
  },
  {
    image: "/images/am5009/Group4B-2025.jpg",
    title: "Revive — repurposing e-waste",
    description:
      "Collect discarded electronics on campus and repurpose them into usable products, documenting the making process end to end.",
    links: [
      {
        label: "Report",
        url: "https://drive.google.com/file/d/1SN4zg3zJJ6QwrYtLtPV0ln8bcYdHMOO2/view?usp=sharing",
      },
      {
        label: "Presentation",
        url: "https://drive.google.com/file/d/1GmeTPYWY1097vcxdHPiG9JJ2sm-qcNPG/view?usp=sharing",
      },
    ],
  },
];

const linkColors: Record<string, string> = {
  Report: "bg-sky-50 text-sky-600 border-sky-200 hover:bg-sky-100",
  Presentation: "bg-violet-50 text-violet-600 border-violet-200 hover:bg-violet-100",
  Website: "bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100",
};

export default function AM50092025Page() {
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
                d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
              />
            </svg>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 px-4">
            <p className="font-bold text-lg">AM5009</p>
            <span className="hidden md:inline text-gray-300">—</span>
            <p className="font-light text-lg text-gray-500">2025 Projects</p>
          </div>
        </div>
        <p className="text-sm font-light text-gray-400 md:px-16">
          Project showcase from the{" "}
          <Link
            href="/teaching"
            className="underline hover:text-gray-600 transition-colors"
          >
            Life of ubiquitous materials
          </Link>{" "}
          course.
        </p>
      </div>

      {/* Projects grid */}
      <section className="w-full mb-10 px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 rounded-xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-sm transition-all duration-200"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
              {/* Content */}
              <div className="flex flex-col gap-2 px-4 pb-4">
                <p className="font-semibold text-sm text-gray-900 leading-snug">
                  {project.title}
                </p>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.links.map((l, j) => (
                    <Link
                      key={j}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-xs px-2.5 py-1 rounded-md border font-medium transition-colors ${
                        linkColors[l.label] ??
                        "bg-gray-50 text-gray-500 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
