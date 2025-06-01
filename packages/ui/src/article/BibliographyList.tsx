import React, {FunctionComponent} from 'react'
import {CategoryContext} from '@repo/sanity/categories'
import Link from 'next/link'
import ArticleListImage from '../image/ArticleListImage'
import {ArticleListItem} from "@repo/sanity/selections";

interface Props {
  data: ArticleListItem[]
  context?: CategoryContext
}

const BibliographyList: FunctionComponent<Props> = async ({context, data}) => {
  return (
    <main className={'flex flex-wrap gap-2'}>
      {data.filter((value, index) => index < 50).map((item) => (
        <a href={context ? `/${context.site}/${context.activeCategory?.id}/${context.activeSubcategory?.id!}/article/${item._id}` : '#'} key={item._id} >
          <ArticleListImage image={item.image} />
        </a>
      ))}
    </main>
  )
}

export default BibliographyList
