import fs from "fs";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import path from "path";
import "katex/dist/katex.min.css";
import "./tufte.css";

const getPostContent = (slug: string) => {
  if (!slug) {
    throw new Error("Slug is undefined in getPostContent()");
  }

  const postsDirectory = path.join(process.cwd(), "blog/");
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${fullPath}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  return matterResult;
};

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "blog");

  const filenames = fs.existsSync(postsDirectory)
    ? fs.readdirSync(postsDirectory)
    : [];

  const slugs = filenames
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(".md", ""));

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

import { notFound, redirect } from "next/navigation";
import PostNav from "@/components/PostNav";
import { toneFor } from "@/components/categoryColors";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

/** "2026-03-24" -> "24 March 2026"; anything unparseable is passed through. */
const formatDate = (value: unknown): string => {
  if (!value) return "";
  const raw = value instanceof Date ? value.toISOString().slice(0, 10) : String(value);
  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) return raw;
  return parsed.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
};

const Byline = ({
  image,
  author,
  desig,
}: {
  image?: string;
  author?: string;
  desig?: string;
}) => {
  if (!author) return null;
  return (
    <div className="tufte-author">
      {image && (
        <Image
          src={image}
          width={44}
          height={44}
          alt={`Photograph of ${author}`}
        />
      )}
      <div>
        <div className="tufte-author-name">{author}</div>
        {desig && <div className="tufte-author-desig">{desig}</div>}
      </div>
    </div>
  );
};

const PostPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  // If this post has a redirect field, send the user there instead.
  const allPostsMeta = getPostMetadata();
  const meta = allPostsMeta.find((p) => p.slug === slug);
  if (meta?.redirect) {
    redirect(meta.redirect);
  }

  const post = getPostContent(slug);

  const allPosts = getPostMetadata();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prev =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const next = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  const tone = toneFor(post.data.category);

  return (
    <div className="tufte-page mb-8">
      <header className="tufte-header">
        {post.data.category && (
          <div
            className="tufte-kicker"
            style={{
              backgroundColor: tone.bg,
              color: tone.fg,
              border: `1px solid ${tone.border}`,
            }}
          >
            {post.data.category}
          </div>
        )}

        <h1 className="tufte-title">{post.data.title}</h1>

        {post.data.subtitle && (
          <p className="tufte-subtitle">{post.data.subtitle}</p>
        )}

        <div className="tufte-byline">
          <div className="tufte-authors">
            <Byline
              image={post.data.image}
              author={post.data.author}
              desig={post.data.desig}
            />
            <Byline
              image={post.data.image2}
              author={post.data.author2}
              desig={post.data.desig2}
            />
          </div>
          <p className="tufte-date">{formatDate(post.data.date)}</p>
        </div>
      </header>

      <article className="tufte-body scroll-smooth">
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex, rehypeRaw]}
        >
          {post.content}
        </ReactMarkdown>
      </article>

      {/* .tufte-footer is a 3-column grid; PostNav supplies its cells. */}
      <nav className="tufte-footer">
        <PostNav prev={prev} next={next} />
      </nav>
    </div>
  );
};

export default PostPage;
