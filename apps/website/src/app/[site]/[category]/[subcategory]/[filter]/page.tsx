import React, {FunctionComponent} from 'react'
import {categories, getCategoryContext, getFilter} from '@repo/sanity/categories'
import ImageGroupList from '@repo/ui/image-group/ImageGroupList'
import {
  getArticleList,
  getBibliographyList,
  getBiographyList,
  getFeedbackList,
  getImageGroupList,
  getQuoteHelnweinList,
  getQuoteList,
} from '@repo/sanity/queries'
import ArticlePage from '@/app/[site]/[category]/[subcategory]/ArticlePage'
import QuotePage from '@/app/[site]/[category]/[subcategory]/QuotePage'
import QuoteHelnweinPage from '@/app/[site]/[category]/[subcategory]/QuoteHelnweinPage'
import FeedbackPage from '@/app/[site]/[category]/[subcategory]/FeedbackPage'
import BibliographyPage from '@/app/[site]/[category]/[subcategory]/BibliographyPage'
import BiographyPage from '@/app/[site]/[category]/[subcategory]/BiographyPage'

export async function generateStaticParams({params}: any) {
  return categories
    .map(category => {
      return category.subcategories.map(subcategory => {
        const context = getCategoryContext({
          site: params.site,
          category,
          subcategory,
        })

        if (!context.activeSubcategory!.filterGroups) {
          return [[]]
        }

        return context.activeSubcategory!.filterGroups!.map(group => {
          return group.filters!.map(filter => ({
            category: category.id,
            subcategory,
            filter: filter.id
          }))
        })
      })
    })
    .flatMap(list => list)
    .flatMap(list => list)
    .flatMap(list => list)
}

const SubCategoryPage: FunctionComponent<any> = async ({params}) => {
  const categoryContext = getCategoryContext(params)
  const filter = getFilter(categoryContext, params.filter)
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
      {type === 'articleDocument' && <ArticlePage context={categoryContext} data={await getArticleList(categoryContext, 0, filter)} />}
      {type === 'imageGroupDocument' && <ImageGroupList context={categoryContext} data={await getImageGroupList(categoryContext.activeSubcategory?.id!) }/>}
      {type === 'quoteDocument' && <QuotePage data={await getQuoteList()} />}
      {type === 'quoteHelnweinDocument' && <QuoteHelnweinPage data={await getQuoteHelnweinList()} />}
      {type === 'feedbackDocument' && <FeedbackPage data={await getFeedbackList()} />}
      {type === 'biographyDocument' && <BiographyPage data={await getBiographyList()} />}
      {type === 'bibliographyDocument' && <BibliographyPage data={await getBibliographyList()} />}
    </div>
  )
}

export default SubCategoryPage
