import { useHistory, useParams } from "react-router";
import useFetch from "../hooks/useFetch";

const Blogs = () => {
  const history = useHistory();
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    messageError,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isLoading && <div> Loading ... </div>}
      {messageError && <div> {messageError} </div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default Blogs;
