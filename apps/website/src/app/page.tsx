import {FunctionComponent} from 'react'
import {redirect} from 'next/navigation'

const HomePage: FunctionComponent<any> = async () => {
  console.log('hello!')
  redirect('/en')
}

export default HomePage
