import Link from "next/link";

const projects = [
  {
    image: "https://sgangaprasath.github.io/images/am5009/Group1-2024.jpg",
    title: "Campus Waste Map",
    description:
      "Enhance waste management via a web-based platform on campus by identifying & mapping waste hot-spots.",
    links: [
      {
        label: "Report",
        url: "https://drive.google.com/open?id=105JiQkk_5E1bycXbyXy_slRJa4Pyib2t&usp=drive_fs",
      },
      {
        label: "Presentation",
        url: "https://drive.google.com/open?id=1HS4qBpyp0LodpkIbzW_3w7Ff9_llx1RY&usp=drive_fs",
      },
      {
        label: "Website",
        url: "https://drive.google.com/open?id=1HTOmL3q9u0cHX_9tyZH5_Y_kRux6GYXT&usp=drive_fs",
      },
    ],
  },
  {
    image: "https://sgangaprasath.github.io/images/am5009/Group2-2024.jpg",
    title: "Collective campus residents' behaviour",
    description:
      "Understand campus dwellers' behaviour, investigate their attitude, habits, and willingness to adopt eco-friendly practices.",
    links: [
      {
        label: "Report",
        url: "https://drive.google.com/open?id=10-ni-xc9X0vWUHjYCEYo0DLxJ_MzA5tU&usp=drive_fs",
      },
      {
        label: "Presentation",
        url: "https://docs.google.com/presentation/d/1HSM6jrBTmZcpMMpsu0awiNzzPcFddEdi?rtpof=true&usp=drive_fs",
      },
    ],
  },
  {
    image: "https://sgangaprasath.github.io/images/am5009/Group3-2024.jpg",
    title: "Flow of packaging materials on campus",
    description:
      "Investigate the prevalent packaging materials on the campus, categorising and analysing them across zones. A cradle-to-grave Life Cycle Assessment (LCA) for each identified material.",
    links: [
      {
        label: "Report",
        url: "https://drive.google.com/open?id=103x_sFY4yJSKUPLE9jp9eDDTUYfRE4CY&usp=drive_fs",
      },
      {
        label: "Presentation",
        url: "https://docs.google.com/presentation/d/1HSGHIHRwQwSr6G_x-xySLIYxlgSbbiIL?rtpof=true&usp=drive_fs",
      },
    ],
  },
  {
    image: "https://sgangaprasath.github.io/images/am5009/Group4-2024.jpg",
    title: "Online platform for resale of items",
    description:
      "Develop an online buy-and-sell platform to streamline the exchange of used items among students.",
    links: [
      {
        label: "Report",
        url: "https://drive.google.com/open?id=1-zuyYNZlfNHhzNVfea-vgwxvTSGU4Jb_&usp=drive_fs",
      },
      {
        label: "Presentation",
        url: "https://drive.google.com/open?id=1HSDpim2zJn0rLEjjJd5KGNxfDBjepfhi&usp=drive_fs",
      },
      {
        label: "Website",
        url: "https://iitmfreecycle.netlify.app/",
      },
    ],
  },
];

const linkColors: Record<string, string> = {
  Report: "bg-sky-50 text-sky-600 border-sky-200 hover:bg-sky-100",
  Presentation: "bg-violet-50 text-violet-600 border-violet-200 hover:bg-violet-100",
  Website: "bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100",
};

export default function AM5009Page() {
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
            <p className="font-light text-lg text-gray-500">2024 Projects</p>
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
