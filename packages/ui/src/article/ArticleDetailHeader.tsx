import React, {FunctionComponent} from 'react'
import Optional from '../Optional'
import {ArticleDetail} from '@repo/sanity/selections'
import {format, isDate, Locale, parseISO} from 'date-fns'
import {cs, de, enUS, es, fr, it, ja, ru} from 'date-fns/locale'
import {CategoryContext} from '@repo/sanity/categories'

const locales: Record<string, Locale> = {
  'en': enUS,
  'de': de,
  'fr': fr,
  'es': es,
  'ru': ru,
  'ja': ja,
  'it': it,
  'cs': cs,
}


const Date: FunctionComponent<{displayDate?: Date | string, language: string}> = ({displayDate, language}) => {
  let date: Date | undefined = undefined;

  if (displayDate && isDate(displayDate)) {
    date = displayDate
  }

  if (displayDate && displayDate instanceof String) {
    date = parseISO(displayDate as string)
  }

  return (
    <Optional data={displayDate}>
      <div className={'font-sans text-lg font-bold  text-gray '}>
        {date && format(date, 'PPP', {locale: locales[language] || enUS})}
      </div>
    </Optional>
  )
}

const Source: FunctionComponent<{source?: string}> = ({source}) => (
  <Optional data={source}>
    <div className={'font-sans text-lg font-light uppercase tracking-widest'}>{source}</div>
  </Optional>
)

const Title: FunctionComponent<{title?: string}> = ({title}) => <div
  className={'font-sans text-3xl font-bold uppercase tracking-wide'}>{title}</div>

const Subtitle: FunctionComponent<{subtitle?: string}> = ({subtitle}) => <div
  className={'mb-1 mt-4 font-serif font-semibold italic'}>{subtitle}</div>

const AbstractContent: FunctionComponent<{abstractContent?: string}> = ({abstractContent}) => <div
  className={'font-serif text-[1.35rem] leading-tight'}>{abstractContent}</div>

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
  data: ArticleDetail,
  context?: CategoryContext
}

const ArticleDetailHeader: FunctionComponent<Props> = ({data, context}) => {
  if (!data) {
    return null
  }

  return (
    <>
      <div className={'max-w-3xl text-lg'}>
        <div className={'flex gap-2'}>
          <Date displayDate={data.displayDate || data.orderDate || undefined} language={context ? context.language : 'en'} />
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
