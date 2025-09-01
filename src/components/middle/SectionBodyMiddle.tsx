import Image from "next/image";
import React from "react";
import artwork from "../../images/00751-3702098430 1.jpg";

const SectionBodyMiddle = () => {
  return (
    <div className="w-[45.87%] h-auto flex justify-end">
      <Image src={artwork} alt="이미지" className="w-[74.53%]" />
    </div>
  );
};

export default SectionBodyMiddle;
