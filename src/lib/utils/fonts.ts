import { DM_Sans, Inter, Source_Sans_Pro } from "@next/font/google";

export const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const dmSans = DM_Sans({
  variable: "--font-dmsans",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const sanspro = Source_Sans_Pro({
  variable: "--font-sanspro",
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});
