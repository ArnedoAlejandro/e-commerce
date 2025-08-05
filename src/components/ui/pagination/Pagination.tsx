"use client";

import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { generatePaginationNumber } from "@/utils";
import clsx from "clsx";
import Link from "next/link";

interface Props {
  totalPages: number;
  currentPage?: number; // modo SSR
  useLink?: boolean;    // SSR: <Link> / SPA: <button>
}

const Pagination = ({ totalPages, currentPage = 1, useLink = false }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  // No muestres nada si no hay más de 1 página
  if (!totalPages || totalPages <= 1) return null;

  const safeCurrent = Math.min(Math.max(1, currentPage), totalPages);
  const prevPage = Math.max(1, safeCurrent - 1);
  const nextPage = Math.min(totalPages, safeCurrent + 1);
  const allPages = generatePaginationNumber(safeCurrent, totalPages);

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    return `${pathname}?${params.toString()}`;
  };

  const handlePageChange = (page: number) => {
    router.push(createPageUrl(page));
  };

  const PageBadge = ({
    page,
    isActive,
  }: {
    page: number;
    isActive: boolean;
  }) =>
    useLink ? (
      isActive ? (
        <span
          aria-current="page"
          className="py-1.5 px-3 bg-black/90 text-white shadow-md"
        >
          {page}
        </span>
      ) : (
        <Link
          href={createPageUrl(page)}
          className={clsx(
            "py-1.5 px-3 transition-all text-gray-800 hover:font-semibold"
          )}
        >
          {page}
        </Link>
      )
    ) : (
      <button
        onClick={() => !isActive && handlePageChange(page)}
        disabled={isActive}
        className={clsx(
          "py-1.5 px-3 transition-all text-gray-800 hover:font-semibold disabled:cursor-default",
          { "bg-black/90 text-white shadow-md hover:bg-black/70": isActive }
        )}
      >
        {page}
      </button>
    );

  return (
    <div className="flex justify-center items-center mt-10 mb-32">
      <ul className="flex list-style-none items-center gap-1">
        {/* Prev */}
        <li>
          {useLink ? (
            safeCurrent === 1 ? (
              <span className="py-1.5 px-3 opacity-50 cursor-not-allowed">
                <IoChevronBackOutline size={30} />
              </span>
            ) : (
              <Link
                href={createPageUrl(prevPage)}
                className="py-1.5 px-3 text-gray-800 hover:bg-gray-200"
              >
                <IoChevronBackOutline size={30} />
              </Link>
            )
          ) : (
            <button
              onClick={() => handlePageChange(prevPage)}
              disabled={safeCurrent === 1}
              className="py-1.5 px-3 text-gray-800 hover:bg-gray-200 disabled:opacity-50"
            >
              <IoChevronBackOutline size={30} />
            </button>
          )}
        </li>

        {/* Pages */}
        {allPages.map((p, idx) => (
          <li key={idx}>
            {p === "..." ? (
              <span className="px-3">…</span>
            ) : (
              <PageBadge page={Number(p)} isActive={Number(p) === safeCurrent} />
            )}
          </li>
        ))}

        {/* Next */}
        <li>
          {useLink ? (
            safeCurrent === totalPages ? (
              <span className="py-1.5 px-3 opacity-50 cursor-not-allowed">
                <IoChevronForwardOutline size={30} />
              </span>
            ) : (
              <Link
                href={createPageUrl(nextPage)}
                className="py-1.5 px-3 text-gray-800 hover:bg-gray-200"
              >
                <IoChevronForwardOutline size={30} />
              </Link>
            )
          ) : (
            <button
              onClick={() => handlePageChange(nextPage)}
              disabled={safeCurrent === totalPages}
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

// interface Props {
//   totalPages: number;
//   currentPage?: number; // opcional para modo "server-side"
//   useLink?: boolean; // nuevo: indica si usa <Link> (SSR) o <button> (SPA)
// }

// const Pagination = ({ totalPages, currentPage = 1, useLink = false }: Props) => {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const allPages = generatePaginationNumber(currentPage, totalPages);

//   const createPageUrl = (page: number) => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set("page", page.toString());
//     return `${pathname}?${params.toString()}`;
//   };

//   const handlePageChange = (page: number) => {
//     const url = createPageUrl(page);
//     router.push(url);
//   };

//   return (
//     <div className="flex justify-center items-center mt-10 mb-32">
//       <ul className="flex list-style-none items-center">
//         <li>
//           {useLink ? (
//             <Link
//               href={createPageUrl(currentPage - 1)}
//               className="py-1.5 px-3 text-gray-800 hover:bg-gray-200"
//               aria-disabled={currentPage === 1}
//             >
//               <IoChevronBackOutline size={30} />
//             </Link>
//           ) : (
//             <button
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//               className="py-1.5 px-3 text-gray-800 hover:bg-gray-200 disabled:opacity-50"
//             >
//               <IoChevronBackOutline size={30} />
//             </button>
//           )}
//         </li>

//         {allPages.map((page, idx) => (
//           <li key={idx}>
//             {page === "..." ? (
//               <span className="px-3">...</span>
//             ) : useLink ? (
//               <Link
//                 href={createPageUrl(Number(page))}
//                 className={clsx(
//                   "py-1.5 px-3 transition-all text-gray-800 hover:font-semibold",
//                   {
//                     "bg-black/90 text-white shadow-md hover:bg-black/70":
//                       page === currentPage,
//                   }
//                 )}
//               >
//                 {page}
//               </Link>
//             ) : (
//               <button
//                 onClick={() => handlePageChange(Number(page))}
//                 className={clsx(
//                   "py-1.5 px-3 transition-all text-gray-800 hover:font-semibold",
//                   {
//                     "bg-black/90 text-white shadow-md hover:bg-black/70":
//                       page === currentPage,
//                   }
//                 )}
//               >
//                 {page}
//               </button>
//             )}
//           </li>
//         ))}

//         <li>
//           {useLink ? (
//             <Link
//               href={createPageUrl(currentPage + 1)}
//               className="py-1.5 px-3 text-gray-800 hover:bg-gray-200"
//               aria-disabled={currentPage === totalPages}
//             >
//               <IoChevronForwardOutline size={30} />
//             </Link>
//           ) : (
//             <button
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               className="py-1.5 px-3 text-gray-800 hover:bg-gray-200 disabled:opacity-50"
//             >
//               <IoChevronForwardOutline size={30} />
//             </button>
//           )}
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Pagination;
