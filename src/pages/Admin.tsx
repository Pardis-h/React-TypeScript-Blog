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
    console.log(data?.data?.blogs);
    if (error) console.log(error);
  }, [status]);

  return (
    <>
      {token ? (
          <BlogTables blogs={blogs} />
      ) : (
        <h1 className="text-center font-bold text-4xl">{error && error}</h1>
      )}
    </>
  );
}

export default Admin;
