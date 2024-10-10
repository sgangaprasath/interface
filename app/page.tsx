import "../app/globals.css";
// import Image from "next/image";
import Link from "next/link";
import Cselmain from "@/components/mainCsel";
// import Csel from "@/components/carousel";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-between pt-4 gap-10">
        {/* Carousel */}
        <div className="grid grid-cols-1 items-center justify-center xl:w-auto">
          <div className="h-10 sm:h-[100px] md:h-[300px] xl:h-[420px] w-20 sm:w-[100px] md:w-[700px] xl:w-[1000px]">
            <Cselmain />
          </div>
        </div>
        {/* <div className="text-center">
          <p className="max-w-3xl p-2 bg-purple-200 text-sm text-purple-600 rounded-lg border border-purple-400">
            We welcome new graduate student <a href="https://www.linkedin.com/in/akhil-sharma-01b12b220/" className="font-bold underline hover:underline-offset-2">Akhil Sharma</a> to our group! He is interested in collective behaviour and robotics.
          </p>
        </div> */}
        {/* Welcome statement */}
        {/* <div className="md:text-2xl text-center">
          <p className="max-w-2xl p-2 bg-green-200 text-sm text-green-600 rounded-lg border border-green-400">
            We are an exciting new group in the Department of Applied
            Mechanics & Biomedical Engineering at IIT Madras. Look around the
            website and drop by our lab if you are interested in knowing more about
            what we do!
          </p>
        </div> */}

        {/* Bottom navigation links */}
        <div className="grid m-10 text-center lg:mb-4 lg:grid-cols-4 lg:text-left">
          {/* News */}
          <Link
            href="/news"
            className="group flex flex-col items-center justify-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-200"
          >
            <h2
              className={`flex flex-row items-center justify-center gap-2 mb-3 text-2xl font-semibold`}
            >
              <span className="inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
                  />
                </svg>
              </span>
              news{" "}
              <span className="inline-block transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find everything latest from the lab.
            </p>
          </Link>
          {/* Blog */}
          <Link
            href="/blog"
            className="group flex flex-col items-center justify-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-200"
          >
            <h2
              className={`flex flex-row items-center justify-center gap-2 mb-3 text-2xl font-semibold`}
            >
              <span className="inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                  />
                </svg>
              </span>
              blog{" "}
              <span className="inline-block transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm font-light opacity-50`}>
              Learn what's brewing in our kitchen.
            </p>
          </Link>
          {/* Research */}
          <Link
            href="/research"
            className="group flex flex-col items-center justify-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-200"
          >
            <h2
              className={`flex flex-row items-center justify-center gap-2 mb-3 text-2xl font-semibold`}
            >
              <span className="inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
                  />
                </svg>
              </span>
              research{" "}
              <span className="inline-block transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm font-light opacity-50`}>
              All that is serious and killjoy.
            </p>
          </Link>
          {/* Outreach */}
          <Link
            href="/"
            className="group flex flex-col items-center justify-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-200"
          >
            <h2
              className={`flex flex-row items-center justify-center gap-2 mb-3 text-2xl font-semibold`}
            >
              <span className="inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                  />
                </svg>
              </span>
              outreach{" "}
              <span className="inline-block transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm font-light opacity-50`}>
              Coming soon...
            </p>
          </Link>
        </div>
      </div>
      {/* Notice board */}
    </>
  );
}
