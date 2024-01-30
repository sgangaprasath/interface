import * as fs from "fs";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineTwitter } from "react-icons/ai";

export interface MembersMetaData {
  id: number;
  name: string;
  title: string;
  twitter: string;
  email: string;
  webpage: string;
  cv: string;
  image: string;
}

const getMemContent = (): MembersMetaData[] => {
  const jsonString = fs.readFileSync("./app/json/members.json", "utf-8");
  const jsonData = JSON.parse(jsonString);
  jsonData.sort(function (a: MembersMetaData, b: MembersMetaData) {
    return a.id - b.id;
  });
  return jsonData;
};

const MemPreview = (props: MembersMetaData) => {
  return (
    <div className="group container flex flex-row items-center justify-start gap-4">
      <Image
        src={props.image}
        width={45}
        height={45}
        alt="Picture of the lab member"
        className="transform duration-200 rounded-full grayscale group-hover:grayscale-0 hover:scale-125"
      />
      <div className="flex flex-col items-start justify-center">
        <p className="text-center md:text-left font-semibold text-md">
          {props.name}
        </p>
        <p className="text-center md:text-left font-light text-xs text-gray-500 pb-1">
          {props.title}
        </p>
        <div className="flex flex-row items-start justify-center gap-2">
          {props.twitter !== "" && (
            <Link
              className="opacity-50 hover:opacity-100"
              href={props.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter />
            </Link>
          )}
          <Link
            className="opacity-50 hover:opacity-100"
            href={props.email}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={"/images/email.svg"}
              width={15}
              height={15}
              alt="Email for correspondence"
            />
          </Link>
          {props.webpage !== "" && (
            <Link
              className="opacity-50 hover:opacity-100"
              href={props.webpage}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/images/webpage.svg"}
                width={15}
                height={15}
                alt="Personal webpage"
              />
            </Link>
          )}
          {props.cv !== "" && (
            <Link
              className="opacity-50 hover:opacity-100"
              href={props.cv}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/images/cv.svg"}
                width={15}
                height={15}
                alt="Personal webpage"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export const generateStaticParams = async () => {
  const posts = getMemContent();
  return posts.map((post) => ({
    id: post.id,
  }));
};

const MembersPage = () => {
  const posts = getMemContent();
  const memPreviews = posts.map((post) => (
    <MemPreview key={post.id} {...post} />
  ));
  return (
    <div className="flex flex-col items-center justify-center max-w-4xl">
      <div className="flex flex-col items-center md:items-start justify-center gap-4 w-full mt-20 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-start gap-2">
          <div className="p-3 bg-white border border-gray-300 rounded-full opacity-60">
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
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>
          </div>
          <p className="font-bold text-lg px-4">Members</p>
        </div>
      </div>
      <section className="grid grid-cols-1 gap-10 md:gap-10 lg:gap-20 mb-10 px-10 lg:px-14 text-sm md:grid-cols-3 max-w-4xl">
        {memPreviews}
      </section>
      <div className="border border-rose-300 bg-rose-200 max-w-2xl text-rose-600 text-center p-4 rounded-xl text-xs">
        We are looking for MS and PhD students interested in exploring
        problems in the fields of soft-robotics, reinforcement learning,
        behaviour and control of large degree of freedom systems. Our group
        uses experiments and/or theoretical analysis as demanded by the question
        at hand. Have a look at the research tab for a broad overview and drop
        by our lab to know more.
      </div>
    </div>
  );
};

export default MembersPage;
