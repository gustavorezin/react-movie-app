import {
  ArrowLeft,
  ArrowLineLeft,
  ArrowLineRight,
  ArrowRight,
} from "@phosphor-icons/react";
import { Button } from "./button";

type PaginationProps = {
  page: number;
  total_pages: number;
  total_results: number;
  onPageChanged: (pageIndex: number) => void;
};

export function Pagination({
  page,
  total_pages,
  total_results,
  onPageChanged,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-sm text-gray-500">
        Total de <span className="font-semibold">{total_results}</span> item(s)
      </p>
      <div className="flex items-center gap-6 lg:gap-8">
        <p className="text-sm text-gray-500">
          Página <span className="font-semibold">{page}</span> de{" "}
          <span className="font-semibold">{total_pages}</span>
        </p>
        <div className="flex gap-1">
          <Button disabled={page === 1} onClick={() => onPageChanged(1)}>
            <ArrowLineLeft />
          </Button>
          <Button disabled={page === 1} onClick={() => onPageChanged(page - 1)}>
            <ArrowLeft />
          </Button>
          <Button
            disabled={page === total_pages}
            onClick={() => onPageChanged(page + 1)}
          >
            <ArrowRight />
          </Button>
          <Button
            disabled={page === total_pages}
            onClick={() => onPageChanged(total_pages)}
          >
            <ArrowLineRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
