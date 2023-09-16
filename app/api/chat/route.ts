import { ENV } from '@/lib/env'

export const runtime = 'edge'

export async function GET (req: Request) {
  console.log(ENV.KV_URL)

  return new Response('Hello world!', {
    headers: {
      'content-type': 'text/plain'
    }
  })
}
