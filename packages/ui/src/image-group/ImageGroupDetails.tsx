'use client'

import React, {FunctionComponent} from 'react'
import {ImageGroupListItem} from '@repo/sanity/selections'
import ImageGroupListImage from "../image/ImageGroupListImage";

interface Props {
  selected: ImageGroupListItem
}

const ImageGroupDetails: FunctionComponent<Props> = ({selected}) => {
  return (
    <div className={'w-full border border-gray p-8'}>
      <div className={'flex flex-wrap gap-4'}>
        {selected.images.map(value => (
            <ImageGroupListImage image={value} key={value._id} />
        ))}
      </div>
    </div>
  )
}

export default ImageGroupDetails
