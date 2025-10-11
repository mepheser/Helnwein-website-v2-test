import React, {FunctionComponent, Suspense} from 'react'
import {categories, getCategoryContext} from '@repo/sanity/categories'
import Submenu from '@repo/ui/menu/Submenu'

export async function generateStaticParams() {
  return categories
    .map(category => {
      return category.subcategories.map(subcategory => ({
        category: category.id,
        subcategory
      }))
    })
    .flatMap(list => list)
}

interface Props {
  children: React.ReactNode
  params: Promise<{
    category: string
    subcategory: string
  }>
}

const SubCategoryLayout: FunctionComponent<Props> = async ({children, params}) => {
  const awaitedParams = await params
  const categoryContext = getCategoryContext(awaitedParams)

  if (!categoryContext.activeCategory || !categoryContext.activeSubcategory) {
    return null
  }

  return (
    <Suspense fallback={''}>
      <div className={'flex'}>
        <Submenu context={categoryContext} />
        {children}
      </div>
    </Suspense>
  )
}

export default SubCategoryLayout
