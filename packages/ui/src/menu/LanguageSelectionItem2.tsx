import React, {FunctionComponent} from 'react'
import Image from 'next/image'

const Title: FunctionComponent<{title?: string}> = ({title}) => <div className={'font-sans text-3xl font-bold uppercase tracking-wide'}>{title}</div>

const AbstractContent: FunctionComponent<{abstractContent?: string}> = ({abstractContent}) => (
  <div className={'mt-4 font-serif font-normal'}>{abstractContent && abstractContent.substring(0, 200)}</div>
)

const Thumbnail: FunctionComponent<{url: string}> = ({url}) => (
  <div style={{minWidth: 150, minHeight: 200, height: 200}} className={'relative'}>
    <Image alt={'Thumbnail'} fill={true} src={url} />
  </div>
)

interface Props {}

const LanguageSelectionItem2: FunctionComponent<Props> = () => {
  return (
    <div className={'max-w-3xl text-lg'}>
      <div className={'flex gap-8'}>
        <Thumbnail url={`https://s3-eu-west-1.amazonaws.com/s3-helnwein-images-bucket/4453/ARTICLE_LIST`} />
        <div className={'mb-4'}>
          <Title title={'Main Helnwein Site'} />
          <AbstractContent
            abstractContent={
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
            }
          />
          <div className={'mt-4 flex flex-wrap gap-2'}>
            <div>DEUTSCH</div>
            <div>ENGLISH</div>
            <div>ČEŠTINA</div>
            <div>ESPAÑOL</div>
            <div>ITALIANO</div>
            <div>FRANÇAIS</div>
            <div>POLSKI</div>
            <div>РУССКИЙ</div>
            <div>日本語</div>
            <div>中文</div>
          </div>
        </div>
      </div>
      <hr className={'my-10 text-white opacity-5'} />
    </div>
  )
}

export default LanguageSelectionItem2
