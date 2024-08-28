import { Genre } from "../types/genre";
import { Movie } from "../types/movie";

type MovieCardProps = {
  movie: Movie;
  handleOpenModal: () => void;
};

export function MovieCard({ movie, handleOpenModal }: MovieCardProps) {
  const { title, poster_path, overview, vote_average, genre_ids } = movie;

  function getGenre() {
    return genre_ids
      .slice(0, 2)
      .map((genreId) => Genre[genreId])
      .join(", ");
  }

  function getBorderByAverage() {
    if (vote_average >= 7.5) {
      return "bg-gradient-to-t from-green-400 to-green-600";
    } else if (vote_average >= 5.5) {
      return "bg-gradient-to-t from-yellow-400 to-orange-500";
    } else {
      return "bg-gradient-to-t from-red-400 to-red-600";
    }
  }

  return (
    <div
      className="border rounded-lg overflow-hidden shadow-md hover:shadow-2xl hover:cursor-pointer hover:scale-105 transition duration-700 ease-in-out"
      onClick={handleOpenModal}
    >
      <img
        className="w-full min-h-60 md:min-h-80 object-cover"
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
      />
      <div className="p-2 md:p-4 text-left relative">
        <div className="flex justify-between items-center gap-1">
          <div>
            <h3 className="line-clamp-1 font-bold leading-4 text-sm md:text-base">
              {title}
            </h3>
            <span className="text-teal-800 text-xs md:text-sm">
              {getGenre()}
            </span>
          </div>
          <div
            className={`flex items-center justify-center p-1.5 md:p-2 rounded-full ${getBorderByAverage()}`}
          >
            <span className="text-white font-semibold text-xs md:text-base">
              {vote_average.toFixed(1)}
            </span>
          </div>
        </div>
        <p className="text-xs md:text-sm line-clamp-1 md:line-clamp-3 mt-2 text-gray-500">
          {overview}
        </p>
      </div>
    </div>
  );
}
