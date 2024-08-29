import { useEffect, useState } from "react";
import { MovieCard } from "../components/movie-card";
import { Pagination } from "../components/pagination";
import { getPopularMovies } from "../services/get-popular-movies";
import { Movie } from "../types/movie";

export function PopularMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(1);

  const fetchMovies = async () => {
    const response = await getPopularMovies(page);
    if (response) {
      setMovies(response.results);
    }
  };

  function handleOpenModal() {
    alert("clicou");
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="max-w-7xl mx-auto my-10 px-6">
      <header className="flex flex-col items-center leading-10">
        <h1 className="text-3xl font-semibold">Popular Movies</h1>
        <p className="text-base text-gray-500 text-center">
          Find out what's trending in the world of cinema.
        </p>
      </header>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 mt-10">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            handleOpenModal={handleOpenModal}
          />
        ))}
      </section>
      <footer className="mt-10">
        <Pagination page={page} onPageChanged={setPage} />
      </footer>
    </div>
  );
}
