import {getFeedbackList, getQuoteList} from '@repo/sanity/queries'

export async function GET( request: Request,
                           { params }: any) {
  const data = await getFeedbackList(params.page)

  return Response.json({ data })
}