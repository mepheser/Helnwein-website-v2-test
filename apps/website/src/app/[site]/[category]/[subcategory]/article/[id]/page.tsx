import React, {FunctionComponent} from 'react'
import ArticleDetail from '@repo/ui/article/ArticleDetail'
import {getArticleDetail, getBibliographyDetail, getBiographyDetail} from '@repo/sanity/queries'
import {getCategoryContext} from '@repo/sanity/categories'

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
