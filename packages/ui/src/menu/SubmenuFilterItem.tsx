import React, {FunctionComponent} from 'react'
import {CategoryContext, Filter} from '@repo/sanity/categories'
import Link from 'next/link'

interface Props {
    context: CategoryContext,
    filter: Filter,
}

const SubmenuFilterItem: FunctionComponent<Props> = ({context, filter}) => {
  return (
    <Link
      href={`/${context.site}/${context.activeCategory?.id}/${context.activeSubcategory?.id}/${filter.id}`}>
      {filter.label}
    </Link>
  )
}

export default SubmenuFilterItem