import React from "react";

type Cell = {
  text: string | string[];
  color?: string;
  rowText?: string;
};

const TableContent = () => {
  const tableData: Cell[][] = [
    [
      { text: "" },
      { text: "時" },
      { text: "日" },
      { text: "月" },
      { text: "年" },
    ],
    [
      { text: "十星", rowText: "(십성)" },
      { text: "傷官", rowText: "(상관)" },
      { text: "比肩" },
      { text: "傷官", rowText: "(상관)" },
      { text: "傷官", rowText: "(상관)" },
    ],
    [
      { text: "天干", rowText: "(천간)" },
      { text: "壬", rowText: "陽水", color: "bg-[#2F2F2F]" },
      { text: "丁", rowText: "陰火", color: "bg-[#C23030]" },
      { text: "癸", rowText: "陰水", color: "bg-[#2F2F2F]" },
      { text: "癸", rowText: "陰水", color: "bg-[#2F2F2F]" },
    ],
    [
      { text: "地支", rowText: "(지지)" },
      { text: "寅", rowText: "陽木", color: "bg-[#18868C]" },
      { text: "巳", rowText: "陰火", color: "bg-[#C23030]" },
      { text: "", rowText: "" },
      { text: "酉", rowText: "陰金", color: "bg-[#fff]" },
    ],
    [
      { text: "十星", rowText: "(십성)" },
      { text: "比肩", rowText: "陽木" },
      { text: "劫財", rowText: "陰火" },
      { text: "食神", rowText: "陰水" },
      { text: "偏財", rowText: "陰金" },
    ],
    [
      { text: "十星", rowText: "(십성)" },
      { text: "比肩", rowText: "陽木" },
      { text: "劫財", rowText: "陰火" },
      { text: "食神", rowText: "陰水" },
      { text: "偏財", rowText: "陰金" },
    ],
    [
      { text: "十星", rowText: "(십성)" },
      { text: "(없음)", rowText: "" },
      { text: "(없음)", rowText: "" },
      { text: "(없음)", rowText: "" },
      { text: ["偏財", "太極", "文昌"] },
    ],
  ];

  return (
    <div className="mx-auto my-[4.2%] w-[88.31%] ">
      {tableData.map((row, rowIndex) => {
        const isLastRow = rowIndex === tableData.length - 1;
        return (
          <div
            key={rowIndex}
            className="grid grid-cols-[15.44%_21.14%_21.14%_21.14%_21.14%] w-full h-auto"
          >
            {row.map((cell, colIndex) => {
              const isTopLeft = rowIndex === 0 && colIndex === 0;
              const isHeaderRow = rowIndex === 0;
              const isHeaderCol = colIndex === 0;
              return (
                <div
                  key={colIndex}
                  className={`
                  px-[10%] py-[20%] text-center whitespae-pre-line flex justify-center items-center flex-col border-r border-b border-black whitespace-nowrap
                  ${!isHeaderCol && !isHeaderRow ? "bg-[#fff]" : ""}
                  ${isLastRow ? "h-auto" : ""}
                `}
                >
                  {isTopLeft ? (
                    ""
                  ) : cell.color ? (
                    <div
                      className={`rounded-[22%] w-full h-full flex flex-col justify-center items-center ${cell.color} aspect-[55.5/55.5] whitespace-nowrap pt-[15%] ${
                        cell.color !== "bg-[#fff]"
                          ? "text-white"
                          : "text-black border border-black"
                      }`}
                    >
                      {Array.isArray(cell.text) ? (
                        cell.text.map((t, i) => (
                          <div
                            key={i}
                            className="leading-tight whitespace-nowrap"
                          >
                            {t}
                          </div>
                        ))
                      ) : (
                        <>
                          <div className="text-[clamp(10px,5vw,18px)] whitespace-nowrap">
                            {cell.text}
                          </div>
                          {cell.rowText && (
                            <div className="text-[clamp(8px,1vw,14px)] whitespace-nowrap">
                              {cell.rowText}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  ) : Array.isArray(cell.text) ? (
                    cell.text.map((t, i) => (
                      <div
                        key={i}
                        className="leading-loose text-[clamp(10px,5vw,18px)] whitespace-nowrap"
                      >
                        {t}
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="text-[clamp(10px,5vw,18px)] whitespace-nowrap">
                        {cell.text}
                      </div>
                      {cell.rowText && (
                        <div className="text-[clamp(8px,1vw,14px)] whitespace-nowrap">
                          {cell.rowText}
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TableContent;
