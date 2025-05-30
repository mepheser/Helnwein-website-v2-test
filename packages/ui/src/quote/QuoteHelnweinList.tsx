import React, {FunctionComponent} from 'react'
import {QuoteHelnweinDetail} from "@repo/sanity/selections";

interface Props {
  data: QuoteHelnweinDetail[]
}

const QuoteHelnweinList: FunctionComponent<Props> = async ({data}) => {
  return (
    <div>
      {data.map(item => (
        <div key={item._id} className={'mb-14 mt-3 max-w-3xl'}>
          <div style={{marginBottom: 10}}>
            <div className={'font-serif text-xl font-light lg:text-3xl'}> &quot;{item.abstractContent}&quot; </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default QuoteHelnweinList
