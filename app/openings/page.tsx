import Link from "next/link";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center md:items-start justify-center gap-4 w-full max-w-4xl mt-10 mb-10 md:ml-20 md:gap-4">
        <PageTitle title="Openings" icon="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
        <p className="text-center md:text-left font-light text-md md:px-16">
          We have an opening for <b className="font-bold">1 Project Associate</b> position that can transition into a{" "}
          <b className="font-bold">PhD position</b>. The work involves developing and working with{" "}
          <b className="font-bold">manipulators and bipedal robots</b>, at the intersection of control theory and learning.
        </p>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 w-full md:px-16">
          <div className="flex flex-col gap-5 flex-1 font-light text-md">
            <div className="flex flex-wrap justify-center md:justify-start gap-2 text-sm">
              <span className="px-3 py-1 rounded-full border border-gray-300 bg-white">
                Salary: <b className="font-bold">Rs. 37k + HRA</b>
              </span>
              <span className="px-3 py-1 rounded-full border border-gray-300 bg-white">
                Last date: <b className="font-bold">1 December 2026</b>
              </span>
            </div>
            <div>
              <p className="font-bold mb-2 text-center md:text-left">What is expected from the candidate?</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>A very good grasp of control theory: linear, nonlinear and optimal control.</li>
                <li>Reinforcement learning and its implementation beyond simulation.</li>
                <li>Hands-on experience with real robots: actuators, sensors, electronics.</li>
                <li>Advanced mathematical skills: dynamics, optimization, probability.</li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-2 text-center md:text-left">Why do a PhD in today&apos;s world?</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>A head start: begin as Project Associate, continue into a PhD at IIT Madras.</li>
                <li>Real hardware to build and break: manipulators and bipeds, not only simulators.</li>
                <li>Experience at the frontier of embodied AI, where control theory meets learning.</li>
                <li>Skills sought across robotics research and the fast-growing humanoid industry.</li>
              </ul>
            </div>
            <p className="text-center md:text-left">
              Apply through the{" "}
              <a
                href="https://forms.gle/mXpAHDJZyw2aEwgu9"
                className="font-bold underline hover:underline-offset-2"
              >
                application form
              </a>{" "}
              before <b className="font-bold">1 December 2026</b>. For any further information, write to S Ganga Prasath at{" "}
              <a
                href="mailto:sgangaprasath@smail.iitm.ac.in"
                className="font-bold underline hover:underline-offset-2"
              >
                sgangaprasath@smail.iitm.ac.in
              </a>
              .
            </p>
          </div>
          <a
            href="/images/pa-phd-poster-2026.jpg"
            className="w-64 md:w-72 shrink-0"
            title="Open the full poster"
          >
            <img
              src="/images/pa-phd-poster-2026.jpg"
              alt="Poster: Project Associate to PhD position at INTERFACE lab, IIT Madras"
              className="w-full rounded-lg border border-gray-300 shadow-sm"
            />
          </a>
        </div>
        <p className="text-center md:text-left font-light text-md md:px-16">
          Our group uses experiments and theoretical analysis as demanded by
          the question. Have a look at the{" "}
          <a
            href="/research"
            className="font-bold underline hover:underline-offset-2"
          >
            research
          </a>{" "}
          and{" "}
          <a
            href="/pubs"
            className="font-bold underline hover:underline-offset-2"
          >
            publications
          </a>{" "}
          pages for details of the group&apos;s work.
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
        {/* <p className="text-center md:text-left font-light text-md md:px-16">
          <b className="font-bold">1 JRF position</b> (which will transition to a PhD position) for candidates with good academic record to explore problems in {" "}
          <b className="font-bold">
            robotics & optimal control
          </b>
          .
        </p> */}
        {/* <p className="text-center md:text-left font-light text-md md:px-16">
          Our group uses experiments and theoretical analysis as demanded by
          the question. Have a look at the{" "}
          <a
            href="/research"
            className="font-bold underline hover:underline-offset-2"
          >
            research
          </a>{" "}
          and{" "}
          <a
            href="/pubs"
            className="font-bold underline hover:underline-offset-2"
          >
            publications
          </a>{" "}
          pages for details of the group&apos;s work and drop by our lab to know more.
        </p> */}
        {/* <p className="text-center md:text-left font-light text-md md:px-16">
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
        </p> */}
        {/* <p className="text-center md:text-left font-light text-md md:px-16">
          Details of the Junior Research Fellowship position can be found{" "}
          <a
            href="https://icandsr.iitm.ac.in/careers/admin/download_announcement.php?file=announce_1781776854.pdf"
            className="font-bold underline hover:underline-offset-2"
          >
            here
          </a>
          . The last date for submitting application is <b className="font-bold">2nd July 2026</b>. After submitting the application, you will be notified about the task requirements for you to be selected for the interviews. The task for the position is detailed in the document below and you can get started if you are keen about the position.
        </p>
        <p className="text-center md:text-left font-light text-md md:px-16">
           The last date for task submission is extended to <b className="font-bold">13th July 2026</b>. If you have finished the task, please upload your report and videos here: <a href="https://forms.gle/3yEQ2vJiihN3Fwb59" className="font-bold underline hover:underline-offset-2">Task Submission Form</a>
        </p>
        <div className="flex flex-col items-center w-full md:px-16 gap-4 mt-2">
          <p className="text-center md:text-left font-light text-md w-full">
            The task involves developing control strategies for robotic systems using tools from optimal control theory and dynamical systems. Candidates interested in applying should review the task document below for a detailed description of the problem and the expected skills.
          </p>
          <iframe
            src="/pdf/JRF26_task.pdf"
            className="w-full rounded-lg border border-gray-300 shadow-sm"
            style={{ height: "80vh" }}
            title="JRF 2026 Task Document"
          />
        </div> */}
      </div>
    </>
  );
}

