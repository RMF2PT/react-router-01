import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import EditPost from "./components/EditPost";
import About from "./components/About";
import MissingPage from "./components/MissingPage";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import api from "./api/posts";
import { AxiosError } from "axios";

type Post = {
  id: number;
  title: string;
  datetime: string;
  body: string;
};

function App() {
  const [posts, setPosts] = useState([] as Post[]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([] as typeof posts);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (err) {
        const error = err as AxiosError;
        if (error.response) {
          // Not in the 200 response range
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log(error);
        }
      }
    };
    getPosts();
  }, []);

  useEffect(() => {
    const results = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(results.reverse());
  }, [search, posts]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPost = {
      id: posts.length + 1,
      title: postTitle,
      datetime: new Date().toLocaleString(),
      body: postBody,
    };
    try {
      const response = await api.post("/posts", newPost);
      setPosts([...posts, response.data]);
      setPostTitle("");
      setPostBody("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id: number) => {
    const editedPost = {
      id: id,
      title: editTitle,
      datetime: new Date().toLocaleString(),
      body: editBody,
    };
    try {
      const response = await api.put(`/posts/${id}`, editedPost);
      setPosts(posts.map((post) => (post.id === id ? response.data : post)));
      setEditTitle("");
      setEditBody("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/posts/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
          path="/edit/:id"
          element={
            <EditPost
              posts={posts}
              handleEdit={handleEdit}
              editTitle={editTitle}
              setEditTitle={setEditTitle}
              editBody={editBody}
              setEditBody={setEditBody}
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
