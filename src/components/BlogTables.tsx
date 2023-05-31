import { FC, useState } from "react";
import { IBlog, PropsBlogs } from "../types/blog.types";
import { useApiDelete } from "../functions/FetchApi";
import { useCookies } from "react-cookie";
import { COOKIES_NAMES } from "../enums/public.enums";
import BlogPostModal from "./BlogPostModal";

const BlogTables: FC<PropsBlogs> = ({ blogs }) => {

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [postData, setPostData] = useState<IBlog | any>()

  const { deleteAPIData } = useApiDelete();
  const [cookies] = useCookies([COOKIES_NAMES.ACCESS_TOKEN]);
  const token = cookies.accessToken;

  const deleteHandler = (id: number) => {
    deleteAPIData(`/blog/delete/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };

  const editHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,post:IBlog) => {
    e.preventDefault();
    setIsEdit(true);
    setPostData(post)
  };

  return (
    <div className=" ">
      <div className="container mx-auto p-6 my-8">
        <div className="rounded overflow-hidden shadow">
          <table className="  w-full table-auto rounded min-w-full">
            <thead className="bg-gray-50 rounded-s">
              <tr>
                <th className="border-b hidden md:table-cell border-gray-300 text-left font-semibold p-4 ps-8 text-gray-800">
                  ID
                </th>
                <th className="border-b hidden md:table-cell border-gray-300 text-left font-semibold p-4 text-gray-800">
                  Blog Author
                </th>
                <th className="border-b hidden md:table-cell border-gray-300 text-left font-semibold p-4 text-gray-800">
                  Blog Title
                </th>
                <th className="border-b md:hidden border-gray-300 text-left font-semibold p-4 text-gray-800">
                  Blog(ID - Author/ Title)
                </th>
                <th className="border-b border-gray-300 text-right font-semibold p-4 text-gray-800">
                  Edit
                </th>
                <th className="border-b border-gray-300 text-right font-semibold p-4 pe-8 text-gray-800">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {blogs.map((post, key) => (
                <tr key={post._id}>
                  <td className="border-b hidden md:table-cell border-gray-300 text-gray-600 p-4 ps-8">
                    {key + 1}
                  </td>
                  <td className="border-b hidden md:table-cell border-gray-300 text-gray-600 p-4">
                    {post.author}
                  </td>
                  <td className="border-b hidden md:table-cell border-gray-300 text-gray-600 p-4">
                    {post.title}
                  </td>
                  <td className="border-b md:hidden  border-gray-300 text-gray-600 p-4">
                    <div>
                      {" "}
                      <span>{key + 1}</span> - {post.author} /
                    </div>

                    <div>{post.title}</div>
                  </td>
                  <td className="border-b border-gray-300 text-green-600 p-4 text-right">
                    <a
                      href=""
                      className="cursor-pointer"
                      onClick={(e) => editHandler(e, post)}
                    >
                      Edit
                    </a>
                  </td>
                  <td className="border-b border-gray-300 text-red-600 p-4 pe-8 text-right ">
                    <a
                      href=""
                      className="cursor-pointer"
                      onClick={() => deleteHandler(post._id)}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isEdit ? <BlogPostModal postData={postData} setShowModal={setIsEdit}/> : null}
    </div>
  );
};

export default BlogTables;
