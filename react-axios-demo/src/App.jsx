import { useState, useCallback } from "react";
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";

export default function App() {
  const [posts, setPosts] = useState([]);
  
  const addPost = useCallback(
    (post) => setPosts((old) => [post, ...old]),
    []
  );
  
  return (
    <main>
    <h1>Teste React com Axios para o Hackathon</h1>
    <PostForm onAdd={addPost} />
    {/* PostsList gerencia seu próprio fetch inicialmente,
      mas recebe posts se houver novos envios */}
      <PostsList extraPosts={posts} />
      </main>
    );
  }
  