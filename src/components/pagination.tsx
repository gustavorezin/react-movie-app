import {
  ArrowLeft,
  ArrowLineLeft,
  ArrowLineRight,
  ArrowRight,
} from "@phosphor-icons/react";
import { Button } from "./button";

type PaginationProps = {
  page: number;
  onPageChanged: (pageIndex: number) => void;
};

export function Pagination({ page, onPageChanged }: PaginationProps) {
  return (
    <div className="flex items-center justify-between gap-6 lg:gap-8">
      <p className="text-sm text-gray-500">
        Página <span className="font-semibold">{page}</span> de{" "}
        <span className="font-semibold">15</span>
      </p>
      <div className="flex gap-1">
        <Button disabled={page === 1} onClick={() => onPageChanged(1)}>
          <ArrowLineLeft />
        </Button>
        <Button disabled={page === 1} onClick={() => onPageChanged(page - 1)}>
          <ArrowLeft />
        </Button>
        <Button disabled={page === 15} onClick={() => onPageChanged(page + 1)}>
          <ArrowRight />
        </Button>
        <Button disabled={page === 15} onClick={() => onPageChanged(15)}>
          <ArrowLineRight />
        </Button>
      </div>
    </div>
  );
}
