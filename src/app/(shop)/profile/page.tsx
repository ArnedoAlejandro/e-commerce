import { auth } from "@/auth.config";
import TitleMenu from "@/components/ui/top-menu/title/TitleMenu";
import { redirect } from "next/navigation";
import React from "react";

const ProfilePage = async () => {
  const sesion = await auth();

  if (!sesion?.user) {
    redirect("/");
  }

  return (
    <div>
      <TitleMenu title="Mi Perfil" subtitle="Informacion personal" />

      <pre>{JSON.stringify(sesion.user, null, 2)}</pre>
      <p>role</p>
      <p>{sesion.user.role}</p>
    </div>
  );
};

export default ProfilePage;
