import React, {FunctionComponent} from 'react'
import {getCategoryContext} from '@repo/sanity/categories'
import Submenu from '@repo/ui/menu/Submenu'

const bgImages = (category: string) => {
  switch (category) {
    case 'artist':
      return 'https://s3-eu-west-1.amazonaws.com/s3-helnwein-images-bucket/3762869858843386160/RAW'
    case 'videos':
      return 'https://s3-eu-west-1.amazonaws.com/s3-helnwein-images-bucket/7017233177537427814/RAW'
    case 'contact':
      return 'https://s3-eu-west-1.amazonaws.com/s3-helnwein-images-bucket/3904675179865979188/RAW'
    case 'topics':
      return 'https://s3-eu-west-1.amazonaws.com/s3-helnwein-images-bucket/3904675179865979188/RAW'
    default:
      return
  }
}

const CategoryPage: FunctionComponent<any> = async ({params}) => {
  const categoryContext = getCategoryContext(params)
  const bgImage = bgImages(categoryContext.activeCategory?.id!)

  console.log(categoryContext)

  return (
    <>
      <Submenu context={categoryContext} />
      <div className={'fixed top-0 right-0 bottom-0 left-0 -z-10'}>
        {bgImage && <img src={bgImage} alt={`Helnwein Category ${categoryContext.activeCategory?.title}`} className={'h-screen w-screen object-cover'} />}
      </div>
    </>
  )
}

export default CategoryPage
