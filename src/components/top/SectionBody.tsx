import React from "react";
import content from "../../images/Group 1410141644.png";
import Image from "next/image";
import BlurBottom from "./BlurBottom";

const SectionBody = () => {
  return (
    <div className="w-full max-w-md mt-[17px] relative overflow-hidden flex ">
      <div className="z-50 flex w-full h-auto items-center justify-end">
        <Image
          src={content}
          alt="이미지"
          className="w-full h-auto aspect-[313/534] max-h-[534px] max-w-[313px]"
        />
      </div>
      <svg
        className="aspect-[345/336] absolute top-[15%] left-[0%] w-full h-auto"
        viewBox="0.65 265.65 306.31 356.9"
      >
        <polygon
          fill="#D1C3AB"
          className="opacity-50 blur-[5px]"
          points="-130.54,415.02 248.18,305.65 265.66,641.51 -140.65,662.65"
        ></polygon>
      </svg>
      <svg
        className="absolute top-[30%] right-[-50%] w-full h-auto"
        viewBox="-7 329.5 618 390.5"
      >
        <polygon
          fill="#D1C3AB"
          className="opacity-50 blur-[5px]"
          points="50,437.83 190.5,360.5 397.5,329.5 411,820 240,670 50,623"
        ></polygon>
      </svg>
      <BlurBottom></BlurBottom>
    </div>
  );
};

export default SectionBody;
