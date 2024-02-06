import { Like } from "src/models/likes";

export interface ILikeRepository {
  getLikes(): Promise<Like[]>
  getLikedImageById(likedImageId: number): Promise<Like | undefined>
  addLike(likedImageId: number): Promise<Like | undefined>
}