const Blog = ({ blog }) => {
  return (
    <div className="blog-preview" key={blog.id}>
      <h2>{blog.title}</h2>
      <p>
        Written by <span>{blog.author}</span>
      </p>
    </div>
  );
};

export default Blog;
