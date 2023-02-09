import Accordion from "~ui/accordion";
import CustomLayout from "~ui/customLayout";
import { Badge, SectionDescription, SectionTitle } from "~ui/typography";
import AnimationWrapper from "~ui/wrapper/AnimationWrapper";

const Faq = () => {
  return (
    <CustomLayout id="faq" className="px-5 pt-[50px] pb-[100px] md:py-[100px]">
      <div className="flex flex-col items-center justify-center">
        <AnimationWrapper data-aos="zoom-in" className="flex flex-col items-center justify-center">
          <Badge color="dark">BANYAK YANG NANYA</Badge>
          <SectionTitle className="mt-[15px] mb-2.5">Pertanyaan Yang Sering Ditanyain</SectionTitle>
          <SectionDescription className="text-center md:w-[493px]">
            Sebenernya pertanyaan-pertanyaan ini kagak ada yang nanya sih, tapi ya ditaruh sini aja
            siapa tau lo mau baca ‘kan.
          </SectionDescription>
        </AnimationWrapper>
        <Accordion />
      </div>
    </CustomLayout>
  );
};

export default Faq;
