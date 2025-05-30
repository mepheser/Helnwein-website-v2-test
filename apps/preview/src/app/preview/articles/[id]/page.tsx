import React, {FunctionComponent} from 'react';
import {draftMode} from "next/headers";
import ArticleDetail from "@repo/ui/article/ArticleDetail";
import {getArticleDetail, getArticleListItem} from "@repo/sanity/queries";
import ArticleList from "@repo/ui/article/ArticleList";

interface Props {
    params: Promise<{ id: string }>
}


const ArticlePreviewPage: FunctionComponent<Props> = async ({params}) => {
    const {id} = await params

    const draftMode1 = await draftMode();
    draftMode1.enable()

    const data = await getArticleDetail(id)
    const list = await getArticleListItem(id)

    console.log(data)

    return (
        <div>
            <h2 className={'text-2xl mb-12'}> List view: </h2>
            <ArticleList data={list} />
            <h2 className={'text-2xl mt-12 mb-12'}> Detail view: </h2>
            <ArticleDetail data={data} />
        </div>

    )
}

export default ArticlePreviewPage