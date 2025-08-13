import Link from "next/link";
import Image from "next/image";
import "../globals.css";
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center md:items-start justify-center gap-4 w-full max-w-4xl mt-20 mb-10 md:ml-20 md:gap-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="p-3 bg-white border border-gray-300 rounded-full opacity-60 ">
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
                d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
              />
            </svg>
          </div>
          <p className="font-bold text-lg px-4">Openings</p>
        </div>
        <p className="text-center md:text-left font-light text-md md:px-16">
          We currently have {" "}
          <b className="font-bold">one opening for a PhD student</b> with good academic record to explore problems in {" "}
          <b className="font-bold">
            geometry, soft-mechanics, robotics, reinforcement learning & control
          </b>
          .
        </p>
        <p className="text-center md:text-left font-light text-md md:px-16">
          Our group uses experiments and/or theoretical analysis as demanded by
          the question. Have a look at the{" "}
          <a
            href="/research"
            className="font-bold underline hover:underline-offset-2"
          >
            research
          </a>{" "}
          tab for a broad overview and drop by our lab to know more.
        </p>
        <p className="text-center md:text-left font-light text-md md:px-16">
          Details of the graduate admission can be found{" "}
          <a
            href="https://apm.iitm.ac.in/pages/graduate_admission"
            className="font-bold underline hover:underline-offset-2"
          >
            here
          </a>{" "}
          and the application procedure is elaborated in the{" "}
          <a
            href="https://research.iitm.ac.in"
            className="font-bold underline hover:underline-offset-2"
          >
            IITM Research Portal
          </a>
          .
        </p>
        {/* <div className="relative flex flex-wrap items-center justify-center h-full bg-white ">
          <Image
            className="relative md:pt-10 xl:pt-20"
            src="/images/PostdocAdvert.png"
            alt="Interface lab Logo"
            width={900}
            height={100}
            priority
          />
        </div> */}
      </div>
    </>
  );
}

