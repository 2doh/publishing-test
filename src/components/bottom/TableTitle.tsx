import React from "react";

export interface TitleProps {
  children: string;
}

const TableTitle = ({ children }: TitleProps) => {
  return (
    <div>
      <div className="text-center text-[16px] max-xs:text-[3.5vw]">
        {children}
      </div>
      <div className="text-center text-[20px] max-xs:text-[4.5vw]">
        1980년 8월 27일 08:10
      </div>
    </div>
  );
};

export default TableTitle;
