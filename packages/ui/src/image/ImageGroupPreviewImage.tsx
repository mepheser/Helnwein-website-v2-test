import React, {FunctionComponent} from 'react'
import Image from 'next/image'
import {getStaticClient} from '../../../sanity/src/staticClient'
import imageUrlBuilder from '@sanity/image-url'
import {HelnweinImage} from "@repo/sanity/selections";

const builder = imageUrlBuilder(getStaticClient())


interface Props {
    image: HelnweinImage | null
    preload?: boolean
    className?: string
}

const ImageGroupPreviewImage: FunctionComponent<Props> = ({image, preload, className}) => {
    if (!image) {
        return null
    }

    const url = builder.image(image.image).width(300).height(235).url()
    console.log(url, image)

    return (
        <Image
            className={`shrink-0 ${className ? className : ''}`}
            src={url}
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
