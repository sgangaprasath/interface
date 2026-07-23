"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PubsMetaData, PubsData } from "./page";

const TAG_STYLES: Record<string, string> = {
  Control:       "bg-lime-100 text-lime-700 border border-lime-300",
  Hydrodynamics: "bg-cyan-100 text-cyan-700 border border-cyan-300",
  Robotics:      "bg-violet-100 text-violet-700 border border-violet-300",
  Softmatter:    "bg-amber-100 text-amber-700 border border-amber-300",
  Behaviour:     "bg-sky-100 text-sky-700 border border-sky-300",
  Geometry:      "bg-emerald-100 text-emerald-700 border border-emerald-300",
};

const TAG_LABELS: Record<string, string> = {
  Control:       "#control",
  Hydrodynamics: "#hydrodynamics",
  Robotics:      "#robotics",
  Softmatter:    "#soft-matter",
  Behaviour:     "#behaviour",
  Geometry:      "#geometry",
};

const TagBadge = ({
  tag,
  onClick,
  isActive,
}: {
  tag: string;
  onClick?: () => void;
  isActive?: boolean;
}) => {
  if (!tag || !TAG_STYLES[tag]) return null;
  return (
    <span
      onClick={onClick}
      className={`rounded-md text-xs px-2 py-0.5 font-mono transition-all
        ${TAG_STYLES[tag]}
        ${onClick ? "cursor-pointer hover:opacity-80" : ""}
        ${isActive ? "ring-2 ring-offset-1 ring-gray-400" : ""}
      `}
    >
      {TAG_LABELS[tag]}
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

const PubItem = ({
  data,
  activeTag,
  onTagClick,
}: {
  data: PubsData;
  activeTag: string | null;
  onTagClick: (tag: string) => void;
}) => (
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
          <TagBadge
            tag={data.tag}
            onClick={() => onTagClick(data.tag)}
            isActive={activeTag === data.tag}
          />
          <TagBadge
            tag={data.tag2}
            onClick={() => onTagClick(data.tag2)}
            isActive={activeTag === data.tag2}
          />
        </div>
      </div>
    </div>
  </div>
);

export default function PubsTabs({ posts }: { posts: PubsMetaData[] }) {
  const [activeId, setActiveId] = useState(posts[0]?.id ?? 0);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const handleTagClick = (tag: string) => {
    if (!tag || !TAG_STYLES[tag]) return;
    setActiveTag((prev) => (prev === tag ? null : tag));
  };

  const activeGroup = posts.find((p) => p.id === activeId);

  // All papers matching the active tag, across all years
  const taggedPubs = activeTag
    ? posts.flatMap((group) =>
        group.data
          .filter((p) => p.tag === activeTag || p.tag2 === activeTag)
          .map((p) => ({ ...p, _year: group.year }))
      )
    : null;

  return (
    <div className="w-full">
      {/* Tab bar */}
      <div className="flex flex-wrap gap-1 border-b border-gray-200 mb-6">
        {posts.map((group) => {
          const label = (group as any).label ?? String(group.year);
          const isActive = !activeTag && activeId === group.id;
          return (
            <button
              key={group.id}
              onClick={() => { setActiveId(group.id); setActiveTag(null); }}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-150 rounded-t-md focus:outline-none
                ${isActive
                  ? "text-gray-900 bg-white border border-b-white border-gray-200 -mb-px z-10"
                  : "text-gray-400 hover:text-gray-700 hover:bg-gray-50"
                }`}
            >
              {label}
              <span className={`ml-1.5 text-xs rounded-full px-1.5 py-0.5 font-mono
                ${isActive ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-400"}`}>
                {group.data.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active tag filter banner */}
      {activeTag && (
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs text-gray-500">Filtering by</span>
          <TagBadge tag={activeTag} isActive />
          <span className="text-xs text-gray-400">— {taggedPubs?.length} paper{taggedPubs?.length !== 1 ? "s" : ""}</span>
          <button
            onClick={() => setActiveTag(null)}
            className="ml-auto text-xs text-gray-400 hover:text-gray-700 underline underline-offset-2 transition-colors"
          >
            clear ×
          </button>
        </div>
      )}

      {/* Publications list */}
      <div className="divide-y divide-gray-100 min-h-64">
        {activeTag
          ? taggedPubs?.map((pub, i) => (
              <PubItem key={i} data={pub} activeTag={activeTag} onTagClick={handleTagClick} />
            ))
          : activeGroup?.data.map((pub, i) => (
              <PubItem key={i} data={pub} activeTag={activeTag} onTagClick={handleTagClick} />
            ))}
      </div>
    </div>
  );
}
