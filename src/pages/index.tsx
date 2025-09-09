import MiddleLower from "@/components/middle/MiddleLower";
import MiddleUpper from "@/components/middle/MiddleUpper";
import BgWords from "@/components/top/BgWords";
import BlurTop from "@/components/top/BlurTop";
import SectionBody from "@/components/top/SectionBody";
import TextBubbleTop from "@/components/top/TextBubbleTop";
import TitleBox from "@/components/top/TitleBox";
import SectionMiddle from "@/layout/SectionMiddle";
import SectionTop from "@/layout/SectionTop";

const index = () => {
  return (
    <div className="max-w-md h-auto w-full bg-[#F3F2EF] flex flex-col my-0 mx-auto relative">
      <SectionTop>
        <BgWords />
        <BlurTop />
        <TitleBox />
        <SectionBody />
        <TextBubbleTop />
        <div className="bg-[#F3F2EF] w-full h-auto aspect-[448/100]" />
      </SectionTop>
      <SectionMiddle>
        <MiddleUpper />
        <MiddleLower />
      </SectionMiddle>
    </div>
  );
};

export default index;
