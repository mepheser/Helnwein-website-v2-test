import sites from './sites'

export interface CategoryContext {
  site: string
  language: string
  domain: string
  siteLabel: string
  menu: Category[]
  submenu: Subcategory[]
  activeCategory?: Category
  activeSubcategory?: Subcategory
}

export interface Category {
  id: string
  title: string
  link: string
  subcategories: string[]
  active?: boolean
}

export interface Subcategory {
  id: string
  title: string
  type: string
  active?: boolean
  orderCustom: boolean
  language?: string
  filterGroups?: FilterGroup[]
}

export interface FilterGroup {
  filters?: Filter[]
}

export interface Filter {
  id: string
  label: string
  clause?: string,
  orderCustom?: boolean
}

const createFilter = (id: string, label: string, clause?: string, orderCustom?: boolean) => {
  return ({
      id,
      label,
      clause,
      orderCustom: orderCustom
    })
}

const createYearFilter = (max: number, min: number) => {
  return ({
    id: `year-${max}-${min}`,
    label: `${max}-${min}`,
    clause: `(orderDate >= '${min}-01-01T00:00:00Z' && orderDate <= '${max}-12-31T23:59:59Z')`,
  })
}

const createYearFilters = (min: number) => {
    const currentYear = new Date().getFullYear();
    const count = currentYear - min;
    return Array.from({ length: count }, (_, i) => {
      const endYear = currentYear - i;
      const startYear = endYear - 1;
      return createYearFilter(endYear, startYear);
    });
}

