import React, {FunctionComponent} from 'react'

interface Props {
  children: React.ReactNode
  params: {
    category: string
    subcategory: string
  }
}

const CategoryLayout: FunctionComponent<Props> = ({children}) => {
  return <>{children}</>
}

export default CategoryLayout
