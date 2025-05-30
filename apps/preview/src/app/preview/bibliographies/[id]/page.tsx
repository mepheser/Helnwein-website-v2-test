import React, {FunctionComponent} from 'react';
import {draftMode} from "next/headers";
import ArticleDetail from "@repo/ui/article/ArticleDetail";
import {getArticleDetail, getBibliographyDetail, getBibliographyList} from "@repo/sanity/queries";
import BibliographyList from "@repo/ui/article/BibliographyList";

interface Props {
    params: Promise<{ id: string }>
}


const ArticlePreviewPage: FunctionComponent<Props> = async ({params}) => {
    const {id} = await params

    const draftMode1 = await draftMode();
    draftMode1.enable()

    const data = await getBibliographyDetail(id)
    const list = await getBibliographyList()
        .then(value => value.filter(value1 => value1._id == id))

    console.log(data, list)

    return (
        <div>
            <h2 className={'text-2xl mb-12'}> List view: </h2>
            <BibliographyList data={list} />
            <h2 className={'text-2xl mt-12 mb-12'}> Detail view: </h2>
            <ArticleDetail data={data} />
        </div>

    )
}

export default ArticlePreviewPage