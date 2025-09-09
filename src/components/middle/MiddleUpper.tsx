import BgDeck from "@/components/middle/BgDeck";
import SectionBodyMiddle from "@/components/middle/SectionBodyMiddle";

const MiddleUpper = () => {
  return (
    <div className="w-[93%] aspect-[351/285] max-h-[285px] bg-amber-300 my-0 ml-0 flex justify-between">
      <BgDeck />
      <SectionBodyMiddle />
    </div>
  );
};

export default MiddleUpper;
