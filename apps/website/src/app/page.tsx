import {FunctionComponent} from 'react'
import {redirect} from 'next/navigation'

const HomePage: FunctionComponent<any> = async () => {
  redirect('/en')
}

export default HomePage
