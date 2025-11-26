import {createClient} from '@sanity/client'
import {makeSafeQueryRunner} from 'groqd'

const staticClient =  createClient({
    projectId: 'ncm6ue7s',
    dataset: 'test',
    apiVersion: '2023-06-20',
    useCdn: false,
    perspective: 'published',
    token: process.env.SANITY_TOKEN,
})


const token = process.env.SANITY_API_READ_TOKEN

if (!token) {
    throw new Error("Missing SANITY_API_READ_TOKEN")
}

export const runQuery = makeSafeQueryRunner(async function (query) {
    return staticClient.fetch(
      query,
      {},
      {
          cache: 'force-cache',
          next: {
              tags: ['cms2'],
          },
      },
    )
})
