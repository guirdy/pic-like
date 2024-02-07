import { Like } from 'src/models/likes';
import { User } from '../models/user';
import { IUserRepository } from './interfaces/user-repository';

export class UserRepository implements IUserRepository {
  users: User[] = [
    {
      id: 1,
      email: 'gui@gui.com',
      password: '123456',
      likedImages: []
    },
    {
      id: 2,
      email: 'teste@teste.com',
      password: '123456',
      likedImages: []
    }
  ];

  async getUser(id: number): Promise<User | undefined> {
    return new Promise((resolve, reject) => {
      if (!id) {
        return reject(new Error('Invalid id.'))
      }

      return resolve(this.users.find(c => c.id === id));
    })
  }

  async addLikedImage(userId: number, likedImageId: number): Promise<Like | undefined> {
    return new Promise((resolve, reject) => {
      if (!userId) {
        return reject(new Error('Invalid user.'))
      }

      if (!likedImageId) {
        return reject(new Error('Invalid liked image id.'))
      }

      const currentUserIndex = this.users.findIndex(user => user.id === userId)

      if (currentUserIndex === -1) {
        return reject(new Error('User not found.'))
      }

      const likedImageIndex = this.users[currentUserIndex]?.likedImages.findIndex(image => image.id === likedImageId)

      if (likedImageIndex === -1) {
        const newLikedImage = new Like(likedImageId);

        this.users[currentUserIndex].likedImages.push(newLikedImage)
      } else {
        this.users[currentUserIndex].likedImages[likedImageIndex].qtt += 1
      }

      return resolve(this.users[currentUserIndex].likedImages.find(like => like.id === likedImageId));
    })
  }

  async removeLikedImage(userId: number, likedImageId: number): Promise<Like[] | undefined> {
    return new Promise((resolve, reject) => {
      if (!userId) {
        return reject(new Error('Invalid user.'))
      }

      if (!likedImageId) {
        return reject(new Error('Invalid liked image id.'))
      }

      const currentUserIndex = this.users.findIndex(user => user.id === userId)

      if (currentUserIndex === -1) {
        return reject(new Error('User not found.'))
      }

      const updatedLikedImages = this.users[currentUserIndex].likedImages.filter(image => image.id !== likedImageId)
      this.users[currentUserIndex].likedImages = updatedLikedImages;

      return resolve(updatedLikedImages);
    })
  }
}
