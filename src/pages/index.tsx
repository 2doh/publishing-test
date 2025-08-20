import BgWords from "@/components/top/BgWords";
import BlurTop from "@/components/top/BlurTop";
import SectionBody from "@/components/top/SectionBody";
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
      </SectionTop>
      <SectionBottom></SectionBottom>
    </div>
  );
};

export default index;
