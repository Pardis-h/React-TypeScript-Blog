import { useApiPut } from "../functions/FetchApi";
import { useCookies } from "react-cookie";
import { COOKIES_NAMES } from "../enums/public.enums";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { IBlog } from "../types/blog.types";

interface IProp {
  postData: IBlog | any;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}
const BlogPostModal: FC<IProp> = ({ postData, setShowModal }) => {
  const { putAPIData } = useApiPut();
  const [cookies] = useCookies([COOKIES_NAMES.ACCESS_TOKEN]);
  const token = cookies.accessToken;

  const [title, setTitle] = useState<string>(postData.title);
  const [text, setText] = useState<string>(postData.text);
  const [image, setImage] = useState<string>(postData.image);
  const [author, setAuthor] = useState<string>(postData.author);
  const [avatar, setAvatar] = useState<string | undefined>(postData.authorDetails?.avatar);
  const [role, setRole] = useState<string | undefined>(postData.authorDetails?.role);
  const [category, setCategory] = useState<string | undefined>(postData.category?.title);
  const [date, setDate] = useState<string | undefined>(postData.date);

  const postBlogHandler = (
    e: React.FormEvent<HTMLFormElement>,
    postId: number
  ) => {
    e.preventDefault();
    putAPIData(
      `/blog/update/${postId}`,
      {
        _id: postId,
        title,
        text,
        author,
        image,
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
    setShowModal(false);
    window.location.reload();
    // console.log(data, status, error);
  };

  return (
    <div className=" z-10 fixed inset-0 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-gray-500 bg-opacity-75 transition-opacity"
        onClick={() => setShowModal(false)}
      ></div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-xl p-6 sm:w-full max-w-lg z-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            Edit Post
          </h2>
          <form
            action=""
            onSubmit={(e) => postBlogHandler(e, postData._id)}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="title"
                className="text-gray-600 text-sm leading-5"
              >
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
              <label
                htmlFor="image"
                className="text-gray-600 text-sm leading-5"
              >
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
                  // required
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
                  // required
                  onChange={(e) => setAvatar(e.target.value)}
                  className="border-0 shadow-sm w-full block ring-1 ring-inset ring-gray-300 rounded-md mt-2 py-1.5 px-3 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600"
                />
              </div>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="flex-1 ">
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
                  // required
                  onChange={(e) => setCategory(e.target.value)}
                  className="border-0 shadow-sm w-full block ring-1 ring-inset ring-gray-300 rounded-md mt-2 py-1.5 px-3 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600"
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="text-gray-600 text-sm leading-5"
                >
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
      </div>
    </div>
  );
};

export default BlogPostModal;
