"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PubsMetaData, PubsData } from "./page";

const TagBadge = ({ tag }: { tag: string }) => {
  const styles: Record<string, string> = {
    Control:      "bg-lime-100 text-lime-700 border border-lime-300",
    Hydrodynamics:"bg-cyan-100 text-cyan-700 border border-cyan-300",
    Robotics:     "bg-violet-100 text-violet-700 border border-violet-300",
    Softmatter:   "bg-amber-100 text-amber-700 border border-amber-300",
    Behaviour:    "bg-sky-100 text-sky-700 border border-sky-300",
    Geometry:     "bg-emerald-100 text-emerald-700 border border-emerald-300",
  };
  const labels: Record<string, string> = {
    Control:      "#control",
    Hydrodynamics:"#hydrodynamics",
    Robotics:     "#robotics",
    Softmatter:   "#soft-matter",
    Behaviour:    "#behaviour",
    Geometry:     "#geometry",
  };
  if (!tag || !styles[tag]) return null;
  return (
    <span className={`rounded-md text-xs px-2 py-0.5 font-mono ${styles[tag]}`}>
      {labels[tag]}
    </span>
  );
};

const renderAuthors = (authors: string) => {
  const parts = authors.split("*");
  return parts.map((part, i) =>
    i === parts.length - 1 ? (
      <span key={i}>{part}</span>
    ) : (
      <span key={i}>
        {part}
        <sup className="text-gray-400 font-mono">*</sup>
      </span>
    )
  );
};

const PubItem = ({ data }: { data: PubsData }) => (
  <div className="py-4 border-b border-gray-100 last:border-0">
    {data.image && (
      <Image
        src={data.image}
        width={45}
        height={45}
        alt="Publication image"
        className="transform duration-200 rounded-full grayscale hover:grayscale-0 hover:scale-125 mb-2"
      />
    )}
    <div className="flex items-start gap-3">
      <div className="mt-2 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-900 leading-snug mb-1">{data.title}</p>
        <p className="text-gray-500 font-light text-sm mb-1">{renderAuthors(data.authors)}</p>
        {data.journal && (
          <p className="text-gray-500 italic text-sm mb-2">{data.journal}</p>
        )}
        <div className="flex flex-wrap items-center gap-2">
          {data.arxiv && (
            <Link className="opacity-50 hover:opacity-100 transition-opacity" href={data.arxiv} target="_blank" rel="noopener noreferrer">
              <Image src="/images/arxiv.svg" width={15} height={15} alt="arXiv" className="w-4 h-4" />
            </Link>
          )}
          {data.website && (
            <Link className="opacity-50 hover:opacity-100 transition-opacity" href={data.website} target="_blank" rel="noopener noreferrer">
              <Image src="/images/webpage.svg" width={15} height={15} alt="Website" />
            </Link>
          )}
          {data.video && (
            <Link className="opacity-50 hover:opacity-100 transition-opacity" href={data.video} target="_blank" rel="noopener noreferrer">
              <Image src="/images/youtube.svg" width={15} height={15} alt="Video" className="w-4 h-4" />
            </Link>
          )}
          {data.download && (
            <Link className="opacity-50 hover:opacity-100 transition-opacity" href={data.download} target="_blank" rel="noopener noreferrer">
              <Image src="/images/download.svg" width={15} height={15} alt="Download" />
            </Link>
          )}
          {data.news1 && (
            <Link className="opacity-50 hover:opacity-100 transition-opacity" href={data.news1} target="_blank" rel="noopener noreferrer">
              <Image src="/images/news.svg" width={15} height={15} alt="News" />
            </Link>
          )}
          {data.news2 && (
            <Link className="opacity-50 hover:opacity-100 transition-opacity" href={data.news2} target="_blank" rel="noopener noreferrer">
              <Image src="/images/news.svg" width={15} height={15} alt="News" />
            </Link>
          )}
          <TagBadge tag={data.tag} />
          <TagBadge tag={data.tag2} />
        </div>
      </div>
    </div>
  </div>
);

export default function PubsTabs({ posts }: { posts: PubsMetaData[] }) {
  const [activeId, setActiveId] = useState(posts[0]?.id ?? 0);

  const activeGroup = posts.find((p) => p.id === activeId);

  return (
    <div className="w-full">
      {/* Tab bar */}
      <div className="flex flex-wrap gap-1 border-b border-gray-200 mb-6">
        {posts.map((group) => {
          const label = (group as any).label ?? String(group.year);
          return (
            <button
              key={group.id}
              onClick={() => setActiveId(group.id)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-150 rounded-t-md focus:outline-none
                ${
                  activeId === group.id
                    ? "text-gray-900 bg-white border border-b-white border-gray-200 -mb-px z-10"
                    : "text-gray-400 hover:text-gray-700 hover:bg-gray-50"
                }`}
            >
              {label}
              <span className={`ml-1.5 text-xs rounded-full px-1.5 py-0.5 font-mono
                ${activeId === group.id ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-400"}`}>
                {group.data.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Publications list */}
      <div className="divide-y divide-gray-100 min-h-64">
        {activeGroup?.data.map((pub, i) => (
          <PubItem key={i} data={pub} />
        ))}
      </div>
    </div>
  );
}
