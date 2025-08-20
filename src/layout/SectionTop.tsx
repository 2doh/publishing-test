import { ReactNode } from "react";

export interface SectionProps {
  children: ReactNode;
}

const SectionTop = ({ children }: SectionProps) => {
  return (
    <div className="w-full min-h-[752px] bg-[#937C5F] flex flex-col items-center my-0 mx-auto relative">
      {children}
    </div>
  );
};

export default SectionTop;
