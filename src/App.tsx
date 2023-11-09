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
      body: "A router for React",
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
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <Header title="React Router" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/new" element={<NewPost />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<MissingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
