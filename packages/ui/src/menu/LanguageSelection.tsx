'use client'

import React, {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/20/solid'
import LanguageSelectionItem from './LanguageSelectionItem'
import Link from 'next/link'
import sites from '@repo/sanity/sites'

export default function LanguageSelection() {
  return (
    <Popover className="">
      <div className="fixed right-4 top-4 z-30 rounded bg-black bg-opacity-80">
        <Popover.Button className="tems-center inline-flex items-center gap-x-1 rounded bg-gray bg-opacity-10 px-2 py-1.5 text-sm font-semibold uppercase leading-6 tracking-wide text-gray">
          {({open}) => (
            <>
              <span>Language</span>
              {open && <XMarkIcon className="h-5 w-5" aria-hidden="true" />}
              {!open && <Bars3Icon className="h-5 w-5" aria-hidden="true" />}
            </>
          )}
        </Popover.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="fixed left-0 right-0 top-0 z-20">
          <div className="flex h-screen w-full items-start justify-end bg-black bg-opacity-60 text-sm font-semibold leading-6">
            <div className="w-80 pt-16">
              <LanguageSelectionItem title={'Main Helnwein Site'}>
                <div className={'mr-2 flex cursor-pointer flex-col items-end gap-6 text-2xl'}>
                  {sites.map(value => (
                    <Link href={`/${value.language}`} >
                      <div>{value.site}</div>
                    </Link>
                  ))}
                </div>
              </LanguageSelectionItem>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
