import BgWords from "@/components/top/BgWords";
import BlurTop from "@/components/top/BlurTop";
import SectionBody from "@/components/top/SectionBody";
import TextBubbleTop from "@/components/top/TextBubbleTop";
import TitleBox from "@/components/top/TitleBox";
import SectionBottom from "@/layout/SectionBottom";
import SectionTop from "@/layout/SectionTop";

const index = () => {
  return (
    <div className="max-w-md w-full bg-emerald-300 flex flex-col justify-center items-center my-0 mx-auto">
      <SectionTop>
        <BgWords></BgWords>
        <BlurTop></BlurTop>
        <TitleBox></TitleBox>
        <SectionBody></SectionBody>
        <TextBubbleTop></TextBubbleTop>
        <div className="bg-[#F3F2EF] absolute bottom-0 w-full h-auto aspect-[448/100]"></div>
      </SectionTop>
      <SectionBottom></SectionBottom>
    </div>
  );
};

export default index;
