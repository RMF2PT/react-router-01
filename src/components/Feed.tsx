import FeedLine from "./FeedLine";

type FeedProps = {
  posts: {
    id: number;
    title: string;
    datetime: string;
    body: string;
  }[];
};

const Feed = ({ posts }: FeedProps) => {
  return (
    <ul className="posts">
      {posts.map((post) => (
        <FeedLine key={post.id} post={post} />
      ))}
    </ul>
  );
};
export default Feed;
