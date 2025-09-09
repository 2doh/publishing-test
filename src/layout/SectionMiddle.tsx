import React from "react";
import { SectionProps } from "./SectionTop";

const SectionMiddle = ({ children }: SectionProps) => {
  return (
    <div className="w-full relative bg-[#F3F2EF] my-0 ml-0 flex flex-wrap justify-between">
      {children}
    </div>
  );
};

export default SectionMiddle;
