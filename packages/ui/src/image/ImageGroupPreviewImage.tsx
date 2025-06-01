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

const ImageGroupPreviewImage: FunctionComponent<Props> = ({image, preload, className}) => {
    if (!image) {
        return null
    }

    return (
        <Image
            className={`shrink-0 ${className ? className : ''}`}
            src={imageUrl(image, Format.PREVIEW)}
            loader={createImageLoader()}
            alt={image.name || ''}
            width={300}
            height={235}
            title={image.name}
            priority={preload}
            sizes={'(max-width: 768px) 100vw, 75vw'}
        />
    )
}

export default ImageGroupPreviewImage
