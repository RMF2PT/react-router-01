import { Link } from "react-router-dom";

type PostProps = {
  post: {
    id: number;
    title: string;
    datetime: string;
    body: string;
  };
};

const Post = ({ post }: PostProps) => {
  return (
    <article key={post.id} className="post">
      <Link to={`/posts/${post.id}`} className="postLink">
        <h2>{post.title}</h2>
        <p className="postDate">{post.datetime}</p>
      </Link>
      <p className="postBody">
        {post.body.length < 25 ? post.body : `${post.body.slice(0, 25)}...`}
      </p>
    </article>
  );
};
export default Post;
