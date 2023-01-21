import { questionsList } from "@/lib/utils/data";
import Layout from "@/ui/layout";
import { Chevron } from "@/ui/svg";
import { Badge, SectionDescription, SectionTitle, Subtitle } from "@/ui/typography";
import AnimationWrapper from "@/ui/wrapper/AnimationWrapper";
import { useState } from "react";
import { twJoin, twMerge } from "tailwind-merge";

const Faq = () => {
  const [clickId, setClickId] = useState(0);

  const handleClick = (id: number) => {
    if (clickId === id) return setClickId(0);
    setClickId(id);
  };

  return (
    <Layout id="faq" className="px-5 pt-[50px] pb-[100px] md:py-[100px]">
      <div className="flex flex-col items-center justify-center">
        <AnimationWrapper data-aos="zoom-in" className="flex flex-col items-center justify-center">
          <Badge color="dark">BANYAK YANG NANYA</Badge>
          <SectionTitle className="mt-[15px] mb-2.5">Pertanyaan Yang Sering Ditanyain</SectionTitle>
          <SectionDescription className="text-center md:w-[493px]">
            Sebenernya pertanyaan-pertanyaan ini kagak ada yang nanya sih, tapi ya ditaruh sini aja
            siapa tau lo mau baca ‘kan.
          </SectionDescription>
        </AnimationWrapper>
        <AnimationWrapper
          data-aos="fade-right"
          className="mt-[50px] flex w-full flex-col md:mt-[100px]"
        >
          {questionsList.map((item) => (
            <div
              key={item.id}
              className={twMerge(
                "flex w-full flex-col items-center justify-center rounded-md border-b-2",
                clickId === item.id ? "bg-primary text-white transition-all ease-in-out" : ""
              )}
            >
              <div className="flex w-full flex-col items-center justify-start p-5">
                <div className="flex w-full items-center justify-between">
                  <Subtitle className="mr-5">{item.question}</Subtitle>
                  <button
                    onClick={() => handleClick(item.id)}
                    type="button"
                    aria-label="Open and close button"
                  >
                    <Chevron
                      className={twJoin(
                        clickId === item.id
                          ? "rotate-180 text-white transition-all ease-in-out"
                          : ""
                      )}
                    />
                  </button>
                </div>
                {clickId === item.id ? (
                  <SectionDescription className="text-white md:w-[612.97px]">
                    {item.answer}
                  </SectionDescription>
                ) : null}
              </div>
            </div>
          ))}
        </AnimationWrapper>
      </div>
    </Layout>
  );
};

export default Faq;
