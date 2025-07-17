export const dynamic = "force-dynamic";
import { IoCardOutline } from "react-icons/io5";
import { redirect } from "next/navigation";
import { getPaginatedOrders, getOrdersByName } from "@/actions";
import Link from "next/link";
import TitleMenu from "@/components/ui/top-menu/title/TitleMenu";
import SearchOrderByName from "@/components/orders/SearchOrderByName";
import Pagination from "@/components/ui/pagination/Pagination";

export default async function OrdersPage({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; page?: string }>;
}) {
  const { name = "", page: pageStr = "1" } = await searchParams;
  const page = Number(pageStr);

  const { ok, orders = [], totalPages = 1 } = name
    ? await getOrdersByName(name)
    : await getPaginatedOrders({ page });

  if (!ok) redirect("/auth/login");

  return (
    <>
      <div className="flex justify-between items-center mt-5">
        <TitleMenu title="Todas las ordenes" />
        <SearchOrderByName />
      </div>

      <div className="mb-10 mt-9">
        <table className="min-w-full">
          <thead className="bg-gray-200 border-b">
            <tr>
              <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">#ID</th>
              <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Nombre completo</th>
              <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Estado</th>
              <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr key={order.id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {order.id.split("-").at(1)}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {order.OrderAddress?.firstName} {order.OrderAddress?.lastName}
                </td>
                <td className="flex items-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <IoCardOutline className={order.isPaid ? "text-green-800" : "text-red-800"} />
                  <span className={`mx-2 ${order.isPaid ? "text-green-800" : "text-red-800"}`}>
                    {order.isPaid ? "Pagada" : "No Pagada"}
                  </span>
                </td>
                <td className="text-sm text-gray-900 font-light px-6">
                  <Link href={`/orders/${order.id}`} className="hover:underline">
                    Ver orden
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination
          totalPages={totalPages}
          currentPage={page}
          useLink={true}
        />
      </div>
    </>
  );
}