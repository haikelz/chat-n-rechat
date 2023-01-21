import { partnersList } from "@/lib/utils/data";
import { CustomButton } from "@/ui/button";
import Layout from "@/ui/layout";
import { ArrowRight, Dontloud, User } from "@/ui/svg";
import { Badge, SectionDescription, SectionTitle } from "@/ui/typography";
import AnimationWrapper from "@/ui/wrapper/AnimationWrapper";
import Image from "next/image";
import Link from "next/link";
import { twJoin, twMerge } from "tailwind-merge";

const Banner = () => {
  return (
    <>
      <Layout className="mt-[75px] px-5 md:mt-[100px]">
        <div className="flex w-full flex-col items-center justify-center pb-[75px]">
          <div className="flex w-full flex-col items-center justify-between md:flex-row">
            <AnimationWrapper data-aos="fade-right" className="md:h-[475px] md:w-[497px]">
              <div>
                <Badge color="primary">CHAT N’ RECHAT</Badge>
                <SectionTitle className="mt-[15px] text-start text-[34px]">
                  Sebuah aplikasi chatting yang bisa bikin kamu lupa diri, tapi tidak lupa jasa
                  pahlawan!
                </SectionTitle>
                <SectionDescription className="my-4 text-[18px] leading-[30px]">
                  Sebenernya banyak banget aplikasi chatting yang lebih bagus dari ini, maka dari
                  itu lebih baik pake yang lain aja deh ya daripada pake aplikasi yang ini.
                </SectionDescription>
              </div>
              <div>
                <div className="flex">
                  <CustomButton
                    className={twMerge(
                      "mr-5 flex items-center justify-center bg-primary px-10 py-3 text-white",
                      "hover:bg-blue-600"
                    )}
                    label="Register Button"
                    isDropShadow
                  >
                    <SectionDescription className="mr-2 text-white">Register</SectionDescription>
                    <ArrowRight />
                  </CustomButton>
                  <Link href="#features">
                    <CustomButton
                      className={twJoin(
                        "flex items-center justify-center bg-primary/5 px-10 py-3",
                        "hover:bg-primary/10"
                      )}
                      label="Learn More Button"
                    >
                      <SectionDescription className="mr-2 text-primary">
                        Learn More
                      </SectionDescription>
                    </CustomButton>
                  </Link>
                </div>
              </div>
              <div className="mt-[35px] flex w-full md:mt-[70px]">
                <div className="mr-10 flex justify-center md:mr-20">
                  <Dontloud />
                  <div className="ml-8 flex flex-col items-center justify-center">
                    <SectionDescription className="font-inter text-xs text-dark/60">
                      TOTAL DON’TLOUD
                    </SectionDescription>
                    <SectionDescription className="font-inter text-2xl font-semibold text-dark">
                      1,501,234
                    </SectionDescription>
                  </div>
                </div>
                <div className="flex justify-center">
                  <User />
                  <div className="ml-8">
                    <SectionDescription className="font-inter text-xs text-dark/60">
                      TOTAL USERS
                    </SectionDescription>
                    <SectionDescription className="font-inter text-2xl font-semibold text-dark">
                      1,318,829
                    </SectionDescription>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
            <AnimationWrapper className="mt-[75px] md:mt-0" data-aos="fade-left">
              <Image
                src="/images/hero.png"
                className=""
                width={483.82}
                height={535.87}
                alt="Hero"
                priority={true}
              />
            </AnimationWrapper>
          </div>
        </div>
      </Layout>
      <Layout className="md:px-5">
        <div
          className={twJoin(
            "flex w-full flex-col items-center justify-center",
            "gap-8 bg-primary/5 p-10",
            "sm:grid sm:grid-cols-3 sm:grid-rows-1",
            `md:grid-cols-5`
          )}
        >
          {partnersList.map((partner) => (
            <AnimationWrapper data-aos="fade-up" key={partner.id}>
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                priority={true}
              />
            </AnimationWrapper>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Banner;
