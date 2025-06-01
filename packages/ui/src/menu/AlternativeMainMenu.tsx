import React, {FunctionComponent} from 'react'
import {CategoryContext} from '@repo/sanity/categories'
import Link from 'next/link'
import clsx from 'clsx'
import {i18n} from '@repo/sanity/i18n'

interface Props {
  context: CategoryContext
}

const AlternativeMainMenu: FunctionComponent<Props> = ({context}) => (
  <header className={'fixed bottom-0 z-10 flex w-screen items-center justify-end bg-black bg-opacity-80 px-4 py-4'}>
    <ul className={'text flex gap-3 font-sans uppercase tracking-widest text-white'}>
      {context.menu.map(value => (
        <li
          key={value.id}
          className={clsx({
            'text-gray': context.activeCategory?.id !== value.id,
            'text-white': context.activeCategory?.id === value.id,
          })}
        >
          <a href={`/${context.site}/${value.link}`} >{i18n(value.title, context.language)}</a>
        </li>
      ))}
    </ul>
  </header>
)

export default AlternativeMainMenu
