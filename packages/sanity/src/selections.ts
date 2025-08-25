import {q, Selection, TypeFromSelection} from 'groqd'

export type ArticleDetail = TypeFromSelection<typeof articleSelection>
export type ArticleListItem = TypeFromSelection<typeof articleListSelection>
export type QuoteDetail = TypeFromSelection<typeof quoteSelection>
export type QuoteHelnweinDetail = TypeFromSelection<typeof quoteHelnweinSelection>
export type HelnweinImage = TypeFromSelection<typeof helnweinImageSelection>
export type ImageGroupListItem = TypeFromSelection<typeof imageGroupListSelection>
export type IntroImage = TypeFromSelection<typeof introImageSelection>

const imageSelection = {
  asset: q('asset').grab$({
    _ref: q.string(),
  }),
  name: q.string().optional()
} satisfies Selection

export const image = (fieldName: string) => q(fieldName).grab$(imageSelection).nullable()

export const articleMetaDataSelection = {
  _id: q.string(),
} satisfies Selection

export const contentSelection = {
  _id: q.string(),
} satisfies Selection


export const sanityImageSelection = {
  asset: q.object({
    _ref: q.string(),
  }).optional(),
  hotspot: q.unknown().optional(),
  crop: q.unknown().optional(),
} satisfies Selection


export const helnweinImageSelection = {
  _id: q.string(),
  _createdAt: q.date(),
  _updatedAt: q.date(),
  externalId: q.string().optional(),
  width: q.string().optional(),
  height: q.string().optional(),
  name: q.string().optional(),
  image: q('image').grab$(sanityImageSelection),
  takenat: q.date().optional()
} satisfies Selection

export const introImageSelection = {
  color1: q.unknown(),
  color2: q.unknown(),
  image: q('image').deref().grab$(helnweinImageSelection),
} satisfies Selection

const articleImageSelection = {
  externalId: q.string(),
  name: q.string().optional(),
  takenat: q.date().optional()
} satisfies Selection

export const articleSelection = {
  title: q.string().optional(),
  subtitle: q.string().optional(),
  abstractContent: q.string().optional(),
  source: q.string().optional(),
  sourceDescription: q.string().optional(),
  author: q.string().optional(),
  authorDescription: q.string().optional(),
  displayDate: q.date().optional(),
  orderDate: q.date().optional(),
  content: q('content')
    .filter()
    .select({
      '_type == "block"': ['{...}', q.contentBlock()],
      '_type == "imagePart"': {
        _type: q.literal('imagePart'),
        image: q('image').deref().grab$(helnweinImageSelection).nullable(),
        imageMeta: q('image->').grab$(articleImageSelection).nullable()
      },
      '_type == "linkPart"': {
        _type: q.literal('linkPart'),
        title: q.unknown().optional(),
        header: q.unknown().optional(),
        url: q.unknown().optional(),
      },
      default: {
        _key: q.string(),
        _type: ['"unsupported"', q.literal('unsupported')],
        unsupportedType: ['_type', q.string()],
      },
    }).nullable(),
} satisfies Selection

export const articleListSelection = {
  _id: q.string(),
  title: q.string().optional(),
  orderCustom: q.string().optional(),
  orderDate: q.date().optional(),
  displayDate: q.date().optional(),
  subtitle: q.string().optional(),
  abstractContent: q.string().optional(),
  source: q.string().optional(),
  sourceDescription: q.string().optional(),
  author: q.string().optional(),
  authorDescription: q.string().optional(),
  previewImageId: ['image -> externalId', q.string().optional()],
  image: q('image').deref().grab$(helnweinImageSelection).nullable(),
} satisfies Selection

export const imageGroupListSelection = {
  _id: q.string(),
  title: q.string().optional(),
  subtitle: q.string().optional(),
  description: q.string().optional(),
  imageId: ['image -> externalId', q.string()],
  image: q('image').deref().grab$(helnweinImageSelection).nullable(),
  images: q('images').filter().deref().grab$(helnweinImageSelection),
} satisfies Selection

export const quoteSelection = {
  _id: q.string(),
  abstractContent: q.string().optional(),
  source: q.string().optional(),
  sourceDescription: q.string().optional(),
  author: q.string().optional(),
  authorDescription: q.string().optional(),
} satisfies Selection

export const quoteHelnweinSelection = {
  _id: q.string(),
  abstractContent: q.string().optional(),
  source: q.string().optional(),
  sourceDescription: q.string().optional(),
} satisfies Selection

export const feedbackSelection = {
  _id: q.string(),
  abstractContent: q.string().optional(),
  source: q.string().optional(),
  sourceDescription: q.string().optional(),
  author: q.string().optional(),
  authorDescription: q.string().optional(),
} satisfies Selection

export const introPageSelection = {
  _id: q.string(),
  images: q('images').filter().grab$(introImageSelection),
} satisfies Selection
