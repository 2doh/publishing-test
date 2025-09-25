import React from "react";
import { SectionProps } from "./SectionTop";

const SectionBottom = ({ children }: SectionProps) => {
  return (
    <div className="w-full relative bg-[#F3F2EF] my-0 ml-0 flex flex-col items-start justify-start">
      {children}
    </div>
  );
};

export default SectionBottom;
