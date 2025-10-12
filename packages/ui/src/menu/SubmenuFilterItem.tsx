'use client'

import React, {FunctionComponent} from 'react';
import {CategoryContext, Filter} from '@repo/sanity/categories'
import { useSearchParams } from 'next/navigation'
import clsx from 'clsx'
import Link from 'next/link'

interface Props {
    context: CategoryContext,
    filter: Filter,
}

const SubmenuFilterItem: FunctionComponent<Props> = ({context, filter}) => {
  const searchParams = useSearchParams()
  const currentFilterId = searchParams.get('filter')

  return (
    <Link
      className={clsx(currentFilterId === filter.id && 'text-white')}
      href={`/${context.site}/${context.activeCategory?.id}/${context.activeSubcategory?.id}/${filter.id}`}>
      {filter.label}
    </Link>
  )
}

export default SubmenuFilterItem