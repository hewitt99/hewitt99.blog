import Link from 'next/link';
import ImageComp from '/components/ImageComp'

export default function FirstPost() {
  return (
    <>
      <h1>first-post</h1>
      <h2>
        <Link href="/">Back to Home</Link>
        <ImageComp />
      </h2>
    </>
  )
}
