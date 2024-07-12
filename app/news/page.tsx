import * as fs from "fs";
import Link from "next/link";
import Image from "next/image";

export interface NewsMetaData {
  id: number;
  title: string;
  message: string;
  link: string;
  date: string;
  tag: string;
  color: string;
  image: string;
}

const getNewsContent = (): NewsMetaData[] => {
  const jsonString = fs.readFileSync("./app/json/news.json", "utf-8");
  const jsonData = JSON.parse(jsonString);
  jsonData
    .sort(function (a: NewsMetaData, b: NewsMetaData) {
      return a.id - b.id;
    })
    .reverse();
  return jsonData;
};

const NewsPreview = (props: NewsMetaData) => {
  return (
    <Link
      href={props.link}
      className="group flex flex-col lg:flex-row items-start justify-start w-auto h-auto bg-white rounded-lg border border-gray-200 transition-colors duration-300 ease-in-out hover:bg-gray-50 "
    >
        {props.image !== "" && (
          <Image
            src={props.image}
            width="0"
            height="0"
            alt="News blurb image"
            sizes="100vw"
            className="object-cover grayscale rounded-tl-lg rounded-tr-lg w-full h-20 lg:h-full lg:w-28 group-hover:grayscale-0 lg:rounded-none lg:rounded-l-lg"
          />
        )}
        <div className="px-5 py-4">
          <div className="flex flex-row w-full items-center justify-between mb-1">
            <p className="text-xs text-gray-400">{props.date}</p>
            {props.tag == "Behaviour" && (
            <div className="px-2 bg-sky-200 rounded-full text-[10px] font-normal text-sky-600">
              {props.tag}
            </div>
            )}
            {props.tag == "Control" && (
            <div className="px-2 bg-red-200 rounded-full text-[10px] font-normal text-red-600">
              {props.tag}
            </div>
            )}
            {props.tag == "Prize" && (
            <div className="px-2 bg-green-200 rounded-full text-[10px] font-normal text-green-600">
              {props.tag}
            </div>
            )}
          </div>
          <h2 className="font-bold text-2xl mb-1 bg-gradient-to-r from-gray-400 via-gray-700 to-black text-transparent bg-clip-text">
            {props.title}
          </h2>
          <p className="text-slate-700 my-1">{props.message}</p>
        </div>
    </Link>
  );
};

export const generateStaticParams = async () => {
  const posts = getNewsContent();
  return posts.map((post) => ({
    id: post.id,
  }));
};

const NewsPage = () => {
  const posts = getNewsContent();
  //   posts.map(({id,name }) => console.log(id, name));
  const newsPreviews = posts.map((post) => (
    <NewsPreview key={post.id} {...post} />
  ));

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
                d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
              />
            </svg>
          </div>
          <p className="font-bold px-4">News</p>
        </h1>
      </div>
      <section className="grid grid-cols-1 gap-4 mb-10 max-w-5xl drop-shadow-xl text-sm md:grid-cols-3">
        {newsPreviews}
      </section>
    </>
  );
};

export default NewsPage;
