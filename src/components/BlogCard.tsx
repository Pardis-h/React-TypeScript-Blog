const BlogCard =({ post }) => {
  return (
    <article key={post.id} className=" flex flex-col gap-3 mx-4 lg:mx-0">
      <img
        src={post.image}
        alt={post.title}
        className="rounded lg:rounded-lg object-cover object-center w-full"
      />
      <div className="flex items-center justify-start mt-4 text-xs gap-x-4">
        <time dateTime={post.datetime} className="text-gray-500">
          {post.date}
        </time>
        <a
          href={post.category.href}
          className="bg-gray-50 hover:bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full"
        >
          {post.category.title}
        </a>
      </div>
      <div className="relative group">
        <h3 className="font-semibold text-lg leading-6 mb-3 text-gray-900 group-hover:text-gray-600">
          <a href={post.href}>
            {post.title}
            <span className="absolute inset-0"></span>
          </a>
        </h3>
        <p className="mt-3 text-sm leading-6 line-clamp-3 text-gray-600">
          {post.description}
        </p>
      </div>
      <div className="flex mt-3 gap-x-4 relative">
        <img
          src={post.author.imageUrl}
          alt={post.author.name}
          className="w-10 h-10 rounded-full object-cover object-center"
        />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <a href={post.author.href}>
              {post.author.name}
              <span className="absolute inset-0"></span>
            </a>
          </p>
          <p className="text-gray-600">{post.author.role}</p>
        </div>
      </div>
    </article>
  );
}
export default BlogCard