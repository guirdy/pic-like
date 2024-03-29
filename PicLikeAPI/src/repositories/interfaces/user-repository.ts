import { Like } from "src/models/likes";
import { User } from "src/models/user";

export interface IUserRepository {
  getUser(id: number): Promise<User | undefined>
  getUserLikedImages(id: number): Promise<Like[] | undefined>
  addLikedImage(userId: number, likedImageId: number): Promise<Like | undefined>
  removeLikedImage(userId: number, likedImageId: number): Promise<Like[] | undefined>
}