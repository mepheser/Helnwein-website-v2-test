import React, {FunctionComponent} from 'react'
import Link from 'next/link'
import Optional from '../Optional'
import Image from 'next/image'
import {ArticleListItem} from "@repo/sanity/selections";
import ThumbnailImage from "../image/ThumbnailImage";
import {CategoryContext} from "@repo/sanity/categories";

const Date: FunctionComponent<{displayDate?: string}> = ({displayDate}) => (
  <Optional data={displayDate}>
    <div className={'font-sans text-lg font-light uppercase tracking-widest text-gray'}>{displayDate}</div>
  </Optional>
)

const Source: FunctionComponent<{source?: string}> = ({source}) => (
  <Optional data={source}>
    <div className={'font-sans text-lg font-light uppercase tracking-widest'}>{source}</div>
  </Optional>
)

const Title: FunctionComponent<{title?: string}> = ({title}) => <div className={'font-sans text-3xl font-bold uppercase tracking-wide'}>{title}</div>

const Subtitle: FunctionComponent<{subtitle?: string}> = ({subtitle}) => <div className={'mb-1 mt-4 font-serif font-semibold'}>{subtitle}</div>

const AbstractContent: FunctionComponent<{abstractContent?: string}> = ({abstractContent}) => <div className={'font-serif'}>{abstractContent && abstractContent.substring(0, 200)}</div>

const Author: FunctionComponent<{author?: string}> = ({author}) => (
  <Optional data={author}>
    <div className={'font-sans text-lg font-light uppercase tracking-widest'}>{author}</div>
  </Optional>
)

const AuthorDescription: FunctionComponent<{authorDescription?: string}> = ({authorDescription}) => (
  <Optional data={authorDescription}>
    <div className={'font-sans text-lg font-light uppercase tracking-widest'}>{authorDescription}</div>
  </Optional>
)

const Thumbnail: FunctionComponent<{item: any}> = ({item}) => (
  <div style={{minWidth: 150, minHeight: 200, height: 200}} className={'relative -z-10'}>
    {item.previewImageId && item.previewImageId !== '0' && <Image alt={'Thumbnail'} fill={true} src={`/${item.previewImageId}/ARTICLE_LIST`} />}
  </div>
)

interface Props {
  data: ArticleListItem[],
  context?: CategoryContext
}

const ArticleList: FunctionComponent<Props> = async ({data, context}) => {
  return (
    <main className={'max-w-3xl'}>
      {data.map((item, index) => (
        <Link href={context ? `/${context.site}/${context.activeCategory?.id}/${context.activeSubcategory?.id!}/article/${item._id}` : '#'} key={item._id}>
          <div key={item._id! + index + (context && context.activeCategory?.id) + (context && context.activeSubcategory?.id)} className={'max-w-3xl text-lg'}>
            <div className={'flex gap-8'}>
              <ThumbnailImage image={item.image} />
              <div className={'mb-4'}>
                <div className={'flex gap-2'}>
                  <Date displayDate={undefined} />
                  <Source source={item.source} />
                </div>
                <Title title={item.title} />
                <Author author={item.author} />
                <AuthorDescription authorDescription={item.authorDescription} />
                <Subtitle subtitle={item.subtitle} />
                <AbstractContent abstractContent={item.abstractContent} />
              </div>
            </div>
            <hr className={'my-10 text-white opacity-100'} />
          </div>
        </Link>
      ))}
    </main>
  )
}

export default ArticleList
