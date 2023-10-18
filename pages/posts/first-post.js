import Link from "next/link";
import ImageComp from "/components/ImageComp";
import Head from "next/head";
import Script from "next/script";

export default function FirstPost() {
  return (
    <>
      {/* Head组件将title标签添加到了index.html文件内 */}
      <Head>
        <title>FIRST-POST</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => console.log("Facebook SDK loaded")}
        onReady={() => console.log("Facebook SDK is ready")}
      ></Script>
      <h1>first-post</h1>
      <h2>
        <Link href="/">Back to Home</Link>
        <ImageComp />
      </h2>
    </>
  );
}
