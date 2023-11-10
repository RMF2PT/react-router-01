import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

type EditPostProps = {
  posts: {
    id: number;
    title: string;
    datetime: string;
    body: string;
  }[];
  handleEdit: (id: number) => void;
  editTitle: string;
  editBody: string;
  setEditTitle: (title: string) => void;
  setEditBody: (body: string) => void;
};

const EditPost = ({
  posts,
  handleEdit,
  editTitle,
  editBody,
  setEditTitle,
  setEditBody,
}: EditPostProps) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  return (
    <main className="NewPost">
      {post && (
        <>
          <h2>Edit Post</h2>
          <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="postTitle">Title:</label>
            <input
              type="text"
              id="postTitle"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="postBody">Post:</label>
            <textarea
              id="postBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button onClick={() => handleEdit(post.id)}>Submit</button>
          </form>
        </>
      )}
      {!post && (
        <>
          <p>Post not found</p>
          <Link to="/">Return home</Link>
        </>
      )}
    </main>
  );
};
export default EditPost;
