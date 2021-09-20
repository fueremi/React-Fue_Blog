import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";

const Blogs = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    messageError,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  return (
    <div className="blog-details">
      {isLoading && <div> Loading ... </div>}
      {messageError && <div> {messageError} </div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default Blogs;
