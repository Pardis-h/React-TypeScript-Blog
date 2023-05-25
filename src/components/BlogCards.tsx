import BlogCard from "./BlogCard";

function BlogCards({blogs}) {

  return (
    <div className="bg-white">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 mx-auto">
          {blogs.map((post) => (
            <BlogCard key={post.id} post={post}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogCards;
