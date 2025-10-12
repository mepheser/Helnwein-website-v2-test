import {q, TypeFromSelection} from 'groqd'
import {runQuery} from './liveClient'
import {
  articleIdSelection,
  articleListSelection,
  articleSelection,
  feedbackSelection,
  helnweinImageSelection,
  imageGroupListSelection,
  introPageSelection,
  quoteHelnweinSelection,
  quoteSelection,
} from './selections'
import {CategoryContext, Filter} from './categories'
import {Site} from './sites'

const pageSize = 100

export const getArticleIds = async (): Promise<TypeFromSelection<typeof articleIdSelection>[]> => {
  const query = q(`*[]`, {isArray: true})
    .filterByType('articleDocument')
    .grab$(articleIdSelection)
  return await runQuery(query)
}

export const getArticleList = async (context: CategoryContext, page = 0, filter?: Filter): Promise<TypeFromSelection<typeof articleListSelection>[]> => {
  const filterQuery = filter ? `&& ${filter.clause}` : ''

  const query = q(`*['${context.activeSubcategory?.id}' in categories && '${context.domain}' in domains ${filterQuery}]`, {isArray: true})
      .grab$(articleListSelection)
      .order(...(context.activeSubcategory?.orderCustom ? ['orderCustom asc'] : ['orderDate desc', 'orderCustom asc']))
      .slice(page * pageSize, page * pageSize + pageSize - 1)

  return await runQuery(query)
}

export const getArticleListItem = async (id: string): Promise<TypeFromSelection<typeof articleListSelection>[]> => {
  const query = q(`*[_id == '${id}']`, {isArray: true}).filterByType('articleDocument').grab$(articleListSelection)
  return await runQuery(query)
}

export const getArticleDetail = async (id: string): Promise<TypeFromSelection<typeof articleSelection>> => {
  const query = q(`*[_id == '${id}']`, {isArray: false}).filterByType('articleDocument').grab$(articleSelection)
  const result = await runQuery(query)
  return result[0]
}

export const getBibliographyDetail = async (id: string): Promise<TypeFromSelection<typeof articleSelection>> => {
  const query = q(`*[_id == '${id}']`, {isArray: false}).filterByType('bibliographyDocument').grab$(articleSelection)
  const result = await runQuery(query)
  return result[0]
}

export const getImageGroupDetail = async (id: string): Promise<TypeFromSelection<typeof imageGroupListSelection>> => {
  const query = q(`*[_id == '${id}']`, {isArray: false}).filterByType('imageGroupDocument').grab$(imageGroupListSelection)
  const result = await runQuery(query)
  return result[0]
}

export const getBiographyDetail = async (id: string): Promise<TypeFromSelection<typeof articleSelection>> => {
  const query = q(`*[_id == '${id}']`, {isArray: false}).filterByType('biographyDocument').grab$(articleSelection)
  const result = await runQuery(query)
  return result[0]
}

export const getQuoteDetail = async (id: string): Promise<TypeFromSelection<typeof quoteSelection>> => {
  const query = q(`*[_id == '${id}']`, {isArray: false}).filterByType('quoteDocument').grab$(quoteSelection)
  const result = await runQuery(query)
  return result[0]
}

export const getQuoteHelnweinDetail = async (id: string): Promise<TypeFromSelection<typeof quoteHelnweinSelection>> => {
  const query = q(`*[_id == '${id}']`, {isArray: false}).filterByType('quoteHelnweinDocument').grab$(quoteHelnweinSelection)
  const result = await runQuery(query)
  return result[0]
}

export const getImageDetail = async (id: string): Promise<TypeFromSelection<typeof helnweinImageSelection>> => {
  const query = q(`*[_id == '${id}']`, {isArray: false}).filterByType('helnweinImage').grab$(helnweinImageSelection)
  const result = await runQuery(query)
  return result[0]
}

export const getImageGroupList = async (category: string): Promise<TypeFromSelection<typeof imageGroupListSelection>[]> => {
  return await runQuery(q(`*['${category}' in categories]`, {isArray: true}).filterByType('imageGroupDocument').order('orderDate desc').grab$(imageGroupListSelection).slice(0, 100))
}

export const getBiographyList = async (page = 0): Promise<TypeFromSelection<typeof articleListSelection>[]> => {
  return await runQuery(q(`*[]`, {isArray: true})
    .filterByType('biographyDocument')
    .order('orderCustom asc', 'orderDate desc')
    .slice(page * pageSize, page * pageSize + pageSize - 1)
    .grab$(articleListSelection))
}

export const getBibliographyList = async (page = 0): Promise<TypeFromSelection<typeof articleListSelection>[]> => {
  return await runQuery(q(`*[]`, {isArray: true})
    .filterByType('bibliographyDocument')
    .order('orderCustom asc', 'orderDate desc')
    .slice(page * 100, page * pageSize + 100 - 1)
    .grab$(articleListSelection))
}

export const getImageMeta = async (id: string): Promise<TypeFromSelection<typeof helnweinImageSelection>> => {
  const result = await runQuery(q(`*[_id == '${id}']`, {isArray: true})
    .filterByType('helnweinImage')
    .grab$(helnweinImageSelection),
  )
  return result[0]
}

export const getIntroPage = async (domain: string): Promise<TypeFromSelection<typeof introPageSelection>> => {
  let result = await runQuery(q(`*[domain == '${domain}']`, {isArray: true}).filterByType('introPage').grab$(introPageSelection))

  if (!result[0]) {
    result = await runQuery(q(`*[domain == 'main-en']`, {isArray: true}).filterByType('introPage').grab$(introPageSelection))
  }

  return result[0]
}

export const getQuoteList = async (page = 0): Promise<TypeFromSelection<typeof quoteSelection>[]> => {
  return await runQuery(q(`*[]`, {isArray: true})
    .filterByType('quoteDocument')
    .order('orderDate desc')
    .slice(page * pageSize, page * pageSize + pageSize - 1)
    .grab$(quoteSelection))
}

export const getQuoteHelnweinList = async (page = 0): Promise<TypeFromSelection<typeof quoteHelnweinSelection>[]> => {
  return await runQuery(q(`*[]`, {isArray: true})
    .filterByType('quoteHelnweinDocument')
    .order('orderDate desc')
    .slice(page * pageSize, page * pageSize + pageSize - 1)
    .grab$(quoteHelnweinSelection))
}


export const getFeedbackList = async (page = 0): Promise<TypeFromSelection<typeof feedbackSelection>[]> => {
  return await runQuery(q(`*[]`, {isArray: true})
    .filterByType('feedbackDocument')
    .order('orderDate desc')
    .slice(page * pageSize, page * pageSize + pageSize - 1)
    .grab$(feedbackSelection))
}





