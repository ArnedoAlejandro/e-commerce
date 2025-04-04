"use client";
import { useUIStore } from "@/store";
import clsx from "clsx";
import Link from "next/link";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

const Sidebar = () => {
  const isSideOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);

  return (
    <div className="overflow-auto">
      {isSideOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30 " />
      )}

      {isSideOpen && (
        <div
          onClick={() => closeMenu()}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
        />
      )}

      {/* SideMenu */}
      <nav
        className={
          // CLSX es una libreria de tailwind que nos permite concatenar clases en una sola clase
          clsx(
            "overflow-auto fixed p-5 right-0 top-0 w-[350px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300 max-md:w-full",
            {
              "translate-x-full": !isSideOpen,
            }
          )
        }
      >
        <IoCloseOutline
          size={30}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => closeMenu()}
        />

        <div className="relative mt-14">
          <IoSearchOutline className="absolute top-3 left-3" />
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full bg-gray-50 border-b border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-b-gray-600   p-2.5 pl-10"
          />
        </div>

        <Link
          href={"/"}
          className="flex items-center mt-10 p-2 rounded-md hover:bg-gray-200 transition-all duration-300"
        >
          <IoPersonOutline size={30} />
          <span className="ml-3 text-lg">Perfil</span>
        </Link>

        <Link
          href={"/"}
          className="flex items-center mt-10 p-2 rounded-md hover:bg-gray-200 transition-all duration-300"
        >
          <IoTicketOutline size={30} />
          <span className="ml-3 text-lg">Ordenes</span>
        </Link>

        <Link
          href={"/"}
          className="flex items-center mt-10 p-2 rounded-md hover:bg-gray-200 transition-all duration-300"
        >
          <IoLogInOutline size={30} />
          <span className="ml-3 text-lg">Ingresar</span>
        </Link>

        <Link
          href={"/"}
          className="flex items-center mt-10 p-2 rounded-md hover:bg-gray-200 transition-all duration-300"
        >
          <IoLogOutOutline size={30} />
          <span className="ml-3 text-lg">Salir</span>
        </Link>

        <div className="w-full h-px bg-gray-300 my-10" />

        <Link
          href={"/"}
          className="flex items-center mt-10 p-2 rounded-md hover:bg-gray-200 transition-all duration-300"
        >
          <IoShirtOutline size={30} />
          <span className="ml-3 text-lg">Productos</span>
        </Link>

        <Link
          href={"/"}
          className="flex items-center mt-10 p-2 rounded-md hover:bg-gray-200 transition-all duration-300"
        >
          <IoTicketOutline size={30} />
          <span className="ml-3 text-lg">Ordenes</span>
        </Link>

        <Link
          href={"/"}
          className="flex items-center mt-10 p-2 rounded-md hover:bg-gray-200 transition-all duration-300"
        >
          <IoPeopleOutline size={30} />
          <span className="ml-3 text-lg">Usuarios</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
