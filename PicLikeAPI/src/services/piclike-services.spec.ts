import { expect, describe, it, beforeEach } from 'vitest'
import { makeGetLikeServices } from './factories/makeGetPickLikeServices';
import { LikeServices } from './piclike-services';

let picLikeServices: LikeServices;

describe('Likes Services', () => {
  beforeEach(() => {
    picLikeServices = makeGetLikeServices()
  })

  it('should to add liked images to the storage and user', async () => {
    await picLikeServices.addLike({ userId: 1, likedImageId: 1 })
    const likedImages = await picLikeServices.getLikes()

    expect(likedImages.length).toEqual(1)

    await picLikeServices.addLike({ userId: 1, likedImageId: 2 })

    expect(likedImages).toHaveLength(2)

    const { user } = await picLikeServices.getUser({ userId: 1 })
    expect(user.likedImages).toHaveLength(2)
  })

  it('should to add a like to an image', async () => {
    await picLikeServices.addLike({ userId: 1, likedImageId: 1 })
    const likedImage = await picLikeServices.getLikeById(1)

    expect(likedImage.id).toEqual(1)
    expect(likedImage.qtt).toEqual(1)

    await picLikeServices.addLike({ userId: 1, likedImageId: 1 })
    expect(likedImage.qtt).toEqual(2)
  })

  it('should to remove the image like', async () => {
    await picLikeServices.addLike({ userId: 1, likedImageId: 1 })
    await picLikeServices.addLike({ userId: 1, likedImageId: 1 })

    const likedImage = await picLikeServices.getLikeById(1)

    expect(likedImage.qtt).toEqual(2)

    await picLikeServices.removeLike({ userId: 1, likedImageId: 1 })
    expect(likedImage.qtt).toEqual(1)

    await picLikeServices.removeLike({ userId: 1, likedImageId: 1 })
    expect(likedImage.qtt).toEqual(0)
  })

  it('should to get error when i search for an invalid id', async () => {
    await expect(async () => {
      await picLikeServices.addLike({ userId: 1, likedImageId: 1 })
      await picLikeServices.getLikeById(2)
    }).rejects.toThrowError(new Error('Liked image not found.'));
  })
})
