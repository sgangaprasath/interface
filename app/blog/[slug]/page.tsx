import fs from "fs";
import Image from "next/image";
import Markdown from "markdown-to-jsx";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import path from "path";
import "katex/dist/katex.min.css";

// const getPostContent = (slug: string) => {
//   const folder = "blog/";
//   const file = `${folder}${slug}.md`;
//   const content = fs.readFileSync(file, "utf8");
//   const matterResult = matter(content);
//   return matterResult;
// };


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

  console.log("Looking for posts in:", postsDirectory);
  console.log("Directory exists?", fs.existsSync(postsDirectory));

  const filenames = fs.existsSync(postsDirectory)
    ? fs.readdirSync(postsDirectory)
    : [];

  console.log("Filenames found:", filenames);

  const slugs = filenames
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(".md", ""));

  console.log("Slugs generated:", slugs);

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const PostPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const post = getPostContent(slug);

  return (
    <div className="max-w-5xl mt-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold">{post.data.title}</h1>

        <div className="group container flex flex-row items-center justify-between my-10">
          <div className="flex flex-row items-center gap-4">
            <div className="group flex flex-row items-center gap-2">
              <Image
                src={post.data.image}
                width={45}
                height={45}
                alt="Picture of the lab member"
                className="transform duration-200 rounded-full grayscale group-hover:grayscale-0 hover:scale-125"
              />
              <div className="flex flex-col items-start justify-center">
                <p className="font-semibold text-md">
                  {post.data.author}
                </p>
                <p className="font-light text-xs text-gray-500 pb-1">
                  {post.data.desig}
                </p>
              </div>
            </div>
            {post.data.author2 && post.data.image2 && (
              <div className="group flex flex-row items-center gap-2">
                <Image
                  src={post.data.image2}
                  width={45}
                  height={45}
                  alt="Picture of the second lab member"
                  className="transform duration-200 rounded-full grayscale group-hover:grayscale-0 hover:scale-125"
                />
                <div className="flex flex-col items-start justify-center">
                  <p className="font-semibold text-md">
                    {post.data.author2}
                  </p>
                  <p className="font-light text-xs text-gray-500 pb-1">
                    {post.data.desig2}
                  </p>
                </div>
              </div>
            )}
          </div>

          <p className="font-medium text-md text-gray-800 pb-1">
            {post.data.date}
          </p>
        </div>
      </div>

      <article className="prose prose-stone max-w-none scroll-smooth dark:prose-invert">
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex, rehypeRaw]}
        >
          {post.content}
        </ReactMarkdown>
      </article>
    </div>
  );
};

export default PostPage;