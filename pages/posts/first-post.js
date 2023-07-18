import Link from 'next/link';
import ImageComp from '/components/ImageComp'
import Head from 'next/head';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>FIRST-POST</title>
      </Head>
      <h1>first-post</h1>
      <h2>
        <Link href="/">Back to Home</Link>
        <ImageComp />
      </h2>
    </>
  )
}
