import { titleFont } from "@/config/fonts";
import React from "react";

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}
const TitleMenu = ({ title, subtitle, className }: Props) => {

  return (
    <div className={className}>

      <h1 className={`${titleFont.className} text-3xl font-extrabold`}>
        {title}
      </h1>

      {subtitle && (
        <h3 className={`${titleFont.className} text-lg mt-3`}>
          {subtitle}
        </h3>
      )}
    </div>
  );
};

export default TitleMenu;
