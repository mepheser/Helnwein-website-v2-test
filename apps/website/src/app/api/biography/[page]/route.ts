import {getBiographyList} from '@repo/sanity/queries'

export async function GET(request: Request, {params}: any) {
  const data = await getBiographyList(params.page)
  return Response.json({data})
}