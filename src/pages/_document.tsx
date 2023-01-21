import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <meta name="title" content="Chat n&#39; rechat" />
        <meta
          name="description"
          content="Sebuah aplikasi chatting yang bisa bikin kamu lupa diri, tapi tidak lupa jasa pahlawan!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chat-n-rechat-seven.vercel.app/" />
        <meta property="og:title" content="Chat n&#39; rechat" />
        <meta
          property="og:description"
          content="Sebuah aplikasi chatting yang bisa bikin kamu lupa diri, tapi tidak lupa jasa pahlawan!"
        />
        <meta property="og:image" content="/images/hand.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://chat-n-rechat-seven.vercel.app/" />
        <meta property="twitter:title" content="Chat n&#39; rechat" />
        <meta
          property="twitter:description"
          content="Sebuah aplikasi chatting yang bisa bikin kamu lupa diri, tapi tidak lupa jasa pahlawan!"
        />
        <meta property="twitter:image" content="/images/hand.png" />
      </Head>
      <body className="bg-aliceblue">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
