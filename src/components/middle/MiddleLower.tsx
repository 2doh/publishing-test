import React from "react";
import TextBubbleBottom from "./TextBubbleBottom";
import Image from "next/image";
import content from "../../images/00637-3702098316 1.png";

const MiddleLower = () => {
  return (
    <div className="relative aspect-[375/306] mt-[8%] w-full bg-[#F3F2EF] flex justify-between">
      <TextBubbleBottom />
      <Image
        src={content}
        alt="이미지"
        className=" w-full h-auto object-contain"
      />
      <div className="aspect-[375/118] absolute w-full bg-gradient-to-t from-[#F3F2EF] z-50 left-0 bottom-0"></div>
    </div>
  );
};

export default MiddleLower;
