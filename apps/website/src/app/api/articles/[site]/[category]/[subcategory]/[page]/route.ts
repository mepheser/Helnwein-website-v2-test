import {getArticleList} from '@repo/sanity/queries'
import {getCategoryContext} from '@repo/sanity/categories'

export async function GET( request: Request,
                           { params }: any) {
  const categoryContext = getCategoryContext(params)
  const data = await getArticleList(categoryContext, params.page)

  return Response.json({ data })
}