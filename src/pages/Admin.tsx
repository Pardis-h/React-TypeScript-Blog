import { useEffect, useState } from "react";
import { IBlog } from "../types/blog.types";
import BlogTables from "../components/BlogTables";
import { useApiGet } from "../functions/FetchApi";
import { useCookies } from "react-cookie";
import { COOKIES_NAMES } from "../enums/public.enums";

function Admin() {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const { data, error, getAPIData, status } = useApiGet();
  const [cookies] = useCookies([COOKIES_NAMES.ACCESS_TOKEN]);
  const token = cookies.accessToken;

  useEffect(() => {
    getAPIData("/blog", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    setBlogs(data?.data?.blogs || []);
    // console.log(data?.data?.blogs);
    // if (error) console.log(error);
  }, [status]);

  return (
    <>
      {token ? (
        <BlogTables blogs={blogs} />
      ) : (
        <div className="text-center py-32">
          <h1 className=" font-bold text-4xl mb-4">Please Login</h1>
          <p className="text-red-500 text-xs">{error && `Error :  ${error}`}</p>
        </div>
      )}
    </>
  );
}

export default Admin;
