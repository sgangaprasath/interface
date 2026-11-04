import * as fs from "fs";
import PubsTabs from "./PubsTabs";
import PageTitle from "@/components/PageTitle";

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
      <div className="w-full pt-10 pb-10">
        <PageTitle title="Publications" icon="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
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
