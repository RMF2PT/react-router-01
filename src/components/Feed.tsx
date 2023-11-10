import Post from "./Post";

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
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default Feed;
