import React, {FunctionComponent, Suspense} from 'react'
import {categories, FilterGroup, getCategoryContext, getFilter, getSubcategory} from '@repo/sanity/categories'
import Submenu from '@repo/ui/menu/Submenu'
import {filterReqHeaders} from 'next/dist/server/lib/server-ipc/utils'

export async function generateStaticParams() {
  const staticParams = categories
    .map(category => {
      return category.subcategories.map(subcategoryId => {
        const subcategory = getSubcategory(subcategoryId)
        const filterPageProps = subcategory!.filterGroups ? subcategory!.filterGroups!
          .filter(filterGroup => filterGroup.filters && filterGroup.filters.length > 0)
          .map((filterGroup: FilterGroup) => {
            return filterGroup.filters?.map(filter => ({
              site: 'en',
              category: category.id,
              subcategory: subcategoryId,
              filter: filter.id
            }))
            .flatMap(list => list)
          }) : []

        return [{
          site: 'en',
          category: category.id,
          subcategory: subcategoryId,
          filter: 'all'
        }, ...filterPageProps]
          .flatMap(list => list)

      })
    })
    .flatMap(list => list)
    .flatMap(list => list)

  return staticParams
}

interface Props {
  children: React.ReactNode
  params: Promise<{
    category: string
    subcategory: string,
    filter: string
  }>
}

const SubCategoryLayout: FunctionComponent<Props> = async ({children, params}) => {
  const awaitedParams = await params
  const categoryContext = getCategoryContext(awaitedParams)
  const filter = getFilter(categoryContext, (await params).filter)

  if (!categoryContext.activeCategory || !categoryContext.activeSubcategory) {
    return null
  }

  return (
    <div className={'flex'}>
      <Submenu context={categoryContext} filter={filter}/>
      {children}
    </div>
  )
}

export default SubCategoryLayout
