import React, {FunctionComponent} from 'react'
import ArticleDetailHeader from "./ArticleDetailHeader";
import ArticleDetailContent from "./ArticleDetailContent";
import {CategoryContext} from '@repo/sanity/categories'

interface Props {
  data: any,
  context?: CategoryContext,
}

const ArticleDetail: FunctionComponent<Props> = async ({data, context}) => {
  if (!data) {
    return null
  }

  return (
    <div>
      <ArticleDetailHeader data={data} context={context}/>
      <ArticleDetailContent data={data} />
    </div>
  )
}

export default ArticleDetail
