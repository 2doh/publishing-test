import React from "react";
import TextBubbleBottom from "./TextBubbleBottom";
import Image from "next/image";
import content from "../../images/00637-3702098316 1.png";

const MiddleLower = () => {
  return (
    <div className="relative aspect-[375/306] mt-[5%] w-full h-auto bg-[#F3F2EF] my-0 ml-0 flex justify-between">
      <TextBubbleBottom />
      <Image
        src={content}
        alt="이미지"
        className="aspect-[375/306] w-full h-auto"
      ></Image>
    </div>
  );
};

export default MiddleLower;
