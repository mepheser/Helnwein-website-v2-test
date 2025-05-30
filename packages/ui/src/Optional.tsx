import React, {FunctionComponent} from 'react'

interface Props {
  data?: any
  children: React.ReactNode
}

const Optional: FunctionComponent<Props> = ({data, children}) => {
  if (!data) {
    return null
  }

  return <>{children}</>
}

export default Optional
