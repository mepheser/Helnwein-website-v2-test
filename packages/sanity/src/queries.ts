import {q, TypeFromSelection} from 'groqd'
import {runQuery} from './liveClient'
import {
  articleListSelection,
  articleSelection,
  helnweinImageSelection, imageGroupListSelection,
  quoteHelnweinSelection,
  quoteSelection
} from './selections'
import {CategoryContext} from "./categories";

export const getArticleList = async (context: CategoryContext): Promise<TypeFromSelection<typeof articleListSelection>[]> => {
  const query = q(`*['${context.activeSubcategory?.id}' in categories && '${context.domain}' in domains]`, {isArray: true})
      .filterByType('articleDocument')
      .grab$(articleListSelection)
      .order(...(context.activeSubcategory?.orderCustom ? ['orderCustom asc'] : ['orderDate desc', 'orderCustom asc']))

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

export const getBiographyList = async (): Promise<TypeFromSelection<typeof articleListSelection>[]> => {
  return await runQuery(q(`*[]`, {isArray: true}).filterByType('biographyDocument').order('orderCustom asc', 'orderDate desc').grab$(articleListSelection).slice(0, 100))
}

export const getBibliographyList = async (): Promise<TypeFromSelection<typeof articleListSelection>[]> => {
  return await runQuery(q(`*[]`, {isArray: true}).filterByType('bibliographyDocument').order('orderDate desc').grab$(articleListSelection))
}

export const getImageMeta = async (id: string): Promise<TypeFromSelection<typeof helnweinImageSelection>> => {
  const result = await runQuery(q(`*[_id == '${id}']`, {isArray: true})
      .filterByType('helnweinImage')
      .grab$(helnweinImageSelection)
  )
  return result[0]
}


