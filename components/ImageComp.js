import React from 'react'
import Image from 'next/image';

const ImageComp = () => {
  return (
    <>
      <div>ImageComp</div>
      <Image
        height={144}
        width={144}
        alt='testImg'
        src='/images/profile.jpg'
      />
    </>
  )
}

export default ImageComp