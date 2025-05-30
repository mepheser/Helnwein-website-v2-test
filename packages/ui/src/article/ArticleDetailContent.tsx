import React, {FunctionComponent} from 'react'
import Content from "./Content";
import {ArticleDetail} from "@repo/sanity/selections";

interface Props {
  data: ArticleDetail
}

const ArticleDetailContent: FunctionComponent<Props> = ({data}) => (
  <section className={'my-4 font-serif'}>
    <Content data={data.content} />
  </section>
)

export default ArticleDetailContent
