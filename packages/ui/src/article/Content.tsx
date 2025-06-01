import React, {FunctionComponent} from 'react'
import {PortableText} from 'next-sanity'
import ContentImage from '../image/ContentImage'
import Link from "next/link";

interface Props {
    data: any
}

const LinkPartComponent = ({value}: any) => {
    if (!value.url) {
        return null
    }

    return (
        <div className={'font-sans font-bold text-gray uppercase underline max-w-3xl leading-tight'}>
            <a href={value.url} > {value.url} </a>
        </div>
    )
}

const ImagePartComponent = ({value}: any) => {
    if (!value) {
        return null
    }

    return (
        <div className={'mb-8'}>
            <ContentImage image={value.image} alt={'test'}/>
            {value.imageMeta && value.imageMeta.name && (
                <div className={'text-gray font-bold font-sans'}>
                    {value.imageMeta.name}
                </div>
            )}
            {value.imageMeta && value.imageMeta.name && value.imageMeta.takenat && (
                <div className={'text-logo1 font-bold font-sans text-sm'}>
                    {(value.imageMeta.takenat! as Date).getFullYear()}
                </div>
            )}
        </div>
    )
}

const Content: FunctionComponent<Props> = ({data}) => (
    <div className={'text-lg'}>
        <PortableText
            value={data}
            components={{
                block: {
                    normal: props => <p className="mb-2 max-w-3xl"> {props.children} </p>,
                    h2: props => <h2 className="text-2xl font-bold mb-2 max-w-3xl"> {props.children} </h2>,
                    h3: props => <h2 className="text-xl font-semibold mb-2 max-w-3xl"> {props.children} </h2>,
                },
                types: {
                    linkPart: LinkPartComponent,
                    imagePart: ImagePartComponent,
                },
            }}
        />
    </div>
)

export default Content
