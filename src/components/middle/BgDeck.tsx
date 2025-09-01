import Image from "next/image";
import React from "react";
import deck from "../../images/Group-1 1.png";

const BgDeck = () => {
  return (
    <Image
      src={deck}
      alt="장식"
      className="w-[43.59%] h-[42.1%] mt-[41%] opacity-80"
    />
  );
};

export default BgDeck;
