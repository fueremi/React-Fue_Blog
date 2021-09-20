import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  return (
    <div className="blog-preview" key={blog.id}>
      <Link to={`blogs/${blog.id}`}>
        <h2>{blog.title}</h2>
        <p>
          Written by <span>{blog.author}</span>
        </p>
      </Link>
    </div>
  );
};

export default Blog;
