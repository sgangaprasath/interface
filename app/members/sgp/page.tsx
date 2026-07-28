import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://scholar.google.com/citations?user=fHr_IJgAAAAJ&hl=en",
    label: "Google Scholar",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5 12 0z" />
      </svg>
    ),
  },
  {
    href: "mailto:sgangaprasath@smail.iitm.ac.in",
    label: "Email",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    href: "https://drive.google.com/file/d/1FaD-D5XMLlVw2u6D05fr7PestvvEKtJt/view?usp=sharing",
    label: "CV",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

const degrees = [
  {
    period: "2019–2022",
    degree: "Postdoctoral Fellow",
    institution: "School of Engineering and Applied Sciences, Harvard University, Cambridge, USA.",
    items: [
      {
        text: (
          <>
            Soft Math group:{" "}
            <Link href="https://softmath.seas.harvard.edu" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 underline underline-offset-2">
              Prof. L Mahadevan
            </Link>.
          </>
        ),
      },
      {
        text: (
          <>
            Collaborators:{" "}
            <Link href="https://vnmurthylab.org/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 underline underline-offset-2">
              Prof. Venkatesh N Murthy
            </Link>.
          </>
        ),
      },
      { text: "Projects: Behaviour of animals & robots, Programming mechanical properties of soft/smart-materials." },
    ],
  },
  {
    period: "2013–2019",
    degree: "Ph.D. in Physics",
    institution: "International Centre for Theoretical Sciences, Tata Institute of Fundamental Research, Bengaluru, India.",
    items: [
      {
        text: (
          <>
            <Link href="https://drive.google.com/file/d/18Jo4n4aU79etWbhs4fPXq2DOnauR8BoI/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 underline underline-offset-2">
              Thesis
            </Link>: Mechanics of filaments and spherical particles: role of elasticity and hydrodynamic interaction.
          </>
        ),
      },
      {
        text: (
          <>
            Advisors:{" "}
            <Link href="https://www.icts.res.in/people/rama-govindarajan" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 underline underline-offset-2">
              Prof. Rama Govindarajan
            </Link>,{" "}
            <Link href="https://people.umass.edu/nmenon/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 underline underline-offset-2">
              Prof. Narayanan Menon
            </Link>.
          </>
        ),
      },
      {
        text: (
          <>
            Collaborators:{" "}
            <Link href="https://www.icts.res.in/people/vishal-vasan" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 underline underline-offset-2">
              Prof. Vishal Vasan
            </Link>,{" "}
            <Link href="https://biosoftact.wordpress.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 underline underline-offset-2">
              Dr. Joel Marthelot
            </Link>.
          </>
        ),
      },
    ],
  },
  {
    period: "2012–2013",
    degree: "M.S. in Mechanics",
    institution: "École Polytechnique, Palaiseau, France.",
    items: [
      {
        text: (
          <>
            <Link href="https://drive.google.com/file/d/191LhINv_6u4mhgZZgJZj5BbPv4PT4iYS/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 underline underline-offset-2">
              Thesis
            </Link>: Dynamo action in ABC flows: what is the effect of Fourier truncation at low Prandtl number?
          </>
        ),
      },
      {
        text: (
          <>
            Advisors:{" "}
            <Link href="http://www.lps.ens.fr/~brachet/files/Home.html" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 underline underline-offset-2">
              Prof. Marc Brachet
            </Link>,{" "}
            <Link href="https://www.lpens.ens.psl.eu/research/flu-int/physique-non-lineaire/?lang=en" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 underline underline-offset-2">
              Prof. Stephane Fauve
            </Link>.
          </>
        ),
      },
      { text: "Recipient of the Charpak fellowship by Institut Français." },
    ],
  },
  {
    period: "2008–2012",
    degree: "B.Tech in Mechanical Engineering",
    institution: "Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram, Chennai, India.",
    items: [
      {
        text: (
          <>
            Advisor:{" "}
            <Link href="https://sites.google.com/view/sjv2020/home" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 underline underline-offset-2">
              Dr. S. Jayavel
            </Link>.
          </>
        ),
      },
      { text: "Recipient of the institute's Best thesis award." },
    ],
  },
];

const currentProjects = [
  {
    href: "https://projectclimate.substack.com",
    src: "/images/paruvanilai.svg",
    title: "Project Climate",
    desc: "Science of climate change, its impact and how we can adapt (under development...)",
  },
  {
    href: "https://twitter.com/AgamTypeFoundry",
    src: "/images/agam.svg",
    title: "Agam Type Foundry",
    desc: "Foundry for Indic typefaces. Open typeface 'Madurai' is available online.",
  },
];

const tutorials = [
  {
    href: "/tutorials/auto07p",
    src: "/images/autoLink.jpeg",
    title: "Elastic instabilities with auto-07p",
    desc: "Using numerical continuation to solve BVPs relevant for elastic instabilities",
    external: false,
  },
  {
    href: "https://github.com/sgangaprasath/KFTutorial",
    src: "/images/KF.png",
    title: "Revisiting Kalman Filter",
    desc: "Introduction to optimal state-estimation through least squares method",
    external: true,
  },
];

const SGPPage = () => {
  return (
    <div className="flex flex-col items-center md:items-start justify-center max-w-4xl md:ml-20 w-full">
      {/* Back link */}
      <div className="mt-10 mb-6 w-full px-4">
        <Link
          href="/members"
          className="text-xs text-sky-600 hover:text-sky-800 underline underline-offset-2 transition-colors"
        >
          ← Back to Members
        </Link>
      </div>

      {/* Main card */}
      <div className="flex flex-col w-full mb-10 px-4 lg:px-6">
        {/* Profile header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8 pb-8 border-b border-gray-100">
          {/* Photo + social icons */}
          <div className="flex flex-col items-center gap-4 flex-shrink-0">
            <Image
              src="/images/sgp.png"
              width={160}
              height={160}
              alt="S Ganga Prasath"
              className="hover:scale-105 transition-transform duration-200"
            />
            <div>
              <h1 className="text-xl font-semibold text-gray-900 text-center">S Ganga Prasath</h1>
              <p className="text-xs text-gray-500 text-center mt-0.5">Assistant Professor, IIT Madras</p>
            </div>
            {/* Social links */}
            <div className="flex flex-row items-center gap-2 flex-wrap justify-center">
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="p-2 rounded-full bg-gray-100 hover:bg-sky-100 text-gray-500 hover:text-sky-700 transition-colors"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* About me */}
          <div className="flex flex-col gap-4 bg-slate-50 border border-slate-200 rounded-2xl px-6 py-6 shadow-sm text-sm text-gray-700 leading-relaxed">
            <p>
              I am currently a faculty member in the{" "}
              <Link
                href="https://apm.iitm.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 hover:text-sky-800 underline underline-offset-2"
              >
                Department of Applied Mechanics &amp; Biomedical Engineering
              </Link>{" "}
              at the Indian Institute of Technology Madras. My research interests lie at the interface of{" "}
              <strong>scientific ML, inverse problems, robotics & control, and soft-mechanics</strong>.
            </p>
            <p>
              I am also the faculty advisor of the{" "}
              <Link
                href="https://amsa-iitm.github.io/home/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 hover:text-sky-800 underline underline-offset-2"
              >
                Applied Mechanics Scholars Association
              </Link>{" "}
              and help the enthusiastic scholars community run the seminar series{" "}
              <strong>42 Explained!</strong> and <strong>ChalkTalk</strong>. Outside work, I have a set of trinkets
              that keep me busy. You can access their progress using the links below. Write to me if you are interested in collaborating or would like to know more about any of these
              topics.
            </p>
          </div>
        </div>

        {/* Résumé header */}
        <div className="flex flex-col md:flex-row items-center justify-start gap-2 mt-8 mb-6">
          <div className="p-3 bg-white border border-gray-300 rounded-full opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.437 60.437 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
          </div>
          <p className="font-bold text-lg px-4">Résumé</p>
        </div>

        {/* Degree cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {degrees.map((d) => (
            <div key={d.period} className="flex flex-col bg-slate-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
              <span className="mb-3 self-start text-xs font-medium bg-slate-200 text-slate-700 px-3 py-1 rounded">
                {d.period}
              </span>
              <p className="font-semibold text-sm text-gray-900 mb-1">{d.degree}</p>
              <p className="text-xs text-gray-500 font-light mb-3 leading-relaxed">{d.institution}</p>
              <ul className="flex flex-col gap-2">
                {d.items.map((item, i) => (
                  <li key={i} className="flex items-baseline gap-2 text-xs text-gray-600 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0 mt-1.5" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Projects & Initiatives header */}
        <div className="flex flex-col md:flex-row items-center justify-start gap-2 mt-8 mb-6">
          <div className="p-3 bg-white border border-gray-300 rounded-full opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.355a7.5 7.5 0 01-3 0m3 0a7.5 7.5 0 003-2.647M15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          </div>
          <p className="font-bold text-lg px-4">Projects &amp; Initiatives</p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Current projects card */}
          <div className="flex flex-col bg-slate-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
            <span className="mb-3 self-start text-xs font-medium bg-slate-200 text-slate-700 px-3 py-1 rounded">
              Current projects
            </span>
            <p className="text-xs text-gray-500 mb-4">Connect with me if you are interested in any of these projects.</p>
            <ul className="flex flex-col gap-3">
              {currentProjects.map((p) => (
                <li key={p.title}>
                  <Link
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 hover:shadow-sm transition-shadow"
                  >
                    <Image
                      src={p.src}
                      alt={p.title}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    />
                    <div>
                      <p className="text-xs font-semibold text-gray-900">{p.title}</p>
                      <p className="text-xs text-gray-400 font-light mt-0.5">{p.desc}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-400 mt-4 italic">Not related to my institutional affiliation.</p>
          </div>

          {/* Tutorials card */}
          <div className="flex flex-col bg-slate-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
            <span className="mb-3 self-start text-xs font-medium bg-slate-200 text-slate-700 px-3 py-1 rounded">
              Tutorials
            </span>
            <p className="text-xs text-gray-500 mb-4">Pedagogical material on tools that might be of general interest.</p>
            <ul className="flex flex-col gap-3">
              {tutorials.map((t) => (
                <li key={t.title}>
                  <Link
                    href={t.href}
                    {...(t.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 hover:shadow-sm transition-shadow"
                  >
                    <Image
                      src={t.src}
                      alt={t.title}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    />
                    <div>
                      <p className="text-xs font-semibold text-gray-900">{t.title}</p>
                      <p className="text-xs text-gray-400 font-light mt-0.5">{t.desc}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SGPPage;
