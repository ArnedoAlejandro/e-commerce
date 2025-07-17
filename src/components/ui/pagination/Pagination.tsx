"use client";

import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { generatePaginationNumber } from "@/utils";
import clsx from "clsx";
import Link from "next/link";

interface Props {
  totalPages: number;
  currentPage?: number; // opcional para modo "server-side"
  useLink?: boolean; // nuevo: indica si usa <Link> (SSR) o <button> (SPA)
}

const Pagination = ({ totalPages, currentPage = 1, useLink = false }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const allPages = generatePaginationNumber(currentPage, totalPages);

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    return `${pathname}?${params.toString()}`;
  };

  const handlePageChange = (page: number) => {
    const url = createPageUrl(page);
    router.push(url);
  };

  return (
    <div className="flex justify-center items-center mt-10 mb-32">
      <ul className="flex list-style-none items-center">
        <li>
          {useLink ? (
            <Link
              href={createPageUrl(currentPage - 1)}
              className="py-1.5 px-3 text-gray-800 hover:bg-gray-200"
              aria-disabled={currentPage === 1}
            >
              <IoChevronBackOutline size={30} />
            </Link>
          ) : (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="py-1.5 px-3 text-gray-800 hover:bg-gray-200 disabled:opacity-50"
            >
              <IoChevronBackOutline size={30} />
            </button>
          )}
        </li>

        {allPages.map((page, idx) => (
          <li key={idx}>
            {page === "..." ? (
              <span className="px-3">...</span>
            ) : useLink ? (
              <Link
                href={createPageUrl(Number(page))}
                className={clsx(
                  "py-1.5 px-3 transition-all text-gray-800 hover:font-semibold",
                  {
                    "bg-black/90 text-white shadow-md hover:bg-black/70":
                      page === currentPage,
                  }
                )}
              >
                {page}
              </Link>
            ) : (
              <button
                onClick={() => handlePageChange(Number(page))}
                className={clsx(
                  "py-1.5 px-3 transition-all text-gray-800 hover:font-semibold",
                  {
                    "bg-black/90 text-white shadow-md hover:bg-black/70":
                      page === currentPage,
                  }
                )}
              >
                {page}
              </button>
            )}
          </li>
        ))}

        <li>
          {useLink ? (
            <Link
              href={createPageUrl(currentPage + 1)}
              className="py-1.5 px-3 text-gray-800 hover:bg-gray-200"
              aria-disabled={currentPage === totalPages}
            >
              <IoChevronForwardOutline size={30} />
            </Link>
          ) : (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="py-1.5 px-3 text-gray-800 hover:bg-gray-200 disabled:opacity-50"
            >
              <IoChevronForwardOutline size={30} />
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
