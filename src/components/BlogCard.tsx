import { FC } from "react";
import { PropsBlog } from "../types/blog.types";

const BlogCard: FC<PropsBlog> =({ blog }) => {
  return (
    <article key={blog.id} className=" flex flex-col gap-3 mx-4 lg:mx-0">
      <img
        src={blog.image}
        alt={blog.title}
        className="rounded lg:rounded-lg object-cover object-center w-full"
      />
      <div className="flex items-center justify-start mt-4 text-xs gap-x-4">
        <time dateTime={blog.datetime} className="text-gray-500">
          {blog.date}
        </time>
        <a
          href={blog.category.href}
          className="bg-gray-50 hover:bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full"
        >
          {blog.category.title}
        </a>
      </div>
      <div className="relative group">
        <h3 className="font-semibold text-lg leading-6 mb-3 text-gray-900 group-hover:text-gray-600">
          <a href={blog.href}>
            {blog.title}
            <span className="absolute inset-0"></span>
          </a>
        </h3>
        <p className="mt-3 text-sm leading-6 line-clamp-3 text-gray-600">
          {blog.description}
        </p>
      </div>
      <div className="flex mt-3 gap-x-4 relative">
        <img
          src={blog.author.imageUrl}
          alt={blog.author.name}
          className="w-10 h-10 rounded-full object-cover object-center"
        />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <a href={blog.author.href}>
              {blog.author.name}
              <span className="absolute inset-0"></span>
            </a>
          </p>
          <p className="text-gray-600">{blog.author.role}</p>
        </div>
      </div>
    </article>
  );
}
export default BlogCard