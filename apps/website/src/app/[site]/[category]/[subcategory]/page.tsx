import {FunctionComponent} from 'react'
import {redirect} from 'next/navigation'
import {categories, FilterGroup, getSubcategory} from '@repo/sanity/categories'

export async function generateStaticParams() {
  return  categories
    .map(category => {
      return category.subcategories.map(subcategoryId => {
        return {
          site: 'en',
          category: category.id,
          subcategory: subcategoryId,
        }
      })
    })
    .flatMap(list => list)
}

const HomePage: FunctionComponent<any> = async ({params}: any) => {
  const {site, category, subcategory} = await params
  redirect(`/${site}/${category}/${subcategory}/all`)
}

export default HomePage
