import Image from "next/image";
import React from "react";
import titleImg from "../../images/_레이어_.png";

const TitleBox = () => {
  const tempData = {
    title: "제 1장",
    content: "나의 사주 팔자",
  };
  return (
    <div className="w-[157px] h-[84px] mt-[84px] flex flex-col items-center justify-center z-50">
      <span className="text-white text-[20px] leading-[100%]">
        {tempData.title}
      </span>
      <Image src={titleImg} alt="레이어" className="mb-[12px] mt-[12px]" />
      <span className="text-white text-[20px] leading-[100%]">
        {tempData.content}
      </span>
    </div>
  );
};

export default TitleBox;
