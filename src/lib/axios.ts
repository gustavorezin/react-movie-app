import axios from "axios";

const apiUrl = import.meta.env.VITE_TMDB_API_URL;
const apiToken = import.meta.env.VITE_TMDB_API_TOKEN;

export const api = axios.create({
  baseURL: apiUrl,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${apiToken}`,
  },
});
