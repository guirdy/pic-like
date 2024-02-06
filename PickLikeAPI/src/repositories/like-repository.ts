import { Like } from "src/models/likes";
import { ILikeRepository } from './interfaces/like-repository'

export class LikeRepository implements ILikeRepository {
  likes: Like[] = []

  async getLikes(): Promise<Like[]> {
    return new Promise((resolve, reject) => {
      return resolve(this.likes);
    })
  }

  async getLikedImageById(likedImageId: number): Promise<Like | undefined> {
    return new Promise((resolve, reject) => {
      if (!likedImageId) {
        return reject(new Error('Invalid image id.'))
      }

      return resolve(this.likes.find(like => like.id === likedImageId));
    })
  }

  async addLike(likedImageId: number): Promise<Like | undefined> {
    return new Promise((resolve, reject) => {
      if (!likedImageId) {
        return reject('Invalid liked image id.');
      }

      const likedImageIndex = this.likes.findIndex(like => like.id === likedImageId)

      if (likedImageIndex === -1) {
        const newLikedImage = new Like(likedImageId)

        this.likes.push(newLikedImage);
      } else {
        this.likes[likedImageIndex].qtt += 1;
      }

      return resolve(this.likes.find(like => like.id === likedImageId));
    })
  }

  async removeLike(likedImageId: number): Promise<Like | undefined> {
    return new Promise((resolve, reject) => {
      if (!likedImageId) {
        return reject('Invalid liked image id.');
      }

      const likedImageIndex = this.likes.findIndex(like => like.id === likedImageId);

      if (likedImageIndex === -1) {
        const newLikedImage: Like = {
          id: likedImageId,
          qtt: 0
        };

        this.likes.push(newLikedImage);

        return resolve(newLikedImage);
      }

      if (this.likes[likedImageIndex].qtt > 0) {
        this.likes[likedImageIndex].qtt -= 1;
      }

      return resolve(this.likes[likedImageIndex]);
    })
  }
}