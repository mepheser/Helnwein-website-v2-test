import React, {FunctionComponent} from 'react';
import {getImageDetail} from "@repo/sanity/queries";
import ArticleList from "@repo/ui/article/ArticleList";
import {ArticleListItem} from "@repo/sanity/selections";
import ContentImage from "@repo/ui/image/ContentImage";
import BiographyList from "@repo/ui/article/BiographyList";
import ArticleListImage from "@repo/ui/image/ArticleListImage";
import BibliographyImage from "@repo/ui/image/BibliographyImage";

interface Props {
    params: Promise<{ id: string }>
}


const ImagesPreviewPage: FunctionComponent<Props> = async ({params}) => {
    const {id} = await params
    const data = await getImageDetail(id)

    console.log('imageDetail', data)

    const article: ArticleListItem = {
        image: data,
        title: "Test title",
        _id: 'test-id',
        abstractContent: 'So sieht das Bild in einer Artikelliste aus. Die Bilder sind hier immer 2x3 mit 150/200px dimensioniert. Der Ausschnitt wird aus dem CMS übernommen.'
    }

    const bio: ArticleListItem = {
        image: data,
        title: "Test title",
        _id: 'test-id',
        abstractContent: 'So sieht das Bild in einer Biographieliste aus. Die Bilder sind hier immer quadratisch mit 150/150px dimensioniert. Der Ausschnitt wird aus dem CMS übernommen.'
    }

    return (
        <div>
            <h2 className={'text-2xl mb-12'}> Image in Article List: </h2>
            <div className={'w-full max-w-3xl'}>
                <ArticleList data={[article]}/>
            </div>
            <h2 className={'text-2xl my-12 '}> Image in Biography List: </h2>
            <div className={'w-full max-w-3xl'}>
                <BiographyList data={[bio]}/>
            </div>
            <hr className={'my-10 text-white opacity-100 max-w-3xl'} />
            <h2 className={'text-2xl mt-12 mb-4'}> Image in Bibliography Grid: </h2>
            <p className={'max-w-3xl my-4 font-serif'}>
                So sieht das Bild in einem Bibliogrhie-Grid aus. Die Bilder sind hier immer  140px hoch und in der Breite an die Höhe relational angepasst.
                Der Ausschnitt wird aus dem CMS übernommen.
            </p>
            <div className={'w-full max-w-7xl flex flex-wrap gap-2'}>
                <div className={'h-[140px] aspect-[2/3] bg-gray-700'}></div>
                <div className={'h-[140px] aspect-[2/3] bg-gray-700'}></div>
                <BibliographyImage image={data}/>
                <div className={'h-[140px] aspect-[2/3] bg-gray-700'}></div>
                <div className={'h-[140px] aspect-[2/3] bg-gray-700'}></div>
                <div className={'h-[140px] aspect-[2/3] bg-gray-700'}></div>
                <div className={'h-[140px] aspect-[2/3] bg-gray-700'}></div>
            </div>
            <hr className={'my-10 text-white opacity-100 max-w-3xl'} />
            <h2 className={'text-2xl mt-12 mb-4'}>  Image in Article Content: </h2>
            <p className={'max-w-3xl my-4 font-serif'}>
                So sieht das Bild im Artikel-Content aus. Das Bild nimmt die maximale Breite, die Höhe passt sich an. Der Ausschnitt wird NICHT aus dem CMS übernommen.
            </p>
            <ContentImage image={data} alt={data.name!}/>
        </div>
    )
}

export default ImagesPreviewPage