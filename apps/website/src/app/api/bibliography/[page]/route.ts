import {getBibliographyList} from '@repo/sanity/queries'

export async function GET( request: Request,
                           { params }: any) {
  const data = await getBibliographyList(params.page)

  return Response.json({ data })
}