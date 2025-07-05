import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../styles/Home.css';
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(response.data); // Agora sim, um array de posts
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className='home'>
      <h1>Últimos Posts</h1>
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={'/posts/${post.id}'} className='btn'>Ler mais</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
