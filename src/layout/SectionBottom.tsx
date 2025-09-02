import React from "react";
import { SectionProps } from "./SectionTop";

const SectionBottom = ({ children }: SectionProps) => {
  return (
    <div className="bg-amber-300 absolute mx-auto flex justify-between top-[100%]">
      {children}
    </div>
  );
};

export default SectionBottom;
