import React, {FunctionComponent} from 'react'
import {getCategoryContext} from '@repo/sanity/categories'
import {getIntroPage} from '@repo/sanity/queries'
import Slideshow from '@repo/ui/intro/Slideshow'
import LanguageSelection from '@repo/ui/menu/LanguageSelection'
import AlternativeMainMenu from '@repo/ui/menu/AlternativeMainMenu'

const HomePage: FunctionComponent<any> = async ({params}) => {
  const categoryContext = getCategoryContext(params)
  const data = await getIntroPage(categoryContext.domain)

  return (
    <>
      <Slideshow categoryContext={categoryContext} images={data.images} />
      <LanguageSelection />
      <AlternativeMainMenu context={categoryContext} />
    </>
  )
}

export default HomePage
