import "@/styles/index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

const App = ({ pageProps, Component }: AppProps) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Head>
        <title>Chat n&#39; rechat</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <div className="mx-auto flex w-full max-w-full flex-col items-center justify-center">
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
