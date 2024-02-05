import { Like } from "src/models/likes";
import { User } from "src/models/user";

export interface IUserRepository {
  getUser(id: number): Promise<User | undefined>
  addLikedImage(userId: number, likedImage: Like): Promise<Like | undefined>
}