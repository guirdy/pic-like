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

  async addLikedImage(userId: number, likedImage: Like): Promise<Like | undefined> {
    return new Promise((resolve, reject) => {
      if (!userId) {
        return reject(new Error('Invalid user.'))
      }

      if (!likedImage) {
        return reject(new Error('Invalid liked image.'))
      }

      const currentUserIndex = this.users.findIndex(user => user.id === userId)

      if (currentUserIndex === -1) {
        return reject(new Error('User not found.'))
      }

      const likedImageIndex = this.users[currentUserIndex]?.likedImages.findIndex(image => image.id === likedImage.id)

      if (likedImageIndex === -1) {
        this.users[currentUserIndex].likedImages.push(likedImage)
      } else {
        this.users[currentUserIndex].likedImages[likedImageIndex].qtt += 1
      }


      return resolve(this.users[currentUserIndex].likedImages[likedImageIndex]);
    })
  }
}
