import React from "react";
import TableLeftDeck from "./TableLeftDeck";
import TableRightDeck from "./TableRightDeck";
import TableTitle from "./TableTitle";
import TableContent from "./TableContent";

const Table = () => {
  return (
    <div className="aspect-[351/621] w-[93.6%] mx-auto bg-[#F5F3EC] relative border-[3px] border-[#1B2F49] mt-[-5%] z-50">
      <div className="w-full absolute top-[1%] h-[1%] max-h-[1px] bg-[#2B557E]"></div>
      <div className="h-full absolute left-[2%] w-[1%] max-w-[1px] bg-[#2B557E] z-50"></div>
      <div className="w-full absolute bottom-[1%] h-[1%] max-h-[1px] bg-[#2B557E]"></div>
      <div className="h-full absolute right-[2%] w-[1%] max-w-[1px] bg-[#2B557E] z-50"></div>
      <TableRightDeck />
      <TableLeftDeck />
      <div className="w-[58.7%]  h-auto mx-auto mt-[10.44%]">
        <TableTitle>김로켓님의 사주</TableTitle>
      </div>
      <TableContent></TableContent>
    </div>
  );
};

export default Table;
