import { useParams, Link } from "react-router-dom";

type PostPageProps = {
  posts: {
    id: number;
    title: string;
    datetime: string;
    body: string;
  }[];
  handleDelete: (id: number) => void;
};

const PostPage = ({ posts, handleDelete }: PostPageProps) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));

  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <button onClick={() => handleDelete(post.id)}>Delete Post</button>
          </>
        )}
        {!post && (
          <>
            <p>Post not found</p>
            <Link to="/">Return home</Link>
          </>
        )}
      </article>
    </main>
  );
};
export default PostPage;
