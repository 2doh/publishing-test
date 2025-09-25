import React from "react";
import layer from "../../images/_레이어3_.svg";
import Image from "next/image";

const TableRightDeck = () => {
  return (
    <Image
      src={layer}
      alt="레이어"
      className="absolute right-[2%] top-[4%] w-[15%] "
    />
  );
};

export default TableRightDeck;
