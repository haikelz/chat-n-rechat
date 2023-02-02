import dynamic from "next/dynamic";
import { featuresForNotRegisterList } from "~lib/utils/data";
import Layout from "~ui/layout";
import { Badge, SectionDescription, SectionTitle, Subtitle } from "~ui/typography";
import AnimationWrapper from "~ui/wrapper/AnimationWrapper";

const LazyLoadImage = dynamic(() => import("~ui/images/LazyLoadImage"));

const Technologies = () => {
  return (
    <Layout id="technologies" className="border-t-[1.5px] py-[50px] px-5 md:py-[100px]">
      <div className="flex flex-col items-center justify-center md:flex-row">
        <AnimationWrapper data-aos="fade-right">
          <LazyLoadImage
            src="/images/technologies.png"
            alt="Android Preview"
            width={498}
            height={767.36}
          />
        </AnimationWrapper>
        <AnimationWrapper data-aos="fade-left" className="flex flex-col md:h-[706px] md:w-[497px]">
          <div className="mb-[15px] w-fit">
            <Badge color="dark">TEKNOLOGI YANG DIGUNAKAN</Badge>
          </div>
          <SectionTitle className="text-start">
            Teknologi Yang Kami Gunakan Di Dalam Aplikasi Ini Akan Membuat DHH Dan Jason Fried
            Pensiun! 😱
          </SectionTitle>
          <SectionDescription className="mt-[15px]">
            Lo bisa bayangin DHH sama Jason Fried aja jadi pensiun gegara aplikasi ini, apalagi lo
            yang cuma user dan beban kami, gegara lo pake dan daftar di aplikasi ini jadi kita harus
            bayar server DO tiap bulan, mana pas bayar harus tunjuk-tunjukan. Inilah alasan kenapa
            gak usah daftar:
          </SectionDescription>
          <div className="mt-[30px] flex flex-col space-y-10 md:mt-[40px]">
            {featuresForNotRegisterList.map((item) => (
              <div className="flex items-start justify-start" key={item.id}>
                <div className="mr-3 rounded-md bg-dark/10 px-3 py-2">
                  <span>{item.emoji}</span>
                </div>
                <div>
                  <Subtitle>{item.reason}</Subtitle>
                  <SectionDescription>{item.desc}</SectionDescription>
                </div>
              </div>
            ))}
          </div>
        </AnimationWrapper>
      </div>
    </Layout>
  );
};

export default Technologies;
