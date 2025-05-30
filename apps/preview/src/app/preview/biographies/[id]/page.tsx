import React, {FunctionComponent} from 'react';
import {draftMode} from "next/headers";
import ArticleDetail from "@repo/ui/article/ArticleDetail";
import {getBiographyDetail, getBiographyList} from "@repo/sanity/queries";
import BiographyList from "@repo/ui/article/BiographyList";

interface Props {
    params: Promise<{ id: string }>
}


const ArticlePreviewPage: FunctionComponent<Props> = async ({params}) => {
    const {id} = await params

    const draftMode1 = await draftMode();
    draftMode1.enable()

    const data = await getBiographyDetail(id)
    const list = await getBiographyList()
        .then(value => value.filter(value1 => value1._id == id))

    console.log(data, list)

    return (
        <div>
            <h2 className={'text-2xl mb-12'}> List view: </h2>
            <BiographyList data={list} />
            <h2 className={'text-2xl mt-12 mb-12'}> Detail view: </h2>
            <ArticleDetail data={data} />
        </div>

    )
}

export default ArticlePreviewPage