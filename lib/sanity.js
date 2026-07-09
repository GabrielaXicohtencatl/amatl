import { createClient } from '@sanity/client'

/**
 * Cliente de Sanity, listo para usarse en cuanto crees tu proyecto de Sanity
 * y llenes NEXT_PUBLIC_SANITY_PROJECT_ID / NEXT_PUBLIC_SANITY_DATASET en .env.local.
 *
 * Uso típico (por ejemplo en app/blog/page.js más adelante):
 *   const posts = await sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc)`)
 */
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})
