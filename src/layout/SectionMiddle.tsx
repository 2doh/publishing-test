import React from "react";
import { SectionProps } from "./SectionTop";

const SectionMiddle = ({ children }: SectionProps) => {
  return (
    <div className="w-[93%] aspect-[351/285] bg-[#F3F2EF] my-0 ml-0 flex justify-between">
      {children}
    </div>
  );
};

export default SectionMiddle;
