import { X } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "./button";
import { Movie } from "../types/movie";
import { Genre } from "../types/genre";

type ModalProps = {
  movie: Movie;
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ movie, isOpen, onClose }: ModalProps) {
  const { title, poster_path, overview, vote_average, genre_ids } = movie;

  function getGenre() {
    return genre_ids
      .slice(0, 2)
      .map((genreId) => Genre[genreId])
      .join(", ");
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black bg-opacity-50 fixed inset-0" />
        <Dialog.Content className="fixed bg-white p-4 sm:p-6 rounded-lg shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] sm:w-full max-w-2xl">
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="text-xl font-semibold line-clamp-1">
              {title}
            </Dialog.Title>
            <Dialog.Close asChild>
              <Button>
                <X />
              </Button>
            </Dialog.Close>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <img
              className="col-span-3 md:col-span-1 max-h-70 md:max-h-full w-full h-full object-cover rounded-lg"
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt=""
            />
            <Dialog.Description className="col-span-3 md:col-span-2 text-sm">
              <div className="flex items-center justify-between text-teal-800 mb-2">
                <span>{getGenre()}</span>
                <span>{vote_average.toFixed(1)}</span>
              </div>
              <p className="md:text-base">{overview}</p>
            </Dialog.Description>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
