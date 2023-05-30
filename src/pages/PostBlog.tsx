import { useCookies } from "react-cookie";
import BlogPost from "../components/BlogPost";
import { COOKIES_NAMES } from "../enums/public.enums";

function PostBlog() {
  const [cookies] = useCookies([COOKIES_NAMES.ACCESS_TOKEN]);
  const token = cookies.accessToken;
  return (
    <>
      {token ? (
        <BlogPost />
      ) : (
        <h1 className="text-center font-bold text-4xl">Unauthorized</h1>
      )}
    </>
  );
}

export default PostBlog;
