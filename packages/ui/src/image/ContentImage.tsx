'use client'

import React, {FunctionComponent} from 'react'
import Image from "next/image";
import {getImageDimensions} from "@sanity/asset-utils";
import {createImageLoader, Format, imageUrl} from "./imateUtils";

interface Props {
    image: any
    alt: string
}

const ContentImage: FunctionComponent<Props> = ({image, alt}) => {
    if (!image) {
        return null
    }

    return (
        <div>
            <Image
                src={imageUrl(image, Format.RAW)}
                loader={createImageLoader()}
                alt={alt}
                width={getImageDimensions(image.image).width}
                height={getImageDimensions(image.image).height}
                sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            40vw"
            />
        </div>
    )
}

export default ContentImage