export const subcategories = [
  {
    id: 'news_update',
    title: 'News Update',
    type: 'articleDocument',
    orderCustom: false,
    filterGroups: [{
      filters: [
        ...createYearFilters(1988),
        createYearFilter(1987, 1980),
        createYearFilter(1979, 1969),
      ],
    }]
  },
  {
    id: 'studio',
    title: 'Studio + Life',
    type: 'imageGroupDocument',
    orderCustom: false,
  },
  {
    id: 'exhibitions',
    title: 'Exhibitions',
    type: 'articleDocument',
    orderCustom: false,
    filterGroups: [{
      filters: [
        ...createYearFilters(1988),
        createYearFilter(1987, 1980),
        createYearFilter(1979, 1969),
      ],
    }]
  },
  {
    id: 'interviews',
    title: 'Interviews',
    type: 'articleDocument',
    orderCustom: true,
    filterGroups: [{
      filters: [
        createFilter('all', 'by relevance', undefined, true),
        createFilter('interviews-chronologically', 'chronologically', undefined, false),
      ],
    }, {
      filters: [
        ...createYearFilters(1996),
        createYearFilter(1996, 1975),
      ],
    }]
  },
  {
    id: 'quotes',
    title: 'Quotes',
    type: 'quoteDocument',
    orderCustom: false,
  },
  {
    id: 'quotes_by_helnwein',
    title: 'Quotes by Helnwein',
    type: 'quoteHelnweinDocument',
    orderCustom: false,
  },
  {
    id: 'feedback',
    title: 'Feedback',
    type: 'feedbackDocument',
    orderCustom: false,
  },
  {
    id: 'biography',
    title: 'Biography',
    type: 'biographyDocument',
    orderCustom: true,
    filterGroups: [{
      filters: [
        createFilter('all', 'Chronology', undefined, false),
        createFilter('biography-ireland-usa', `Ireland and USA ${new Date().getFullYear()}-1997`, `(orderDate >= '1977-01-01T00:00:00Z' && orderDate <= '${new Date().getFullYear()}-12-31T23:59:59Z')`, false),
        createFilter('biography-germany', `Germany 1997-1985`, `(orderDate >= '1985-01-01T00:00:00Z' && orderDate <= '1997-12-31T23:59:59Z')`, false),
        createFilter('biography-austria', `Austria 1984-1948`, `(orderDate >= '1948-01-01T00:00:00Z' && orderDate <= '1984-12-31T23:59:59Z')`, false),
      ],
    }, {
      filters: [
        ...createYearFilters(1996),
        createYearFilter(1996, 1975),
      ],
    }]
  },

  {
    id: 'bibliography',
    title: 'Bibliography',
    type: 'bibliographyDocument',
    orderCustom: true,
    filterGroups: [{
      filters: [
        createFilter('all', 'Overview', undefined, true),
        createFilter('bibliography-relevance', 'by relevance', undefined, true),
        createFilter('bibliography-chronologically', 'chronologically', undefined, false),
      ],
    }, {
      filters: [
        createFilter('bibliography-monographs', 'Monographs', undefined, true),
        createFilter('bibliography-catalogs', 'Catalogs one man shows', undefined, false),
        createFilter('bibliography-interviews', 'Interviews', undefined, false),
        createFilter('bibliography-art-history', 'Art-history', undefined, false),
        createFilter('bibliography-photography', 'Photography', undefined, false),
        createFilter('bibliography-comic', 'Comic related', undefined, false),
        createFilter('bibliography-scholarly', 'Scholarly', undefined, false),
        createFilter('bibliography-theatre', 'Theatre, opera', undefined, false),
        createFilter('bibliography-texts-helnwein', 'Text by Helnwein', undefined, false),
        createFilter('bibliography-quoting-helnwein', 'Books quoting Helnwein', undefined, false),
        createFilter('bibliography-magazine-covers', 'Magazine Covers', undefined, false),
        createFilter('bibliography-posters', 'Posters', undefined, false),
        createFilter('bibliography-cd-covers', 'CD Covers', undefined, false),
      ],
    }, {
      filters: [
        ...createYearFilters(1996),
        createYearFilter(1996, 1975),
      ],
    }]
  },
  {
    id: 'museums',
    title: 'Museums',
    type: 'articleDocument',
    orderCustom: false,
  },
  {
    id: 'collections',
    title: 'Collections',
    type: 'articleDocument',
    orderCustom: false,
  },
  {
    id: 'films',
    title: 'Films',
    type: 'articleDocument',
    orderCustom: false,
  },
  {
    id: 'mixed_media_on_canvas',
    title: 'Mixed media on canvas',
    type: 'imageGroupDocument',
    orderCustom: false,
  },
  {
    id: 'photography',
    title: 'Photography',
    type: 'imageGroupDocument',
    orderCustom: false,
  },
  {
    id: 'self_portraits',
    title: 'Self Portraits',
    type: 'imageGroupDocument',
    orderCustom: false,
  },
  {
    id: 'watercolors',
    title: 'Watercolors',
    type: 'imageGroupDocument',
    orderCustom: false,
  },
  {
    id: 'drawings',
    title: 'Drawings',
    type: 'imageGroupDocument',
    orderCustom: false,
  },
  {
    id: 'installations_and_performances',
    title: 'Installations and performances',
    type: 'imageGroupDocument',
    orderCustom: false,
  },
  {
    id: 'landscapes',
    title: 'Landscapes',
    type: 'imageGroupDocument',
    orderCustom: false,
  },
  {
    id: 'theater_and_films',
    title: 'Theater and Film',
    type: 'imageGroupDocument',
    orderCustom: false,
  },
  {
    id: 'international_texts',
    title: 'International Texts',
    type: 'articleDocument',
    orderCustom: false,
  },
  {
    id: 'selected_authors',
    title: 'Selected Authors',
    type: 'articleDocument',
    orderCustom: true,
  },
  {
    id: 'english_texts',
    title: 'English Texts',
    type: 'articleDocument',
    orderCustom: true,
    language: 'en',
  },
  {
    id: 'german_texts',
    title: 'German Texts',
    type: 'articleDocument',
    orderCustom: true,
    language: 'de',
  },
  {
    id: 'italian_texts',
    title: 'Italian Texts',
    type: 'articleDocument',
    orderCustom: true,
  },
  {
    id: 'french_texts',
    title: 'French Texts',
    type: 'articleDocument',
    orderCustom: true,
  },
  {
    id: 'spanish_texts',
    title: 'Spanish Texts',
    type: 'articleDocument',
    orderCustom: true,
  },
  {
    id: 'russian_texts',
    title: 'Russian Texts',
    type: 'articleDocument',
    orderCustom: true,
  },
  {
    id: 'japanese_texts',
    title: 'Japanese Texts',
    type: 'articleDocument',
    orderCustom: true,
  },
  {
    id: 'chinese_texts',
    title: 'Chinese Texts',
    type: 'articleDocument',
    orderCustom: true,
  },
  {
    id: 'czech_texts',
    title: 'Czech Texts',
    type: 'articleDocument',
    orderCustom: true,
  },
  {
    id: 'polish_texts',
    title: 'Polish Texts',
    type: 'articleDocument',
    orderCustom: true,
    language: 'pl',
  },
  {
    id: 'dissertations',
    title: 'Dissertations',
    type: 'articleDocument',
    orderCustom: true,
  },
  {
    id: 'texts_by_helnwein',
    title: 'Texts by Helnwein',
    type: 'articleDocument',
    orderCustom: true,
  },
  {
    id: 'international_press',
    title: 'Current Press',
    type: 'articleDocument',
    orderCustom: false,
  },
  {
    id: 'selected_articles',
    title: 'Selected Articles',
    type: 'articleDocument',
    orderCustom: true,
  },
  {
    id: 'english_press',
    title: 'English Press',
    type: 'articleDocument',
    orderCustom: true,
    language: 'en',
  },
  {
    id: 'german_press',
    title: 'German Press',
    type: 'articleDocument',
    orderCustom: true,
    language: 'de',
  },
  {
    id: 'italian_press',
    title: 'Italian Press',
    type: 'articleDocument',
    orderCustom: true,
  },
  {
    id: 'french_press',
    title: 'French Press',
    type: 'articleDocument',
    orderCustom: true,
  },
  {
    id: 'spanish_press',
    title: 'Spanish Press',
    type: 'articleDocument',
    orderCustom: true,
  },
  {
    id: 'russian_press',
    title: 'Russian Press',
    type: 'articleDocument',
    orderCustom: true,
  },
  {
    id: 'japanese_press',
    title: 'Japanese Press',
    type: 'articleDocument',
    orderCustom: true,
  },
  {
    id: 'chinese_press',
    title: 'Chinese Press',
    type: 'articleDocument',
    orderCustom: true,
  },
  {
    id: 'czech_press',
    title: 'Czech Press',
    type: 'articleDocument',
    orderCustom: true,
  },
  {
    id: 'polish_press',
    title: 'Polish Press',
    type: 'articleDocument',
    orderCustom: true,
    language: 'pl',
  },
  {
    id: 'internet',
    title: 'Internet',
    type: 'articleDocument',
    orderCustom: false,
  },
  {
    id: 'austria',
    title: 'Austria',
    type: 'articleDocument',
    orderCustom: false,
  },
  {
    id: 'ireland',
    title: 'Ireland',
    type: 'articleDocument',
    orderCustom: false,
  },
  {
    id: 'special_kristallnacht',
    title: 'Kristallnacht',
    type: 'articleDocument',
    orderCustom: false,
  },
  {
    id: 'special_museum',
    title: 'Museum',
    type: 'articleDocument',
    orderCustom: false,
  },
  {
    id: 'special_music',
    title: 'Music',
    type: 'articleDocument',
    orderCustom: false,
  },
  {
    id: 'special_photography',
    title: 'Photography',
    type: 'articleDocument',
    orderCustom: false,
  },
  {
    id: 'special_theater',
    title: 'Theater',
    type: 'articleDocument',
    orderCustom: false,
  },
  {
    id: 'helvetia',
    title: 'Helvetia',
    type: 'articleDocument',
    orderCustom: false,
  },
  {
    id: 'internet',
    title: 'Internet',
    type: 'articleDocument',
    orderCustom: false,
  },
]

