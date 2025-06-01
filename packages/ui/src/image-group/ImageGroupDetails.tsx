'use client'

import React, {FunctionComponent} from 'react'
import {ImageGroupListItem} from '@repo/sanity/selections'
import ImageGroupListImage from '../image/ImageGroupListImage'
import {Gallery, Item} from 'react-photoswipe-gallery'

import 'photoswipe/dist/photoswipe.css'
import {createImageLoader, Format, imageUrl} from '../image/imateUtils'
import {getImageDimensions} from '@sanity/asset-utils'

interface Props {
  selected: ImageGroupListItem
}

const ImageGroupDetails: FunctionComponent<Props> = ({selected}) => {
  const loader = createImageLoader()

  return (
    <div className={'w-full border border-gray p-8'}>
      <div className={'flex flex-wrap gap-4'}>
        <Gallery options={{bgOpacity: 1}}>
          {selected.images.map(value => (
            <Item
              original={loader({src: imageUrl(value, Format.RAW)})}
              thumbnail={loader({src: imageUrl(value, Format.GROUP_THUMBNAIL)})}
              width={getImageDimensions(value.image.asset!).width}
              height={getImageDimensions(value.image.asset!).height}
              key={value._id}
            >
              {({ ref, open }: any) => (
                <div onClick={open} ref={ref}>
                  <ImageGroupListImage image={value} />
                </div>
              )}
            </Item>
          ))}
        </Gallery>
      </div>
    </div>
  )
}

export default ImageGroupDetails
