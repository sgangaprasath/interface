import * as fs from "fs";
import Link from "next/link";
import Image from "next/image";

const ResearchPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-between gap-10 max-w-5xl pt-20 pb-10">
        <h1 className="flex flex-row items-center justify-center p-2 text-4xl">
          <div className="opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
              />
            </svg>
          </div>
          <p className="font-bold px-4">Research</p>
        </h1>
      </div>
      <section className="grid grid-cols-1 items-start gap-4 mb-10 max-w-5xl drop-shadow-xl text-sm md:grid-cols-2 lg:grid-cols-3">
        {/* First topic */}
        <div className="group flex flex-col items-start justify-start w-full h-auto bg-white rounded-lg border border-gray-200 transition-colors">
          <Image
            // src="/images/geometric.jpg"
            src="/images/soft.jpg"
            width="0"
            height="0"
            alt="News blurb image"
            sizes="100vw"
            className="object-cover rounded-tl-lg rounded-tr-lg w-full h-40"
          />
          <div className="px-5 py-4">
            <h2 className="font-bold text-2xl mb-1 bg-gradient-to-r from-gray-400 via-gray-700 to-black text-transparent bg-clip-text">
              Soft mechanics
            </h2>
            <p className="text-sm text-slate-700 my-1 text-justify">
              Materials that can undergo large deformation under small magnitude
              of force are termed soft. Soft materials are all around us,
              starting with biological materials such as tissues to macroscopic
              materials such as polymers. The mechanical response of these
              materials is often non-linear even when the strains are small.
              Such a behaviour is the manifestation of the coupling between the
              geometry and the elastic properties of the material. In our lab we
              are interested in understanding how and when these materials will
              undergo instabilities, ways to design them with novel responses
              and controlling their behaviour for a desired function even under
              non-linearity.
            </p>
            <div className="flex flex-col py-4 gap-2">
              <p className="font-bold">Further reading</p>
              <ul className="list-none px-2 space-y-3">
                <li>
                  <Link
                    href="https://pubs.rsc.org/en/content/articlehtml/2012/sm/c2sm00011c"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-md rounded-full text-xs px-2 py-1      "
                  >
                    Morphological instabilities
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www2.eecs.berkeley.edu/Pubs/TechRpts/2008/EECS-2008-103.pdf"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-md rounded-full text-xs px-2 py-1      "
                  >
                    The elastica: a mathematical history
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.academia.edu/download/75296176/1081357172.pdf"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-md rounded-full text-xs px-2 py-1      "
                  >
                    Leaves, Flowers and Garbage Bags
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.epfl.ch/labs/flexlab/wp-content/uploads/2018/03/research_fracture_tearing_graphene_cracks_marder_physicstoday_2007.pdf"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-md rounded-full text-xs px-2 py-1      "
                  >
                    Crumpling, buckling, and cracking
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="https://journals.aps.org/rmp/abstract/10.1103/RevModPhys.79.643"
                    className="bg-violet-200 rounded-full px-2 py-1 text-violet-600 text-xs"
                  >
                    Elastic sheets
                  </Link>
                </li> */}
              </ul>
            </div>
            <div className="flex flex-row gap-4">
              <p className="px-2 bg-lime-200 w-fit rounded-full text-[10px] font-normal text-lime-600">
                Materials
              </p>
              <p className="px-2 bg-lime-200 w-fit rounded-full text-[10px] font-normal text-lime-600">
                Instability
              </p>
              <p className="px-2 bg-lime-200 w-fit rounded-full text-[10px] font-normal text-lime-600">
                Control
              </p>
            </div>
          </div>
        </div>
        {/* Second topic */}
        <div className="group flex flex-col items-start justify-start w-full h-auto bg-white rounded-lg border border-gray-200 transition-colors">
          <Image
            src="/images/robotic.png"
            width="0"
            height="0"
            alt="News blurb image"
            sizes="100vw"
            className="object-cover rounded-tl-lg rounded-tr-lg w-full h-40"
          />
          <div className="px-5 py-4">
            <h2 className="font-bold text-2xl mb-1 bg-gradient-to-r from-gray-400 via-gray-700 to-black text-transparent bg-clip-text">
              Robotics
            </h2>
            <p className="text-sm text-slate-700 my-1 text-justify">
              What constitutes as robotics can be a tricky question. As diverse
              a field as it is, our group is interested in developing platforms
              where custom-built agents can perceive their environment, make
              measurements and take actions after integrating and processing the
              information. The actions that these agents take affect both their
              response as well as their environment. The agent-environment
              approach falls under the paradigm of embodiment and we are
              interested in utilising pattern formation approach to achieve
              tasks in complex settings. Important questions include, but not
              limited to, active learning in collectives, morphological
              intelligence, hierarchical control and so on.
            </p>
            <div className="flex flex-col py-4 gap-2">
              <p className="font-bold">Further reading</p>
              <ul className="list-none px-2 space-y-3">
                <li>
                  <Link
                    href="https://www.jstor.org/stable/pdf/20051596.pdf"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-md rounded-full text-xs px-2 py-1      "
                  >
                    Self-organization and embodiment
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://people.csail.mit.edu/brooks/papers/elephants.pdf"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-md rounded-full text-xs px-2 py-1      "
                  >
                    Elephants don't play chess
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.jstor.org/stable/pdf/24917274.pdf"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-md rounded-full text-xs px-2 py-1      "
                  >
                    Biorobotics
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://people.csail.mit.edu/iida/papers/pfeifer_iida_JSM05.pdf"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-md rounded-full text-xs px-2 py-1      "
                  >
                    Morphological computation
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-row gap-4">
              <p className="px-2 bg-amber-200 w-fit rounded-full text-[10px] font-normal text-amber-600">
                Pattern formation
              </p>
              <p className="px-2 bg-amber-200 w-fit rounded-full text-[10px] font-normal text-amber-600">
                Learning
              </p>
              <p className="px-2 bg-amber-200 w-fit rounded-full text-[10px] font-normal text-amber-600">
                Bio-robotics
              </p>
            </div>
          </div>
        </div>
        {/* Third topic */}
        <div className="group flex flex-col items-start justify-start w-full h-auto bg-white rounded-lg border border-gray-200 transition-colors">
          <Image
            src="/images/ants.jpeg"
            width="0"
            height="0"
            alt="News blurb image"
            sizes="100vw"
            className="object-cover rounded-tl-lg rounded-tr-lg w-full h-40"
          />
          <div className="px-5 py-4">
            <h2 className="font-bold text-2xl mb-1 bg-gradient-to-r from-gray-400 via-gray-700 to-black text-transparent bg-clip-text">
              Behaviour
            </h2>
            <p className="text-sm text-slate-700 my-1 text-justify">
              A sequence of actions performed by an individual/animal is termed
              behaviour. These motor actions often have a cause and effect,
              often involving decisions made based on available information.
              Nikolaas Tinbergen, one of the founders of the field of ethology
              (the study of animal behaviour), classifies levels of analysis of
              animal behaviour into four categories:
            </p>
            <ul className="list-disc px-5">
              <li>causation</li>
              <li>evolution/phylogeny</li>
              <li>adaptation</li>
              <li>development/ontogeny</li>
            </ul>
            <p className="text-sm text-slate-700 text-justify pt-2">
              We are interested in understanding the decision-making aspect in
              insects, and how they come up with new strategies to solve a
              particular problem in novel environments.
            </p>
            <div className="flex flex-col py-4 gap-2">
              <p className="font-bold">Further reading</p>
              <ul className="list-none px-2 space-y-3">
                <li>
                  <Link
                    href="https://www.reed.edu/biology/courses/BIO342/2015_syllabus/2015_readings/Tinb_1963.pdf"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-md rounded-full text-xs px-2 py-1      "
                  >
                    Aims and methods of Ethology
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.jasss.org/4/1/reviews/kluegl.html"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-md rounded-full text-xs px-2 py-1      "
                  >
                    Swarm intelligence
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://journals.biologists.com/jeb/article/220/1/83/33438/When-social-behaviour-is-moulded-in-clay-on-growth"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-md rounded-full text-xs px-2 py-1      "
                  >
                    Social behaviour moulded in clay
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.academia.edu/50568923/What_are_Social_Insects"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-md rounded-full text-xs px-2 py-1      "
                  >
                    What are social insects?
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-row gap-4">
              <p className="px-2 bg-sky-200 w-fit rounded-full text-[10px] font-normal text-sky-600">
                Cooperation
              </p>
              <p className="px-2 bg-sky-200 w-fit rounded-full text-[10px] font-normal text-sky-600">
                Decision-making
              </p>
              <p className="px-2 bg-sky-200 w-fit rounded-full text-[10px] font-normal text-sky-600">
                Navigation
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResearchPage;
