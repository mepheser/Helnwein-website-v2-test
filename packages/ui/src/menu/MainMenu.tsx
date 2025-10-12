import React, {FunctionComponent} from 'react'
import {CategoryContext} from '@repo/sanity/categories'
import Link from 'next/link'
import clsx from 'clsx'
import LanguageSelection from './LanguageSelection'
import {i18n} from '@repo/sanity/i18n'

interface Props {
  context: CategoryContext
}

const MainMenu: FunctionComponent<Props> = ({context}) => (
  <header className={'mb-10'}>
    <h1 className={'-ml-1.5 font-logo text-[80px] font-bold uppercase leading-none tracking-wide'}>
      <a href={`/${context.site}`} >
        <>
          <span className={'text-logo1'}>{i18n(context.activeCategory?.title, context.language)}</span>
          <span className={'text-logo2'}>Helnwein</span>
        </>
      </a>
    </h1>
    <ul className={'flex gap-3 font-sans text-lg uppercase tracking-widest text-gray'}>
      {context.menu.map(value => (
        <li
          key={value.id}
          className={clsx({
            'text-gray': context.activeCategory?.id !== value.id,
            'text-white': context.activeCategory?.id === value.id,
          })}
        >
          <Link href={value.link.startsWith('https://') ? value.link : `/${context.site}${value.link}`}>{i18n(value.title, context.language)}</Link>
        </li>
      ))}
    </ul>

    <LanguageSelection  />
  </header>
)

export default MainMenu
