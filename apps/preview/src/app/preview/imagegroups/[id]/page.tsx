import React, {FunctionComponent} from 'react';
import {draftMode} from "next/headers";
import ArticleDetail from "@repo/ui/article/ArticleDetail";
import {getBiographyDetail, getBiographyList, getImageGroupDetail, getImageGroupList} from "@repo/sanity/queries";
import BiographyList from "@repo/ui/article/BiographyList";
import ImageGroupItem from "@repo/ui/image-group/ImageGroupItem";
import ImageGroupDetails from "@repo/ui/image-group/ImageGroupDetails";

interface Props {
    params: Promise<{ id: string }>
}


const ArticlePreviewPage: FunctionComponent<Props> = async ({params}) => {
    const {id} = await params

    const draftMode1 = await draftMode();
    draftMode1.enable()

    const data = await getImageGroupDetail(id)

    return (
        <div>
            <h2 className={'text-2xl mb-12'}> Image Group Preview (unselected and selected): </h2>
            <div className={'flex gap-4'}>
                <ImageGroupItem data={data} isSelected={false} />
                <ImageGroupItem data={data} isSelected={true} />
            </div>
            <h2 className={'text-2xl mt-12 mb-12'}> Image Group Image List: </h2>
            <div className={'mt-12 w-full'}>
                <ImageGroupDetails selected={data} />
            </div>
        </div>

    )
}

export default ArticlePreviewPage