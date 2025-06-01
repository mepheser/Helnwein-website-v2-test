import React, {FunctionComponent} from 'react'
import ImageGroupList from '@repo/ui/image-group/ImageGroupList'
import {getCategoryContext} from '@repo/sanity/categories'

const ArticleDetailPage: FunctionComponent<any> = async ({params}) => {
  const context = getCategoryContext(params)
  return <ImageGroupList context={context} selected={params.id} />
}

export default ArticleDetailPage
