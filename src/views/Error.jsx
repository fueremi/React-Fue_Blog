import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>That page cannot be foud</p>
      <Link to="/">Back to homepage ...</Link>
    </div>
  );
};

export default Error;
