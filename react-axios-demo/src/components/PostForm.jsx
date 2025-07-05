import { useState } from "react";
import { api } from "../services/api";

export default function PostForm({ onAdd }) {
    const [title, setTitle] = useState("");
    const [body,  setBody]  = useState("");
    const [sending, setSending] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault(); // impede o reload da página
        setSending(true);   // ativa o loading
        
        try {
            const { data: newPost } = await api.post("/posts", {
                title,
                body,
                userId: 1,
            });
            onAdd(newPost); // avisa o App para adicionar na lista
            setTitle("");
            setBody("");
        } catch {
            alert("Erro ao enviar");
        } finally {
            setSending(false);
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <h3>Novo Post</h3>
        <input
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        />
        <textarea
        placeholder="Conteúdo"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
        />
        <button disabled={sending}>
        {sending ? "Enviando..." : "Publicar"}
        </button>
        </form>
    );
}
