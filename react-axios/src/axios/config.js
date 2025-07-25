import axios from "axios";

const blogFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
    headers: {
        "Content-Type": "application/json",
    },
});

export default blogFetch;