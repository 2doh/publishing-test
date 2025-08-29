import React from "react";
import { SectionProps } from "./SectionTop";

const SectionMiddle = ({ children }: SectionProps) => {
  return (
    <div className="w-full bg-[#F3F2EF] my-0 mx-auto relative overflow-hidden">
      {children}
    </div>
  );
};

export default SectionMiddle;
