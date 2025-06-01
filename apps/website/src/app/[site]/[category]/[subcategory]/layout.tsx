import React, {FunctionComponent} from 'react'
import {getCategoryContext} from '@repo/sanity/categories'
import Submenu from '@repo/ui/menu/Submenu'

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
    <div className={'flex'}>
      <Submenu context={categoryContext} />
      {children}
    </div>
  )
}

export default SubCategoryLayout
