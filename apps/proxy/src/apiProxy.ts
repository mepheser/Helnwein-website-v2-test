import * as BunnySDK from '@bunny.net/edgescript-sdk'
import {proxySanityImages} from './images/proxySanityImages.ts'

BunnySDK.net.http.serve({hostname: '127.0.0.1', port: 7011}, async (request: Request): Promise<Response> => {
  const url = new URL(request.url);

  if (url.pathname.startsWith('/images/')) {
    return proxySanityImages(url)
  }

  return fetch(request)
});



