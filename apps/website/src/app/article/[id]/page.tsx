import React, {FunctionComponent, Suspense} from 'react'
import ArticleDetail from '@repo/ui/article/ArticleDetail'
import {
  getArticleDetail,
  getArticleIds,
  getArticleList,
  getBibliographyDetail,
  getBiographyDetail,
} from '@repo/sanity/queries'
import {getCategoryContext} from '@repo/sanity/categories'
import ArticleMenuWrapper from '@repo/ui/article/ArticleMenuWrapper'

export async function generateStaticParams({params}: any) {
  const articleList = await getArticleIds()
  return articleList.map((article) => ({id: article._id}))
}

const ArticleDetailPage: FunctionComponent<any> = async ({params}) => {
  let data;

    data = await getArticleDetail((await params).id)


  return (
    <Suspense fallback={null}>
      <ArticleMenuWrapper article={data} />
    </Suspense>
  )
}

export default ArticleDetailPage
