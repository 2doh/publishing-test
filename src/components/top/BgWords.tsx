import React from "react";

const BgWords = () => {
  const tempData = [
    "甲乙丙丁戊己",
    "庚辛壬癸子丑",
    "寅卯辰巳午未",
    "申酉戌亥甲乙",
    "甲乙丙丁戊己",
    "庚辛壬癸子丑",
    "寅卯辰巳午未",
    "申酉戌亥甲乙",
  ];
  return (
    <div className="absolute top-[-2%] flex flex-col ">
      {tempData.map((item, idx) => (
        <span
          className="text-[60px] leading-[150%] tracking-[0.2em] text-white/10  whitespace-nowrap blur-[3px]"
          key={idx}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default BgWords;
