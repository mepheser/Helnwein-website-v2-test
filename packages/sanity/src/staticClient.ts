import {createClient, defineLive} from 'next-sanity'
import {makeSafeQueryRunner} from 'groqd'

const staticClient =  createClient({
    projectId: 'ncm6ue7s',
    dataset: 'test',
    apiVersion: '2023-06-20',
    useCdn: false,
    perspective: 'drafts',
    token: process.env.SANITY_TOKEN,
})

export const getStaticClient = () => staticClient

