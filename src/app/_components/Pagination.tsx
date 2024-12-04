"use client";

import React from "react";
import { Pagination } from "@nextui-org/pagination";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  total: number;
}

const PagingComponent = ({ total }: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (newPage: number) => {
    const currentSize = searchParams.get("size") || "20";
    router.push(`?page=${newPage}&size=${currentSize}`);
  };

  return (
    <div>
      <Pagination
        total={total}
        initialPage={Number(searchParams.get("page") || 1)}
        onChange={(page) => handlePageChange(page)}
      />
    </div>
  );
};

export default PagingComponent;
