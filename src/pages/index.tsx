import BgDeck from "@/components/middle/BgDeck";
import SectionBodyMiddle from "@/components/middle/SectionBodyMiddle";
import BgWords from "@/components/top/BgWords";
import BlurTop from "@/components/top/BlurTop";
import SectionBody from "@/components/top/SectionBody";
import TextBubbleTop from "@/components/top/TextBubbleTop";
import TitleBox from "@/components/top/TitleBox";
import SectionBottom from "@/layout/SectionBottom";
import SectionMiddle from "@/layout/SectionMiddle";
import SectionTop from "@/layout/SectionTop";

const index = () => {
  return (
    <div className="max-w-md h-auto w-full bg-[#F3F2EF] flex flex-col my-0 mx-auto">
      <SectionTop>
        <BgWords></BgWords>
        <BlurTop></BlurTop>
        <TitleBox></TitleBox>
        <SectionBody></SectionBody>
        <TextBubbleTop></TextBubbleTop>
        <div className="bg-[#F3F2EF] w-full h-auto aspect-[448/100]" />
      </SectionTop>
      <SectionMiddle>
        <BgDeck></BgDeck>
        <SectionBodyMiddle></SectionBodyMiddle>
      </SectionMiddle>
      <SectionBottom></SectionBottom>
    </div>
  );
};

export default index;
