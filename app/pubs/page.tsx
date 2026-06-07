import * as fs from "fs";
import PubsTabs from "./PubsTabs";

export interface PubsMetaData {
  id: number;
  year: number;
  data: PubsData[];
}

export interface PubsData {
  id: number;
  authors: string;
  title: string;
  arxiv: string;
  website: string;
  download: string;
  video: string;
  news1: string;
  news2: string;
  date: string;
  image: string;
  journal: string;
  tag: string;
  tag2: string;
}

const getPubContent = (): PubsMetaData[] => {
  const jsonString = fs.readFileSync("./app/json/pubs.json", "utf-8");
  const jsonData: PubsMetaData[] = JSON.parse(jsonString);
  jsonData.sort((a, b) => b.year - a.year);
  return jsonData;
};

const PubsPage = () => {
  const posts = getPubContent();
  return (
    <div className="flex flex-col items-center md:items-start justify-center max-w-4xl w-full md:ml-20">
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
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
          </div>
          <p className="font-bold text-lg px-4">Publications</p>
        </div>
      </div>
      <section className="w-full mb-10 px-10 lg:px-14 text-sm">
        <PubsTabs posts={posts} />
        <p className="mt-6 text-xs text-gray-400 font-light">
          <sup className="font-mono">*</sup> equal contribution
        </p>
      </section>
    </div>
  );
};

export default PubsPage;
