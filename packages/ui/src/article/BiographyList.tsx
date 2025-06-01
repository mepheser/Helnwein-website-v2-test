import React, {FunctionComponent} from 'react'
import {CategoryContext} from '@repo/sanity/categories'
import Link from 'next/link'
import Optional from '../Optional'
import Image from 'next/image'
import {ArticleListItem} from "@repo/sanity/selections";
import BiographyImage from "../image/BiographyImage";

const Title: FunctionComponent<{ title?: string }> = ({title}) => <div
    className={'font-sans text-xl font-bold uppercase tracking-wide'}>{title}</div>

const AbstractContent: FunctionComponent<{ abstractContent?: string }> = ({abstractContent}) => <div
    className={'font-serif text-sm text-gray'}>{abstractContent && abstractContent}</div>

const Subtitle: FunctionComponent<{ author?: string }> = ({author}) => (
    <Optional data={author}>
        <div className={'font-sans text-lg font-light uppercase tracking-widest'}>{author}</div>
    </Optional>
)

interface Props {
    data: ArticleListItem[],
    context?: CategoryContext
}

const BiographyList: FunctionComponent<Props> = async ({context, data}) => {
    return (
        <main className={'max-w-3xl'}>
            {data.map((item, index) => (
                <Link
                    prefetch={false}
                    key={item._id}
                    href={context ? `/${context.site}/${context.activeCategory?.id}/${context.activeSubcategory?.id!}/article/${item._id}` : '#'}>
                    <div
                        key={item._id! + index + (context && context.activeCategory?.id) + (context && context.activeSubcategory?.id)}
                        className={'max-w-3xl text-lg'}>
                        <div className={'flex gap-8 w-full'}>
                            <div className={'min-w-[100px] min-h-[100px]'}>
                                <BiographyImage image={item.image}/>
                            </div>
                            <div className={'mb-4'}>
                                <Title title={item.title}/>
                                <Subtitle author={item.subtitle}/>
                                <AbstractContent abstractContent={item.abstractContent}/>
                            </div>
                        </div>
                        <hr className={'my-10 text-white opacity-5'}/>
                    </div>
                </Link>
            ))}
        </main>
    )
}

export default BiographyList
