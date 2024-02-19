'use server'

import { user } from '@/data/user'
import { authService } from './services/auth-service'
import { revalidateTag } from 'next/cache'

import {
  addLikeToAnImageService,
  removeLikeToAnImageService,
} from './services/images-liked'

export async function like(imageId: number) {
  const { token } = await authService(user)
  await addLikeToAnImageService(user.id, imageId, token)
  revalidateTag('all-liked-images')
  revalidateTag('all-user-liked-images')
}

export async function unlike(imageId: number) {
  const { token } = await authService(user)
  await removeLikeToAnImageService(user.id, imageId, token)
  revalidateTag('all-liked-images')
  revalidateTag('all-user-liked-images')
}