export const categories: Category[] = [
  {
    id: 'news',
    title: 'News',
    link: '/news/news_update',
    subcategories: ['news_update', 'studio', 'exhibitions', 'interviews', 'quotes', 'quotes_by_helnwein', 'feedback', 'biography', 'bibliography', 'museums', 'collections', 'films'],
  },
  {
    id: 'artist',
    title: 'Artist',
    link: '/artist',
    subcategories: ['studio', 'exhibitions', 'interviews', 'quotes', 'quotes_by_helnwein', 'feedback', 'biography', 'bibliography', 'museums', 'collections', 'films', 'news_update'],
  },
  {
    id: 'works',
    title: 'Works',
    link: '/works/mixed_media_on_canvas',
    subcategories: ['mixed_media_on_canvas', 'photography', 'self_portraits', 'watercolors', 'drawings', 'installations_and_performances', 'landscapes', 'theater_and_films'],
  },
  {
    id: 'texts',
    title: 'Texts',
    link: '/texts/selected_authors/',
    subcategories: ['selected_authors', 'international_texts', 'german_texts', 'english_texts', 'polish_texts', 'dissertations', 'quotes', 'quotes_by_helnwein', 'texts_by_helnwein'],
  },
  {
    id: 'press',
    title: 'Press',
    link: '/press/selected_articles/',
    subcategories: ['selected_articles', 'international_press', 'german_press', 'english_press', 'polish_press', 'interviews', 'internet'],
  },
  {
    id: 'interviews',
    title: 'Interviews',
    link: '/artist/interviews/',
    subcategories: [],
  },
  {
    id: 'topics',
    title: 'Topics',
    link: '/topics/',
    subcategories: ['austria', 'ireland', 'helvetia', 'special_music', 'special_museum', 'special_photography', 'special_theater'],
  },
  {
    id: 'videos',
    title: 'Videos',
    link: '/videos',
    subcategories: [],
  },
  {
    id: 'contact',
    title: 'Contact',
    link: '/contact',
    subcategories: [],
  },
  {
    id: 'shop',
    title: 'Shop',
    link: 'https://helnwein-artstore.com',
    subcategories: [],
  },
]

