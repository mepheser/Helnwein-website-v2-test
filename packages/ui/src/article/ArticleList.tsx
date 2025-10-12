import React, {FunctionComponent} from 'react'
import Optional from '../Optional'
import {ArticleListItem} from '@repo/sanity/selections'
import ArticleListImage from '../image/ArticleListImage'
import {CategoryContext} from '@repo/sanity/categories'
import {format, isDate, Locale, parseISO} from 'date-fns'
import { fr, enUS, de, it, ja, cs, ru, es } from "date-fns/locale"
import Link from 'next/link'

const locales: Record<string, Locale> = {
  'en': enUS,
  'de': de,
  'fr': fr,
  'es': es,
  'ru': ru,
  'ja': ja,
  'it': it,
  'cs': cs,
};

const Date: FunctionComponent<{displayDate?: string | Date, language: string}> = ({displayDate, language}) => {
  let date: Date | undefined = undefined;

  if (displayDate && isDate(displayDate)) {
    date = displayDate
  }

  if (displayDate && displayDate instanceof String) {
    date = parseISO(displayDate as string)
  }

  return (
    <Optional data={displayDate}>
      <div className={'font-sans text-lg font-light uppercase tracking-widest text-gray'}>
        {date && format(date, 'P', {locale: locales[language] || enUS})}
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
  className={'mb-1 mt-4 font-serif font-semibold'}>{subtitle}</div>

const AbstractContent: FunctionComponent<{abstractContent?: string}> = ({abstractContent}) => <div
  className={'font-serif'}>{abstractContent && abstractContent}</div>

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
  data: ArticleListItem[],
  context?: CategoryContext
}

const ArticleList: FunctionComponent<Props> = ({data, context}) => {
  return (
    <main className={'max-w-3xl'}>
      {data.map((item, index) => (
        <Link
          href={context ? `/article/${item._id}?site=${context.site}&category=${context.activeCategory!.id}&subcategory=${context.activeSubcategory?.id!}` : '#'}
          key={item._id}>
          <div
            key={item._id! + index + (context && context.activeCategory?.id) + (context && context.activeSubcategory?.id)}
            className={'max-w-3xl text-lg'}>
            <div className={'flex gap-8'}>
              <div>
                <ArticleListImage image={item.image} />
              </div>
              <div className={'mb-4'}>
                <div className={'flex gap-2'}>
                  <Date displayDate={item.displayDate || item.orderDate} language={context ? context.language : 'en'} />
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
