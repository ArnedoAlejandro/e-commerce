import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

export default async  function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const sesion = await auth();
  if(!sesion?.user){
    redirect("/auth/login?redirectTo=/checkout/adress")
  }

  return <>{children}</>
}
