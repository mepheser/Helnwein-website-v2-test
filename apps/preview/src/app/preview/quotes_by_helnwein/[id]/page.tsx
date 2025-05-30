import React, {FunctionComponent} from 'react';
import {draftMode} from "next/headers";
import {getQuoteHelnweinDetail} from "@repo/sanity/queries";
import QuoteHelnweinList from "@repo/ui/quote/QuoteHelnweinList";

interface Props {
    params: Promise<{ id: string }>
}


const QuotesPreviewPage: FunctionComponent<Props> = async ({params}) => {
    const {id} = await params

    const draftMode1 = await draftMode();
    draftMode1.enable()

    const data = await getQuoteHelnweinDetail(id)

    return (
        <QuoteHelnweinList data={[data]} />
    )
}

export default QuotesPreviewPage