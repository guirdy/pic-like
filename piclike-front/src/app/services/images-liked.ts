import { ImageLike } from '@/types/image-like'

export async function getAllImagesLikedService(token: string) {
  const imagesLikedResponse = await fetch(
    `${process.env.PICLIKE_API}/like/all`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: {
        tags: ['all-liked-images'],
      },
    },
  )

  if (!imagesLikedResponse.ok) {
    throw new Error('Failed to fetch all liked images')
  }

  const imagesLike = (await imagesLikedResponse.json()) as ImageLike[]

  return {
    imagesLike,
  }
}

export async function getUserImagesLikedService(userId: number, token: string) {
  const imagesLikedResponse = await fetch(
    `${process.env.PICLIKE_API}/like/${userId}/all`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: {
        tags: ['all-user-liked-images'],
      },
    },
  )

  if (!imagesLikedResponse.ok) {
    throw new Error('Failed to fetch user liked images')
  }

  const userImagesLiked = (await imagesLikedResponse.json()) as ImageLike[]

  return {
    userImagesLiked,
  }
}

export async function addLikeToAnImageService(
  userId: number,
  imageId: number,
  token: string,
) {
  const imagesLikedResponse = await fetch(
    `${process.env.PICLIKE_API}/like/add/${userId}/${imageId}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  if (!imagesLikedResponse.ok) {
    throw new Error('Failed to fetch add like to an image')
  }

  const { like } = (await imagesLikedResponse.json()) as { like: ImageLike }

  return {
    like,
  }
}

export async function removeLikeToAnImageService(
  userId: number,
  imageId: number,
  token: string,
) {
  const imagesLikedResponse = await fetch(
    `${process.env.PICLIKE_API}/like/remove/${userId}/${imageId}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  if (!imagesLikedResponse.ok) {
    throw new Error('Failed to fetch remove like to an image')
  }

  const { like } = (await imagesLikedResponse.json()) as { like: ImageLike }

  return {
    like,
  }
}
