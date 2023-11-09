import Feed from "./Feed";

type HomeProps = {
  posts: {
    id: number;
    title: string;
    datetime: string;
    body: string;
  }[];
};

const Home = ({ posts }: HomeProps) => {
  return (
    <main className="Home">
      {posts.length > 0 ? <Feed posts={posts} /> : <p>No posts found</p>}
    </main>
  );
};
export default Home;
