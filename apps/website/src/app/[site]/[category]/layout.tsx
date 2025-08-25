import React, {FunctionComponent} from 'react'
import {getCategoryContext} from '@repo/sanity/categories'
import MainMenu from '@repo/ui/menu/MainMenu'

interface Props {
  children: React.ReactNode
  params: Promise<{
    category: string
    subcategory: string
  }>
}

const CategoryLayout: FunctionComponent<Props> = ({children, params}) => {
  const categoryContext = getCategoryContext(params)

  if (!categoryContext.activeCategory) {
    return null
  }

  return (
    <div className={'p-4'}>
      <MainMenu context={categoryContext} />
      {children}
    </div>
  )
}

export default CategoryLayout
