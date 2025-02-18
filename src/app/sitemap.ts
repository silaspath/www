import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://emergencecoaching.io',
      lastModified: new Date(),
    },
    {
      url: 'https://emergencecoaching.io/about',
      lastModified: new Date(),
    },
    {
      url: 'https://emergencecoaching.io/projects',
      lastModified: new Date(),
    },
  ]
}
