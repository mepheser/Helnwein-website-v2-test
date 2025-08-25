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

const ArticleListImage: FunctionComponent<Props> = ({image, preload, className}) => {
    if (!image) {
        return <div className={'min-w-[150px]'}/>
    }

    return (
        <Image
            className={`shrink-0 min-w-[150px] ${className ? className : ''}`}
            src={imageUrl(image, Format.ARTICLE_LIST)}
            loader={createImageLoader()}
            alt={image.name || ''}
            width={150}
            height={200}
            title={image.name}
            priority={preload}
        />
    )
}

export default ArticleListImage
