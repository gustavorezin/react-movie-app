import { api } from "../lib/axios";
import { Movie } from "../types/movie";

export interface IPopularMoviesResponse {
  page: number;
  results: Movie[];
}

export async function getPopularMovies(
  page: number
): Promise<IPopularMoviesResponse | null> {
  try {
    const response = await api.get<IPopularMoviesResponse>(
      `/movie/popular?page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching popular movies", error);
    return null;
  }
}
