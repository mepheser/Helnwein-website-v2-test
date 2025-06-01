'use client'

import React, {FunctionComponent} from 'react'
import {ImageGroupListItem} from '@repo/sanity/selections'

interface Props {
  data: ImageGroupListItem
}

const ImageGroupItemHover: FunctionComponent<Props> = ({data}) => {
  return (
    <div className={'absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center border-2 border-gray bg-gray text-black'}>
      <div className={'px-12 text-center font-sans text-2xl font-bold uppercase tracking-wider'}>{data.title}</div>
      {(data.subtitle || data.description) && <div className={'h-0.5 w-12 bg-black my-4'}/>}
      {data.subtitle && <div className={'font-serif text-center px-4'}> {data.subtitle} </div>}
      {!(data.subtitle && data.description) && <div className={'font-serif text-center px-4'}> {data.description} </div>}
    </div>
  )
}

export default ImageGroupItemHover
