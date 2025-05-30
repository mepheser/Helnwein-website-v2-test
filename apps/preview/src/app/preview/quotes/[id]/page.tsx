import React, {FunctionComponent} from 'react';
import {draftMode} from "next/headers";
import {getQuoteDetail} from "@repo/sanity/queries";
import QuoteList from "@repo/ui/quote/QuoteList";

interface Props {
    params: Promise<{ id: string }>
}


const QuotesPreviewPage: FunctionComponent<Props> = async ({params}) => {
    const {id} = await params

    const draftMode1 = await draftMode();
    draftMode1.enable()

    const data = await getQuoteDetail(id)

    return (
        <QuoteList data={[data]} />
    )
}

export default QuotesPreviewPage