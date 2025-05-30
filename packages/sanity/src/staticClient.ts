import {createClient, defineLive} from 'next-sanity'
import {makeSafeQueryRunner} from 'groqd'

const staticClient =  createClient({
    projectId: 'ncm6ue7s',
    dataset: 'test',
    apiVersion: '2023-06-20',
    useCdn: false,
    perspective: 'drafts',
})

export const getStaticClient = () => staticClient

