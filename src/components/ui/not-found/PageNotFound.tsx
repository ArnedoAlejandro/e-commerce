import Link from "next/link";
import notFound from "../../../../public/errors/notFound.png";
import Image from "next/image";
import { titleFont } from "@/config/fonts";

export default function PageNotFound() {
  return (
    <div className="h-screen w-full  flex justify-center items-center  gap-5 text-gray-800 max:md:text-center max-md:px-4 max-md:flex-col max-md:pb-5 max-md:h-auto">
      <div className="">
        <Image src={notFound} alt="404" width={500} height={500} />
      </div>

      <div className=" flex flex-col justify-center items-center gap-5">
        <h2 className={`${titleFont.className} text-4xl font-extrabold`}>
          Not Found <span className=" text-5xl max-md:text-4xl"> 404 </span>
        </h2>

        <p
          className={`${titleFont.className} text-2xl font-extrabold text-center max-md:text-xl `}
        >
          La página que buscas no existe
        </p>

        <Link
          href="/"
          className="px-4 py-2 bg-gray-800 text-white font-semibold transition-all rounded-md duration-300 hover:bg-gray-600  "
        >
          Volver al menu principal
        </Link>
      </div>
    </div>
  );
}
