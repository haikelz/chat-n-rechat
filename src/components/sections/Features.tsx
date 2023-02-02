import { featuresList } from "~lib/utils/data";
import Layout from "~ui/layout";
import { Badge, SectionDescription, SectionTitle, Subtitle } from "~ui/typography";
import AnimationWrapper from "~ui/wrapper/AnimationWrapper";

const Features = () => {
  return (
    <Layout id="features" className="py-[50px] px-5 md:py-[100px]">
      <div className="flex flex-col items-center justify-center">
        <AnimationWrapper
          data-aos="zoom-in"
          className="flex w-full items-center justify-center text-center"
        >
          <div className="md:w-[493px]">
            <Badge color="dark">NGGAK HARUS SIH SEBENERNYA</Badge>
            <SectionTitle className="my-[15px]">Kenapa Harus Pakai Chat N’ Rechat?</SectionTitle>
            <SectionDescription className="text-center">
              Sebenernya yang bagus itu sih WhatsApp loh, mending pake WhatsApp aja deh. Yaudah
              berikut ini adalah fitur-fitur WhatsApp.
            </SectionDescription>
          </div>
        </AnimationWrapper>
        <div className="mt-[100px]">
          <div className="grid w-full grid-cols-1 grid-rows-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {featuresList.map((item) => {
              const SvgImage = item.svg;
              return (
                <AnimationWrapper
                  data-aos={
                    item.id === 1 ? "fade-up-right" : item.id === 3 ? "fade-up-left" : "zoom-in"
                  }
                  key={item.id}
                  className="flex flex-col items-center justify-between text-center"
                >
                  <SvgImage />
                  <div className="flex flex-col items-center justify-start">
                    <Subtitle className="text-dark">{item.reason}</Subtitle>
                    <SectionDescription className="mt-2.5">{item.desc}</SectionDescription>
                  </div>
                </AnimationWrapper>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Features;
