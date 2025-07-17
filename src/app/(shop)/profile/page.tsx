import { auth } from "@/auth.config";
import Image from "next/image";
import { titleFont } from "@/config/fonts";
import { redirect } from "next/navigation";
import React from "react";

const ProfilePage = async () => {
  const sesion = await auth();

  if (!sesion?.user) {
    redirect("/");
  }

  return (
    <div className="h-screen">
      <div className="max-w-xl mx-auto mt-12 bg-white shadow-xl rounded-xl p-6 border border-gray-200">
        <p
          className={`${titleFont.className} text-4xl font-extrabold text-center text-gray-800`}
        >
          Mi Perfil
        </p>
        <p className={`${titleFont.className} text-lg mt-3 text-center max-md:px-2 `}>Información personal</p>

        <div className="mt-8 flex flex-col md:flex-row items-center gap-6">
          {/* Avatar */}
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-gray-300">
            <Image
              width={112}
              height={112}
              src={sesion.user.image ?? "/imgs/person.png"}
              alt="Imagen de perfil"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Info */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-gray-800">
              Nombre: <span className="font-normal">{sesion.user.name}</span>
            </p>
            <p className="text-lg font-semibold text-gray-800 mt-1">
              Email: <span className="font-normal">{sesion.user.email}</span>
            </p>
            <p className="text-lg font-semibold text-gray-800 mt-1">
              Rol:{" "}
              <span className="font-normal capitalize">{sesion.user.role}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
