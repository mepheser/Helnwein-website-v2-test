import {getBiographyList} from '@repo/sanity/queries'

export async function GET() {
  const data = await getBiographyList(params.page)
  return Response.json({data})
}