import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

export default async function  AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {

  const sesion = await auth()


  if(sesion?.user){
    redirect("/")
  }

  return (
    <div className="bg-emerald-500">
      {children}
    </div>
  );
}