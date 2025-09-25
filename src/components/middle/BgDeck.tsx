import Image from "next/image";
import React from "react";
import deck from "../../images/Group-1 1.png";

const BgDeck = () => {
  return (
    <Image
      src={deck}
      alt="장식"
      className="w-[40%] h-auto absolute left-[0%] top-[47%] opacity-80 max-w-[153px] max-h-[120px]"
    />
  );
};

export default BgDeck;
