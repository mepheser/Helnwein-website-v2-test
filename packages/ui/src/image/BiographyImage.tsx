'use client'

import React, {FunctionComponent} from 'react'
import Image from 'next/image'
import {HelnweinImage} from "@repo/sanity/selections";
import {createImageLoader, Format, imageUrl} from "./imateUtils";

interface Props {
    image: HelnweinImage | null
    preload?: boolean
    className?: string
}

const BiographyImage: FunctionComponent<Props> = ({image, preload, className}) => {
    if (!image) {
        return null
    }

    return (
        <Image
            className={'shrink-0'}
            src={imageUrl(image, Format.BIOGRAPHY_LIST)}
            loader={createImageLoader()}
            alt={image.name || ''}
            width={150}
            height={150}
            title={image.name}
            priority={preload}
            sizes={'(max-width: 768px) 100vw, 75vw'}
        />
    )
}

export default BiographyImage
