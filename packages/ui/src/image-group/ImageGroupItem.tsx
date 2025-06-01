'use client'

import React, {FunctionComponent, useCallback, useEffect, useRef} from 'react'
import {ImageGroupListItem} from '@repo/sanity/selections'
import {CategoryContext} from '@repo/sanity/categories'
import {useRouter} from 'next/navigation'
import ImageGroupItemHover from './ImageGroupItemHover'
import ImageGroupItemSelected from './ImageGroupItemSelected'
import ImageGroupPreviewImage from '../image/ImageGroupPreviewImage'
import ImageGroupItemLabel from './ImageGroupItemLabel'

interface Props {
  data: ImageGroupListItem
  context?: CategoryContext
  isSelected: boolean
}

const href = (context: CategoryContext, data: ImageGroupListItem, isSelected: boolean) => {
  if (!context) {
    return '#'
  }

  return isSelected
    ? `/${context.site}/${context.activeCategory?.id}/${context.activeSubcategory?.id}/`
    : `/${context.site}/${context.activeCategory?.id}/${context.activeSubcategory?.id}/imagegroup/${data._id}`
}

const ImageGroupItem: FunctionComponent<Props> = ({data, context, isSelected}) => {
  const ref = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (!isSelected) {
      return
    }

    const top = ref.current!.offsetTop
    window.scroll({top})
  }, [isSelected])

  return (
    <a href={context ? href(context, data, isSelected) : '#'}>
      <div className={'group relative h-[235px] w-[300px] cursor-pointer'} ref={ref}>
        <ImageGroupPreviewImage image={data.image} />
        {(context === undefined || context.activeSubcategory!.id === 'studio') && <ImageGroupItemLabel data={data} />}
        <ImageGroupItemHover data={data} />
        {isSelected && <ImageGroupItemSelected data={data} />}
        {isSelected && (
          <div className={'absolute left-1/2 h-8 w-[1px] bg-gray'}></div>
        )}
      </div>
    </a>
  )
}

export default ImageGroupItem
