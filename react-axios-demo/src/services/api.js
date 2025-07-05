import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // URL base da API
  timeout: 10000, // tempo máximo da requisição: 10 segundos
});
