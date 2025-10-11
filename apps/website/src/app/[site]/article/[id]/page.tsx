import React, {FunctionComponent} from 'react'
import ArticleDetail from '@repo/ui/article/ArticleDetail'
import {
  getArticleDetail,
  getArticleIds,
  getArticleList,
  getBibliographyDetail,
  getBiographyDetail,
} from '@repo/sanity/queries'
import {getCategoryContext} from '@repo/sanity/categories'

export async function generateStaticParams({params}: any) {
  const categoryContext = getCategoryContext(params)

  const articleList = await getArticleIds(categoryContext.domain)

  console.log('found articleList', articleList.length, categoryContext.site)
  return articleList.map((article) => ({id: article._id}))
}

const ArticleDetailPage: FunctionComponent<any> = async ({params}) => {
  const {subcategory, id} = await params
  const categoryContext = getCategoryContext(params)

  let data;

  if (subcategory === 'biography') {
    data = await getBiographyDetail(id)
  } else if (subcategory === 'bibliography') {
    data = await getBibliographyDetail(id)
  } else {
    data = await getArticleDetail(id)
  }


  return <ArticleDetail data={data} context={categoryContext}/>
}

export default ArticleDetailPage
