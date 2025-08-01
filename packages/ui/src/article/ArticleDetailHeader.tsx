import React, {FunctionComponent} from 'react'
import Optional from '../Optional'
import {ArticleDetail} from '@repo/sanity/selections'
import {format} from "date-fns";

const Date: FunctionComponent<{displayDate?: Date}> = ({displayDate}) => {
  if (!displayDate) {
    return null
  }

  return (
    <Optional data={displayDate}>
      <div className={'font-sans text-lg font-bold  text-gray '}>
        {format(displayDate!, 'MMMM d, yyyy')}
      </div>
    </Optional>
  )
}

const Source: FunctionComponent<{source?: string}> = ({source}) => (
  <Optional data={source}>
    <div className={'font-sans text-lg font-light uppercase tracking-widest'}>{source}</div>
  </Optional>
)

const Title: FunctionComponent<{title?: string}> = ({title}) => <div className={'font-sans text-3xl font-bold uppercase tracking-wide'}>{title}</div>

const Subtitle: FunctionComponent<{subtitle?: string}> = ({subtitle}) => <div className={'mb-1 mt-4 font-serif font-semibold italic'}>{subtitle}</div>

const AbstractContent: FunctionComponent<{abstractContent?: string}> = ({abstractContent}) => <div className={'font-serif text-[1.35rem] leading-tight'}>{abstractContent}</div>

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

interface Props {
  data: ArticleDetail
}

const ArticleDetailHeader: FunctionComponent<Props> = ({data}) => {
  console.log(data)
  return (
    <>
      <div className={'max-w-3xl text-lg'}>
        <div className={'flex gap-2'}>
          <Date displayDate={data.displayDate || data.orderDate || undefined} />
          <Source source={data.source} />
        </div>
        <Title title={data.title} />
        <Author author={data.author} />
        <AuthorDescription authorDescription={data.authorDescription} />
        <Subtitle subtitle={data.subtitle} />
        <AbstractContent abstractContent={data.abstractContent} />
      </div>
    </>
  )
}

export default ArticleDetailHeader
