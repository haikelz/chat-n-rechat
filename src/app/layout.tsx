import "aos/dist/aos.css";
import { metadata } from "~lib/utils/data";
import "~styles/index.css";
import { ChildrenProps } from "~types";

const RootLayout = ({ children }: ChildrenProps) => {
  const { title, type, url, description, image } = metadata;

  return (
    <html>
      <head>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        {/** OG */}
        <meta property="og:type" content={type} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        {/** Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
      </head>
      <body className="bg-aliceblue">
        <div className="mx-auto flex w-full max-w-full flex-col items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
