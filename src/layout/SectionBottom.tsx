import React from "react";
import { SectionProps } from "./SectionTop";

const SectionBottom = ({ children }: SectionProps) => {
  return (
    <div className="bg-[#F3F2EF] my-0 mx-auto flex justify-between">
      {children}
    </div>
  );
};

export default SectionBottom;
