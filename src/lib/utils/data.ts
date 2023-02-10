import { Facebook, Groups, Instagram, Messages, SpeakFree, Twitter } from "~ui/svg";

const bangMessi = "Artinya apaan tuh bang Messi? Ente kiper terbaik sedunia";
const gratisDong = "Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin aja kalo aplikasi ini berbayar, masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah.";

export const metadata = {
  title: "Chat n' rechat",
  type: "website",
  url: "https://chat-n-rechat-seven.vercel.app/",
  description:
    "Sebuah aplikasi chatting yang bisa bikin kamu lupa diri, tapi tidak lupa jasa pahlawan!",
  image: "/images/hand.png",
};

export const sitemapList = [
  {
    id: 1,
    name: "Beranda",
    link: "/",
  },
  {
    id: 2,
    name: "Fitur-fitur",
    link: "#features",
  },
  {
    id: 3,
    name: "Teknologi",
    link: "#technologies",
  },
  {
    id: 4,
    name: "FAQ",
    link: "#faq",
  },
  {
    id: 5,
    name: "Download",
    link: "#download",
  },
];

export const companyList = [
  {
    id: 1,
    image: "/images/cnn.svg",
    alt: "CNN Logo",
    width: 75.15,
    height: 35,
  },
  {
    id: 2,
    image: "/images/tirto.svg",
    alt: "Tirto Logo",
    width: 128.65,
    height: 35,
  },
  {
    id: 3,
    src: "/images/forbes.svg",
    alt: "Forbes Logo",
    width: 133.19,
    height: 35,
  },
  { id: 4, src: "/images/google.svg", alt: "Google Logo", width: 101.67, height: 35 },
  {
    id: 5,
    src: "/images/new-york-times.svg",
    alt: "New York Times Logo",
    width: 258.96,
    height: 35,
  },
];

export const featuresList = [
  {
    id: 1,
    svg: Groups,
    reason: "Groups to keep in touch",
    desc: "Keep in touch with the groups of people that matter the most, like your family or coworkers. With group chats, you can share messages, photos, and videos.",
  },
  {
    id: 2,
    svg: Messages,
    reason: "Simple, Reliable Messaging",
    desc: "Message your friends and family for free*. WhatsApp uses your phone's Internet connection to send messages so you can avoid SMS fees.",
  },
  {
    id: 3,
    svg: SpeakFree,
    reason: "Speak Freely",
    desc: "With voice calls, you can talk to your friends and family for free*, even if they're in another country. And with free* video calls, you can have face-to-face conversations.",
  },
];

export const featuresForNotRegisterList = [
  {
    id: 1,
    reason: "Kamu Adalah Beban Kami",
    desc: "Semakin banyak kamu yang mendaftar di aplikasi ini, artinya semakin banyak data yang perlu disimpan, nah kan jadi perlu server gede tuh. Makanya kamu beban!",
    emoji: "😠",
  },
  {
    id: 2,
    reason: "Males Buat Ngembangin",
    desc: "Lo bakal nemu bug, entah pesan yang mau dikirim gak bisa dikirim padahal lo belom pencet tombol enter atau masalah lainnya. Nah soal itu kita males buat benerin.",
    emoji: "🐨",
  },
  {
    id: 3,
    reason: "Pokoknya Males aja dah",
    desc: "Nggak tau lagi harus ngomong apa, pokoknya males aja sih kita bikin aplikasi chat kek gini. Makannya mending lo pake WhatsApp aja udah.",
    emoji: "😴",
  },
];

export const questionsList = [
  {
    id: 1,
    question: "Apakah aplikasi ini sudah dapat izin dari MUI?",
    answer: bangMessi,
  },
  {
    id: 2,
    question: "Apakah aplikasi ini gratis?",
    answer: gratisDong,
  },
  {
    id: 3,
    question: "Apakah data saya akan dijual ke agen khusus US?",
    answer: bangMessi,
  },
  {
    id: 4,
    question: "Kenapa bumi muter? Apa karena di depan ada yang nikah?",
    answer: gratisDong,
  },
  {
    id: 5,
    question: "Gimana caranya supaya si Rizal mau bikin konten buat Array ID?",
    answer: bangMessi,
  },
  {
    id: 6,
    question: "Pertanyaan di atas gabakal ada yang bisa jawab sih",
    answer: gratisDong,
  },
  {
    id: 7,
    question: "Kenapa game epep burik, bang?",
    answer: bangMessi,
  },
];

export const socialMediaList = [
  {
    id: 1,
    icon: Instagram,
  },
  { id: 2, icon: Facebook },
  { id: 3, icon: Twitter },
];

export const partnersList = [
  {
    id: 1,
    src: "/images/cnn.svg",
    alt: "CNN Logo",
    width: 75.15,
    height: 35,
  },
  { id: 2, src: "/images/tirto.svg", alt: "Tirto Logo", width: 128, height: 35 },
  {
    id: 3,
    src: "/images/forbes.svg",
    alt: "Forbes Logo",
    width: 133.19,
    height: 35,
  },
  { id: 4, src: "/images/google.svg", alt: "Google Logo", width: 101.67, height: 35 },
  {
    id: 5,
    src: "/images/new-york-times.svg",
    alt: "Newyork Times Logo",
    width: 258.96,
    height: 35,
  },
];

export const navbarList = [
  {
    id: 1,
    name: "Beranda",
    link: "/",
  },
  {
    id: 2,
    name: "Fitur-fitur",
    link: "#features",
  },
  {
    id: 3,
    name: "Teknologi",
    link: "#technologies",
  },
  {
    id: 4,
    name: "FAQ",
    link: "#faq",
  },
];