export const getCategoryContext = ({site, category, subcategory, filter}: any): CategoryContext => {
  const foundSite = sites.find((value: any) => value.language == site)
  const foundCategory = categories.find(value => value.id == category && (!subcategory || value.subcategories.includes(subcategory)))
  const foundSubcategory = subcategories.find(value => value && value.id == subcategory)

  return {
    site,
    domain: foundSite!.domain,
    language: foundSite!.language,
    siteLabel: foundSite!.site,
    activeCategory: foundCategory,
    activeSubcategory: foundSubcategory,
    menu: categories.map(value => ({
      ...value,
      active: foundCategory && value.id === foundCategory.id,
    })),
    submenu: foundCategory
      ? foundCategory.subcategories
        .map(value => subcategories.find(value2 => value2 && value2.id === value))
        .filter(value => value)
        .map(value => ({
          ...value!,
          active: foundSubcategory && value?.id === foundSubcategory.id,
        }))
      : [],
  }
}

export const getSubcategory = (csubcategoryId: string) => {
  return subcategories.find(value => value && value.id == csubcategoryId)
}

export const getFilter = (context: CategoryContext, currentFilterId: string) => {
  if (!context || !context.activeSubcategory || !context.activeSubcategory.filterGroups) {
    return undefined
  }

  return context.activeSubcategory.filterGroups
    .flatMap(group => group.filters)
    .filter(filter => filter != null)
    .find(filter => filter.id === currentFilterId)
}
