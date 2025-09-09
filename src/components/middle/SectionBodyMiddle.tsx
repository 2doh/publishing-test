import Image from "next/image";
import React from "react";
import artwork from "../../images/00751-3702098430 1.jpg";

const SectionBodyMiddle = () => {
  return (
    <div className=" w-[34.2%] max-w-[120px] max-h-[285px]">
      <Image src={artwork} alt="이미지" className="aspect-[120/285]" />
    </div>
  );
};

export default SectionBodyMiddle;
