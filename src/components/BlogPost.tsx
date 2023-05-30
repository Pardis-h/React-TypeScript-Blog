import { useEffect, useState } from "react";
import { useApiPost } from "../functions/FetchApi";
import { useCookies } from "react-cookie";
import { COOKIES_NAMES } from "../enums/public.enums";

function BlogPost() {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const { data, postAPIData, error } = useApiPost();

  const [cookies] = useCookies([COOKIES_NAMES.ACCESS_TOKEN]);
  const token = cookies.accessToken;
  const postBlogHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postAPIData(
      "/blog",
      { title, text, image, author },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
  };
  useEffect(() => {
    console.log(data);
    if (error) console.log(error);
  }, [data]);
  return (
    <>
      <div className="mb-10">
        <form action="" onSubmit={postBlogHandler}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="text">Text</label>
            <input
              type="text"
              name="text"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="image">Image</label>
            <input
              type="text"
              name="image"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <input
              type="text"
              name="author"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default BlogPost;
