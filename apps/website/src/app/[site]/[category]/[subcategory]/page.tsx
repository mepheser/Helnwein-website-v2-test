import React, {FunctionComponent} from 'react'
import {getCategoryContext} from '@repo/sanity/categories'
import ArticleList from '@repo/ui/article/ArticleList'
import ImageGroupList from '@repo/ui/image-group/ImageGroupList'
import QuoteList from '@repo/ui/quote/QuoteList'
import QuoteHelnweinList from '@repo/ui/quote/QuoteHelnweinList'
import FeedbackList from '@repo/ui/quote/FeedbackList'
import BiographyList from '@repo/ui/article/BiographyList'
import BibliographyList from '@repo/ui/article/BibliographyList'
import {
  getArticleList,
  getBibliographyList,
  getBiographyList,
  getImageGroupList,
  getQuoteHelnweinList,
  getQuoteList,
} from '@repo/sanity/queries'

const SubCategoryPage: FunctionComponent<any> = async ({params}) => {
  const categoryContext = getCategoryContext(params)
  const type = categoryContext.activeSubcategory?.type

  return (
    <div>
      {categoryContext.activeSubcategory?.id === 'special_music' && (
        <div className={'mb-8'}>
          <div>Texts, reviews and essays referring to the art of Gottfried Helnwein in relation to music.</div>
          <div>Texte, Rezensionen und Essays über die Kunst von Gottfried Helnwein im Verhältnis zur Musik.</div>
        </div>
      )}
      {categoryContext.activeSubcategory?.id === 'special_museum' && (
        <div className={'mb-8'}>
          <div>Texts, reviews and essays referring to the art of Gottfried Helnwein in Museums, important art-collections and installations in public spaces.</div>
          <div>Texte, Rezensionen und Essays die sich auf die Kunst von Gottfried Helnwein in Museen, Sammlungen und im Öffentlichen Raum beziehen.</div>
        </div>
      )}
      {categoryContext.activeSubcategory?.id === 'special_photography' && (
        <div className={'mb-8'}>
          <div>Texts, reviews and essays referring to the photographic work of Gottfried Helnwein.</div>
          <div>Texte, Rezensionen und Essays, die sich auf das photographische Werk von Gottfried Helnwein beziehen.</div>
        </div>
      )}
      {categoryContext.activeSubcategory?.id === 'special_theater' && (
        <div className={'mb-8'}>
          <div>Texts, reviews and essays about Gottfried Helnwein's work for the stage. Theater, ballet, opera, video and film. Stage design, costumes, make-up and maskes.</div>
          <div>Texte, Rezensionen und Essays, über Gottfried Helnweins Arbeit für die Bühne. Theater, Ballet, Oper, Video und Film. Bühnenbild, Licht, Kostüme und Maske.</div>
        </div>
      )}
      {type === 'articleDocument' && <ArticleList context={categoryContext} data={await getArticleList(categoryContext)} />}
      {type === 'imageGroupDocument' && <ImageGroupList context={categoryContext} data={await getImageGroupList(categoryContext.activeSubcategory?.id!) }/>}
      {type === 'quoteDocument' && <QuoteList data={await getQuoteList()} />}
      {type === 'quoteHelnweinDocument' && <QuoteHelnweinList data={await getQuoteHelnweinList()} />}
      {type === 'feedbackDocument' && <FeedbackList context={categoryContext} />}
      {type === 'biographyDocument' && <BiographyList context={categoryContext} data={await getBiographyList()} />}
      {type === 'bibliographyDocument' && <BibliographyList context={categoryContext} data={await getBibliographyList()} />}
    </div>
  )
}

export default SubCategoryPage
