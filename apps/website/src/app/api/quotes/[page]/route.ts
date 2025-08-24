import {getQuoteList} from '@repo/sanity/queries'

export async function GET( request: Request,
                           { params }: any) {
  const data = await getQuoteList(params.page)

  return Response.json({ data })
}