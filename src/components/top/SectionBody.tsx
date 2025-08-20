import React from "react";
import content from "../../images/Group 1410141644.png";
import Image from "next/image";

const SectionBody = () => {
  return (
    <div className="mt-[42px] z-50">
      <Image src={content} alt="이미지" className="absolute right-0" />
      <div className="w-[345.26px] h-[336.32px] absolute"></div>
    </div>
  );
};

export default SectionBody;
