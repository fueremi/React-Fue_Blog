import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form>
        <label>
          Blog title: <span>{title}</span>
        </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea required></textarea>
        <label>Blog author:</label>
        <select>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
