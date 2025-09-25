import React from "react";
import layer from "../../images/_레이어2_.svg";
import Image from "next/image";

const TableLeftDeck = () => {
  return (
    <Image
      src={layer}
      alt="레이어"
      className="absolute left-[2%] top-[5%] w-[15%] "
    />
  );
};

export default TableLeftDeck;
