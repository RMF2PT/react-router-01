type FeedLineProps = {
  post: {
    id: number;
    title: string;
    datetime: string;
    body: string;
  };
};

const FeedLine = ({ post }: FeedLineProps) => {
  return (
    <li key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.datetime}</p>
      <p>{post.body}</p>
    </li>
  );
};
export default FeedLine;
