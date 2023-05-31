import { useEffect, useState } from "react";
import { useApiPost } from "../functions/FetchApi";
import { useCookies } from "react-cookie";
import { COOKIES_NAMES } from "../enums/public.enums";
import { toastifySubmit } from "../functions/toastify";

function BlogPost() {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const { data, postAPIData, error } = useApiPost();

  const [cookies] = useCookies([COOKIES_NAMES.ACCESS_TOKEN]);
  const token = cookies.accessToken;

  const postBlogHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postAPIData(
      "/blog",
      {
        title,
        text,
        image,
        author,
        category: { title: category },
        date,
        authorDetails: { avatar, role },
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(date);
  };

  const reserForm = () => {
    setTitle("");
    setText("");
    setImage("");
    setAuthor("");
  };

  useEffect(() => {
    if (data) {
      toastifySubmit("Success", "Posted Successfully :)");
      reserForm();
    }
  }, [data, error]);

  return (
    <>
      <div className="mb-10 container mx-auto flex justify-center max-w-xl my-8">
        <form
          action=""
          onSubmit={postBlogHandler}
          className="space-y-6 min-w-full shadow rounded px-6 py-4 bg-white"
        >
          <div>
            <label htmlFor="title" className="text-gray-600 text-sm leading-5">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              required
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
              className="border-0 shadow-sm w-full block ring-1 ring-inset ring-gray-300 rounded-md mt-2 py-1.5 px-3 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600"
            />
          </div>
          <div>
            <label htmlFor="text" className="text-gray-600 text-sm leading-5">
              Description
            </label>
            <textarea
              name="text"
              id="text"
              value={text}
              required
              onChange={(e) => setText(e.target.value)}
              className="border-0 shadow-sm w-full block ring-1 ring-inset ring-gray-300 rounded-md mt-2 py-1.5 px-3 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600"
            />
          </div>
          <div>
            <label htmlFor="image" className="text-gray-600 text-sm leading-5">
              Image(url)
            </label>
            <input
              type="text"
              name="image"
              id="image"
              value={image}
              required
              onChange={(e) => setImage(e.target.value)}
              className="border-0 shadow-sm w-full block ring-1 ring-inset ring-gray-300 rounded-md mt-2 py-1.5 px-3 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600"
            />
          </div>
          <div>
              <label
                htmlFor="author"
                className="text-gray-600 text-sm leading-5"
              >
                Author
              </label>
              <input
                type="text"
                name="author"
                id="author"
                value={author}
                required
                onChange={(e) => setAuthor(e.target.value)}
                className="border-0 shadow-sm w-full block ring-1 ring-inset ring-gray-300 rounded-md mt-2 py-1.5 px-3 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600"
              />
            </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1 ">
              <label
                htmlFor="role"
                className="text-gray-600 text-sm leading-5"
              >
                Author Role
              </label>
              <input
                type="text"
                name="role"
                id="role"
                value={role}
                required
                onChange={(e) => setRole(e.target.value)}
                className="border-0 shadow-sm w-full block ring-1 ring-inset ring-gray-300 rounded-md mt-2 py-1.5 px-3 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="avatar"
                className="text-gray-600 text-sm leading-5"
              >
                Author Avatar
              </label>
              <input
                type="text"
                name="avatar"
                id="avatar"
                value={avatar}
                required
                onChange={(e) => setAvatar(e.target.value)}
                className="border-0 shadow-sm w-full block ring-1 ring-inset ring-gray-300 rounded-md mt-2 py-1.5 px-3 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600"
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1">
              <label
                htmlFor="category"
                className="text-gray-600 text-sm leading-5"
              >
                Category
              </label>
              <input
                type="text"
                name="category"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border-0 shadow-sm w-full block ring-1 ring-inset ring-gray-300 rounded-md mt-2 py-1.5 px-3 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600"
              />
            </div>
            <div>
              <label htmlFor="date" className="text-gray-600 text-sm leading-5">
                Date post
              </label>
              <input
                type="date"
                name="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border-0 shadow-sm w-full block ring-1 ring-inset ring-gray-300 rounded-md mt-2 py-1.5 px-3 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-indigo-600 text-white w-full rounded-md px-4 py-2 mb-8"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default BlogPost;
