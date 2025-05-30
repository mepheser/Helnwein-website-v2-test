import React, {FunctionComponent} from 'react'
import Image from 'next/image'
import {getLiveClient} from '../../../sanity/src/liveClient'
import imageUrlBuilder from '@sanity/image-url'
import {HelnweinImage} from "@repo/sanity/selections";

const builder = imageUrlBuilder(getLiveClient())


interface Props {
    image: HelnweinImage | null
    preload?: boolean
    className?: string
}

const ThumbnailImage: FunctionComponent<Props> = ({image, preload, className}) => {
    if (!image) {
        return null
    }

    const url = builder.image(image.image).width(150).height(200).url()
    console.log(url, image)

    return (
        <Image
            className={`shrink-0 ${className ? className : ''}`}
            src={url}
            alt={image.name || ''}
            width={150}
            height={200}
            title={image.name}
            priority={preload}
            sizes={'(max-width: 768px) 100vw, 75vw'}
        />
    )
}

export default ThumbnailImage
