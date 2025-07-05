import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function PostsList() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    
    useEffect(() => {
        fetchPosts(page);
    }, [page]);
    
    async function fetchPosts(pageNumber) {
        setLoading(true);
        try {
            const { data } = await api.get(`/posts?_limit=5&_page=${pageNumber}`);
            if (data.length === 0) {
                setHasMore(false); // Não há mais posts
            } else {
                setPosts((prev) => [...prev, ...data]);
            }
        } catch (error) {
            console.error("Erro ao buscar posts:", error);
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <div>
        <ul>
        {posts.map((p) => (
            <li key={p.id}>
            <strong>{p.title}</strong>
            <p>{p.body}</p>
            </li>
        ))}
        </ul>
        
        {hasMore && (
            <button onClick={() => setPage(page + 1)} disabled={loading}>
            {loading ? "Carregando..." : "Carregar mais"}
            </button>
        )}
        </div>
    );
}
