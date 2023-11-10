import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import About from "./components/About";
import MissingPage from "./components/MissingPage";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "React Router",
      datetime: "2023-01-01 10:00:00",
      body: "A router for React lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      title: "React Router Dom",
      datetime: "2023-01-09 10:00:00",
      body: "A router for React",
    },
    {
      id: 3,
      title: "React Router Dom Routes",
      datetime: "2023-06-01 10:00:00",
      body: "A router for React",
    },
  ]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([] as typeof posts);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const results = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(results.reverse());
  }, [search, posts]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPost = {
      id: posts.length + 1,
      title: postTitle,
      datetime: new Date().toLocaleString(),
      body: postBody,
    };
    setPosts([...posts, newPost]);
    setPostTitle("");
    setPostBody("");
    navigate("/");
  };

  const handleDelete = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
    navigate("/");
  };

  return (
    <>
      <Header title="React Router" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home posts={searchResults} />} />
        <Route
          path="/new"
          element={
            <NewPost
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
            />
          }
        />
        <Route
          path="/posts/:id"
          element={<PostPage posts={posts} handleDelete={handleDelete} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<MissingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
