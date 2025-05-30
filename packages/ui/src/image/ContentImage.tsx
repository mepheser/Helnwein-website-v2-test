import React, {FunctionComponent} from 'react'
import imageUrlBuilder from '@sanity/image-url'
import {getStaticClient} from "@repo/sanity/staticClient";
import Image from "next/image";
import {getImageDimensions} from "@sanity/asset-utils";

interface Props {
    image: any
    alt: string
}

const builder = imageUrlBuilder(getStaticClient())

const ContentImage: FunctionComponent<Props> = ({image, alt}) => {
    if (!image) {
        return null
    }

    return (
        <div>
            <Image
                src={builder.image(image).url()}
                alt={alt}
                width={getImageDimensions(image).width}
                height={getImageDimensions(image).height}
                sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            40vw"
            />
        </div>
    )
}

export default ContentImage
