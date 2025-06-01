import React, {FunctionComponent} from 'react'
import ArticleDetail from '@repo/ui/article/ArticleDetail'
import {getArticleDetail} from '@repo/sanity/queries'

const ArticleDetailPage: FunctionComponent<any> = async ({params}) => {
  const data = await getArticleDetail(params.id)
  return <ArticleDetail data={data} />
}

export default ArticleDetailPage
