"use client";

import Link from "next/link";
import GoToTop from "./GoToTop";

interface NavPost {
  slug: string;
  title: string;
}

interface PostNavProps {
  prev: NavPost | null;
  next: NavPost | null;
}

const ArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
    strokeWidth="1.5" stroke="currentColor"
    className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
  </svg>
);

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
    strokeWidth="1.5" stroke="currentColor"
    className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const pillClass =
  "group flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm text-gray-400 hover:text-gray-900 hover:border-gray-400 hover:shadow-sm transition-all duration-200 max-w-[18rem]";

/**
 * The article footer bar: previous post at the left edge, next post at the
 * right edge, "Back to top" as plain linked text in the middle.
 *
 * Returns three siblings rather than a wrapper, because .tufte-footer is the
 * grid and these are its cells. The empty divs hold the outer cells open when
 * there is no previous/next post, so the centre stays centred.
 */
export default function PostNav({ prev, next }: PostNavProps) {
  return (
    <>
      <div>
        {prev && (
          <Link href={`/blog/${prev.slug}`} className={pillClass}>
            <ArrowLeft />
            <span className="truncate">{prev.title}</span>
          </Link>
        )}
      </div>

      <GoToTop />

      <div>
        {next && (
          <Link href={`/blog/${next.slug}`} className={pillClass}>
            <span className="truncate">{next.title}</span>
            <ArrowRight />
          </Link>
        )}
      </div>
    </>
  );
}
