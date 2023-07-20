import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";

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
        <p className="text-gray-400 mt-2">{post.data.date}</p>
      </div>

      <article className="prose prose-stone max-w-none scroll-smooth dark:prose-invert">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;

