import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-40 px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold leading-10 tracking-tight text-gray-900 sm:text-6xl">
          This is a Blog Project with TypeScript
        </h1>
        <p className=" mt-8 text-lg leading-8 text-gray-600">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/post-blog"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </Link>
          <Link to="/blogs" className="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
