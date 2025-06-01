import React, {FunctionComponent} from 'react'
import {CategoryContext} from '@repo/sanity/categories'
import Link from 'next/link'
import clsx from 'clsx'
import {i18n} from '@repo/sanity/i18n'

interface Props {
  context: CategoryContext
}

const Submenu: FunctionComponent<Props> = ({context}) => {

  return (
    <aside className={'w-60 min-w-[217px]'}>
      <ul className={'flex flex-col gap-1 font-sans text-lg font-bold uppercase tracking-widest'}>
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
              <Link href={`/${context.site}/${context.activeCategory?.id}/${value.id}/`} prefetch={false}>{i18n(value.id, context.language)}</Link>
            </li>
          ))}
      </ul>
    </aside>
  )
}

export default Submenu
