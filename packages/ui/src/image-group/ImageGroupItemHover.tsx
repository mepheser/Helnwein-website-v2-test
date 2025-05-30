'use client'

import React, {FunctionComponent} from 'react'
import {ImageGroupListItem} from '@repo/sanity/selections'

interface Props {
  data: ImageGroupListItem
}

const ImageGroupItemHover: FunctionComponent<Props> = ({data}) => {
  return (
    <div className={'absolute bottom-0 left-0 right-0 top-0 hidden flex-col items-center justify-center border-2 border-gray bg-black text-white group-hover:flex'}>
      <div className={'px-12 text-center font-sans text-2xl font-bold uppercase tracking-wider'}>{data.title}</div>
      {(data.subtitle || data.description) && <div />}
      {data.subtitle && <div className={'font-serif'}> {data.subtitle} </div>}
      {!(data.subtitle && data.description) && <div className={'font-serif'}> {data.description} </div>}
    </div>
  )
}

export default ImageGroupItemHover
