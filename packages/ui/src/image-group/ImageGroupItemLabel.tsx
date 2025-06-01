'use client'

import React, {FunctionComponent} from 'react'
import {ImageGroupListItem} from '@repo/sanity/selections'

interface Props {
  data: ImageGroupListItem
}

const ImageGroupItemLabel: FunctionComponent<Props> = ({data}) => {
  return (
    <div className={'absolute bottom-0 left-0 right-0 top-0 group-hover:hidden flex-col items-center justify-center bg-transparent text-white flex'}>
      <div className={'px-6 py-4 border border-gray'}>
            <div className={'text-center font-sans text-2xl font-bold uppercase tracking-widest  text-gray '}>{data.title}</div>
      </div>
    </div>
  )
}

export default ImageGroupItemLabel
