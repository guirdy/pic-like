import { IImage } from '@/types/image-storage'

export async function getImagesStorageService(token: string) {
  const imagesResponse = await fetch(
    `${process.env.IMAGE_STORAGE_API}/v1/images`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: {
        tags: ['images-storage'],
      },
    },
  )

  if (!imagesResponse.ok) {
    throw new Error('Failed to fetch images')
  }

  const images = (await imagesResponse.json()) as IImage[]

  return {
    images,
  }
}
