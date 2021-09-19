import useFetch from "../useFetch";
import { Blogs } from "./";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    messageError,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {isLoading && <div>Loading ...</div>}
      {messageError && <div>{messageError}</div>}
      {blogs && <Blogs blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
