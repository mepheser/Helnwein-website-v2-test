import React, {FunctionComponent} from 'react'
import {CategoryContext, Filter} from '@repo/sanity/categories'
import clsx from 'clsx'
import {i18n} from '@repo/sanity/i18n'
import SubmenuFilterItem from './SubmenuFilterItem'
import Link from 'next/link'

interface Props {
  context: CategoryContext,
  filter?: Filter
}

const Submenu: FunctionComponent<Props> = ({context, filter}) => {

  return (
    <aside className={'w-60 min-w-[217px]'}>
      <ul className={'flex flex-col gap-1 font-sans text-lg font-bold uppercase tracking-widest mb-32'}>
        {context.submenu
          .filter(value => !value.language || value.language === context.language)
          .map(value => (
            <li
              key={value.id}
              className={clsx({
                'text-gray': context.activeSubcategory?.id !== value.id,
                'text-white': context.activeSubcategory?.id === value.id,
              })}
            >
              <Link
                href={`/${context.site}/${context.activeCategory?.id}/${value.id}/`}>{i18n(value.id, context.language)}</Link>
            </li>
          ))}
      </ul>
      {context.activeSubcategory && context.activeSubcategory.filterGroups && (
        <>
          {context.activeSubcategory.filterGroups
            .map((value, index) => (
              <ul className={'flex flex-col gap-1 font-sans text-xs font-bold  tracking-widest mb-6 max-w-36'}
                  key={`filter-${index}`}>
                {value.filters!.map((value) => (
                  <li
                    key={value.id}
                    className={clsx({
                      'text-gray': !filter || filter.id !== value.id,
                      'text-white': filter && filter.id === value.id,
                    })}
                  >
                    <SubmenuFilterItem context={context} filter={value} />
                  </li>
                ))}
              </ul>
            ))
          }
        </>
      )}
    </aside>
  )
}

export default Submenu
