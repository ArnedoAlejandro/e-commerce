import { TopMenu } from "@/components";
import Footer from "@/components/ui/footer/Footer";
import Sidebar from "@/components/ui/sidebar/Sidebar";


export default function  ShopLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <TopMenu/>
      <Sidebar/>
      <div className="px-6 max-md:px-1 ">
        {children}
      </div>
      <Footer/>
    </div>
  );
}