import React, {FunctionComponent} from 'react'

interface Props {
  title: string
  children: React.ReactNode
}

const LanguageSelectionItem: FunctionComponent<Props> = ({children}) => {
  return (
    <div className={'max-w-3xl text-lg'}>
      <div className={'m-4'}>{children}</div>
    </div>
  )
}

export default LanguageSelectionItem
