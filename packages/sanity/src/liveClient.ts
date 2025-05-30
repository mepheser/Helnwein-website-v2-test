import {createClient, defineLive} from 'next-sanity'
import {makeSafeQueryRunner} from 'groqd'

const liveClient =  createClient({
  projectId: 'ncm6ue7s',
  dataset: 'test',
  apiVersion: '2023-06-20',
  useCdn: false,
  perspective: 'drafts',
})

const staticClient =  createClient({
    projectId: 'ncm6ue7s',
    dataset: 'test',
    apiVersion: '2023-06-20',
    useCdn: false,
    perspective: 'drafts',
})


const token = process.env.SANITY_API_READ_TOKEN

console.log('created client', token)
if (!token) {
    throw new Error("Missing SANITY_API_READ_TOKEN")
}

// export the sanityFetch helper and the SanityLive component
export const { sanityFetch, SanityLive } = defineLive({
    client: liveClient,
    serverToken: token,
    browserToken: token,
})

export const getLiveClient = () => liveClient

export const getStaticClient = () => staticClient

export const runQuery = makeSafeQueryRunner(async function (query) {
    const result = await sanityFetch({query})
    return result.data;
    }
)
