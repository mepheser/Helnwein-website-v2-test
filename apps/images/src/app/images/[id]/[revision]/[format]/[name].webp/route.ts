import {getImageMeta} from "@repo/sanity/queries";
import imageUrlBuilder from '@sanity/image-url'
import {getStaticClient} from "@repo/sanity/staticClient";
import {NextResponse} from "next/server";

enum Format {
    RAW = 'RAW',
    ARTICLE_LIST = 'ARTICLE_LIST',
    BIOGRAPHY_LIST = 'BIOGRAPHY_LIST',
    BIBLIOGRAPHY_LIST = 'BIBLIOGRAPHY_LIST',
    PREVIEW = 'PREVIEW',
    GROUP_THUMBNAIL = 'GROUP_THUMBNAIL',
    THUMBNAIL = 'THUMBNAIL',

}

export async function GET(
    request: Request,
    {params}: { params: Promise<{ id: string, format: Format }> }
) {
    const {id, format} = await params
    const meta = await getImageMeta(id)
    const builder = imageUrlBuilder(getStaticClient())

    let image

    switch (format) {
        case Format.ARTICLE_LIST: {
            image = builder
                .image(meta.image)
                .format('webp')
                .width(150)
                .height(200)
            break
        }
        case Format.GROUP_THUMBNAIL: {
            image = builder
                .image(meta.image)
                .format('webp')
                .height(154)
            break
        }
        case Format.THUMBNAIL: {
            image = builder
                .image(meta.image)
                .format('webp')
                .height(140)
            break
        }
        case Format.PREVIEW: {
            image = builder
                .image({
                    ...meta.image,
                    crop: undefined,
                    hotspot: undefined,
                })
                .format('webp')
                .width(300)
                .height(235)
            break
        }
        case Format.BIOGRAPHY_LIST: {
            image = builder
                .image({
                    ...meta.image,
                    crop: undefined,
                    hotspot: undefined,
                })
                .format('webp')
                .width(150)
                .height(150)
            break
        }
        case Format.BIBLIOGRAPHY_LIST: {
            image = builder
                .image(meta.image)
                .format('webp')
                .width(140)
            break
        }
        default: {
            image = builder
                .image({
                    ...meta.image,
                    crop: undefined,
                    hotspot: undefined,
                })
                .maxWidth(3000)
                .format('webp')
        }
    }

    const response = await fetch(image!.url())

    if (!response.ok) {
        return NextResponse.json({error: 'Failed to fetch image'}, {status: response.status})
    }

    const headers = new Headers(response.headers)
    headers.set('Cache-Control', 'public, max-age=31536000, immutable')

    return new NextResponse(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
    })

}