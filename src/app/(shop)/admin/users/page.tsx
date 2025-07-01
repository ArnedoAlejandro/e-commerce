export const revalidate = 0 
import TitleMenu from "@/components/ui/top-menu/title/TitleMenu";
import {  getPaginatedUser, getUserByName } from "@/actions";
import { redirect } from "next/navigation";
import SearchUserByName from "@/components/users/SearchUserByName";
import UsersTable from "./ui/UsersTable";
import Pagination from "@/components/ui/pagination/Pagination";



export default async function UsersPage({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; page?: string }>;
}) {
  const { name = "", page = "1" } = await searchParams;
  const pageNumber = Number(page);
  const response = name
    ? await getUserByName(name)
    : await getPaginatedUser(pageNumber);

  const { ok, users = [], totalPages = 3 } = response;

  if (!ok) redirect("/auth/login");

  return (
    <>
      <div className="flex justify-between items-center mt-5">
        <TitleMenu title="Mantenimiento de usuario" />
        <SearchUserByName />
      </div>
      <div className="mb-10 mt-9">
        <UsersTable users={users} />
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}