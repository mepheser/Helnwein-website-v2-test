'use client'

import React, {FunctionComponent} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import {IntroImage} from '@repo/sanity/selections'
import Image from 'next/image'
import {CategoryContext} from '@repo/sanity/categories'
import {default as SwiperCore} from 'swiper'
import {Autoplay, EffectFade} from 'swiper/modules'
import Link from 'next/link'
import {createImageLoader, Format, imageUrl} from "../image/imateUtils";

SwiperCore.use([Autoplay, EffectFade])

interface Props {
  categoryContext: CategoryContext
  images: IntroImage[]
}

const Slideshow: FunctionComponent<Props> = ({images, categoryContext}) => {
  return (
    <Swiper
      style={{height: 'calc(100vh)'}}
      className="absolute"
      autoplay={{
        waitForTransition: true,
        delay: 2500,
      }}
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      speed={1200}
    >
      {images.map(image => (
        <SwiperSlide key={image.image._id}>
          <Link href={`/${categoryContext.site}/news/news_update`} prefetch={false}>
            <div className="relative h-screen w-screen">
              <Image src={imageUrl(image.image, Format.RAW)} loader={createImageLoader()} fill={true} alt={image.image.name || 'Helnwein'} className={'object-cover'} />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slideshow
