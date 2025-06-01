import {HelnweinImage} from "@repo/sanity/selections";

export enum Format {
    RAW = 'RAW',
    ARTICLE_LIST = 'ARTICLE_LIST',
    BIOGRAPHY_LIST = 'BIOGRAPHY_LIST',
    BIBLIOGRAPHY_LIST = 'BIBLIOGRAPHY_LIST',
    PREVIEW = 'PREVIEW',
    GROUP_THUMBNAIL = 'GROUP_THUMBNAIL',
    THUMBNAIL = 'THUMBNAIL',

}

export const createImageLoader = () => ({src}: {src: string}) =>
    `https://helnwein-website-images.b-cdn.net/images${src}`

export const imageUrl = (image: HelnweinImage, format: Format)=> {
    const name = image.name ? image.name.replaceAll(' ', '_') : image._id
    return `/${image._id}/${image._updatedAt ? image._updatedAt.getTime() : image._createdAt.getTime()}/${format}/${encodeURIComponent(name)}.webp`;
}