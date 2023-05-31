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
        <div className="text-center py-32">
          <h1 className=" font-bold text-4xl mb-4">Please Login</h1>
        </div>
      )}
    </>
  );
}

export default PostBlog;
