import { sitemapList, socialMediaList } from "@/lib/utils/data";
import Layout from "@/ui/layout";
import { Hand } from "@/ui/svg";
import { Badge, SectionDescription, Subtitle } from "@/ui/typography";
import AnimationWrapper from "@/ui/wrapper/AnimationWrapper";
import Link from "next/link";
import { twJoin } from "tailwind-merge";

const Footer = () => {
  return (
    <Layout className="md:px-5">
      <footer
        className={twJoin(
          "flex w-full flex-col justify-between",
          "bg-primary/5 py-10 px-5 md:flex-row md:px-10 lg:px-20"
        )}
      >
        <AnimationWrapper
          data-aos="fade-up"
          className="flex flex-col items-start justify-center md:flex-row"
        >
          <div className="flex flex-col items-start justify-start lg:w-[432px]">
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
                  <Link
                    href={sitemap.link}
                    className="font-sanspro text-[16px] font-semibold leading-[26px] text-dark/60"
                  >
                    {sitemap.name}
                  </Link>
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
    </Layout>
  );
};

export default Footer;
