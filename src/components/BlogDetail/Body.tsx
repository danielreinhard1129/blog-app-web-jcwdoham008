import Markdown from "@/components/Markdown";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Post } from "@/types/post";
import { formatDate } from "@/utils/formatDate";

interface BodyProps {
  blog: Post;
}

function Body({ blog }: BodyProps) {
  return (
    <div className="mx-auto max-w-6xl space-y-4 my-16 px-4 sm:px-6 lg:px-8">
      <Badge className="text-sm">{blog.category}</Badge>

      <h1 className="text-3xl md:text-4xl font-bold">{blog.title}</h1>

      <p className="font-light">
        {blog.user.name} - {formatDate(blog.createdAt)}
      </p>

      <img
        src={blog.thumbnail || ""}
        alt="thumbnail blog"
        className="h-48 md:h-100 w-full object-cover rounded-sm"
      />

      <p className="text-lg md:text-xl">{blog.description}</p>

      <Separator />

      <Markdown content={blog.content} />
    </div>
  );
}

export default Body;
