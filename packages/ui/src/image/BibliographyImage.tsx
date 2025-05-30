import React, {FunctionComponent} from 'react'
import Image from 'next/image'
import {getLiveClient} from '../../../sanity/src/liveClient'
import imageUrlBuilder from '@sanity/image-url'
import {HelnweinImage} from "@repo/sanity/selections";
import {getImageDimensions, SanityImageDimensions} from "@sanity/asset-utils";

const builder = imageUrlBuilder(getLiveClient())


interface Props {
    image: HelnweinImage | null
    preload?: boolean
    className?: string
}

export function getCroppedDimensions(image: HelnweinImage, baseDimensions: SanityImageDimensions): SanityImageDimensions {
    const crop: any = image.image.crop;

    if (!crop) {
        return baseDimensions;
    }

    const { width, height } = baseDimensions;
    const croppedWidth = width * (1 - (crop.left + crop.right));
    const croppedHeight = height * (1 - (crop.top + crop.bottom));

    return {
        width: croppedWidth,
        height: croppedHeight,
        aspectRatio: croppedWidth / croppedHeight
    };
}

const BibliographyImage: FunctionComponent<Props> = ({image, preload, className}) => {
    if (!image) {
        return null
    }

    const url = builder.image(image.image).height(140).url()
    const dimensions= getImageDimensions(image.image as any)
    const aspectRatio = getCroppedDimensions(image, dimensions).aspectRatio

    return (
        <Image
            className={''}
            src={url}
            alt={image.name || ''}
            width={140 * aspectRatio}
            height={140}
            title={image.name}
        />
    )
}

export default BibliographyImage
