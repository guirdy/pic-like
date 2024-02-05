import { Like } from "src/models/likes";

export interface ILikeRepository {
  getLikes(): Promise<Like[]>
  addLike(likedImage: Like): Promise<Like | undefined>
}