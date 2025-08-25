'use client'

import React, {FunctionComponent} from 'react';
import {CategoryContext, Filter} from '@repo/sanity/categories'
import { useSearchParams } from 'next/navigation'
import clsx from 'clsx'

interface Props {
    context: CategoryContext,
    filter: Filter,
}

const SubmenuFilterItem: FunctionComponent<Props> = ({context, filter}) => {
  const searchParams = useSearchParams()
  const currentFilterId = searchParams.get('filter')

  return (
    <a
      className={clsx(currentFilterId === filter.id && 'text-white')}
      href={`/${context.site}/${context.activeCategory?.id}/${context.activeSubcategory?.id}/?filter=${filter.id}`}>
      {filter.label}
    </a>
  )
}

export default SubmenuFilterItem