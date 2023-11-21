import Link from "next/link";
import "../globals.css";
export default function Home() {
  return (
    <>
        <div className="flex flex-col items-center md:items-start justify-center gap-4 w-full max-w-4xl mt-20 mb-10 md:ml-20 md:gap-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <div className="p-3 bg-white dark:bg-black border border-gray-300 rounded-full opacity-60 dark:border-neutral-300">
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
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
            <p className="font-bold text-lg px-4">Contact</p>
          </div>
          <p className="text-center md:text-left font-light text-md md:px-16">
            S Ganga Prasath <br/>
            227A, Mechanical Sciences Block <br/>
            {/* Department of Applied Mechanics<br/>
            & Biomedical Engineering<br/> */}
            <Link href={"mailto:sgangaprasath@smail.iitm.ac.in"} className="linkStyle font-mono">sgangaprasath@smail.iitm.ac.in</Link> <br/>
            (044) 2257 4086
          </p>
          <p className="text-center md:text-left font-light text-md md:px-16">
            INTERFACE lab <br/>
            114, Mechanical Sciences Block <br/>
          </p>
        </div>
    </>
  );
}
