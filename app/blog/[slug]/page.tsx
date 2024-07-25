import fs from "fs";
import Image from "next/image";
// import Markdown from "markdown-to-jsx";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";

const getPostContent = (slug: string) => {
  const folder = "blog/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className="max-w-5xl">
      <div className="text-center">
        <h1 className="text-4xl font-bold">{post.data.title}</h1>
        <div className="group container flex flex-row items-center justify-between my-10">
          <div className="group flex flex-row items-center justify-between gap-4">
            <Image
              src={post.data.image}
              width={45}
              height={45}
              alt="Picture of the lab member"
              className="transform duration-200 rounded-full grayscale group-hover:grayscale-0 hover:scale-125"
            />
            <div className="flex flex-col items-start justify-center">
              <p className="text-center md:text-left font-semibold text-md">
                {post.data.author}
              </p>
              <p className="text-center md:text-left font-light text-xs text-gray-500 pb-1">
                {post.data.desig}
              </p>
            </div>
          </div>
          <p className="text-center md:text-left font-medium text-md text-gray-800 pb-1">
            {post.data.date}
          </p>
        </div>
      </div>

      <article className="prose prose-stone max-w-none scroll-smooth dark:prose-invert">
        <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex ,rehypeRaw]}>
        {/* <Markdown> */}
          {post.content}
        {/* </Markdown> */}
        </ReactMarkdown>
      </article>
    </div>
  );
};

export default PostPage;
