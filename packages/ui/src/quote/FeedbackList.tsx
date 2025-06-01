import React, {FunctionComponent} from 'react'
import {CategoryContext} from '@repo/sanity/categories'
import {getFeedbackList} from '@repo/sanity/queries'

interface Props {
  context: CategoryContext
}

const FeedbackList: FunctionComponent<Props> = async () => {
  const data = await getFeedbackList()

  return (
    <div>
      {data.filter((value, index) => index < 10).map(item => (
        <div key={item._id} className={'mb-14 mt-3 max-w-3xl'}>
          <div style={{marginBottom: 10}}>
            <div className={'font-serif text-xl font-light lg:text-3xl'}> &quot;{item.abstractContent}&quot; </div>
            <div className={'mt-2 font-sans text-base font-semibold uppercase tracking-widest lg:text-xl'}> {item.author} </div>
            <div className={'font-sans text-sm uppercase tracking-widest lg:text-base'}> {item.authorDescription} </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeedbackList
