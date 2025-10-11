import React, {FunctionComponent} from 'react'
import ImageGroupList from '@repo/ui/image-group/ImageGroupList'
import {getCategoryContext} from '@repo/sanity/categories'
import {getImageGroupList} from '@repo/sanity/queries'

export async function generateStaticParams() {
  return [{id: 'test'}]
}

const ArticleDetailPage: FunctionComponent<any> = async ({params}) => {
  const context = getCategoryContext(params)
  const data = await getImageGroupList(context.activeSubcategory?.id!)
  return <ImageGroupList context={context} selected={params.id} data={data} />
}

export default ArticleDetailPage
