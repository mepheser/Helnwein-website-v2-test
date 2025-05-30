import React, {FunctionComponent} from 'react'
import ArticleDetailHeader from "./ArticleDetailHeader";
import ArticleDetailContent from "./ArticleDetailContent";

interface Props {
  data: any
}

const ArticleDetail: FunctionComponent<Props> = async ({data}) => {
  return (
    <div>
      <ArticleDetailHeader data={data} />
      <ArticleDetailContent data={data} />
    </div>
  )
}

export default ArticleDetail
