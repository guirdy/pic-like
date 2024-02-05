import { Like } from "src/models/likes";
import { ILikeRepository } from './interfaces/like-repository'

export class LikeRepository implements ILikeRepository {
  likes: Like[] = []

  async getLikes(): Promise<Like[]> {
    return new Promise((resolve, reject) => {
      return resolve(this.likes);
    })
  }

  async addLike(likedImage: Like): Promise<Like | undefined> {
    return new Promise((resolve, reject) => {
      if (!likedImage) {
        return reject('Invalid liked image.')
      }

      const likedImageIndex = this.likes.findIndex(like => like.id === likedImage.id)

      if (likedImageIndex === -1) {
        this.likes.push(likedImage)
      } else {
        this.likes[likedImageIndex].qtt += 1
      }

      return resolve(likedImage)
    })
  }
}