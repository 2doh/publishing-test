import { ReactNode } from "react";

export interface SectionProps {
  children: ReactNode;
}

const SectionTop = ({ children }: SectionProps) => {
  return (
    <div className="w-full aspect-[445/792]  bg-[#937C5F] flex flex-col items-center my-0 mx-auto relative overflow-hidden">
      {/* aspect-[445/892.4] */}
      {children}
    </div>
  );
};

export default SectionTop;
