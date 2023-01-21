import Layout from "@/ui/layout";
import { Badge, SectionDescription, SectionTitle } from "@/ui/typography";
import AnimationWrapper from "@/ui/wrapper/AnimationWrapper";
import dynamic from "next/dynamic";

const LazyLoadImage = dynamic(() => import("@/ui/images/LazyLoadImage"));

const Download = () => {
  return (
    <Layout id="download" className="px-5 py-[50px] md:py-[100px]">
      <AnimationWrapper
        data-aos="flip-left"
        data-aos-duration="1500"
        className="w-full rounded-2xl bg-primary drop-shadow-primary"
      >
        <div className="flex h-full flex-col overflow-hidden pt-5 md:flex-row md:px-[50px] md:pt-0 lg:px-[80px]">
          <div className="flex w-full flex-col items-center justify-between md:flex-row">
            <div className="flex flex-col justify-center px-5 py-10 md:px-0 lg:py-0">
              <Badge color="white">DOWNLOAD APLIKASINYA</Badge>
              <SectionTitle className="text-left text-white md:h-[126px] md:w-[418px]">
                Download Aplikasi Chat n’ Rechat Di Play Store, App Store, atau Symbian Store
              </SectionTitle>
              <ul className="mt-2.5 mb-5 md:mb-10">
                <li>
                  <SectionDescription className="text-white/60">
                    Android Version: Mojave+
                  </SectionDescription>
                </li>
                <li>
                  <SectionDescription className="text-white/60">
                    iOS Version: Lolipop+
                  </SectionDescription>
                </li>
                <li>
                  <SectionDescription className="text-white/60">Symbian: 20.04+</SectionDescription>
                </li>
              </ul>
              <div className="flex w-fit md:mb-10">
                <div className="mr-3">
                  <LazyLoadImage
                    src="/images/google-play.svg"
                    alt="Google Play Store Image"
                    width={150}
                    height={46}
                  />
                </div>
                <div>
                  <LazyLoadImage
                    src="/images/app-store.svg"
                    alt="App Store Image"
                    width={150}
                    height={46}
                  />
                </div>
              </div>
            </div>
            <div className="hidden h-full w-fit md:block">
              <LazyLoadImage
                className="hidden h-full w-full md:block"
                src="/images/chat.png"
                alt="Chat"
                width={334}
                height={538}
              />
            </div>
          </div>
        </div>
      </AnimationWrapper>
    </Layout>
  );
};

export default Download;
