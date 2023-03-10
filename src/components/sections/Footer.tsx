import { twJoin, twMerge } from "tailwind-merge";
import { sitemapList, socialMediaList } from "~lib/utils/data";
import { sanspro } from "~lib/utils/fonts";
import CustomLayout from "~ui/customLayout";
import { Hand } from "~ui/svg";
import { Badge, SectionDescription, Subtitle } from "~ui/typography";
import AnimationWrapper from "~ui/wrapper/AnimationWrapper";

const Footer = () => {
  return (
    <CustomLayout className="md:px-5">
      <footer
        className={twJoin(
          "flex w-full flex-col items-center justify-between",
          "bg-primary/5 py-10 px-5 md:flex-row md:px-10 lg:px-20"
        )}
      >
        <AnimationWrapper
          data-aos="fade-up"
          className="flex w-full flex-col items-start justify-around md:flex-row"
        >
          <div className="flex flex-col items-start justify-start md:w-[360px] lg:w-[432px]">
            <div className="flex w-fit items-center">
              <Hand />
              <Subtitle className="ml-3">Chat N’ Rechat</Subtitle>
            </div>
            <SectionDescription className="my-5">
              Sebenernya banyak banget aplikasi chatting yang lebih bagus dari ini, maka dari itu
              lebih baik pake yang lain aja deh ya daripada pake aplikasi yang ini.
            </SectionDescription>
            <Badge color="dark/60">COPYRIGHT (C) 2021. DESIGN BY NAUVAL</Badge>
          </div>
          <div className="my-5 flex flex-col md:mx-[30px] md:mt-0 lg:w-[186px]">
            <Subtitle>Sitemap</Subtitle>
            <ul className="mt-5 space-y-3">
              {sitemapList.map((sitemap) => (
                <li key={sitemap.id}>
                  <a
                    href={sitemap.link}
                    className={twMerge(
                      "text-[16px] font-semibold leading-[26px] text-dark/60",
                      sanspro.className
                    )}
                  >
                    {sitemap.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Subtitle>Tetep Terhubung</Subtitle>
            <SectionDescription className="my-5">
              Lihat kami pansos di sosial media berikut:
            </SectionDescription>
            <div className="flex space-x-4">
              {socialMediaList.map((socialMedia) => {
                const Icon = socialMedia.icon;
                return (
                  <div
                    key={socialMedia.id}
                    className={twJoin(
                      "cursor-pointer rounded-md bg-dark/10 p-2.5",
                      "transition-all ease-in-out hover:bg-dark/20"
                    )}
                  >
                    <Icon />
                  </div>
                );
              })}
            </div>
          </div>
        </AnimationWrapper>
      </footer>
    </CustomLayout>
  );
};

export default Footer;
