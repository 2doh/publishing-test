import Image from "next/image";
import React from "react";
import artwork from "../../images/00751-3702098430 1.jpg";

const SectionBodyMiddle = () => {
  return (
    <div className="aspect-[120/285] max-w-[34.2%] max-h-[285px] relative">
      <Image
        src={artwork}
        alt="이미지"
        // className=" w-[34.2%] h-[100%] max-w-[120px] max-h-[285px]"
        className=" w-full h-auto"
      />
      <span className="absolute top-[5%] left-[-60%]  w-full text-center text-black stroke-white italic whitespace-nowrap text-[clamp(1.5rem,8vw,3rem)]">
        슥슥
      </span>
    </div>
  );
};

export default SectionBodyMiddle;
