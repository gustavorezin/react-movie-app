import { api } from "../lib/axios";

export async function getPopularMovies() {
  try {
    const response = await api.get("/movie/popular");
    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular movies", error);
    return [];
  }
}
