"use client";

import Link from "next/link";

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

export default function PostNav({ prev, next }: PostNavProps) {
  return (
    <div className="flex flex-col gap-2 items-start">
      {prev && (
        <Link
          href={`/blog/${prev.slug}`}
          className="group flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-400 hover:text-gray-900 hover:border-gray-400 hover:shadow-sm transition-all duration-200 max-w-xs"
        >
          <ArrowLeft />
          <span className="truncate">{prev.title}</span>
        </Link>
      )}
      {next && (
        <Link
          href={`/blog/${next.slug}`}
          className="group flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-400 hover:text-gray-900 hover:border-gray-400 hover:shadow-sm transition-all duration-200 max-w-xs"
        >
          <ArrowRight />
          <span className="truncate">{next.title}</span>
        </Link>
      )}
    </div>
  );
}
