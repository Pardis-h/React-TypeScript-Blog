import { FC } from "react";
import BlogCard from "./BlogCard";
import { PropsBlogs } from "../types/blog.types";

const BlogCards: FC<PropsBlogs> = ({blogs}) => {

  return (
    <div className="bg-white">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 mx-auto">
          {blogs.map((post) => (
            <BlogCard key={post._id} blog={post}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogCards;
