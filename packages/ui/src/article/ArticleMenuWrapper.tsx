'use client'

import React, {FunctionComponent} from 'react';
import {ArticleDetail as ArticleDetailType} from '@repo/sanity/selections'
import {useSearchParams} from 'next/navigation'
import {getCategoryContext} from '@repo/sanity/categories'
import ArticleDetail from './ArticleDetail'
import MainMenu from '../menu/MainMenu'
import Submenu from '../menu/Submenu'

interface Props {
    article: ArticleDetailType
}

const ArticleMenuWrapper: FunctionComponent<Props> = ({article}) => {
  const searchParams = useSearchParams()
  const categoryContext = getCategoryContext({
    site: searchParams.get('site'),
    category: searchParams.get('category'),
    subcategory: searchParams.get('subcategory'),
  })

  return (
    <div className={'p-4'}>
      <MainMenu context={categoryContext} />
      <div className={'flex'}>
        <Submenu context={categoryContext} />
        <ArticleDetail data={article} context={categoryContext} />
      </div>
    </div>
  )
}

export default ArticleMenuWrapper