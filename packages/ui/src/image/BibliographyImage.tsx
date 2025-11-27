'use client'

import React, {FunctionComponent} from 'react'
import Image from 'next/image'
import {HelnweinImage} from "@repo/sanity/selections";
import {Format, createImageLoader, imageUrl} from "./imateUtils";

interface Props {
  image: HelnweinImage | null
  preload?: boolean
  className?: string
}

const BibliographyImage: FunctionComponent<Props> = ({image, preload, className}) => {
  if (!image) {
    return <div className={'min-w-[120px] bg-gray-900 h-full'}/>
  }

  return (
    <Image
      className={`shrink-0  ${className ? className : ''}`}
      src={imageUrl(image, Format.ARTICLE_LIST)}
      loader={createImageLoader()}
      alt={image.name || ''}
      width={150 * 0.75}
      height={200 * 0.75}
      title={image.name}
      priority={preload}
    />
  )
}

export default BibliographyImage
