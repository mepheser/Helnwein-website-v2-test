import React, {FunctionComponent} from 'react'
import sites from '@repo/sanity/sites'

export async function generateStaticParams() {
  return sites.map(value => ({
    site: value.language
  }))
}

interface Props {
  children: React.ReactNode
  params: Promise<{
    site: string
  }>
}

const SiteLayout: FunctionComponent<Props> = ({children}) => {
  return <>{children}</>
}

export default SiteLayout
