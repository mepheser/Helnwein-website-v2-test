import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client  = createClient({
  projectId: 'ncm6ue7s',
  dataset: 'test',
  apiVersion: '2023-06-20',
  useCdn: true,
  token: 'skps2PP66cLtg9PHCmLMxO0ik1st3BKwDYdtulOtWkUzKxrLStgOmPTKHKyzA0tEkj869mtJc6Y6LZDXSp41DF0waFIKaXw3g1BUgGFbOmSyA2fhdDIFo8qVGZAXaLj0P9CVfe4JKoYsDre5K343xPag0v8qfm0uLaUF9cyQ4BtXPv04OT4i',
});

enum Format {
  RAW = 'RAW',
  ARTICLE_LIST = 'ARTICLE_LIST',
  BIOGRAPHY_LIST = 'BIOGRAPHY_LIST',
  BIBLIOGRAPHY_LIST = 'BIBLIOGRAPHY_LIST',
  PREVIEW = 'PREVIEW',
  GROUP_THUMBNAIL = 'GROUP_THUMBNAIL',
  THUMBNAIL = 'THUMBNAIL',
}

export async function proxySanityImages(url: URL) {
  const parts = url.pathname.split('/').filter(Boolean);

  if (parts.length < 5 || parts[0] !== 'images') {
    throw new Error('Invalid path');
  }

  const [_, id, lastUpdated, format, name] = parts;

  const meta = await client.fetch(`*[_id == '${id}' && _type == "helnweinImage"][0]`);

  console.log(meta)

  if (!meta?.image) {
    return new Response("Image not found", { status: 404 });
  }

  const builder = imageUrlBuilder(client)

  let image

  switch (format) {
    case Format.ARTICLE_LIST: {
      image = builder.image(meta.image).format('webp').width(150).height(200)
      break
    }
    case Format.GROUP_THUMBNAIL: {
      image = builder.image(meta.image).format('webp').height(154)
      break
    }
    case Format.THUMBNAIL: {
      image = builder.image(meta.image).format('webp').height(140)
      break
    }
    case Format.PREVIEW: {
      image = builder
        .image({
          ...meta.image,
          crop: undefined,
          hotspot: undefined,
        })
        .format('webp')
        .width(300)
        .height(235)
      break
    }
    case Format.BIOGRAPHY_LIST: {
      image = builder.image(meta.image).format('webp').width(150).height(150)
      break
    }
    case Format.BIBLIOGRAPHY_LIST: {
      image = builder
        .image({
          ...meta.image,
          crop: undefined,
          hotspot: undefined,
        })
        .format('webp')
        .height(140)
      break
    }
    default: {
      image = builder
        .image({
          ...meta.image,
          crop: undefined,
          hotspot: undefined,
        })
        .maxWidth(3000)
        .format('webp')
    }
  }

  const sanityResponse = await fetch(image!.url())

  if (!sanityResponse.ok) {
    return new Response('Error fetching image', { status: sanityResponse.status });
  }

  const headers = new Headers(sanityResponse.headers);
  headers.set('Content-Type', sanityResponse.headers.get('content-type') ?? 'image/webp');
  headers.set('Cache-Control', 'public, max-age=31536000, s-maxage=31536000, immutable');

  return new Response(sanityResponse.body, {
    status: sanityResponse.status,
    statusText: sanityResponse.statusText,
    headers,
  });
}
