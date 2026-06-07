import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import Image from "next/image";

const categoryColors: Record<string, string> = {
  Tutorial: "bg-violet-100 text-violet-600 border border-violet-200",
  Primer:   "bg-emerald-100 text-emerald-600 border border-emerald-200",
  Blog:     "bg-sky-100 text-sky-600 border border-sky-200",
  Rant:     "bg-rose-100 text-rose-600 border border-rose-200",
};

const defaultColor = "bg-gray-100 text-gray-500 border border-gray-200";

const PostPreview = (props: PostMetadata) => {
  const tagStyle = categoryColors[props.category] ?? defaultColor;
  return (
    <Link
      href={`/blog/${props.slug}`}
      className="group flex flex-col items-start justify-around w-auto h-auto bg-white rounded-lg border border-gray-200  px-5 py-4 transition-colors hover:bg-gray-50"
    >
      <div className="flex flex-row w-full items-center justify-between mb-1">
        <p className="text-xs text-gray-400">{props.date}</p>
        <div className={`px-2 rounded-full text-[10px] font-normal ${tagStyle}`}>
          {props.category}
        </div>
      </div>
      <h2 className="font-bold text-2xl bg-gradient-to-r from-gray-400 via-gray-700 to-black text-transparent bg-clip-text">
        {props.title}
      </h2>
      <p className="text-slate-700 my-1">{props.subtitle}</p>
      {/* <div className="flex flex-row items-center justify-start w-full mt-2 pt-3 border-t">
        <Image
          src={props.image}
          width={40}
          height={40}
          alt="Picture of the author"
          className="rounded-full"
        />
        <div className="flex flex-col items-start justify-start">
          <p className="px-2 text-sm font-normal">{props.author}</p>
          <p className="px-2 text-xs text-gray-400">{props.desig}</p>
        </div>
      </div> */}
    </Link>
  );
};

export default PostPreview;
